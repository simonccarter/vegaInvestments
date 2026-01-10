import { getErrorMessage } from '@/api/errors/errorUtils'
import { Container } from '@/components/ui/container'
import type { PriceType, StockSymbols } from '@/models/stocks'
import type { Dispatch, SetStateAction } from 'react'
import type { DateRange } from 'react-day-picker'
import DateRangeSelector from './components/DateRangeSelector'
import FetchAllTickersToggle from './components/FetchAllTickersToggle'
import PriceTypeSelector from './components/PriceTypeSelector'
import StockSelector from './components/StockSelector/StockSelector'

type Props = {
  selectedSymbols: StockSymbols[]
  symbols: StockSymbols[]
  setSelectedSymbols: Dispatch<SetStateAction<StockSymbols[]>>

  selectedPriceType: PriceType
  setSelectedPriceType: Dispatch<SetStateAction<PriceType>>

  dateRange: DateRange | undefined
  setDateRange: Dispatch<SetStateAction<DateRange | undefined>>

  fetchAllTickers: boolean
  setFetchAllTickers: (v: boolean) => void
  isLoadingTickers?: boolean
  tickerError?: Error | null
}

function Controls({
  selectedSymbols,
  symbols,
  setSelectedSymbols,
  setSelectedPriceType,
  selectedPriceType,
  dateRange,
  setDateRange,
  fetchAllTickers,
  setFetchAllTickers,
  isLoadingTickers = false,
  tickerError,
}: Props) {
  return (
    <div className="flex-1">
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="controls-status"
      >
        {isLoadingTickers && 'Loading tickers from API'}
        {tickerError && `Error: ${getErrorMessage(tickerError)}`}
      </div>
      <Container>
        <section className="mb-6 space-y-3" aria-label="Stock time series controls">
          <div className="bg-muted/40 grid gap-4 rounded-lg border p-4 md:grid-cols-4">
            <StockSelector
              selectedSymbols={selectedSymbols}
              symbols={symbols}
              setSelectedSymbols={setSelectedSymbols}
            />

            <DateRangeSelector
              dateRange={dateRange}
              setDateRange={setDateRange}
              maxDate={new Date()}
              disabled={{ after: new Date() }}
            />

            <PriceTypeSelector
              selectedPriceType={selectedPriceType}
              setSelectedPriceType={setSelectedPriceType}
            />
          </div>
          <div className="bg-muted/40 rounded-lg border p-4">
            <FetchAllTickersToggle
              fetchAllTickers={fetchAllTickers}
              setFetchAllTickers={setFetchAllTickers}
              isLoadingTickers={isLoadingTickers}
            />
            {isLoadingTickers && (
              <div className="text-muted-foreground mt-2 text-sm">
                This may take time due to rate limits.
              </div>
            )}
            {tickerError ? (
              <div
                className="border-destructive/20 bg-destructive/10 text-destructive mt-2 rounded-md border p-3 text-sm"
                role="alert"
                aria-live="assertive"
              >
                <div className="font-medium">Failed to fetch tickers</div>
                <div className="mt-1">{getErrorMessage(tickerError)}</div>
              </div>
            ) : null}
          </div>
        </section>
      </Container>
    </div>
  )
}
export default Controls
