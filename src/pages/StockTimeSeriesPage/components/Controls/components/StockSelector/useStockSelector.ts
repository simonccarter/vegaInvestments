import useDebounce from '@/hooks/useDebounce'
import type { StockSymbols } from '@/models/stocks'
import { useMemo, useState, type Dispatch, type SetStateAction } from 'react'

export const MAX_SELECTED_SYMBOLS = 3
export const MIN_SEARCH_CHARS = 2
const DEBOUNCE_MS = 300

const useStockSelector = ({
  symbols,
  setSelectedSymbols,
}: {
  symbols: StockSymbols[]
  setSelectedSymbols: Dispatch<SetStateAction<StockSymbols[]>>
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedQuery = useDebounce(searchQuery, DEBOUNCE_MS)

  // Limited set of symbols matching the search query to display in dropdown
  const filteredSymbols = useMemo(() => {
    const query = debouncedQuery.trim().toLowerCase()

    // Only show filtered results when at least MIN_SEARCH_CHARS are input
    if (query.length < MIN_SEARCH_CHARS) {
      return []
    }

    return symbols.filter((symbol) => symbol.toLowerCase().includes(query))
  }, [symbols, debouncedQuery])

  const selectSymbol = (symbol: StockSymbols) => {
    setSelectedSymbols((previous) => {
      const exists = previous.includes(symbol)
      if (exists) {
        return previous.filter((s) => s !== symbol)
      }

      if (previous.length >= MAX_SELECTED_SYMBOLS) {
        return previous
      }

      return [...previous, symbol]
    })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleDropdownOpenChange = (open: boolean) => {
    if (!open) {
      // Reset search when dropdown closes
      setSearchQuery('')
    }
  }

  const shouldShowResults = debouncedQuery.trim().length >= MIN_SEARCH_CHARS
  const hasResults = filteredSymbols.length > 0

  return {
    searchQuery,
    filteredSymbols,
    shouldShowResults,
    hasResults,
    handleSearchChange,
    handleDropdownOpenChange,
    selectSymbol,
  }
}

export default useStockSelector
