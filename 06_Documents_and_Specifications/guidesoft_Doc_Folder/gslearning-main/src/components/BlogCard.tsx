import React from 'react';
import { Clock, User, Lock, Crown, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  userSubscriptionStatus: 'free' | 'premium' | 'expired';
  onPostClick: (post: BlogPost) => void;
  onSubscribeClick: () => void;
}

export default function BlogCard({ 
  post, 
  userSubscriptionStatus, 
  onPostClick, 
  onSubscribeClick 
}: BlogCardProps) {
  const isLocked = post.isPremium && userSubscriptionStatus !== 'premium';

  const handleClick = () => {
    if (isLocked) {
      onSubscribeClick();
    } else {
      onPostClick(post);
    }
  };

  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Overlay for locked content */}
        {isLocked && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white">
              <Lock className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Premium Article</p>
            </div>
          </div>
        )}

        {/* Premium badge */}
        {post.isPremium && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Crown className="h-3 w-3" />
            <span>Premium</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{post.author}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {isLocked ? 
            `${post.excerpt.substring(0, 100)}... Subscribe to read the full article.` : 
            post.excerpt
          }
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {post.publishedAt.toLocaleDateString()}
          </span>
          
          <button
            onClick={handleClick}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              isLocked
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
            }`}
          >
            <span>{isLocked ? 'Subscribe to Read' : 'Read More'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}