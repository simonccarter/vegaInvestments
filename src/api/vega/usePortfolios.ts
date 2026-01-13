import { useQuery } from '@tanstack/react-query'
import { getAndValidateHardcodedPortfolioFetcher, validatedPortfolioFetcher } from './api'
import { VEGA_API_URL } from './constants'
import { type Portfolio } from './schemas'

export interface UseGetPortfoliosOptions {
  /** If true, uses hardcoded mock data instead of fetching from API */
  useHardcodedData?: boolean
}

/**
 * Builds the URL for the portfolios endpoint
 */
function buildPortfoliosUrl(): string {
  return `${VEGA_API_URL}/portfolios`
}

export const useGetPortfolios = (options: UseGetPortfoliosOptions = {}) => {
  const { useHardcodedData = true } = options

  const query = useQuery<Portfolio>({
    queryKey: ['portfolios', useHardcodedData],
    queryFn: async () => {
      if (useHardcodedData) {
        return getAndValidateHardcodedPortfolioFetcher()
      }
      const url = buildPortfoliosUrl()
      return validatedPortfolioFetcher(url)
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

