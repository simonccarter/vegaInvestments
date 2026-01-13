import { z } from 'zod'

export const AssetTypeSchema = z.enum(['stock', 'crypto', 'fiat'])

export const AssetSchema = z.object({
  id: z.uuid(),
  name: z.string(),
  type: AssetTypeSchema,
})

export const AssetsAPISchema = z.array(AssetSchema)

export const PriceSchema = z.object({
  id: z.uuid(),
  asset: z.string(),
  price: z.number().int(),
  asOf: z.iso.datetime().optional(),
})

export const HistoricalPricesAPISchema = z.array(PriceSchema)

export const PositionSchema = z.object({
  id: z.number().int(),
  asset: z.uuid(),
  quantity: z.number().int(),
  asOf: z.iso.datetime(),
  price: z.number().int(), // price per unit
})

export const PortfolioAPISchema = z.object({
  id: z.uuid(),
  asOf: z.iso.datetime(),
  positions: z.array(PositionSchema),
})

// Export inferred types from schemas
export type AssetType = z.infer<typeof AssetTypeSchema>
export type Asset = z.infer<typeof AssetSchema>
export type AssetsAPI = z.infer<typeof AssetsAPISchema>
export type Price = z.infer<typeof PriceSchema>
export type HistoricalPricesAPI = z.infer<typeof HistoricalPricesAPISchema>
export type Position = z.infer<typeof PositionSchema>
export type PortfolioAPI = z.infer<typeof PortfolioAPISchema>

