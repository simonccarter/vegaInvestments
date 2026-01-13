import { useGetAssets } from "@/api/vega/useAssets"
import { useGetPortfolio } from "@/api/vega/usePortfolio"
import { useMemo } from "react"

export function usePositionsTable() {
  const { data: portfolio, isLoading: isLoadingPortfolio, error: portfolioError, isError: isPortfolioError } = useGetPortfolio()
  const { data: assets, isLoading: isLoadingAssets, error: assetsError, isError: isAssetsError } = useGetAssets()

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

  const totalValue = portfolio?.positions.reduce(
    (sum, position) => sum + (position.quantity * position.price) / 100,
    0,
  ) ?? 0

  return {
    assetMap,
    assets,
    error,
    isError,
    isLoading: isLoadingPortfolio || isLoadingAssets,
    portfolio,
    totalValue,
  }
}