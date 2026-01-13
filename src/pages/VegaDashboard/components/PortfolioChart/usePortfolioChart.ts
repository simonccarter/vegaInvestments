import type { AssetType } from '@/api/vega/schemas'
import { useGetAssets } from '@/api/vega/useAssets'
import { useGetPortfolio } from '@/api/vega/usePortfolio'
import { getChartColors } from '@/constants/chartColors'
import { useMemo, useState } from 'react'
import { transformPortfolioData } from './transformer'

export type AssetTypeFilter = 'all' | AssetType
const ASSET_TYPES: AssetType[] = ['stock', 'crypto', 'fiat'] as const

export const usePortfolioChart = () => {
  const { data: portfolio, isLoading: isLoadingPortfolio, error: portfolioError, isError: isPortfolioError } = useGetPortfolio()
  const { data: assets, isLoading: isLoadingAssets, error: assetsError, isError: isAssetsError } = useGetAssets()
  const [selectedAssetType, setSelectedAssetType] = useState<AssetTypeFilter>('all')

  // Normalize errors - return the first error encountered
  const error = portfolioError || assetsError
  const isError = isPortfolioError || isAssetsError

  // Create a mapping from asset UUID to asset name
  const assetMap = useMemo(() => {
    if (!assets || assets.length === 0) return new Map<string, string>()
    const map = new Map<string, string>()
    assets.forEach((asset) => {
      map.set(asset.id, asset.name)
    })
    return map
  }, [assets])

  // Create a mapping from asset UUID to asset type
  const assetTypeMap = useMemo(() => {
    if (!assets || assets.length === 0) return new Map<string, AssetType>()
    const map = new Map<string, AssetType>()
    assets.forEach((asset) => {
      map.set(asset.id, asset.type)
    })
    return map
  }, [assets])

  // Filter positions by selected asset type
  const filteredPositions = useMemo(() => {
    if (!portfolio || !portfolio.positions) return []
    if (selectedAssetType === 'all') {
      return portfolio.positions
    }
    return portfolio.positions.filter((position) => {
      const assetType = assetTypeMap.get(position.asset)
      return assetType === selectedAssetType
    })
  }, [portfolio, selectedAssetType, assetTypeMap])

  const chartData = transformPortfolioData(filteredPositions, assetMap)
  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0)
  const chartColors = getChartColors()
  const chartDescription = `Portfolio donut chart showing ${chartData.length} positions with a total value of $${totalValue.toFixed(2)}`
  const assetTypeOptions: AssetTypeFilter[] = ['all', ...ASSET_TYPES]

  return {
    assetMap,
    assets,
    assetTypeMap,
    assetTypeOptions,
    chartColors,
    chartData,
    chartDescription,
    portfolio,
    error,
    filteredPositions,
    isError,
    isLoading: isLoadingPortfolio || isLoadingAssets,
    selectedAssetType,
    setSelectedAssetType,
    totalValue,
  }
}
