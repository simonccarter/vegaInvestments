import Controls from './components/Controls/Controls'
import TimeSeriesChart from './components/TimeSeriesChart/TimeSeriesChart'
import useStockTimeSeries from './useStockTimeSeries'

export default function StockTimeSeriesPage() {
  const {
    apiData,
    symbols,
    isLoadingTickers,
    isLoadingData,
    fetchAllTickers,
    selectedSymbols,
    setSelectedSymbols,
    selectedPriceType,
    setSelectedPriceType,
    dateRange,
    setDateRange,
    setFetchAllTickers,
    tickerError,
    errorsBySymbol,
    isReadyToFetch,
    hasAttemptedFetch,
    timespan,
  } = useStockTimeSeries()

  return (
    <>
      <Controls
        symbols={symbols}
        selectedSymbols={selectedSymbols}
        setSelectedSymbols={setSelectedSymbols}
        selectedPriceType={selectedPriceType}
        setSelectedPriceType={setSelectedPriceType}
        dateRange={dateRange}
        setDateRange={setDateRange}
        fetchAllTickers={fetchAllTickers}
        setFetchAllTickers={setFetchAllTickers}
        isLoadingTickers={isLoadingTickers}
        tickerError={tickerError}
      />

      <TimeSeriesChart
        selectedSymbols={selectedSymbols}
        selectedPriceType={selectedPriceType}
        data={apiData}
        timespan={timespan}
        isLoading={isLoadingData}
        errorsBySymbol={errorsBySymbol}
        isReadyToFetch={isReadyToFetch}
        hasAttemptedFetch={hasAttemptedFetch}
      />
    </>
  )
}
