import { type PortfolioAPI } from '@/api/vega/schemas'

/**
 * Mock portfolio data for development and testing
 */
export const mockPortfolio: PortfolioAPI = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  asOf: '2024-01-15T10:30:00Z',
  positions: [
    // Stocks
    {
      id: 1,
      asset: 'a1b2c3d4-e5f6-4789-8bcd-ef1234567890', // AAPL
      quantity: 100,
      asOf: '2024-01-15T10:30:00Z',
      price: 29032, // £290.32 in pence
    },
    {
      id: 2,
      asset: 'b2c3d4e5-f6a7-4890-9cde-f12345678901', // MSFT
      quantity: 50,
      asOf: '2024-01-15T10:30:00Z',
      price: 15000, // £150.00 in pence
    },
    {
      id: 3,
      asset: 'c3d4e5f6-a7b8-4901-acde-123456789012', // AMZN
      quantity: 200,
      asOf: '2024-01-15T10:30:00Z',
      price: 4500, // £45.00 in pence
    },
    // Cryptocurrencies
    {
      id: 4,
      asset: 'e3f4a5b6-c7d8-4901-8678-123456789012', // BTC
      quantity: 2,
      asOf: '2024-01-15T10:30:00Z',
      price: 42500000, // £425,000.00 in pence
    },
    {
      id: 5,
      asset: 'f4a5b6c7-d8e9-4012-9789-234567890123', // ETH
      quantity: 10,
      asOf: '2024-01-15T10:30:00Z',
      price: 2850000, // £28,500.00 in pence
    },
    // Fiat currencies
    {
      id: 6,
      asset: '66458dcc-cc63-490a-a5cf-83a203f8277e', // USD
      quantity: 50000,
      asOf: '2024-01-15T10:30:00Z',
      price: 79, // £0.79 in pence (USD to GBP rate)
    },
    {
      id: 7,
      asset: '4610565d-e173-4311-842a-31274993bca5', // EUR
      quantity: 30000,
      asOf: '2024-01-15T10:30:00Z',
      price: 86, // £0.86 in pence (EUR to GBP rate)
    },
  ],
}

