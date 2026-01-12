import { z } from 'zod'

export const AssetSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  type: z.enum(['stock', 'crypto', 'fiat']),
})

export const AssetsSchema = z.array(AssetSchema)

export const PriceSchema = z.object({
  id: z.string().uuid(),
  asset: z.string(),
  price: z.number().int(),
})

export const PositionSchema = z.object({
  id: z.number().int(),
  asset: z.string().uuid(),
  quantity: z.number().int(),
  asOf: z.string().datetime(),
  price: z.number().int(),
})

export const PortfolioSchema = z.object({
  id: z.string().uuid(),
  asOf: z.string().datetime(),
  positions: z.array(PositionSchema),
})

// Export inferred types from schemas
export type Asset = z.infer<typeof AssetSchema>
export type Assets = z.infer<typeof AssetsSchema>
export type Price = z.infer<typeof PriceSchema>
export type Position = z.infer<typeof PositionSchema>
export type Portfolio = z.infer<typeof PortfolioSchema>

