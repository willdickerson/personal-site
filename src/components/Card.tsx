import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className="relative">
      {/* Shadow layer */}
      <div 
        className="absolute inset-0 bg-dark rounded-lg translate-x-[6px] translate-y-[6px]"
        aria-hidden="true"
      />
      {/* Content layer */}
      <div 
        className={`
          relative bg-cream rounded-lg p-6
          ${hover ? 'transition-transform duration-200 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px]' : ''}
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}
