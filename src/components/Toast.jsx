import React, { useState, useCallback } from "react";
import ToastContext from "../contexts/ToastContext";

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const show = useCallback((toast) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, ...toast }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, toast.duration || 4000);
  }, []);

  const context = { show };

  return (
    <ToastContext.Provider value={context}>
      {children}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`px-4 py-3 rounded shadow-lg text-sm max-w-sm ${
              t.type === "error"
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            }`}
            role="status"
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
