import { mockAssets } from '@/api/vega/mocks/assets'
import { mockPortfolio } from '@/api/vega/mocks/portfolio'
import { type HistoricalPrices } from '@/api/vega/schemas'

/**
 * Generates a deterministic UUID v4-like string from a seed
 * This ensures the same asset+date combination always produces the same ID
 * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 * where x is any hexadecimal digit and y is one of 8, 9, A, or B
 */
function generateDeterministicUUID(seed: string): string {
  // Create multiple hashes from the seed for different parts
  let hash1 = 0
  let hash2 = 0
  let hash3 = 0
  let hash4 = 0

  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i)
    hash1 = ((hash1 << 5) - hash1) + char
    hash2 = ((hash2 << 7) - hash2) + char * 31
    hash3 = ((hash3 << 11) - hash3) + char * 97
    hash4 = ((hash4 << 13) - hash4) + char * 17
    // Convert to unsigned 32-bit integers
    hash1 = hash1 >>> 0
    hash2 = hash2 >>> 0
    hash3 = hash3 >>> 0
    hash4 = hash4 >>> 0
  }

  // Generate UUID v4 format
  // Segment 1: 8 hex digits
  const seg1 = hash1.toString(16).padStart(8, '0').substring(0, 8)

  // Segment 2: 4 hex digits
  const seg2 = hash2.toString(16).padStart(4, '0').substring(0, 4)

  // Segment 3: 4 hex digits, first must be 1-8, then '4' for version, then 2 more
  // Format: [1-8][4][0-9a-f][0-9a-f]
  const seg3First = (hash3 % 8) + 1 // 1-8
  const seg3Rest = hash3.toString(16).padStart(2, '0').substring(0, 2)
  const seg3 = `${seg3First}4${seg3Rest}`

  // Segment 4: 4 hex digits, first must be 8, 9, a, or b
  const variantChars = ['8', '9', 'a', 'b']
  const seg4First = variantChars[hash4 % 4]
  const seg4Rest = hash4.toString(16).padStart(3, '0').substring(0, 3)
  const seg4 = `${seg4First}${seg4Rest}`

  // Segment 5: 12 hex digits - combine all hashes
  const combinedHash = (hash1 ^ hash2 ^ hash3 ^ hash4) >>> 0
  const seg5 = combinedHash.toString(16).padStart(12, '0').substring(0, 12)

  return `${seg1}-${seg2}-${seg3}-${seg4}-${seg5}`
}

/**
 * Generates mock historical prices for assets
 * Prices are in cents (USD), not pence
 */
export function generateMockHistoricalPrices(
  assets: string[],
  from?: string,
  to?: string,
): HistoricalPrices {
  const prices: HistoricalPrices = []
  // Parse dates properly - if date string is in YYYY-MM-DD format, add time to avoid timezone issues
  let fromDate = from
    ? new Date(from.includes('T') ? from : `${from}T00:00:00Z`)
    : new Date('2023-01-01T00:00:00Z')
  let toDate = to
    ? new Date(to.includes('T') ? to : `${to}T23:59:59Z`)
    : new Date()

  // Normalize dates to UTC start/end of day
  fromDate = new Date(Date.UTC(fromDate.getUTCFullYear(), fromDate.getUTCMonth(), fromDate.getUTCDate(), 0, 0, 0, 0))
  toDate = new Date(Date.UTC(toDate.getUTCFullYear(), toDate.getUTCMonth(), toDate.getUTCDate(), 23, 59, 59, 999))

  // Generate prices for each day in the range
  const currentDate = new Date(fromDate)
  const assetIds = assets.length > 0 ? assets : mockAssets.map(a => a.id)

  // Derive base prices from portfolio positions (convert from pence to cents, approximate GBP to USD conversion ~1.2x)
  const basePrices: Record<string, number> = {}
  mockPortfolio.positions.forEach((position) => {
    // Convert from pence (GBP) to cents (USD) - approximate conversion
    // Using ~1.2x multiplier for GBP to USD conversion
    basePrices[position.asset] = Math.round(position.price * 1.2)
  })

  while (currentDate <= toDate) {
    const dateStr = currentDate.toISOString()

    // Add some random variation to prices (±5%)
    assetIds.forEach((assetId) => {
      const basePrice = basePrices[assetId] || 10000
      const variation = 1 + (Math.random() - 0.5) * 0.1 // ±5% variation
      const price = Math.round(basePrice * variation)

      // Add some trend over time (slight upward trend)
      const daysSinceStart = Math.floor((currentDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24))
      const trendMultiplier = 1 + (daysSinceStart * 0.0001) // Very slight upward trend
      const finalPrice = Math.round(price * trendMultiplier)

      // Generate deterministic UUID from asset ID and date
      const idSeed = `${assetId}-${dateStr}`
      const priceId = generateDeterministicUUID(idSeed)

      // Validate UUID format (should match Zod schema)
      const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
      if (!uuidRegex.test(priceId)) {
        console.error('Invalid UUID generated:', priceId, 'from seed:', idSeed)
        // Fallback to a valid UUID format
        throw new Error(`Failed to generate valid UUID for seed: ${idSeed}`)
      }

      prices.push({
        id: priceId,
        asset: assetId,
        price: finalPrice,
        asOf: dateStr,
      })
    })

    // Move to next day
    currentDate.setUTCDate(currentDate.getUTCDate() + 1)
    currentDate.setUTCHours(0, 0, 0, 0)
  }

  return prices
}

