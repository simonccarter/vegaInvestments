import { useGetPortfolio } from "@/api/vega/usePortfolio"
import { useGetPrices } from "@/api/vega/usePrices"
import { formatDateForAPI, formatISOStringToDateKey } from "@/utils/dates"
import { subDays } from "date-fns"
import { useMemo, useState } from "react"
import type { DateRange } from "react-day-picker"

export function useHistoricalChart() {
  const { data: portfolio, isLoading: isLoadingPortfolio, error: portfolioError, isError: isPortfolioError } = useGetPortfolio()

  // Default to last 30 days
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  })

  // Get unique asset IDs from portfolio positions
  const assetIds = useMemo(() => {
    if (!portfolio?.positions) return []
    return Array.from(new Set(portfolio.positions.map((p) => p.asset)))
  }, [portfolio])

  // Format dates for API (use UTC to avoid timezone issues)
  const fromDate = dateRange?.from ? formatDateForAPI(dateRange.from) : undefined
  const toDate = dateRange?.to ? formatDateForAPI(dateRange.to) : undefined

  const {
    data: prices,
    isLoading: isLoadingPrices,
    error: pricesError,
    isError: isPricesError,
  } = useGetPrices({
    assets: assetIds,
    from: fromDate,
    to: toDate,
  })

  // Calculate portfolio value over time
  const chartData = useMemo(() => {
    if (!portfolio?.positions || !prices || prices.length === 0) return []

    // Group prices by date
    const pricesByDate = new Map<string, Map<string, number>>()
    prices.forEach((price) => {
      if (!price.asOf) return
      const dateKey = formatISOStringToDateKey(price.asOf)
      if (!pricesByDate.has(dateKey)) {
        pricesByDate.set(dateKey, new Map())
      }
      pricesByDate.get(dateKey)!.set(price.asset, price.price)
    })

    // Calculate total portfolio value for each date
    const portfolioValues: Array<{ date: string; value: number }> = []
    const sortedDates = Array.from(pricesByDate.keys()).sort()

    sortedDates.forEach((dateKey) => {
      const datePrices = pricesByDate.get(dateKey)!
      let totalValue = 0

      portfolio.positions.forEach((position) => {
        const price = datePrices.get(position.asset)
        if (price !== undefined) {
          // Price is in cents, convert to dollars and multiply by quantity
          totalValue += (price / 100) * position.quantity
        }
      })

      portfolioValues.push({
        date: dateKey,
        value: totalValue,
      })
    })

    return portfolioValues
  }, [portfolio, prices])

  // Normalize errors - return the first error encountered
  const error = portfolioError || pricesError
  const isError = isPortfolioError || isPricesError

  return {
    chartData,
    error,
    isError,
    isLoading: isLoadingPortfolio || isLoadingPrices,
    isLoadingPortfolio,
    isLoadingPrices,
    portfolio,
    setDateRange,
    dateRange,
    prices,
    assetIds,
    fromDate,
    toDate,
  }
}