import { type PortfolioAPI } from '@/api/vega/schemas'

/**
 * Mock portfolio data for development and testing
 */
export const mockPortfolio: PortfolioAPI = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  asOf: '2024-01-15T10:30:00Z',
  positions: [
    {
      id: 1,
      asset: 'a1b2c3d4-e5f6-4789-8bcd-ef1234567890',
      quantity: 100,
      asOf: '2024-01-15T10:30:00Z',
      price: 29032, // £290.32 in pence
    },
    {
      id: 2,
      asset: 'b2c3d4e5-f6a7-4890-9cde-f12345678901',
      quantity: 50,
      asOf: '2024-01-15T10:30:00Z',
      price: 15000, // £150.00 in pence
    },
    {
      id: 3,
      asset: 'c3d4e5f6-a7b8-4901-acde-123456789012',
      quantity: 200,
      asOf: '2024-01-15T10:30:00Z',
      price: 4500, // £45.00 in pence
    },
    {
      id: 4,
      asset: 'd4e5f6a7-b8c9-4012-bdef-234567890123',
      quantity: 75,
      asOf: '2024-01-15T10:30:00Z',
      price: 12500, // £125.00 in pence
    },
    {
      id: 5,
      asset: 'e5f6a7b8-c9d0-4123-8ef0-345678901234',
      quantity: 25,
      asOf: '2024-01-15T10:30:00Z',
      price: 32000, // £320.00 in pence
    },
  ],
}

