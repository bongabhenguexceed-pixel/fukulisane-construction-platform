import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/cn'
export function TooltipProvider({ children }: { children: ReactNode }) { return <>{children}</> }
export function Tooltip({ children }: { children: ReactNode }) { return <div className="relative inline-flex">{children}</div> }
export function TooltipTrigger({ children, className, ...props }: any) { return <div className={className} {...props}>{children}</div> }
export function TooltipContent({ className, children, ...props }: any) { return <div className={cn('absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground shadow-md', className)} {...props}>{children}</div> }