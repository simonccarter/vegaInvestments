import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import type { DateRange, Matcher } from 'react-day-picker'

interface Props {
  value?: DateRange
  onChange?: (value: DateRange | undefined) => void

  minDate?: Date
  maxDate?: Date
  disabled?: Matcher | Matcher[]
  className?: string
}

export function DateRangePicker({ value, onChange, disabled, className }: Props) {
  const [range, setRange] = React.useState<DateRange | undefined>(value)

  // Sync external changes
  React.useEffect(() => {
    setRange(value)
  }, [value])

  const handleSelect = (next: DateRange | undefined) => {
    setRange(next)
    onChange?.(next)
  }

  const dateRangeText = range?.from
    ? range.to
      ? `${format(range.from, 'LLL dd, y')} to ${format(range.to, 'LLL dd, y')}`
      : `From ${format(range.from, 'LLL dd, y')}`
    : 'No date range selected'

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-full justify-start text-left font-normal',
              !range && 'text-muted-foreground',
            )}
            aria-label={`Date range picker. ${dateRangeText}. Click to select a date range`}
            aria-haspopup="dialog"
          >
            <CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
            {range?.from ? (
              range.to ? (
                <>
                  {format(range.from, 'LLL dd, y')}
                  {' – '}
                  {format(range.to, 'LLL dd, y')}
                </>
              ) : (
                format(range.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-auto p-0"
          align="start"
          role="dialog"
          aria-label="Date range picker calendar"
        >
          <Calendar
            mode="range"
            numberOfMonths={1}
            selected={range}
            onSelect={handleSelect}
            disabled={disabled}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
