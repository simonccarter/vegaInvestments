/**
 * File contains basic wrappers to fix schema used for fetcherWithValidation so return type can be correctly inferred
 **/

import { ValidationError } from '@/api/errors/ValidationError'
import { mockAssets } from "@/constants/assets"
import { mockPortfolio } from "@/constants/portfolio"
import { generateMockHistoricalPrices } from "@/constants/prices"
import { fetcherWithValidation } from "./fetcher"
import { AssetsSchema, HistoricalPricesSchema, PortfolioSchema, type Assets, type HistoricalPrices, type Portfolio } from "./schemas"

export const validatedPortfolioFetcher = async (url: string) => await fetcherWithValidation(url, PortfolioSchema)

/**
 * Validates hardcoded portfolio data using Zod schema
 */
export const validatedHardcodedPortfolioFetcher = async (): Promise<Portfolio> => {
  const result = PortfolioSchema.safeParse(mockPortfolio)

  if (!result.success) {
    console.log('result.error', result.error)
    throw new ValidationError(
      'Hardcoded portfolio data validation failed',
      result.error,
      'hardcoded',
    )
  }

  return result.data
}

export const validatedAssetsFetcher = async (url: string) => await fetcherWithValidation(url, AssetsSchema)

/**
 * Validates hardcoded assets data using Zod schema
 */
export const validatedHardcodedAssetsFetcher = async (): Promise<Assets> => {
  const result = AssetsSchema.safeParse(mockAssets)

  if (!result.success) {
    console.log('result.error', result.error)
    throw new ValidationError(
      'Hardcoded assets data validation failed',
      result.error,
      'hardcoded',
    )
  }

  return result.data
}

export const validatedPricesFetcher = async (url: string) => await fetcherWithValidation(url, HistoricalPricesSchema)

/**
 * Validates hardcoded prices data using Zod schema
 */
export const validatedHardcodedPricesFetcher = async (
  assets: string[],
  from?: string,
  to?: string,
): Promise<HistoricalPrices> => {
  const prices = generateMockHistoricalPrices(assets, from, to)
  const result = HistoricalPricesSchema.safeParse(prices)

  if (!result.success) {
    console.log('result.error', result.error)
    throw new ValidationError(
      'Hardcoded prices data validation failed',
      result.error,
      'hardcoded',
    )
  }

  return result.data
}

