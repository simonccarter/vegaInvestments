// If present, we attempt to make real api calls, otherwise we backoff to using mocked data.
export const VEGA_API_URL = import.meta.env.VITE_VEGA_API_URL
export const VEGA_API_KEY = import.meta.env.VITE_VEGA_API_KEY

export const USE_MOCK_DATA = typeof VEGA_API_URL === 'string' && VEGA_API_URL.trim() !== ''

