/**
 * Transforms portfolio positions into chart data format
 */
export function transformPortfolioData(positions: Array<{ id: number; quantity: number; price: number }>) {
  return positions.map((position) => {
    const value = (position.quantity * position.price) / 100 // Convert pence to pounds
    return {
      id: position.id,
      name: `Position ${position.id}`,
      value,
      quantity: position.quantity,
      // TODO mark value as pence in schema
      price: position.price / 100, // Convert pence to pounds
    }
  })
}