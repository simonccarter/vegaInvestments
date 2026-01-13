import { useQuery } from '@tanstack/react-query'
import { getAndValidateHardcodedPricesFetcher, validatedPricesFetcher } from './api'
import { USE_MOCK_DATA, VEGA_API_URL } from './constants'
import { type HistoricalPricesAPI } from './schemas'

export interface UseGetPricesOptions {
  /** Asset IDs to fetch prices for */
  assets: string[]
  /** Start date for historical prices (ISO date string) */
  from?: string
  /** End date for historical prices (ISO date string) */
  to?: string
  /** Specific date to get price at (ISO date string) */
  asOf?: string
  /** If true, uses hardcoded mock data instead of fetching from API */
  useHardcodedData?: boolean
}

/**
 * Builds the URL for the prices endpoint
 */
function buildPricesUrl(assets: string[], from?: string, to?: string, asOf?: string): string {
  const params = new URLSearchParams()
  params.append('assets', assets.join(','))
  if (asOf) {
    params.append('asOf', asOf)
  }
  if (from) {
    params.append('from', from)
  }
  if (to) {
    params.append('to', to)
  }
  return `${VEGA_API_URL}/prices?${params.toString()}`
}

export const useGetPrices = (options: UseGetPricesOptions) => {
  const { assets, from, to, asOf, useHardcodedData = USE_MOCK_DATA } = options

  const query = useQuery<HistoricalPricesAPI>({
    queryKey: ['prices', assets, from, to, asOf, useHardcodedData],
    queryFn: async () => {
      if (useHardcodedData) {
        return getAndValidateHardcodedPricesFetcher(assets, from, to)
      }
      const url = buildPricesUrl(assets, from, to, asOf)
      return validatedPricesFetcher(url)
    },
    enabled: assets.length > 0,
  })

  return {
    data: query.data,
    error: query.error,
    isLoading: query.isLoading,
    isError: query.isError,
    mutate: query.refetch,
  }
}

