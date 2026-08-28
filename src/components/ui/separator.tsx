import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/cn'
export const Separator = forwardRef<HTMLDivElement, any>(({ className, orientation = 'horizontal', ...props }, ref) => (
  <div ref={ref} className={cn('shrink-0 bg-border', orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]', className)} {...props} />
))