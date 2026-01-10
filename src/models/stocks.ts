export type Market = "stocks" | "crypto" | "fx" | "otc" | "indices"

export type StockSymbols = string;
export const priceTypes = ['open', 'close', 'high', 'low'] as const
export type PriceType= typeof priceTypes[number]
export type StockSymbol = {
  symbol: StockSymbols
  fullName: string;
}

export interface TimeSeriesPoint {
  timestamp: string; // or Date
  open: number;
  high: number;
  low: number;
  close: number;
}

export type StockTimeSeriesRow = {
  date: string // used by chart for view
} & Record<string, TimeSeriesPoint | string>
