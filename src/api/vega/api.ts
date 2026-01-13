/**
 * File contains basic wrappers to fix schema used for fetcherWithValidation so return type can be correctly inferred
 **/

import { ValidationError } from '@/api/errors/ValidationError'
import { mockAssets } from "@/api/vega/mocks/assets"
import { mockPortfolio } from "@/api/vega/mocks/portfolio"
import { generateMockHistoricalPrices } from "@/api/vega/mocks/prices"
import { fetcherWithValidation } from "./fetcher"
import { AssetsSchema, HistoricalPricesSchema, PortfolioSchema, type Assets, type HistoricalPrices, type Portfolio } from "./schemas"

export const validatedPortfolioFetcher = async (url: string) => await fetcherWithValidation(url, PortfolioSchema)

/**
 * Validates hardcoded portfolio data using Zod schema
 */
export const getAndValidateHardcodedPortfolioFetcher = async (): Promise<Portfolio> => {
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
export const getAndValidateHardcodedAssetsFetcher = async (): Promise<Assets> => {
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
export const getAndValidateHardcodedPricesFetcher = async (
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

