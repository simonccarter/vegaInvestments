/**
 * Chart color utilities using CSS variables from the theme
 * These colors are defined in index.css and automatically adapt to light/dark mode
 *
 * Note: Recharts requires actual color values, not CSS variable references,
 * so we need to read the computed values from the DOM.
 */

/**
 * Gets the computed value of a CSS variable at runtime
 * This ensures we get the current theme value (light/dark mode aware)
 */
function getCSSVariable(variableName: string): string {
  if (typeof window === 'undefined') {
    // SSR fallback - return a default color
    return '#000000'
  }
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim()
}

/**
 * Gets all chart colors as an array
 * These will automatically adapt to the current theme (light/dark mode)
 */
export function getChartColors(): string[] {
  return [
    getCSSVariable('--chart-1'),
    getCSSVariable('--chart-2'),
    getCSSVariable('--chart-3'),
    getCSSVariable('--chart-4'),
    getCSSVariable('--chart-5'),
    getCSSVariable('--chart-6'),
    getCSSVariable('--chart-7'),
    getCSSVariable('--chart-8'),
    getCSSVariable('--chart-9'),
  ]
}

/**
 * Get a chart color by index (wraps around if index exceeds available colors)
 */
export function getChartColor(index: number): string {
  const colors = getChartColors()
  return colors[index % colors.length]
}

/**
 * Primary chart color (chart-1) - typically used for main data series
 */
export function getChartPrimaryColor(): string {
  return getCSSVariable('--chart-1')
}

