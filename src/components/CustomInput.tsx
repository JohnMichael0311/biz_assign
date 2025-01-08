import React from 'react';
import { cn } from "@/lib/utils";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          className={cn(
            "w-full px-3 py-2 border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
            error 
              ? "border-red-500 focus:ring-red-500" 
              : "border-gray-300 focus:ring-blue-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;