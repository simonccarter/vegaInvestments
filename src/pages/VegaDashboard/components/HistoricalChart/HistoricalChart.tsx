import { useGetAssets } from '@/api/vega/useAssets'
import { useGetPortfolios } from '@/api/vega/usePortfolios'
import { useGetPrices } from '@/api/vega/usePrices'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { Loader } from '@/components/ui/loader'
import { getChartPrimaryColor } from '@/constants/chartColors'
import {
  formatDateForAPI,
  formatDateForChartTick,
  formatDateForChartTooltip,
  formatISOStringToDateKey,
} from '@/utils/dates'
import { subDays } from 'date-fns'
import { useMemo, useState } from 'react'
import type { DateRange } from 'react-day-picker'
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

export default function HistoricalChart() {
  const { data: portfolio, isLoading: isLoadingPortfolio } = useGetPortfolios()
  const { isLoading: isLoadingAssets } = useGetAssets()

  // Default to last 30 days
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  })

  // Get unique asset IDs from portfolio positions
  const assetIds = useMemo(() => {
    if (!portfolio?.positions) return []
    return Array.from(new Set(portfolio.positions.map((p) => p.asset)))
  }, [portfolio])

  // Format dates for API (use UTC to avoid timezone issues)
  const fromDate = dateRange?.from ? formatDateForAPI(dateRange.from) : undefined
  const toDate = dateRange?.to ? formatDateForAPI(dateRange.to) : undefined

  const {
    data: prices,
    isLoading: isLoadingPrices,
    error: pricesError,
    isError: isPricesError,
  } = useGetPrices({
    assets: assetIds,
    from: fromDate,
    to: toDate,
    useHardcodedData: true,
  })

  // Calculate portfolio value over time
  const chartData = useMemo(() => {
    if (!portfolio?.positions || !prices || prices.length === 0) return []

    // Group prices by date
    const pricesByDate = new Map<string, Map<string, number>>()
    prices.forEach((price) => {
      if (!price.asOf) return
      const dateKey = formatISOStringToDateKey(price.asOf)
      if (!pricesByDate.has(dateKey)) {
        pricesByDate.set(dateKey, new Map())
      }
      pricesByDate.get(dateKey)!.set(price.asset, price.price)
    })

    // Calculate total portfolio value for each date
    const portfolioValues: Array<{ date: string; value: number }> = []
    const sortedDates = Array.from(pricesByDate.keys()).sort()

    sortedDates.forEach((dateKey) => {
      const datePrices = pricesByDate.get(dateKey)!
      let totalValue = 0

      portfolio.positions.forEach((position) => {
        const price = datePrices.get(position.asset)
        if (price !== undefined) {
          // Price is in cents, convert to dollars and multiply by quantity
          totalValue += (price / 100) * position.quantity
        }
      })

      portfolioValues.push({
        date: dateKey,
        value: totalValue,
      })
    })

    return portfolioValues
  }, [portfolio, prices])

  if (isLoadingPortfolio || isLoadingAssets) {
    return (
      <Card className="bg-muted/40 mt-6">
        <CardContent className="p-6">
          <div
            className="flex items-center justify-center gap-2 text-sm"
            role="status"
            aria-live="polite"
            aria-busy="true"
          >
            <Loader size={20} aria-hidden="true" />
            <span>Loading portfolio data…</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!portfolio || !portfolio.positions || portfolio.positions.length === 0) {
    return (
      <Card className="bg-muted/40 text-muted-foreground mt-6">
        <CardContent className="p-6 text-center text-sm" role="status" aria-live="polite">
          No portfolio data available.
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-muted/40 min-w-20">
      <CardHeader className="flex min-h-[36px] items-center justify-between sm:flex-row">
        <div className="grid grid-cols-2 items-center justify-center gap-1">
          <CardTitle className="text-center">Portfolio Performance</CardTitle>
        </div>
        <CardAction>
          <DateRangePicker value={dateRange} onChange={setDateRange} maxDate={new Date()} />
        </CardAction>
      </CardHeader>
      <CardContent className="p-4">
        {isPricesError || pricesError ? (
          <div className="flex h-96 items-center justify-center">
            <div
              className="border-destructive/20 bg-destructive/10 text-destructive rounded-md border p-4"
              role="alert"
              aria-live="assertive"
            >
              <div className="font-medium">Failed to load historical prices</div>
              <div className="mt-1 text-sm">
                {pricesError?.message || 'An unknown error occurred'}
              </div>
            </div>
          </div>
        ) : isLoadingPrices ? (
          <div className="flex h-96 items-center justify-center">
            <div
              className="flex items-center justify-center gap-2 text-sm"
              role="status"
              aria-live="polite"
              aria-busy="true"
            >
              <Loader size={20} aria-hidden="true" />
              <span>Loading historical prices…</span>
            </div>
          </div>
        ) : chartData.length === 0 ? (
          <div className="text-muted-foreground flex h-96 items-center justify-center text-sm">
            No historical data available for the selected date range.
          </div>
        ) : (
          <div className="h-96 p-4" role="img" aria-label="Portfolio value over time">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => formatDateForChartTick(new Date(value))}
                />
                <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
                <Tooltip
                  formatter={(value: number) => [`$${value.toFixed(2)}`, 'Portfolio Value']}
                  labelFormatter={(label) => formatDateForChartTooltip(new Date(label))}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={getChartPrimaryColor()}
                  strokeWidth={2}
                  dot={false}
                  name="Portfolio Value"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
