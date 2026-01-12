import { useGetPortfolios } from '@/api/vega/usePortfolios'
import { useGetAssets } from '@/api/vega/useAssets'
import { Container } from '@/components/ui/container'
import { Loader } from '@/components/ui/loader'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { transformPortfolioData } from './transformer'
import { PieChartTooltip } from './components/PieChartTooltip/PieChartTooltip'
import { useMemo } from 'react'

const COLORS = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f']

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
      <Container>
        <div className="bg-muted/40 mt-6 rounded-lg border p-6">
          <div
            className="flex items-center justify-center gap-2 text-sm"
            role="status"
            aria-live="polite"
            aria-busy="true"
          >
            <Loader size={20} aria-hidden="true" />
            <span>Loading portfolio data…</span>
          </div>
        </div>
      </Container>
    )
  }

  if (isError || error) {
    return (
      <Container>
        <div
          className="border-destructive/20 bg-destructive/10 text-destructive mt-6 rounded-lg border p-6"
          role="alert"
          aria-live="assertive"
        >
          <div className="font-medium">Failed to load portfolio data</div>
          <div className="mt-1 text-sm">{error?.message || 'An unknown error occurred'}</div>
        </div>
      </Container>
    )
  }

  if (!data || !data.positions || data.positions.length === 0) {
    return (
      <Container>
        <div
          className="bg-muted/40 text-muted-foreground mt-6 rounded-lg border p-6 text-center text-sm"
          role="status"
          aria-live="polite"
        >
          No portfolio data available.
        </div>
      </Container>
    )
  }

  // Ensure assets are loaded before rendering
  if (!assets || assets.length === 0) {
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
            <span>Loading assets data…</span>
          </div>
        </div>
      </Container>
    )
  }

  const chartData = transformPortfolioData(data.positions, assetMap)
  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0)

  const chartDescription = `Portfolio donut chart showing ${chartData.length} positions with a total value of £${totalValue.toFixed(2)}`

  return (
    <Container>
      <div className="bg-muted/40 mt-6 rounded-lg border p-4">
        <h2 className="mb-2 text-lg font-semibold">Portfolio Distribution</h2>
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
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${entry.id}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<PieChartTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          <p>Total Portfolio Value: £{totalValue.toFixed(2)}</p>
          <p>As of: {new Date(data.asOf).toLocaleString()}</p>
        </div>
      </div>
    </Container>
  )
}

