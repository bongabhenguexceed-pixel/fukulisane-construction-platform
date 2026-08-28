import { cn } from '@/lib/cn'
export function Skeleton({ className, ...props }: any) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
}