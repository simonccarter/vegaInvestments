import { useQuery } from '@tanstack/react-query'
import { getAndValidateHardcodedPortfolioFetcher, validatedPortfolioFetcher } from './api'
import { USE_MOCK_DATA, VEGA_API_URL } from './constants'
import { type PortfolioAPI } from './schemas'

export interface UseGetPortfolioOptions {
  /** If true, uses hardcoded mock data instead of fetching from API */
  useHardcodedData?: boolean
}

/**
 * Builds the URL for the portfolios endpoint
 */
function buildPortfoliosUrl(): string {
  return `${VEGA_API_URL}/portfolios`
}

export const useGetPortfolio = (options: UseGetPortfolioOptions = {}) => {
  const { useHardcodedData = USE_MOCK_DATA } = options

  const query = useQuery<PortfolioAPI>({
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

