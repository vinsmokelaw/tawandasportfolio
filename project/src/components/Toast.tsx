import React from 'react'
import { X } from 'lucide-react'
import { Toast as ToastType } from '../hooks/use-toast'

interface ToastProps {
  toast: ToastType
  onDismiss: (id: string) => void
}

export const Toast: React.FC<ToastProps> = ({ toast, onDismiss }) => {
  return (
    <div className={`fixed top-4 right-4 z-50 rounded-lg p-4 shadow-lg max-w-sm border ${
      toast.variant === 'destructive' 
        ? 'bg-red-600 border-red-500 text-white' 
        : 'bg-gray-800 border-gray-700 text-white'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {toast.title && (
            <h4 className="font-semibold mb-1">{toast.title}</h4>
          )}
          {toast.description && (
            <p className="text-sm opacity-90">{toast.description}</p>
          )}
        </div>
        <button
          onClick={() => onDismiss(toast.id)}
          className="ml-4 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}