import { useGetPortfolios } from '@/api/vega/usePortfolios'
import { useGetAssets } from '@/api/vega/useAssets'
import { useGetPrices } from '@/api/vega/usePrices'
import { Loader } from '@/components/ui/loader'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { Card, CardContent, CardHeader, CardTitle, CardAction } from '@/components/ui/card'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'
import { useMemo, useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { format, subDays } from 'date-fns'
import { getChartPrimaryColor } from '@/constants/chartColors'

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
    return Array.from(new Set(portfolio.positions.map(p => p.asset)))
  }, [portfolio])

  // Format dates for API (use UTC to avoid timezone issues)
  const fromDate = dateRange?.from
    ? format(dateRange.from, 'yyyy-MM-dd')
    : undefined
  const toDate = dateRange?.to
    ? format(dateRange.to, 'yyyy-MM-dd')
    : undefined

  const { data: prices, isLoading: isLoadingPrices, error: pricesError } = useGetPrices({
    assets: assetIds,
    from: fromDate,
    to: toDate,
    useHardcodedData: true,
  })

  // Debug logging (remove in production)
  if (import.meta.env.DEV) {
    console.log('HistoricalChart Debug:', {
      assetIds,
      fromDate,
      toDate,
      pricesCount: prices?.length,
      isLoadingPrices,
      pricesError,
    })
  }

  // Calculate portfolio value over time
  const chartData = useMemo(() => {
    if (!portfolio?.positions || !prices || prices.length === 0) return []

    // Group prices by date
    const pricesByDate = new Map<string, Map<string, number>>()
    prices.forEach((price) => {
      if (!price.asOf) return
      const dateKey = format(new Date(price.asOf), 'yyyy-MM-dd')
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
      <Card className="bg-muted/40">
        <CardHeader>
          <CardTitle>Portfolio Historical Performance</CardTitle>
          <CardAction>
            <div className="w-64">
              <DateRangePicker
                value={dateRange}
                onChange={setDateRange}
                maxDate={new Date()}
              />
            </div>
          </CardAction>
        </CardHeader>
        <CardContent className="p-4">

          {isLoadingPrices ? (
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
            <div className="flex h-96 items-center justify-center text-sm text-muted-foreground">
              No historical data available for the selected date range.
            </div>
          ) : (
            <div className="h-96" role="img" aria-label="Portfolio value over time">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(value) => format(new Date(value), 'MMM dd')}
                  />
                  <YAxis
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip
                    formatter={(value: number) => [`$${value.toFixed(2)}`, 'Portfolio Value']}
                    labelFormatter={(label) => format(new Date(label), 'MMM dd, yyyy')}
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

