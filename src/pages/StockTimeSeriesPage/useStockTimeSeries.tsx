import { useStockTimeSeriesData } from './useStockTimeSeriesData'
import { useStockTimeSeriesForm } from './useStockTimeSeriesForm'

/**
 * Composes form state and data fetching hooks
 * This maintains the same API as before while providing better separation of concerns
 */
export const useStockTimeSeries = () => {
  const form = useStockTimeSeriesForm()
  const data = useStockTimeSeriesData({
    selectedSymbols: form.selectedSymbols,
    dateRange: form.dateRange,
  })

  return {
    // Data
    apiData: data.apiData,
    errorsBySymbol: data.errorsBySymbol,
    timespan: data.timespan,

    // Form state
    symbols: form.symbols,
    selectedSymbols: form.selectedSymbols,
    setSelectedSymbols: form.setSelectedSymbols,
    selectedPriceType: form.selectedPriceType,
    setSelectedPriceType: form.setSelectedPriceType,
    dateRange: form.dateRange,
    setDateRange: form.setDateRange,
    fetchAllTickers: form.fetchAllTickers,
    setFetchAllTickers: form.setFetchAllTickers,

    // Loading states
    isLoadingTickers: form.isLoadingTickers,
    isLoadingData: data.isLoadingData,
    tickerError: form.tickerError,

    // Fetch state
    isReadyToFetch: form.isReadyToFetch,
    hasAttemptedFetch: data.hasAttemptedFetch,
  }
}

export default useStockTimeSeries
