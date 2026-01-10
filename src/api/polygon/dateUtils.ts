import type { DateRange } from 'react-day-picker'

export type TimeSpan = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'

/**
 * Formats a date to YYYY-MM-DD format
 */
export function formatDate(d: Date) {
  return d.toISOString().split('T')[0]
}

/**
 * Checks if the date range represents a single day
 */
export function isSingleDay(from: Date, to: Date): boolean {
  return formatDate(from) === formatDate(to)
}

/**
 * Determines the appropriate timespan based on the date range.
 * Returns 'hour' for single day ranges, 'day' for multi-day ranges.
 */
export function getTimespanForDateRange(dateRange: DateRange | undefined): TimeSpan {
  const from = dateRange?.from
  const to = dateRange?.to

  if (from && to && isSingleDay(from, to)) {
    return 'hour'
  }

  return 'day'
}

