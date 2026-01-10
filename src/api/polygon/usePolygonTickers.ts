import { useQuery } from '@tanstack/react-query'
import { validatedTicketFetcher } from './api'
import { POLYGON_API_URL } from './constants'
import { type Ticker } from './schemas'

/**
 * US Stock Exchange MIC codes (ISO 10383)
 * - XNAS: NASDAQ
 * - XNYS: New York Stock Exchange (NYSE)
 * - BATS: BATS Exchange
 * - ARCX: NYSE Arca
 */
export type USStockExchange = 'XNAS' | 'XNYS' | 'BATS' | 'ARCX'

export interface UseGetPolygonTickersOptions {
  /** Filter by specific exchange. If not provided, fetches from all US exchanges */
  exchange?: USStockExchange
  /** Filter by ticker type. Defaults to "CS" (Common Stock) */
  type?: string
}

/**
 * Builds the URL for the tickers endpoint with query parameters
 */
function buildTickersUrl(options: UseGetPolygonTickersOptions = {}): string {
  const {
    exchange,
    type = 'CS', // Common Stock
  } = options

  const params = new URLSearchParams()

  // Filter for US stocks
  params.set('market', 'stocks')
  params.set('locale', 'us')
  params.set('active', 'true')
  params.set('type', type)

  // Filter by exchange (single exchange only)
  if (exchange) {
    params.set('exchange', exchange)
  }

  // Set limit to maximum (1000) to minimize number of pages
  params.set('limit', '1000')

  // Sort by ticker for consistent pagination
  params.set('sort', 'ticker')
  params.set('order', 'asc')

  const base = `${POLYGON_API_URL}/v3/reference/tickers`
  const queryString = params.toString()
  return queryString ? `${base}?${queryString}` : base
}

/**
 * Fetches all pages of tickers using pagination
 */
async function fetchAllTickersPages(initialUrl: string): Promise<Ticker[]> {
  const allTickers: Ticker[] = []
  let url: string | null = initialUrl

  while (url) {
    const response = await validatedTicketFetcher(url)

    if (response.results) {
      allTickers.push(...response.results)
    }

    url = response.next_url ?? null
  }

  return allTickers
}

export const useGetPolygonTickers = (options: UseGetPolygonTickersOptions | null = {}) => {
  const shouldFetch = options !== null

  const initialUrl = shouldFetch ? buildTickersUrl(options!) : null

  // Build a stable query key based on options
  const queryKey = shouldFetch ? ['tickers', initialUrl] : ['tickers', null]

  const query = useQuery<Ticker[]>({
    queryKey,
    queryFn: async () => {
      if (!initialUrl) throw new Error('No URL provided')
      return fetchAllTickersPages(initialUrl)
    },
    enabled: shouldFetch,
  })

  return {
    data: query.data,
    error: query.error,
    isLoading: query.isLoading,
    isError: query.isError,
    mutate: query.refetch,
  }
}

