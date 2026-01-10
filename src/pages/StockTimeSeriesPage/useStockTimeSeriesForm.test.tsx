import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { act, renderHook } from '@testing-library/react'
import type { DateRange } from 'react-day-picker'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useStockTimeSeriesForm } from './useStockTimeSeriesForm'

// Mock the useGetPolygonTickers hook
vi.mock('@/api/polygon/usePolygonTickers', () => ({
  useGetPolygonTickers: vi.fn(),
}))

// Import the mocked function
import type { Ticker } from '@/api/polygon/schemas'
import { useGetPolygonTickers } from '@/api/polygon/usePolygonTickers'

// Create a wrapper with QueryClientProvider
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

describe('useStockTimeSeriesForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Default mock: no fetch, returns hardcoded tickers
    vi.mocked(useGetPolygonTickers).mockReturnValue({
      data: undefined,
      error: null,
      isLoading: false,
      isError: false,
      mutate: vi.fn(),
    })
  })

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    expect(result.current.selectedSymbols).toEqual([])
    expect(result.current.fetchAllTickers).toBe(false)
    expect(result.current.selectedPriceType).toBe('open')
    expect(result.current.dateRange).toBeUndefined()
    expect(result.current.isReadyToFetch).toBe(false)
  })

  it('should use hardcoded tickers when fetchAllTickers is false', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    // Should return hardcoded tickers (checking first few)
    expect(result.current.symbols.length).toBeGreaterThan(0)
    expect(result.current.symbols).toContain('AAPL')
    expect(result.current.symbols).toContain('MSFT')
  })

  it('should update selectedSymbols', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.setSelectedSymbols(['AAPL', 'MSFT'])
    })

    expect(result.current.selectedSymbols).toEqual(['AAPL', 'MSFT'])
  })

  it('should update selectedPriceType', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.setSelectedPriceType('close')
    })

    expect(result.current.selectedPriceType).toBe('close')
  })

  it('should update dateRange', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    const dateRange: DateRange = {
      from: new Date('2025-01-15'),
      to: new Date('2025-01-20'),
    }

    act(() => {
      result.current.setDateRange(dateRange)
    })

    expect(result.current.dateRange).toEqual(dateRange)
  })

  it('should update fetchAllTickers', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.setFetchAllTickers(true)
    })

    expect(result.current.fetchAllTickers).toBe(true)
  })

  it('should call useGetPolygonTickers when fetchAllTickers is true', () => {
    renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    // Initially should not fetch
    expect(useGetPolygonTickers).toHaveBeenCalledWith(null)

    // Now enable fetchAllTickers
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.setFetchAllTickers(true)
    })

    // Should be called with options when toggle is enabled
    expect(useGetPolygonTickers).toHaveBeenCalledWith({
      exchange: 'XNAS',
      type: 'CS',
    })
  })

  it('should use API tickers when fetchAllTickers is true and data is available', () => {
    const mockTickers: Ticker[] = [
      {
        ticker: 'TEST1',
        name: 'TEST1',
        market: 'stocks',
        locale: 'us',
        primary_exchange: 'NASDAQ',
        type: 'CS',
        active: true,
        currency_name: 'USD',
        cik: 'TEST1',
        last_updated_utc: '2025-01-01',
      },
      {
        ticker: 'TEST2',
        name: 'TEST2',
        market: 'stocks',
        locale: 'us',
        primary_exchange: 'NASDAQ',
        type: 'CS',
        active: true,
        currency_name: 'USD',
        cik: 'TEST2',
        last_updated_utc: '2025-01-01',
      },
      {
        ticker: 'TEST3',
        name: 'TEST3',
        market: 'stocks',
        locale: 'us',
        primary_exchange: 'NASDAQ',
        type: 'CS',
        active: true,
        currency_name: 'USD',
        cik: 'TEST3',
        last_updated_utc: '2025-01-01',
      },
    ]

    vi.mocked(useGetPolygonTickers).mockReturnValue({
      data: mockTickers,
      error: null,
      isLoading: false,
      isError: false,
      mutate: vi.fn(),
    })

    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.setFetchAllTickers(true)
    })

    // Should use API tickers
    expect(result.current.symbols).toEqual(['TEST1', 'TEST2', 'TEST3'])
  })

  it('should return isReadyToFetch as false when no symbols selected', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    const dateRange: DateRange = {
      from: new Date('2025-01-15'),
      to: new Date('2025-01-20'),
    }

    act(() => {
      result.current.setDateRange(dateRange)
    })

    expect(result.current.isReadyToFetch).toBe(false)
  })

  it('should return isReadyToFetch as false when no date range', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.setSelectedSymbols(['AAPL'])
    })

    expect(result.current.isReadyToFetch).toBe(false)
  })

  it('should return isReadyToFetch as true when symbols and date range are set', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    const dateRange: DateRange = {
      from: new Date('2025-01-15'),
      to: new Date('2025-01-20'),
    }

    act(() => {
      result.current.setSelectedSymbols(['AAPL', 'MSFT'])
      result.current.setDateRange(dateRange)
    })

    expect(result.current.isReadyToFetch).toBe(true)
  })

  it('should return isReadyToFetch as false when date range is incomplete', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.setSelectedSymbols(['AAPL'])
      result.current.setDateRange({
        from: new Date('2025-01-15'),
        to: undefined,
      })
    })

    expect(result.current.isReadyToFetch).toBe(false)
  })

  it('should expose loading state from useGetPolygonTickers', () => {
    vi.mocked(useGetPolygonTickers).mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
      isError: false,
      mutate: vi.fn(),
    })

    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.setFetchAllTickers(true)
    })

    expect(result.current.isLoadingTickers).toBe(true)
  })

  it('should expose error state from useGetPolygonTickers', () => {
    const mockError = new Error('Failed to fetch tickers')

    vi.mocked(useGetPolygonTickers).mockReturnValue({
      data: undefined,
      error: mockError,
      isLoading: false,
      isError: true,
      mutate: vi.fn(),
    })

    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.setFetchAllTickers(true)
    })

    expect(result.current.tickerError).toBe(mockError)
  })

  it('should return null for tickerError when there is no error', () => {
    const { result } = renderHook(() => useStockTimeSeriesForm(), {
      wrapper: createWrapper(),
    })

    expect(result.current.tickerError).toBeNull()
  })
})
