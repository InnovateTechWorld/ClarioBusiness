import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

Card.displayName = "Card";

export const CardHeader = ({
  className = '',
  children,
  ...props
}: CardProps) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardTitle = ({
  className = '',
  children,
  ...props
}: CardProps) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription = ({
  className = '',
  children,
  ...props
}: CardProps) => (
  <p
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  >
    {children}
  </p>
);

export const CardContent = ({
  className = '',
  children,
  ...props
}: CardProps) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);