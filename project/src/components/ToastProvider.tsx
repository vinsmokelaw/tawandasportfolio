import React from 'react'
import { useToast } from '../hooks/use-toast'
import { Toast } from './Toast'

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { toasts, dismiss } = useToast()

  return (
    <>
      {children}
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onDismiss={dismiss} />
      ))}
    </>
  )
}