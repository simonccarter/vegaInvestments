/**
 * Custom tooltip for the donut chart
 */
export function PieChartTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { name: string; value: number; quantity: number; price: number } }> }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-background border-border rounded-lg border p-3 shadow-md">
        <p className="font-semibold">{data.name}</p>
        <p className="text-sm text-muted-foreground">Value: ${data.value.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground">Quantity: {data.quantity}</p>
        <p className="text-sm text-muted-foreground">Price: ${data.price.toFixed(2)}</p>
      </div>
    )
  }
  return null
}