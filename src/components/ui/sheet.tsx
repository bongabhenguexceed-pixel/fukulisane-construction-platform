import { useState, createContext, useContext, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { X } from 'lucide-react'
const SheetContext = createContext<{ open: boolean; setOpen: (v: boolean) => void }>({ open: false, setOpen: () => {} })
export function Sheet({ defaultOpen = false, children }: any) {
  const [open, setOpen] = useState(defaultOpen)
  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>
}
export function SheetTrigger({ children, className, ...props }: any) {
  const { setOpen } = useContext(SheetContext)
  return <button className={className} onClick={() => setOpen(true)} {...props}>{children}</button>
}
export function SheetContent({ side = 'right', className, children, ...props }: any) {
  const { open, setOpen } = useContext(SheetContext)
  if (!open) return null
  const sideClasses = { right: 'inset-y-0 right-0 h-full w-3/4 max-w-sm border-l', left: 'inset-y-0 left-0 h-full w-3/4 max-w-sm border-r', top: 'inset-x-0 top-0 border-b', bottom: 'inset-x-0 bottom-0 border-t' }
  return <><div className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)} /><div className={cn('fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out', sideClasses[side] || sideClasses.right, className)} {...props}>{children}<button className="absolute right-4 top-4" onClick={() => setOpen(false)}><X size={16} /></button></div></>
}