import React from 'react';
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, children, isLoading, variant = 'primary', ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          variant === 'primary' 
            ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500" 
            : "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
          className
        )}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        ) : null}
        <span className={cn(isLoading ? "invisible" : "visible")}>{children}</span>
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;