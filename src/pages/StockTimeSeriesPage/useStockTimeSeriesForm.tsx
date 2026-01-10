import { useGetPolygonTickers } from '@/api/polygon/usePolygonTickers'
import { HARDCODED_TICKERS } from '@/constants/tickers'
import { type PriceType, type StockSymbols } from '@/models/stocks'
import { useMemo, useState } from 'react'
import type { DateRange } from 'react-day-picker'

/**
 * Manages all form state for the Stock Time Series page
 * Includes fetching list of tickets to populate dropdown
 */
export const useStockTimeSeriesForm = () => {
  const [selectedSymbols, setSelectedSymbols] = useState<StockSymbols[]>([])
  const [fetchAllTickers, setFetchAllTickers] = useState(false)
  const [selectedPriceType, setSelectedPriceType] = useState<PriceType>('open')
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  // Only fetch from API if toggle is enabled
  const {
    data: tickersData,
    isLoading: isLoadingTickers,
    error: tickerError,
    isError: isTickerError,
  } = useGetPolygonTickers(
    fetchAllTickers
      ? {
          exchange: 'XNAS', // NASDAQ only
          type: 'CS', // Common Stock
        }
      : null, // Don't fetch when toggle is off
  )

  // Use hardcoded list by default, or API data when toggle is enabled
  const symbols: StockSymbols[] = useMemo(() => {
    if (fetchAllTickers && tickersData) {
      return tickersData.map((ticker) => ticker.ticker)
    }
    return HARDCODED_TICKERS
  }, [fetchAllTickers, tickersData])

  // Check if form is ready to fetch (has symbols and date range)
  const isReadyToFetch = selectedSymbols.length > 0 && !!dateRange?.from && !!dateRange?.to

  return {
    // Form state
    selectedSymbols,
    setSelectedSymbols,
    selectedPriceType,
    setSelectedPriceType,
    dateRange,
    setDateRange,
    fetchAllTickers,
    setFetchAllTickers,

    // Derived/computed values
    symbols,
    isLoadingTickers,
    tickerError: isTickerError ? tickerError : null,
    isReadyToFetch,
  }
}
