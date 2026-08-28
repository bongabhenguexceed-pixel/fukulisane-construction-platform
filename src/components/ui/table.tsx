import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/cn'
export const Table = forwardRef<HTMLTableElement, any>(({ className, ...props }, ref) => <div className="relative w-full overflow-auto"><table ref={ref} className={cn('w-full caption-bottom text-sm', className)} {...props} /></div>)
export const TableHeader = forwardRef<HTMLTableSectionElement, any>(({ className, ...props }, ref) => <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />)
export const TableBody = forwardRef<HTMLTableSectionElement, any>(({ className, ...props }, ref) => <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />)
export const TableRow = forwardRef<HTMLTableRowElement, any>(({ className, ...props }, ref) => <tr ref={ref} className={cn('border-b transition-colors hover:bg-muted/50', className)} {...props} />)
export const TableHead = forwardRef<HTMLTableCellElement, any>(({ className, ...props }, ref) => <th ref={ref} className={cn('h-12 px-4 text-left align-middle font-medium text-muted-foreground', className)} {...props} />)
export const TableCell = forwardRef<HTMLTableCellElement, any>(({ className, ...props }, ref) => <td ref={ref} className={cn('p-4 align-middle', className)} {...props} />)