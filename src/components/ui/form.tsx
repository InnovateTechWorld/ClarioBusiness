import React from 'react';
import { UseFormReturn } from 'react-hook-form';

// Simplified form components with basic typing
export function Form({ form, children, onSubmit }: { 
  form: any; 
  children: React.ReactNode;
  onSubmit?: (data: any) => void;
}) {
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {children}
    </form>
  );
}

export function FormField({ name, control, render }: { 
  name: string;
  control: any;
  render: ({ field }: { field: any }) => React.ReactNode;
}) {
  return render({ field: { name, control } });
}

export function FormItem({ className = '', children }: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
}

export function FormLabel({ className = '', children }: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    >
      {children}
    </label>
  );
}

export function FormControl({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-2">
      {children}
    </div>
  );
}

export function FormMessage({ className = '', children }: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <p className={`text-sm font-medium text-red-500 ${className}`}>
      {children}
    </p>
  );
}