import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'gradient' | 'glass' | 'gradient-purple' | 'modern';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  isLoading?: boolean;
  asChild?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'colored';
  glow?: boolean;
  magnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading, 
    children, 
    disabled, 
    asChild = false, 
    rounded = 'xl', 
    shadow = 'md', 
    glow = false,
    magnetic = false,
    ...props 
  }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center font-semibold transition-all duration-300 
      focus-ring disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden
      ${magnetic ? 'magnetic' : ''}
      ${glow ? 'pulse-glow' : ''}
      btn-modern
    `;
    
    const variants = {
      primary: `
        bg-gradient-to-r from-primary-600 to-primary-700 text-white 
        hover:from-primary-700 hover:to-primary-800 
        hover:shadow-colored hover:scale-105 active:scale-95
        border border-primary-600 hover:border-primary-700
      `,
      secondary: `
        bg-white text-secondary-900 border-2 border-secondary-200 
        hover:bg-secondary-50 hover:border-secondary-300 hover:shadow-lg 
        hover:scale-105 active:scale-95
      `,
      outline: `
        border-2 border-primary-600 text-primary-600 bg-transparent
        hover:bg-primary-600 hover:text-white hover:shadow-colored 
        hover:scale-105 active:scale-95
      `,
      ghost: `
        text-primary-600 bg-transparent hover:bg-primary-50 
        hover:text-primary-700 hover:scale-105 active:scale-95
      `,
      accent: `
        bg-gradient-to-r from-accent-600 to-accent-700 text-white 
        hover:from-accent-700 hover:to-accent-800 
        hover:shadow-xl hover:scale-105 active:scale-95
        border border-accent-600 hover:border-accent-700
      `,
      gradient: `
        bg-gradient-primary-modern text-white 
        hover:shadow-2xl hover:scale-105 active:scale-95
        border border-primary-600/20
      `,
      'gradient-purple': `
        bg-gradient-purple-modern text-white 
        hover:shadow-2xl hover:scale-105 active:scale-95
        border border-purple-600/20
      `,
      glass: `
        glass text-white border border-white/20 
        hover:bg-white/25 hover:shadow-xl hover:scale-105 active:scale-95
      `,
      modern: `
        bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 
        text-white hover:from-secondary-800 hover:via-secondary-700 hover:to-secondary-800
        hover:shadow-2xl hover:scale-105 active:scale-95
        border border-secondary-700
      `
    };

    const sizes = {
      xs: 'px-3 py-1.5 text-xs font-medium',
      sm: 'px-4 py-2 text-sm font-medium',
      md: 'px-6 py-3 text-base font-semibold',
      lg: 'px-8 py-4 text-lg font-semibold',
      xl: 'px-10 py-5 text-xl font-bold',
      '2xl': 'px-12 py-6 text-2xl font-bold'
    };

    const roundedStyles = {
      sm: 'rounded-lg',
      md: 'rounded-xl',
      lg: 'rounded-2xl',
      xl: 'rounded-3xl',
      full: 'rounded-full'
    };

    const shadowStyles = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-modern',
      lg: 'shadow-large',
      xl: 'shadow-2xl',
      colored: 'shadow-colored'
    };

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      roundedStyles[rounded],
      shadowStyles[shadow],
      isLoading && 'cursor-not-allowed opacity-80',
      className
    );

    if (asChild) {
      return (
        <div className={buttonClasses} {...(props as any)}>
          {children}
        </div>
      );
    }

    return (
      <button
        className={buttonClasses}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <>
            <div className="loading-spinner-modern mr-2" />
            <span className="opacity-70">Loading...</span>
          </>
        ) : (
          <>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;