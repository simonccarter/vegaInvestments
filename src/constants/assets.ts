import { type Asset } from '@/api/vega/schemas'

/**
 * Mock assets data for development and testing
 * Includes all assets referenced in portfolio positions plus many more
 */
export const mockAssets: Asset[] = [
  // Assets used in portfolio positions (must match UUIDs in portfolio.ts)
  {
    id: 'a1b2c3d4-e5f6-4789-8bcd-ef1234567890',
    name: 'Apple Inc.',
    type: 'stock',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-9cde-f12345678901',
    name: 'Microsoft Corporation',
    type: 'stock',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-acde-123456789012',
    name: 'Amazon.com Inc.',
    type: 'stock',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-bdef-234567890123',
    name: 'Alphabet Inc. (Google)',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8ef0-345678901234',
    name: 'Tesla Inc.',
    type: 'stock',
  },
  // Additional stocks
  {
    id: 'f6a7b8c9-d0e1-4234-9f01-456789012345',
    name: 'Meta Platforms Inc.',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'NVIDIA Corporation',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'JPMorgan Chase & Co.',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'Visa Inc.',
    type: 'stock',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'Johnson & Johnson',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'Walmart Inc.',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'Mastercard Inc.',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'Procter & Gamble Co.',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'Coca-Cola Company',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'Intel Corporation',
    type: 'stock',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'Cisco Systems Inc.',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'PepsiCo Inc.',
    type: 'stock',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'Verizon Communications Inc.',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'AT&T Inc.',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'Home Depot Inc.',
    type: 'stock',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'Nike Inc.',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'Adobe Inc.',
    type: 'stock',
  },
  // Cryptocurrencies
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'Bitcoin',
    type: 'crypto',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'Ethereum',
    type: 'crypto',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'Binance Coin',
    type: 'crypto',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'Solana',
    type: 'crypto',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'Cardano',
    type: 'crypto',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'XRP',
    type: 'crypto',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'Polkadot',
    type: 'crypto',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'Dogecoin',
    type: 'crypto',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'Avalanche',
    type: 'crypto',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'Chainlink',
    type: 'crypto',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'Polygon',
    type: 'crypto',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'Litecoin',
    type: 'crypto',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'Uniswap',
    type: 'crypto',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'Cosmos',
    type: 'crypto',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'Algorand',
    type: 'crypto',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'VeChain',
    type: 'crypto',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'Filecoin',
    type: 'crypto',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'The Graph',
    type: 'crypto',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'Aave',
    type: 'crypto',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'Maker',
    type: 'crypto',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'Compound',
    type: 'crypto',
  },
  // Fiat currencies
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'US Dollar',
    type: 'fiat',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'Euro',
    type: 'fiat',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'British Pound',
    type: 'fiat',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'Japanese Yen',
    type: 'fiat',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'Swiss Franc',
    type: 'fiat',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'Canadian Dollar',
    type: 'fiat',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'Australian Dollar',
    type: 'fiat',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'New Zealand Dollar',
    type: 'fiat',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'Swedish Krona',
    type: 'fiat',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'Norwegian Krone',
    type: 'fiat',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'Singapore Dollar',
    type: 'fiat',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'Hong Kong Dollar',
    type: 'fiat',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'Chinese Yuan',
    type: 'fiat',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'Indian Rupee',
    type: 'fiat',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'South Korean Won',
    type: 'fiat',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'Brazilian Real',
    type: 'fiat',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'Mexican Peso',
    type: 'fiat',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'South African Rand',
    type: 'fiat',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'Russian Ruble',
    type: 'fiat',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'Turkish Lira',
    type: 'fiat',
  },
  // More stocks for a comprehensive list
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'Netflix Inc.',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'Salesforce.com Inc.',
    type: 'stock',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'Oracle Corporation',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'IBM Corporation',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'Goldman Sachs Group Inc.',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'Morgan Stanley',
    type: 'stock',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'Bank of America Corp.',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'Wells Fargo & Company',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'Citigroup Inc.',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'Berkshire Hathaway Inc.',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'UnitedHealth Group Inc.',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'CVS Health Corporation',
    type: 'stock',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'Exxon Mobil Corporation',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'Chevron Corporation',
    type: 'stock',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'Boeing Company',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'General Electric Company',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: '3M Company',
    type: 'stock',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'Caterpillar Inc.',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'Deere & Company',
    type: 'stock',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'FedEx Corporation',
    type: 'stock',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'United Parcel Service Inc.',
    type: 'stock',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'Starbucks Corporation',
    type: 'stock',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'McDonald\'s Corporation',
    type: 'stock',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'Disney (The Walt Disney Company)',
    type: 'stock',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'Comcast Corporation',
    type: 'stock',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'ViacomCBS Inc.',
    type: 'stock',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'PayPal Holdings Inc.',
    type: 'stock',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'Square Inc.',
    type: 'stock',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'Shopify Inc.',
    type: 'stock',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'Zoom Video Communications Inc.',
    type: 'stock',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'Palantir Technologies Inc.',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'Snowflake Inc.',
    type: 'stock',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'Datadog Inc.',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'CrowdStrike Holdings Inc.',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'Okta Inc.',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'Zscaler Inc.',
    type: 'stock',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'Fortinet Inc.',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'Palo Alto Networks Inc.',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'Cloudflare Inc.',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'Fastly Inc.',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'Twilio Inc.',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'Slack Technologies Inc.',
    type: 'stock',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'Asana Inc.',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'Atlassian Corporation',
    type: 'stock',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'ServiceNow Inc.',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'Workday Inc.',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'Splunk Inc.',
    type: 'stock',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'Elastic N.V.',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'MongoDB Inc.',
    type: 'stock',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'Databricks Inc.',
    type: 'stock',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'Confluent Inc.',
    type: 'stock',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'GitLab Inc.',
    type: 'stock',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'GitHub (Microsoft)',
    type: 'stock',
  },
  // Additional technology stocks
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'Unity Software Inc.',
    type: 'stock',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'Roblox Corporation',
    type: 'stock',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'Roku Inc.',
    type: 'stock',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'Spotify Technology S.A.',
    type: 'stock',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'Snap Inc.',
    type: 'stock',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'Twitter Inc.',
    type: 'stock',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'Uber Technologies Inc.',
    type: 'stock',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'Lyft Inc.',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'DoorDash Inc.',
    type: 'stock',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'Airbnb Inc.',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'Booking Holdings Inc.',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'Expedia Group Inc.',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'Tripadvisor Inc.',
    type: 'stock',
  },
  // Financial services
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'American Express Company',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'Discover Financial Services',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'Capital One Financial Corp.',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'Charles Schwab Corporation',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'Interactive Brokers Group Inc.',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'BlackRock Inc.',
    type: 'stock',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'State Street Corporation',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'Northern Trust Corporation',
    type: 'stock',
  },
  // Healthcare and biotech
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'Pfizer Inc.',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'Merck & Co. Inc.',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'AbbVie Inc.',
    type: 'stock',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'Bristol-Myers Squibb Company',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'Gilead Sciences Inc.',
    type: 'stock',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'Amgen Inc.',
    type: 'stock',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'Biogen Inc.',
    type: 'stock',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'Regeneron Pharmaceuticals Inc.',
    type: 'stock',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'Moderna Inc.',
    type: 'stock',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'BioNTech SE',
    type: 'stock',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'Illumina Inc.',
    type: 'stock',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'Thermo Fisher Scientific Inc.',
    type: 'stock',
  },
  // Consumer goods
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'Costco Wholesale Corporation',
    type: 'stock',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'Target Corporation',
    type: 'stock',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'Lowe\'s Companies Inc.',
    type: 'stock',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'TJX Companies Inc.',
    type: 'stock',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'Ross Stores Inc.',
    type: 'stock',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'Dollar General Corporation',
    type: 'stock',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'Dollar Tree Inc.',
    type: 'stock',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'Kroger Company',
    type: 'stock',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'Walgreens Boots Alliance Inc.',
    type: 'stock',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'CVS Health Corporation',
    type: 'stock',
  },
  // Energy
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'ConocoPhillips',
    type: 'stock',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'Marathon Petroleum Corporation',
    type: 'stock',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'Valero Energy Corporation',
    type: 'stock',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'Phillips 66',
    type: 'stock',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'Kinder Morgan Inc.',
    type: 'stock',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'Enterprise Products Partners L.P.',
    type: 'stock',
  },
  // Utilities
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'NextEra Energy Inc.',
    type: 'stock',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'Duke Energy Corporation',
    type: 'stock',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'Southern Company',
    type: 'stock',
  },
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'Dominion Energy Inc.',
    type: 'stock',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'American Electric Power Company',
    type: 'stock',
  },
  // Industrial
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'Honeywell International Inc.',
    type: 'stock',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'Raytheon Technologies Corporation',
    type: 'stock',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'Lockheed Martin Corporation',
    type: 'stock',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'Northrop Grumman Corporation',
    type: 'stock',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'General Dynamics Corporation',
    type: 'stock',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'United Technologies Corporation',
    type: 'stock',
  },
  // More cryptocurrencies
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'Tether',
    type: 'crypto',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'USD Coin',
    type: 'crypto',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'Binance USD',
    type: 'crypto',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'Terra',
    type: 'crypto',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'Avalanche',
    type: 'crypto',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'Shiba Inu',
    type: 'crypto',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'TRON',
    type: 'crypto',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'Wrapped Bitcoin',
    type: 'crypto',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'Dai',
    type: 'crypto',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'Stellar',
    type: 'crypto',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'Monero',
    type: 'crypto',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'EOS',
    type: 'crypto',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'Tezos',
    type: 'crypto',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'Neo',
    type: 'crypto',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'IOTA',
    type: 'crypto',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'Dash',
    type: 'crypto',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'Zcash',
    type: 'crypto',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'Bitcoin Cash',
    type: 'crypto',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'Ethereum Classic',
    type: 'crypto',
  },
  {
    id: 'd6e7f8a9-b0c1-4234-b901-456789012345',
    name: 'Theta Network',
    type: 'crypto',
  },
  {
    id: 'e7f8a9b0-c1d2-4345-8012-567890123456',
    name: 'Fantom',
    type: 'crypto',
  },
  {
    id: 'f8a9b0c1-d2e3-4456-9123-678901234567',
    name: 'Hedera Hashgraph',
    type: 'crypto',
  },
  // More fiat currencies
  {
    id: 'a9b0c1d2-e3f4-4567-a234-789012345678',
    name: 'Polish Zloty',
    type: 'fiat',
  },
  {
    id: 'b0c1d2e3-f4a5-4678-b345-890123456789',
    name: 'Czech Koruna',
    type: 'fiat',
  },
  {
    id: 'c1d2e3f4-a5b6-4789-a456-901234567890',
    name: 'Hungarian Forint',
    type: 'fiat',
  },
  {
    id: 'd2e3f4a5-b6c7-4890-b567-012345678901',
    name: 'Romanian Leu',
    type: 'fiat',
  },
  {
    id: 'e3f4a5b6-c7d8-4901-8678-123456789012',
    name: 'Bulgarian Lev',
    type: 'fiat',
  },
  {
    id: 'f4a5b6c7-d8e9-4012-9789-234567890123',
    name: 'Croatian Kuna',
    type: 'fiat',
  },
  {
    id: 'a5b6c7d8-e9f0-4123-a890-345678901234',
    name: 'Danish Krone',
    type: 'fiat',
  },
  {
    id: 'b6c7d8e9-f0a1-4234-b901-456789012345',
    name: 'Icelandic Krona',
    type: 'fiat',
  },
  {
    id: 'c7d8e9f0-a1b2-4345-a012-567890123456',
    name: 'Thai Baht',
    type: 'fiat',
  },
  {
    id: 'd8e9f0a1-b2c3-4456-b123-678901234567',
    name: 'Malaysian Ringgit',
    type: 'fiat',
  },
  {
    id: 'e9f0a1b2-c3d4-4567-8234-789012345678',
    name: 'Indonesian Rupiah',
    type: 'fiat',
  },
  {
    id: 'f0a1b2c3-d4e5-4678-9345-890123456789',
    name: 'Philippine Peso',
    type: 'fiat',
  },
  {
    id: 'a1b2c3d4-e5f6-4789-a456-901234567890',
    name: 'Vietnamese Dong',
    type: 'fiat',
  },
  {
    id: 'b2c3d4e5-f6a7-4890-b567-012345678901',
    name: 'Taiwan Dollar',
    type: 'fiat',
  },
  {
    id: 'c3d4e5f6-a7b8-4901-a678-123456789012',
    name: 'Israeli Shekel',
    type: 'fiat',
  },
  {
    id: 'd4e5f6a7-b8c9-4012-b789-234567890123',
    name: 'Saudi Riyal',
    type: 'fiat',
  },
  {
    id: 'e5f6a7b8-c9d0-4123-8890-345678901234',
    name: 'UAE Dirham',
    type: 'fiat',
  },
  {
    id: 'f6a7b8c9-d0e1-4234-9901-456789012345',
    name: 'Qatari Riyal',
    type: 'fiat',
  },
  {
    id: 'a7b8c9d0-e1f2-4345-a012-567890123456',
    name: 'Kuwaiti Dinar',
    type: 'fiat',
  },
  {
    id: 'b8c9d0e1-f2a3-4456-b123-678901234567',
    name: 'Egyptian Pound',
    type: 'fiat',
  },
  {
    id: 'c9d0e1f2-a3b4-4567-a234-789012345678',
    name: 'South African Rand',
    type: 'fiat',
  },
  {
    id: 'd0e1f2a3-b4c5-4678-b345-890123456789',
    name: 'Nigerian Naira',
    type: 'fiat',
  },
  {
    id: 'e1f2a3b4-c5d6-4789-8456-901234567890',
    name: 'Kenyan Shilling',
    type: 'fiat',
  },
  {
    id: 'f2a3b4c5-d6e7-4890-9567-012345678901',
    name: 'Chilean Peso',
    type: 'fiat',
  },
  {
    id: 'a3b4c5d6-e7f8-4901-a678-123456789012',
    name: 'Argentine Peso',
    type: 'fiat',
  },
  {
    id: 'b4c5d6e7-f8a9-4012-b789-234567890123',
    name: 'Colombian Peso',
    type: 'fiat',
  },
  {
    id: 'c5d6e7f8-a9b0-4123-a890-345678901234',
    name: 'Peruvian Sol',
    type: 'fiat',
  },
]

