import { type Asset } from '@/api/vega/schemas'

/**
 * Mock assets data for development and testing
 * Includes all assets referenced in portfolio positions plus many more
 */
export const mockAssets: Asset[] = [
  // Assets used in portfolio positions (must match UUIDs in portfolio.ts)
  {
    id: 'a1b2c3d4-e5f6-4789-8bcd-ef1234567890',
    name: 'AAPL',
    type: 'stock',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-9cde-f12345678901',
    name: 'MSFT',
    type: 'stock',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-acde-123456789012',
    name: 'AMZN',
    type: 'stock',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-bdef-234567890123',
    name: 'GOOGL',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8ef0-345678901234',
    name: 'TSLA',
    type: 'stock',
  },
  // Additional stocks
  {
    id: 'f6a7b8c9-d0e1-4234-9f01-456789012345',
    name: 'META',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'NVDA',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'JPM',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'V',
    type: 'stock',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'JNJ',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'WMT',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'MA',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'PG',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'KO',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'INTC',
    type: 'stock',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'CSCO',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'PEP',
    type: 'stock',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'VZ',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'T',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'HD',
    type: 'stock',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'NKE',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'ADBE',
    type: 'stock',
  },
  // Cryptocurrencies
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'BTC',
    type: 'crypto',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'ETH',
    type: 'crypto',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'BNB',
    type: 'crypto',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'SOL',
    type: 'crypto',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'ADA',
    type: 'crypto',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'XRP',
    type: 'crypto',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'DOT',
    type: 'crypto',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'DOGE',
    type: 'crypto',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'AVAX',
    type: 'crypto',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'LINK',
    type: 'crypto',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'MATIC',
    type: 'crypto',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'LTC',
    type: 'crypto',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'UNI',
    type: 'crypto',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'ATOM',
    type: 'crypto',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'ALGO',
    type: 'crypto',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'VET',
    type: 'crypto',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'FIL',
    type: 'crypto',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'GRT',
    type: 'crypto',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'AAVE',
    type: 'crypto',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'MKR',
    type: 'crypto',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'COMP',
    type: 'crypto',
  },
  // Fiat currencies
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'USD',
    type: 'fiat',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'EUR',
    type: 'fiat',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'GBP',
    type: 'fiat',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'JPY',
    type: 'fiat',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'CHF',
    type: 'fiat',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'CAD',
    type: 'fiat',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'AUD',
    type: 'fiat',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'NZD',
    type: 'fiat',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'SEK',
    type: 'fiat',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'NOK',
    type: 'fiat',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'SGD',
    type: 'fiat',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'HKD',
    type: 'fiat',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'CNY',
    type: 'fiat',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'INR',
    type: 'fiat',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'KRW',
    type: 'fiat',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'BRL',
    type: 'fiat',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'MXN',
    type: 'fiat',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'ZAR',
    type: 'fiat',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'RUB',
    type: 'fiat',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'TRY',
    type: 'fiat',
  },
  // More stocks for a comprehensive list
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'NFLX',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'CRM',
    type: 'stock',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'ORCL',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'IBM',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'GS',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'MS',
    type: 'stock',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'BAC',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'WFC',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'C',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'BRK.B',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'UNH',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'CVS',
    type: 'stock',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'XOM',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'CVX',
    type: 'stock',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'BA',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'GE',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'MMM',
    type: 'stock',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'CAT',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'DE',
    type: 'stock',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'FDX',
    type: 'stock',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'UPS',
    type: 'stock',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'SBUX',
    type: 'stock',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'MCD',
    type: 'stock',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'DIS',
    type: 'stock',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'CMCSA',
    type: 'stock',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'VIAC',
    type: 'stock',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'PYPL',
    type: 'stock',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'SQ',
    type: 'stock',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'SHOP',
    type: 'stock',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'ZM',
    type: 'stock',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'PLTR',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'SNOW',
    type: 'stock',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'DDOG',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'CRWD',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'OKTA',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'ZS',
    type: 'stock',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'FTNT',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'PANW',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'NET',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'FSLY',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'TWLO',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'WORK',
    type: 'stock',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'ASAN',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'TEAM',
    type: 'stock',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'NOW',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'WDAY',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'SPLK',
    type: 'stock',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'ESTC',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'MDB',
    type: 'stock',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'DBRK',
    type: 'stock',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'CFLT',
    type: 'stock',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'GTLB',
    type: 'stock',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'MSFT',
    type: 'stock',
  },
  // Additional technology stocks
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'U',
    type: 'stock',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'RBLX',
    type: 'stock',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'ROKU',
    type: 'stock',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'SPOT',
    type: 'stock',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'SNAP',
    type: 'stock',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'TWTR',
    type: 'stock',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'UBER',
    type: 'stock',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'LYFT',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'DASH',
    type: 'stock',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'ABNB',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'BKNG',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'EXPE',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'TRIP',
    type: 'stock',
  },
  // Financial services
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'AXP',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'DFS',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'COF',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'SCHW',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'IBKR',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'BLK',
    type: 'stock',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'STT',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'NTRS',
    type: 'stock',
  },
  // Healthcare and biotech
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'PFE',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'MRK',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'ABBV',
    type: 'stock',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'BMY',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'GILD',
    type: 'stock',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'AMGN',
    type: 'stock',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'BIIB',
    type: 'stock',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'REGN',
    type: 'stock',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'MRNA',
    type: 'stock',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'BNTX',
    type: 'stock',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'ILMN',
    type: 'stock',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'TMO',
    type: 'stock',
  },
  // Consumer goods
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'COST',
    type: 'stock',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'TGT',
    type: 'stock',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'LOW',
    type: 'stock',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'TJX',
    type: 'stock',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'ROST',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'DG',
    type: 'stock',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'DLTR',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'KR',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'WBA',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'CVS',
    type: 'stock',
  },
  // Energy
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'COP',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'MPC',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'VLO',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'PSX',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'KMI',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'EPD',
    type: 'stock',
  },
  // Utilities
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'NEE',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'DUK',
    type: 'stock',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'SO',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'D',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'AEP',
    type: 'stock',
  },
  // Industrial
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'HON',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'RTX',
    type: 'stock',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'LMT',
    type: 'stock',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'NOC',
    type: 'stock',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'GD',
    type: 'stock',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'UTX',
    type: 'stock',
  },
  // More cryptocurrencies
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'USDT',
    type: 'crypto',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'USDC',
    type: 'crypto',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'BUSD',
    type: 'crypto',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'LUNA',
    type: 'crypto',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'AVAX',
    type: 'crypto',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'SHIB',
    type: 'crypto',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'TRX',
    type: 'crypto',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'WBTC',
    type: 'crypto',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'DAI',
    type: 'crypto',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'XLM',
    type: 'crypto',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'XMR',
    type: 'crypto',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'EOS',
    type: 'crypto',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'XTZ',
    type: 'crypto',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'NEO',
    type: 'crypto',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'IOTA',
    type: 'crypto',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'DASH',
    type: 'crypto',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'ZEC',
    type: 'crypto',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'BCH',
    type: 'crypto',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'ETC',
    type: 'crypto',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'THETA',
    type: 'crypto',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'FTM',
    type: 'crypto',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'HBAR',
    type: 'crypto',
  },
  // More fiat currencies
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'PLN',
    type: 'fiat',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'CZK',
    type: 'fiat',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'HUF',
    type: 'fiat',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'RON',
    type: 'fiat',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'BGN',
    type: 'fiat',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'HRK',
    type: 'fiat',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'DKK',
    type: 'fiat',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'ISK',
    type: 'fiat',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'THB',
    type: 'fiat',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'MYR',
    type: 'fiat',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'IDR',
    type: 'fiat',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'PHP',
    type: 'fiat',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'VND',
    type: 'fiat',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'TWD',
    type: 'fiat',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'ILS',
    type: 'fiat',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'SAR',
    type: 'fiat',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'AED',
    type: 'fiat',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'QAR',
    type: 'fiat',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'KWD',
    type: 'fiat',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'EGP',
    type: 'fiat',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'ZAR',
    type: 'fiat',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'NGN',
    type: 'fiat',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'KES',
    type: 'fiat',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'CLP',
    type: 'fiat',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'ARS',
    type: 'fiat',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'COP',
    type: 'fiat',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'PEN',
    type: 'fiat',
  },
]

