import type { StockSymbols } from '@/models/stocks'
import { useQueries } from '@tanstack/react-query'
import type { DateRange } from 'react-day-picker'
import { validatedAggFetcher } from './api'
import { POLYGON_API_URL } from './constants'
import { formatDate, type TimeSpan } from './dateUtils'
import { type AggTickerResponse } from './schemas'

function buildAggregatesTickerUrl({
  stocksTicker,
  multiplier,
  timespan,
  from,
  to,
  adjusted,
  sort,
  limit,
}: {
  stocksTicker: StockSymbols
  multiplier: number
  timespan: TimeSpan
  from: string
  to: string
  adjusted?: boolean
  sort?: 'asc' | 'desc'
  limit?: number
}) {
  const params = new URLSearchParams()

  if (adjusted !== undefined) {
    params.set('adjusted', String(adjusted))
  }
  if (sort !== undefined) {
    params.set('sort', sort)
  }
  if (limit !== undefined) {
    params.set('limit', String(limit))
  }

  const base = `${POLYGON_API_URL}/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}`

  const queryString = params.toString()
  return queryString ? `${base}?${queryString}` : base
}

/**
 * Fetches aggregate bars for multiple symbols
 */
export const useGetAggregateBarsForSymbols = ({
  symbols,
  dateRange,
  timespan,
  enabled,
  refetchInterval,
}: {
  symbols: StockSymbols[]
  dateRange: DateRange | undefined
  timespan: TimeSpan
  enabled: boolean
  refetchInterval?: number
}) => {
  const from = dateRange?.from
  const to = dateRange?.to

  const queries = useQueries({
    queries: symbols.map((symbol) => ({
      queryKey: ['aggregateBars', symbol, from, to],
      queryFn: async () => {
        const url = buildAggregatesTickerUrl({
          stocksTicker: symbol,
          multiplier: 1,
          timespan,
          from: formatDate(from!),
          to: formatDate(to!),
          adjusted: true,
          sort: 'asc',
        })
        return validatedAggFetcher(url)
      },
      enabled: enabled && !!from && !!to,
      refetchInterval,
    })),
  })

  // Aggregate data by symbol
  const aggsBySymbol: Record<StockSymbols, AggTickerResponse | undefined> = {}
  const errorsBySymbol: Record<StockSymbols, Error | undefined> = {}

  queries.forEach((query, idx) => {
    const symbol = symbols[idx]
    if (query.data) {
      aggsBySymbol[symbol] = query.data
    }
    // Check both isError and error to ensure we catch errors even during retries
    if (query.isError && query.error) {
      errorsBySymbol[symbol] = query.error as Error
    }
  })

  const isLoading = queries.some((q) => q.isLoading)

  return {
    data: aggsBySymbol,
    errors: errorsBySymbol,
    isLoading,
    mutate: () => {
      // Refetch all queries
      queries.forEach((q) => q.refetch())
    },
  }
}

