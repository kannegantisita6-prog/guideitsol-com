import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  color?: 'primary' | 'secondary' | 'accent' | 'white';
  className?: string;
}

export default function Loading({ 
  size = 'md', 
  variant = 'spinner', 
  color = 'primary',
  className 
}: LoadingProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colors = {
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    accent: 'text-accent-600',
    white: 'text-white'
  };

  if (variant === 'spinner') {
    return (
      <div 
        className={cn(
          'animate-spin rounded-full border-2 border-current border-t-transparent',
          sizes[size],
          colors[color],
          className
        )}
      />
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex space-x-1', className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              'rounded-full bg-current animate-bounce',
              size === 'sm' && 'w-1 h-1',
              size === 'md' && 'w-2 h-2',
              size === 'lg' && 'w-3 h-3',
              size === 'xl' && 'w-4 h-4',
              colors[color]
            )}
            style={{
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div 
        className={cn(
          'rounded-full bg-current animate-pulse',
          sizes[size],
          colors[color],
          className
        )}
      />
    );
  }

  if (variant === 'bars') {
    return (
      <div className={cn('flex space-x-1', className)}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              'bg-current animate-pulse',
              size === 'sm' && 'w-1 h-3',
              size === 'md' && 'w-1 h-4',
              size === 'lg' && 'w-1.5 h-6',
              size === 'xl' && 'w-2 h-8',
              colors[color]
            )}
            style={{
              animationDelay: `${i * 0.15}s`
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}