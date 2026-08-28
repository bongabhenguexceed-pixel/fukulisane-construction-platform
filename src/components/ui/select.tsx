import { useState, createContext, useContext, type ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { ChevronDown } from 'lucide-react'
const SelectContext = createContext<any>({ value: '', onValueChange: () => {}, open: false, setOpen: () => {} })
export function Select({ value: controlledValue, defaultValue = '', onValueChange, children }: any) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const value = controlledValue ?? internalValue
  const handleChange = (v: string) => { setInternalValue(v); onValueChange?.(v); setOpen(false) }
  return <SelectContext.Provider value={{ value, onValueChange: handleChange, open, setOpen }}><div className="relative">{children}</div></SelectContext.Provider>
}
export function SelectTrigger({ className, children, ...props }: any) {
  const { open, setOpen } = useContext(SelectContext)
  return <button className={cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring', className)} onClick={() => setOpen(!open)} {...props}>{children}<ChevronDown size={16} /></button>
}
export function SelectContent({ className, children, ...props }: any) {
  const { open } = useContext(SelectContext)
  if (!open) return null
  return <div className={cn('absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md', className)} {...props}>{children}</div>
}
export function SelectItem({ value: itemValue, className, children, ...props }: any) {
  const { value, onValueChange } = useContext(SelectContext)
  return <div className={cn('relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent', value === itemValue && 'bg-accent', className)} onClick={() => onValueChange(itemValue)} {...props}>{children}</div>
}
export function SelectValue({ placeholder, className }: any) {
  const { value } = useContext(SelectContext)
  return <span className={cn(!value && 'text-muted-foreground', className)}>{value || placeholder}</span>
}