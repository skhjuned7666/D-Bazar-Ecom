"use client";

import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export default function Select({
  label,
  error,
  options,
  className = "",
  ...props
}: SelectProps) {
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
      <select className={classes} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className='mt-1 text-sm text-danger'>{error}</p>}
    </div>
  );
}
