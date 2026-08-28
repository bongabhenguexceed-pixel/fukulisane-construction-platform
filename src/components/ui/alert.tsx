import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/cn'

const alertVariants: Record<string, string> = { default: 'bg-background text-foreground border-border', destructive: 'border-destructive/50 text-destructive [&>svg]:text-destructive', success: 'border-emerald-500/50 text-emerald-700 dark:text-emerald-400' }

export const Alert = forwardRef<HTMLDivElement, any>(({ className, variant = 'default', ...props }, ref) => (
  <div ref={ref} role="alert" className={cn('relative w-full rounded-lg border p-4', alertVariants[variant] || alertVariants.default, className)} {...props} />
))
export const AlertTitle = forwardRef<HTMLParagraphElement, any>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
))
export const AlertDescription = forwardRef<HTMLParagraphElement, any>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
))