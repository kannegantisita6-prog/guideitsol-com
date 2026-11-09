import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass' | 'gradient' | 'modern' | 'bordered' | 'floating';
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  hover?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  glow?: boolean;
  magnetic?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'colored';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default', 
    padding = 'md', 
    hover = false, 
    rounded = 'xl', 
    glow = false, 
    magnetic = false,
    shadow = 'md',
    children, 
    ...props 
  }, ref) => {
    const baseStyles = `
      transition-all duration-400 relative overflow-hidden group
      ${magnetic ? 'magnetic' : ''}
      ${glow ? 'pulse-glow' : ''}
      card-modern
    `;
    
    const variants = {
      default: `
        bg-white border border-secondary-100/50 
        shadow-modern hover:shadow-colored
      `,
      elevated: `
        bg-white shadow-xl 
        hover:shadow-2xl
      `,
      outlined: `
        bg-white border-2 border-secondary-200 
        hover:border-primary-300 hover:shadow-lg
      `,
      glass: `
        glass backdrop-blur-xl 
        hover:bg-white/25 hover:shadow-2xl
      `,
      gradient: `
        bg-gradient-to-br from-white via-primary-50/50 to-secondary-50
        border border-primary-100 shadow-lg
        hover:from-primary-50/50 hover:to-secondary-100 hover:shadow-xl
      `,
      modern: `
        bg-gradient-to-br from-white to-secondary-50/30
        border border-gradient shadow-modern
        hover:shadow-2xl hover:border-primary-200
      `,
      bordered: `
        bg-white border-2 border-secondary-200
        hover:border-primary-300 hover:shadow-colored
      `,
      floating: `
        bg-white shadow-2xl border border-white/50
        hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.25)]
      `
    };

    const paddings = {
      none: '',
      xs: 'p-3',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
      '2xl': 'p-12'
    };

    const roundedStyles = {
      sm: 'rounded-lg',
      md: 'rounded-xl',
      lg: 'rounded-2xl',
      xl: 'rounded-3xl',
      '2xl': 'rounded-[2rem]',
      '3xl': 'rounded-[2.5rem]'
    };

    const shadowStyles = {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-modern',
      lg: 'shadow-large',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
      colored: 'shadow-colored'
    };

    const hoverEffect = hover ? `
      hover:-translate-y-2 hover:scale-[1.02] cursor-pointer
      hover:shadow-2xl
    ` : '';

    const glowBorder = glow ? `
      before:absolute before:inset-0 before:rounded-[inherit] 
      before:bg-gradient-to-r before:from-primary-500/20 before:to-accent-500/20 
      before:opacity-0 hover:before:opacity-100 before:transition-opacity 
      before:duration-300 before:pointer-events-none
    ` : '';

    return (
      <div
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          roundedStyles[rounded],
          shadowStyles[shadow],
          hoverEffect,
          glowBorder,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        
        {/* Animated border for hover effect */}
        {hover && (
          <>
            <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
          </>
        )}
        
        {/* Subtle inner glow */}
        {glow && (
          <div className="absolute inset-px rounded-[inherit] bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;