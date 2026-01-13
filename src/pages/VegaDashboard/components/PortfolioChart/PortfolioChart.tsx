import { useGetPortfolios } from '@/api/vega/usePortfolios'
import { useGetAssets } from '@/api/vega/useAssets'
import { Loader } from '@/components/ui/loader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { transformPortfolioData } from './transformer'
import { PieChartTooltip } from './components/PieChartTooltip/PieChartTooltip'
import { useMemo } from 'react'
import { getChartColors, getChartPrimaryColor } from '@/constants/chartColors'

export default function PortfolioChart() {
  const { data, isLoading, error, isError } = useGetPortfolios()
  const { data: assets, isLoading: isLoadingAssets } = useGetAssets()

  // Create a mapping from asset UUID to asset name
  const assetMap = useMemo(() => {
    if (!assets || assets.length === 0) return new Map<string, string>()
    const map = new Map<string, string>()
    assets.forEach((asset) => {
      map.set(asset.id, asset.name)
    })
    return map
  }, [assets])

  if (isLoading || isLoadingAssets) {
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

  if (isError || error) {
    return (
        <Card className="border-destructive/20 bg-destructive/10 text-destructive mt-6">
          <CardContent className="p-6" role="alert" aria-live="assertive">
            <div className="font-medium">Failed to load portfolio data</div>
            <div className="mt-1 text-sm">{error?.message || 'An unknown error occurred'}</div>
          </CardContent>
        </Card>
    )
  }

  if (!data || !data.positions || data.positions.length === 0) {
    return (
        <Card className="bg-muted/40 text-muted-foreground mt-6">
          <CardContent className="p-6 text-center text-sm" role="status" aria-live="polite">
            No portfolio data available.
          </CardContent>
        </Card>
    )
  }

  // Ensure assets are loaded before rendering
  if (!assets || assets.length === 0) {
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
            <span>Loading assets data…</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  const chartData = transformPortfolioData(data.positions, assetMap)
  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0)
  const chartColors = getChartColors()

  const chartDescription = `Portfolio donut chart showing ${chartData.length} positions with a total value of $${totalValue.toFixed(2)}`

  return (
      <Card className="bg-muted/40">
        <CardHeader>
          <CardTitle>Portfolio</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="sr-only" id="chart-description">
            {chartDescription}
          </div>

          <div
            className="h-96"
            role="img"
            aria-labelledby="chart-description"
            aria-label={chartDescription}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => {
                    if (!name || percent === undefined) return ''
                    return `${name}: ${(percent * 100).toFixed(0)}%`
                  }}
                  outerRadius={120}
                  fill={getChartPrimaryColor()}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${entry.id}`} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip content={<PieChartTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
  )
}

