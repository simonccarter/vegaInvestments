import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

type LoaderProps = {
  className?: string
  size?: number
}

export function Loader({ className, size = 24 }: LoaderProps) {
  return <Loader2 className={cn('text-muted-foreground animate-spin', className)} size={size} />
}
