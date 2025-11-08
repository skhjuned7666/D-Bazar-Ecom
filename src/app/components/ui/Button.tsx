"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition";

  const variantClasses = {
    primary: "bg-secondary text-white hover:bg-blue-700 focus:ring-secondary",
    secondary:
      "bg-gray-200 text-foreground hover:bg-gray-300 focus:ring-gray-200",
    danger: "bg-danger text-white hover:bg-red-700 focus:ring-danger",
    outline:
      "border border-secondary text-secondary hover:bg-blue-50 focus:ring-secondary",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled || isLoading ? disabledClasses : "",
    className,
  ].join(" ");

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <span className='flex items-center'>
          <span className='mr-2'>
            <svg
              className='animate-spin h-4 w-4 text-current'
              fill='none'
              viewBox='0 0 24 24'>
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
            </svg>
          </span>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
