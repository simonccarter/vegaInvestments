import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { Loader } from '@/components/ui/loader'
import { getChartPrimaryColor } from '@/constants/chartColors'
import { formatDateForChartTick, formatDateForChartTooltip } from '@/utils/dates'
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
import { useHistoricalChart } from './useHistoricalChart'

export default function HistoricalChart() {
  const {
    error,
    isError,
    isLoading,
    isLoadingPortfolio,
    portfolio,
    dateRange,
    setDateRange,
    chartData,
  } = useHistoricalChart()

  if (isLoadingPortfolio) {
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

  if (isError || error) {
    return (
      <Card className="border-destructive/20 bg-destructive/10 text-destructive mt-6">
        <CardContent className="p-6" role="alert" aria-live="assertive">
          <div className="font-medium">Failed to load historical data</div>
          <div className="mt-1 text-sm">{error?.message || 'An unknown error occurred'}</div>
        </CardContent>
      </Card>
    )
  }

  if (isLoading) {
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
            <span>Loading historical prices…</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (chartData.length === 0) {
    return (
      <Card className="bg-muted/40 text-muted-foreground mt-6">
        <CardContent className="p-6 text-center text-sm" role="status" aria-live="polite">
          No historical data available for the selected date range.
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
      </CardContent>
    </Card>
  )
}
