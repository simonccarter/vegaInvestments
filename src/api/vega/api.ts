/**
 * File contains basic wrappers to fix schema used for fetcherWithValidation so return type can be correctly inferred
 **/

import { ValidationError } from '@/api/errors/ValidationError'
import { mockPortfolio } from "@/constants/portfolio"
import { fetcherWithValidation } from "./fetcher"
import { PortfolioSchema, type Portfolio } from "./schemas"

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

