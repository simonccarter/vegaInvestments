import { type PieLabelRenderProps } from 'recharts'

const RADIAN = Math.PI / 180

/**
 * https://recharts.github.io/en-US/examples/PieChartWithCustomizedLabel/
 */
export function PercentageLabel({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const ncx = Number(cx)
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN)
  const ncy = Number(cy)
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN)

  const percentage = (percent ?? 1) * 100
  if (percentage < 5) {
    return null
  }

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${percentage.toFixed(0)}%`}
    </text>
  )
}
