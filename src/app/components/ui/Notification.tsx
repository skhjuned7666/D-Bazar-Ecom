"use client";

import { useState, useEffect } from "react";

export default function Notification({
  message,
  type = "info",
  duration = 3000,
  onClose,
}: {
  message: string;
  type?: "info" | "success" | "warning" | "error";
  duration?: number;
  onClose?: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);

  const typeClasses = {
    info: "bg-blue-100 text-blue-800 border-blue-200",
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    error: "bg-red-100 text-red-800 border-red-200",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg border shadow-lg ${typeClasses[type]} transition-opacity duration-300`}>
      <div className='flex items-start'>
        <span className='flex-1'>{message}</span>
        <button
          className='ml-4 text-lg font-bold'
          onClick={() => {
            setIsVisible(false);
            onClose?.();
          }}
          aria-label='Close notification'>
          &times;
        </button>
      </div>
    </div>
  );
}
