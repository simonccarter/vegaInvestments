import { getErrorMessage } from '@/api/errors/errorUtils'
import type { TimeSpan } from '@/api/polygon/dateUtils'
import { Container } from '@/components/ui/container'
import { Loader } from '@/components/ui/loader'
import type { PriceType, StockSymbols, StockTimeSeriesRow } from '@/models/stocks'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const SERIES_COLORS = [
  '#1f77b4', // blue
  '#ff7f0e', // orange
  '#2ca02c', // green
  '#d62728', // red
  '#9467bd', // purple
]

function createColorMap(selectedSymbols: StockSymbols[]) {
  const toReturn = Object.fromEntries(
    selectedSymbols.map((sym, i) => [sym, SERIES_COLORS[i % SERIES_COLORS.length]]),
  )

  return toReturn
}

type Props = {
  selectedSymbols: StockSymbols[]
  selectedPriceType: PriceType
  data: StockTimeSeriesRow[]
  timespan: TimeSpan
  isLoading?: boolean
  errorsBySymbol?: Record<StockSymbols, Error | undefined>
  isReadyToFetch?: boolean
  hasAttemptedFetch?: boolean
}

/**
 * Formats x-axis labels based on timespan
 * Value is always an ISO timestamp, but we format differently based on timespan
 */
function formatXAxisLabel(value: string, timespan: TimeSpan): string {
  const date = new Date(value)

  if (timespan === 'hour') {
    // For hourly data, show date and time
    return date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // For daily data, show date only
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
  })
}

export default function TimeSeriesChart({
  selectedSymbols,
  selectedPriceType,
  data,
  timespan,
  isLoading,
  errorsBySymbol,
  isReadyToFetch = false,
  hasAttemptedFetch = false,
}: Props) {
  // Collect all errors
  const errors = errorsBySymbol
    ? Object.entries(errorsBySymbol)
        .filter(([, error]) => error !== undefined)
        .map(([symbol, error]) => ({ symbol, error: error! }))
    : []

  // Initial state - no symbols selected
  if (selectedSymbols.length === 0) {
    return (
      <Container>
        <div
          className="bg-muted/40 text-muted-foreground mt-6 rounded-lg border p-6 text-center text-sm"
          role="status"
          aria-live="polite"
        >
          Select at least one stock to see the chart.
        </div>
      </Container>
    )
  }

  // If we have symbols but aren't ready to fetch, likely no date range selected
  if (!isReadyToFetch && !hasAttemptedFetch) {
    return (
      <Container>
        <div
          className="bg-muted/40 text-muted-foreground mt-6 rounded-lg border p-6 text-center text-sm"
          role="status"
          aria-live="polite"
        >
          Select a date range to see the chart.
        </div>
      </Container>
    )
  }

  // Loading state - only show if no data and no errors yet
  if (isLoading && data.length === 0 && errors.length === 0) {
    return (
      <Container>
        <div className="bg-muted/40 mt-6 rounded-lg border p-6">
          <div
            className="flex items-center justify-center gap-2 text-sm"
            role="status"
            aria-live="polite"
            aria-busy="true"
          >
            <Loader size={20} aria-hidden="true" />
            <span>Loading time series data…</span>
          </div>
        </div>
      </Container>
    )
  }

  // This should not be possible; if we have have fetched and have no data we would expect there to be error(s)
  if (!isLoading && data.length === 0 && errors.length === 0) {
    return (
      <Container>
        <div
          className="bg-muted/40 mt-6 rounded-lg border p-6 text-center text-sm"
          role="status"
          aria-live="polite"
        >
          No data available for the selected range.
        </div>
      </Container>
    )
  }

  // Build a stable color map from the selected symbols
  const colorMap = createColorMap(selectedSymbols)

  // Generate accessible description for the chart
  const chartDescription =
    data.length > 0
      ? `Time series chart showing ${selectedPriceType} prices for ${selectedSymbols.join(', ')} over the selected date range. ${errors.length > 0 ? `Errors occurred for ${errors.map((e) => e.symbol).join(', ')}.` : ''}`
      : 'Time series chart. No data to display.'

  return (
    <Container>
      <div className="bg-muted/40 mt-6 rounded-lg border p-4">
        <h2 className="mb-2 text-lg font-semibold">Time Series Chart</h2>
        <div className="sr-only" id="chart-description">
          {chartDescription}
        </div>

        {data.length > 0 && (
          <div
            className="h-80"
            role="img"
            aria-labelledby="chart-description"
            aria-label={chartDescription}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 16, right: 24, bottom: 8, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => formatXAxisLabel(value, timespan)}
                  aria-label="Date"
                />
                <YAxis aria-label={`${selectedPriceType} price`} />
                <Tooltip />
                <Legend
                  formatter={(value: string) => (
                    <span style={{ color: colorMap[value] }}>{value}</span>
                  )}
                />

                {selectedSymbols.map((symbol) => (
                  <Line
                    key={symbol}
                    type="monotone"
                    dataKey={`${symbol}.${selectedPriceType}`}
                    name={`${symbol} ${selectedPriceType}`}
                    stroke={colorMap[symbol]}
                    dot={false}
                    strokeWidth={2}
                    isAnimationActive={false}
                    aria-label={`${symbol} ${selectedPriceType} price line`}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {errors.length > 0 && (
          <div className="mb-4 space-y-2" role="alert" aria-live="assertive">
            {errors.map(({ symbol, error }) => (
              <div
                key={symbol}
                className="border-destructive/20 bg-destructive/10 text-destructive rounded-md border p-3 text-sm"
              >
                <div className="font-medium">Failed to fetch data for {symbol}</div>
                <div className="mt-1">{getErrorMessage(error)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}
