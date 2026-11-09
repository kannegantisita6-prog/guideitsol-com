import React, { useState, memo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Database, 
  RefreshCw, 
  Trash2, 
  Plus, 
  Activity, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  BarChart3,
  Upload,
  Server
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { indexApi, healthApi, IndexStatus, HealthCheckResponse } from '@/services/api';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = memo(({ title, value, icon, trend, className }) => (
  <div className={cn('bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6', className)}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        {trend && (
          <p className={cn(
            'text-sm mt-1 flex items-center gap-1',
            trend.isPositive ? 'text-green-600' : 'text-red-600'
          )}>
            <span>{trend.isPositive ? '↗' : '↘'}</span>
            {Math.abs(trend.value)}%
          </p>
        )}
      </div>
      <div className="text-gray-400">
        {icon}
      </div>
    </div>
  </div>
));

export const AdminPage: React.FC = memo(() => {
  const [activeTab, setActiveTab] = useState<'overview' | 'index' | 'health' | 'analytics'>('overview');
  const queryClient = useQueryClient();

  // Queries
  const { data: indexStatus, isLoading: indexLoading, error: indexError } = useQuery({
    queryKey: ['indexStatus'],
    queryFn: indexApi.getIndexStatus,
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const { data: healthData, isLoading: healthLoading } = useQuery({
    queryKey: ['health'],
    queryFn: healthApi.getDetailedHealth,
    refetchInterval: 10000, // Refresh every 10 seconds
  });

  // Mutations
  const createIndexMutation = useMutation({
    mutationFn: indexApi.createIndex,
    onSuccess: (data: { success: boolean; message: string; indexName?: string }) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['indexStatus'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create index');
    },
  });

  const deleteIndexMutation = useMutation({
    mutationFn: indexApi.deleteIndex,
    onSuccess: (data: { success: boolean; message: string }) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ['indexStatus'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete index');
    },
  });

  const syncContentMutation = useMutation({
    mutationFn: () => indexApi.syncContent({ batchSize: 100, maxDocuments: 1000 }),
    onSuccess: (data: { success: boolean; processed: number; errors: number; message: string }) => {
      toast.success(`Synced ${data.processed} documents successfully`);
      queryClient.invalidateQueries({ queryKey: ['indexStatus'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to sync content');
    },
  });

  const getHealthStatus = (health?: HealthCheckResponse) => {
    if (!health) return { status: 'unknown', color: 'gray' };
    
    if (health.status === 'healthy') {
      return { status: 'healthy', color: 'green' };
    } else {
      return { status: 'unhealthy', color: 'red' };
    }
  };

  const getIndexHealth = (status?: IndexStatus) => {
    if (!status) return { status: 'unknown', color: 'gray' };
    
    if (!status.exists) {
      return { status: 'not created', color: 'yellow' };
    }
    
    if (status.health === 'green') {
      return { status: 'healthy', color: 'green' };
    } else if (status.health === 'yellow') {
      return { status: 'warning', color: 'yellow' };
    } else {
      return { status: 'unhealthy', color: 'red' };
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 size={16} /> },
    { id: 'index', label: 'Index Management', icon: <Database size={16} /> },
    { id: 'health', label: 'System Health', icon: <Activity size={16} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={16} /> },
  ];

  const healthStatus = getHealthStatus(healthData);
  const indexHealth = getIndexHealth(indexStatus);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your search index and monitor system performance
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    'flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors',
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  )}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="System Status"
                value={healthStatus.status}
                icon={
                  healthStatus.color === 'green' ? (
                    <CheckCircle size={24} className="text-green-500" />
                  ) : healthStatus.color === 'red' ? (
                    <AlertCircle size={24} className="text-red-500" />
                  ) : (
                    <Clock size={24} className="text-yellow-500" />
                  )
                }
              />
              
              <StatCard
                title="Index Status"
                value={indexHealth.status}
                icon={
                  indexHealth.color === 'green' ? (
                    <Database size={24} className="text-green-500" />
                  ) : indexHealth.color === 'red' ? (
                    <AlertCircle size={24} className="text-red-500" />
                  ) : (
                    <Clock size={24} className="text-yellow-500" />
                  )
                }
              />
              
              <StatCard
                title="Documents"
                value={indexStatus?.documentsCount?.toLocaleString() || '0'}
                icon={<Upload size={24} className="text-blue-500" />}
              />
              
              <StatCard
                title="Index Size"
                value={indexStatus?.storeSize || 'N/A'}
                icon={<Server size={24} className="text-purple-500" />}
              />
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => syncContentMutation.mutate()}
                  disabled={syncContentMutation.isPending}
                  className="flex items-center gap-2 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors disabled:opacity-50"
                >
                  <RefreshCw size={20} className={cn('text-blue-600', syncContentMutation.isPending && 'animate-spin')} />
                  <span className="font-medium text-blue-800 dark:text-blue-200">
                    {syncContentMutation.isPending ? 'Syncing...' : 'Sync Content'}
                  </span>
                </button>

                <button
                  onClick={() => queryClient.invalidateQueries()}
                  className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                  <RefreshCw size={20} className="text-green-600" />
                  <span className="font-medium text-green-800 dark:text-green-200">Refresh Data</span>
                </button>

                <button
                  onClick={() => setActiveTab('health')}
                  className="flex items-center gap-2 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <Activity size={20} className="text-purple-600" />
                  <span className="font-medium text-purple-800 dark:text-purple-200">View Health</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Index Management Tab */}
        {activeTab === 'index' && (
          <div className="space-y-6">
            {/* Index Status */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Index Status</h3>
                <button
                  onClick={() => queryClient.invalidateQueries({ queryKey: ['indexStatus'] })}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <RefreshCw size={16} />
                </button>
              </div>

              {indexLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                </div>
              ) : indexError ? (
                <div className="text-red-600 dark:text-red-400">
                  Error loading index status: {(indexError as any).message}
                </div>
              ) : indexStatus ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Exists</label>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {indexStatus.exists ? 'Yes' : 'No'}
                      </p>
                    </div>
                    {indexStatus.exists && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Health</label>
                          <p className={cn(
                            'text-lg font-semibold',
                            indexStatus.health === 'green' ? 'text-green-600' :
                            indexStatus.health === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                          )}>
                            {indexStatus.health || 'Unknown'}
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Documents</label>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">
                            {indexStatus.documentsCount?.toLocaleString() || '0'}
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Size</label>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">
                            {indexStatus.storeSize || 'N/A'}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Index Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Index Actions</h3>
              <div className="space-y-4">
                {!indexStatus?.exists ? (
                  <button
                    onClick={() => createIndexMutation.mutate()}
                    disabled={createIndexMutation.isPending}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-lg font-medium transition-colors"
                  >
                    <Plus size={16} />
                    {createIndexMutation.isPending ? 'Creating...' : 'Create Index'}
                  </button>
                ) : (
                  <div className="flex gap-4">
                    <button
                      onClick={() => syncContentMutation.mutate()}
                      disabled={syncContentMutation.isPending}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors"
                    >
                      <RefreshCw size={16} className={syncContentMutation.isPending ? 'animate-spin' : ''} />
                      {syncContentMutation.isPending ? 'Syncing...' : 'Sync Content'}
                    </button>
                    
                    <button
                      onClick={() => {
                        if (confirm('Are you sure you want to delete the index? This action cannot be undone.')) {
                          deleteIndexMutation.mutate();
                        }
                      }}
                      disabled={deleteIndexMutation.isPending}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white rounded-lg font-medium transition-colors"
                    >
                      <Trash2 size={16} />
                      {deleteIndexMutation.isPending ? 'Deleting...' : 'Delete Index'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Health Tab */}
        {activeTab === 'health' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Health</h3>
                <button
                  onClick={() => queryClient.invalidateQueries({ queryKey: ['health'] })}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <RefreshCw size={16} />
                </button>
              </div>

              {healthLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                </div>
              ) : healthData ? (
                <div className="space-y-6">
                  {/* Overall Status */}
                  <div className="flex items-center gap-3">
                    {healthData.status === 'healthy' ? (
                      <CheckCircle size={24} className="text-green-500" />
                    ) : (
                      <AlertCircle size={24} className="text-red-500" />
                    )}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        System is {healthData.status}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Last checked: {new Date(healthData.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Elasticsearch Status */}
                  {healthData.elasticsearch && (
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Elasticsearch</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Connected</label>
                          <p className={cn(
                            'text-lg font-semibold',
                            healthData.elasticsearch.connected ? 'text-green-600' : 'text-red-600'
                          )}>
                            {healthData.elasticsearch.connected ? 'Yes' : 'No'}
                          </p>
                        </div>
                        {healthData.elasticsearch.cluster_name && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Cluster</label>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                              {healthData.elasticsearch.cluster_name}
                            </p>
                          </div>
                        )}
                        {healthData.elasticsearch.version && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Version</label>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">
                              {healthData.elasticsearch.version}
                            </p>
                          </div>
                        )}
                      </div>
                      {healthData.elasticsearch.error && (
                        <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                          <p className="text-red-600 dark:text-red-400 text-sm">
                            {healthData.elasticsearch.error}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Memory Usage */}
                  {healthData.memory && (
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Memory Usage</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Used</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {Math.round(healthData.memory.used / 1024 / 1024)} MB
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Total</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {Math.round(healthData.memory.total / 1024 / 1024)} MB
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={cn(
                              'h-2 rounded-full transition-all',
                              healthData.memory.percentage > 80 ? 'bg-red-500' :
                              healthData.memory.percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                            )}
                            style={{ width: `${healthData.memory.percentage}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {healthData.memory.percentage.toFixed(1)}% used
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">No health data available</p>
              )}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search Analytics</h3>
              <div className="text-center py-12">
                <BarChart3 size={48} className="text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Analytics Coming Soon
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Detailed search analytics and insights will be available in a future update.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default AdminPage;