import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader } from '@/components/ui/loader'
import { getChartPrimaryColor } from '@/constants/chartColors'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { AssetTypeSelector } from './components/AssetTypeSelector/AssetTypeSelector'
import { getDisplayLabel } from './components/AssetTypeSelector/utils'
import { PercentageLabel } from './components/PercentageLabel/PercentageLabel'
import { PieChartTooltip } from './components/PieChartTooltip/PieChartTooltip'
import { usePortfolioChart } from './usePortfolioChart'

export default function PortfolioChart() {
  const {
    assets,
    assetTypeOptions,
    chartColors,
    chartData,
    chartDescription,
    portfolio,
    error,
    isError,
    isLoading,
    selectedAssetType,
    setSelectedAssetType,
    totalValue,
  } = usePortfolioChart()

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

  if (!portfolio || !portfolio.positions || portfolio.positions.length === 0) {
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

  return (
    <Card className="bg-muted/40">
      <CardHeader className="flex min-h-[36px] items-center justify-between sm:justify-between">
        <CardTitle>Portfolio</CardTitle>
        <AssetTypeSelector
          selectedAssetType={selectedAssetType}
          onAssetTypeChange={setSelectedAssetType}
          assetTypeOptions={assetTypeOptions}
        />
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
                outerRadius={120}
                fill={getChartPrimaryColor()}
                dataKey="value"
                label={PercentageLabel}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${entry.id}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip content={<PieChartTooltip totalValue={totalValue} />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <div className="text-muted-foreground text-center text-sm font-medium">
            Total: $
            {totalValue.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            {selectedAssetType !== 'all' && (
              <span className="ml-1 text-xs">({getDisplayLabel(selectedAssetType)})</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
