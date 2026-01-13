/**
 * Custom tooltip for the donut chart
 */
export function PieChartTooltip({
  active,
  payload,
  totalValue,
}: {
  active?: boolean
  payload?: Array<{ payload: { name: string; value: number; quantity: number; price: number } }>
  totalValue?: number
}) {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    const percentage = totalValue && totalValue > 0 ? (data.value / totalValue) * 100 : 0
    return (
      <div className="bg-background border-border rounded-lg border p-3 shadow-md">
        <p className="font-semibold">{data.name}</p>
        <p className="text-muted-foreground text-sm">Value: ${data.value.toFixed(2)}</p>
        <p className="text-muted-foreground text-sm">Percentage: {percentage.toFixed(2)}%</p>
        <p className="text-muted-foreground text-sm">Quantity: {data.quantity}</p>
        <p className="text-muted-foreground text-sm">Price: ${data.price.toFixed(2)}</p>
      </div>
    )
  }
  return null
}
