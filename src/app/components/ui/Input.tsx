"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  const baseClasses =
    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2";
  const errorClasses = error
    ? "border-danger focus:ring-danger"
    : "border-border focus:ring-secondary";
  const classes = `${baseClasses} ${errorClasses} ${className}`;

  return (
    <div className='mb-4'>
      {label && (
        <label className='block text-sm font-medium text-foreground mb-1'>
          {label}
        </label>
      )}
      <input className={classes} {...props} />
      {error && <p className='mt-1 text-sm text-danger'>{error}</p>}
    </div>
  );
}
