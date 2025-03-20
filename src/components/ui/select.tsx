import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
  value?: string;
}

interface SelectTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface SelectContentProps {
  children: React.ReactNode;
}

interface SelectValueProps {
  children?: React.ReactNode;
  placeholder?: string;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', children, onValueChange, value, onChange, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onValueChange?.(event.target.value);
      onChange?.(event);
    };

    return (
      <div className="relative">
        <select
          ref={ref}
          value={value}
          onChange={handleChange}
          className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-white text-black px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          {...props}
        >
          {children}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-white text-black px-3 py-2 text-sm ${className}`}>
      {children}
    </div>
  );
};

export const SelectContent: React.FC<SelectContentProps> = ({ children }) => {
  return (
    <div className="relative mt-2 max-h-60 overflow-auto rounded-md border bg-white text-black p-1 shadow-md">
      {children}
    </div>
  );
};

export const SelectItem: React.FC<SelectItemProps> = ({ children, value }) => {
  return (
    <option value={value} className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-black outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
      {children}
    </option>
  );
};

export const SelectValue: React.FC<SelectValueProps> = ({ children, placeholder }) => {
  return (
    <span className="block truncate text-black">
      {children || <span className="text-gray-500">{placeholder}</span>}
    </span>
  );
};