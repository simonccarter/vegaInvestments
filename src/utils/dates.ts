import { format } from 'date-fns'

export function formatDateForAPI(date: Date): string {
  return format(date, 'yyyy-MM-dd')
}

export function formatDateForDisplay(date: Date): string {
  return format(date, 'LLL dd, y')
}

export function formatDateForChartTick(date: Date): string {
  return format(date, 'MMM dd')
}

export function formatDateForChartTooltip(date: Date): string {
  return format(date, 'MMM dd, yyyy')
}

export function parseDateString(dateString: string, defaultTime: string = '00:00:00Z'): Date {
  return new Date(dateString.includes('T') ? dateString : `${dateString}T${defaultTime}`)
}

export function normalizeToUTCStartOfDay(date: Date): Date {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0, 0),
  )
}

export function normalizeToUTCEndOfDay(date: Date): Date {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 23, 59, 59, 999),
  )
}

export function parseAndNormalizeToUTCStart(dateString: string): Date {
  const parsed = parseDateString(dateString, '00:00:00Z')
  return normalizeToUTCStartOfDay(parsed)
}

export function parseAndNormalizeToUTCEnd(dateString: string): Date {
  const parsed = parseDateString(dateString, '23:59:59Z')
  return normalizeToUTCEndOfDay(parsed)
}

export function formatISOStringToDateKey(isoString: string): string {
  return formatDateForAPI(new Date(isoString))
}
