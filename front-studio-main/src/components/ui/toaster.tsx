"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  const getIcon = (variant?: string) => {
    switch (variant) {
      case "destructive":
        return <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
      default:
        return <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
    }
  }

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        return (
          <Toast key={id} variant={variant as any} {...props} className="gap-3 pl-4">
            {getIcon(variant)}
            <div className="grid gap-1 flex-1">
              {title && <ToastTitle className="text-base font-bold">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-sm opacity-95">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
