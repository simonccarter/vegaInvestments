/**
 * Transforms portfolio positions into chart data format
 */
export function transformPortfolioData(
  positions: Array<{ id: number; asset: string; quantity: number; price: number }>,
  assetMap: Map<string, string>,
) {
  return positions.map((position) => {
    const value = (position.quantity * position.price) / 100 // Convert cents to dollars
    const assetName = assetMap.get(position.asset)
    if (!assetName) {
      console.warn(`Asset not found for ID: ${position.asset}`, { assetMapSize: assetMap.size })
    }
    return {
      id: position.id,
      name: assetName || position.asset,
      value,
      quantity: position.quantity,
      // TODO mark value as cents in schema
      price: position.price / 100, // Convert cents to dollars
    }
  })
}