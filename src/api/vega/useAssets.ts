import { useQuery } from '@tanstack/react-query'
import { getAndValidateHardcodedAssetsFetcher, validatedAssetsFetcher } from './api'
import { USE_MOCK_DATA, VEGA_API_URL } from './constants'
import { type AssetsAPI } from './schemas'

export interface UseGetAssetsOptions {
  /** If true, uses hardcoded mock data instead of fetching from API */
  useHardcodedData?: boolean
}

/**
 * Builds the URL for the assets endpoint
 */
function buildAssetsUrl(): string {
  return `${VEGA_API_URL}/assets`
}

export const useGetAssets = (options: UseGetAssetsOptions = {}) => {
  const { useHardcodedData = USE_MOCK_DATA } = options

  const query = useQuery<AssetsAPI>({
    queryKey: ['assets', useHardcodedData],
    queryFn: async () => {
      if (useHardcodedData) {
        return getAndValidateHardcodedAssetsFetcher()
      }
      const url = buildAssetsUrl()
      return validatedAssetsFetcher(url)
    },
  })

  return {
    data: query.data,
    error: query.error,
    isLoading: query.isLoading,
    isError: query.isError,
    mutate: query.refetch,
  }
}

