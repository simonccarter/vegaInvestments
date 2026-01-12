import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return <div className={cn('mx-auto max-w-7xl px-4 py-6', className)}>{children}</div>
}

