import type { AssetTypeFilter } from '../../usePortfolioChart'

export const getDisplayLabel = (type: AssetTypeFilter): string => {
  if (type === 'all') return 'All'
  return type.charAt(0).toUpperCase() + type.slice(1)
}

