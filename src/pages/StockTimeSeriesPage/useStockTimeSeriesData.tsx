import { getTimespanForDateRange, type TimeSpan } from '@/api/polygon/dateUtils'
import type { AggTickerResponse, AggTickerResult } from '@/api/polygon/schemas'
import { useGetAggregateBarsForSymbols } from '@/api/polygon/usePolygonAgg'
import type { StockSymbols, StockTimeSeriesRow, TimeSeriesPoint } from '@/models/stocks'
import { useMemo } from 'react'
import type { DateRange } from 'react-day-picker'

function toTimeSeriesPoint(bar: AggTickerResult): TimeSeriesPoint {
  return {
    timestamp: new Date(bar.t).toISOString(),
    open: bar.o,
    high: bar.h,
    low: bar.l,
    close: bar.c,
  }
}

function mergeAggsToStockRows(
  symbols: StockSymbols[],
  aggsBySymbol: Record<StockSymbols, AggTickerResponse | undefined>,
  timespan: TimeSpan,
): StockTimeSeriesRow[] {
  const byDate = new Map<string, StockTimeSeriesRow>()

  symbols.forEach((symbol) => {
    const agg = aggsBySymbol[symbol]
    if (!agg?.results) return

    agg.results.forEach((bar) => {
      const barDate = new Date(bar.t)
      // Always use ISO timestamp, but normalize to start of day for daily grouping
      const dateKey =
        timespan === 'hour'
          ? barDate.toISOString()
          : new Date(barDate.getFullYear(), barDate.getMonth(), barDate.getDate()).toISOString()

      let row = byDate.get(dateKey)
      if (!row) {
        row = { date: dateKey }
        byDate.set(dateKey, row)
      }

      row[symbol] = toTimeSeriesPoint(bar)
    })
  })

  // Sort ascending by date
  return Array.from(byDate.values()).sort((a, b) => a.date.localeCompare(b.date))
}

/**
 * Handles data fetching
 */
export const useStockTimeSeriesData = ({
  selectedSymbols,
  dateRange,
}: {
  selectedSymbols: StockSymbols[]
  dateRange: DateRange | undefined
}) => {
  const shouldFetch = selectedSymbols.length > 0 && !!dateRange?.from && !!dateRange?.to

  const timespan = getTimespanForDateRange(dateRange)

  const {
    data: aggsBySymbol,
    isLoading: isLoadingData,
    errors: errorsBySymbol,
  } = useGetAggregateBarsForSymbols({
    symbols: selectedSymbols,
    dateRange,
    timespan,
    enabled: shouldFetch,
  })

  const apiData: StockTimeSeriesRow[] = useMemo(() => {
    if (selectedSymbols.length === 0 || !dateRange) return []
    return mergeAggsToStockRows(selectedSymbols, aggsBySymbol, timespan)
  }, [selectedSymbols, aggsBySymbol, timespan, dateRange])

  // Check if we've attempted a fetch (loading, have data, or have errors)
  const hasErrors = Object.values(errorsBySymbol).some((error) => error !== undefined)
  const hasAttemptedFetch = isLoadingData || apiData.length > 0 || hasErrors

  return {
    apiData,
    isLoadingData,
    errorsBySymbol,
    hasAttemptedFetch,
    timespan,
  }
}
