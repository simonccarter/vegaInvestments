import { DateRangePicker } from '@/components/ui/date-range-picker'
import { Label } from '@/components/ui/label'
import type { Dispatch, SetStateAction } from 'react'
import type { DateRange, Matcher } from 'react-day-picker'

type Props = {
  dateRange: DateRange | undefined
  setDateRange: Dispatch<SetStateAction<DateRange | undefined>>
  minDate?: Date
  maxDate?: Date
  disabled?: Matcher | Matcher[]
}

function DateRangeSelector({ dateRange, setDateRange, minDate, maxDate, disabled }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="mb-1">Date range</Label>
      <DateRangePicker
        value={dateRange}
        onChange={setDateRange}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        className="w-full"
      />
    </div>
  )
}

export default DateRangeSelector
