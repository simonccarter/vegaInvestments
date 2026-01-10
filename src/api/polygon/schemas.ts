import { z } from 'zod'

export const AggTickerResultSchema = z.object({
  /** Close price */
  c: z.number(),
  /** High price */
  h: z.number(),
  /** Lowest price in given time range */
  l: z.number(),
  /** Open price */
  o: z.number(),
  /** unix millisecond timestamp for start of aggregate window */
  t: z.number(),
  /** Trading volume */
  v: z.number(),
  /** # of transactions in period */
  n: z.number().optional(),
  vw: z.number().optional(),
  /** Aggregate for OTC ticker */
  otc: z.boolean().optional(),
})

export const AggTickerResponseSchema = z.object({
  adjusted: z.boolean(),
  next_url: z.string().nullable().optional(),
  /** Number of aggregate used to generate the response */
  queryCount: z.number(),
  request_id: z.string(),
  results: z.array(AggTickerResultSchema),
  resultsCount: z.number(),
  status: z.string(),
  ticker: z.string(),
})

export const TickerSchema = z.object({
  ticker: z.string(),
  name: z.string(),
  market: z.enum(['stocks', 'crypto', 'fx', 'otc', 'indices']),
  locale: z.string(),
  primary_exchange: z.string(),
  /** Security type (CS = Common Stock, ETF = Exchange Traded Fund, etc.) */
  type: z.string(),
  active: z.boolean(),
  currency_name: z.string(),
  /** CIK (Central Index Key) https://www.sec.gov/search-filings/cik-lookup */
  cik: z.string().optional(),
  composite_figi: z.string().optional(),
  share_class_figi: z.string().optional(),
  last_updated_utc: z.string(),
})

export const TickersResponseSchema = z.object({
  results: z.array(TickerSchema),
  status: z.string(),
  request_id: z.string(),
  /** Number of results in this response */
  count: z.number(),
  next_url: z.string().nullable().optional(),
})

// Export inferred types from schemas
export type AggTickerResult = z.infer<typeof AggTickerResultSchema>
export type AggTickerResponse = z.infer<typeof AggTickerResponseSchema>
export type Ticker = z.infer<typeof TickerSchema>

