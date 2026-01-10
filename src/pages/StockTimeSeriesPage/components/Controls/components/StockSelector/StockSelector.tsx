import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import type { StockSymbols } from '@/models/stocks'
import { SearchIcon } from 'lucide-react'
import { type Dispatch, type SetStateAction } from 'react'
import useStockSelector, { MAX_SELECTED_SYMBOLS, MIN_SEARCH_CHARS } from './useStockSelector'

type Props = {
  selectedSymbols: StockSymbols[]
  symbols: StockSymbols[]
  setSelectedSymbols: Dispatch<SetStateAction<StockSymbols[]>>
}

function StockSelector({ selectedSymbols, symbols, setSelectedSymbols }: Props) {
  const {
    searchQuery,
    filteredSymbols,
    shouldShowResults,
    hasResults,
    handleSearchChange,
    handleDropdownOpenChange,
    selectSymbol,
  } = useStockSelector({ symbols, setSelectedSymbols })

  return (
    <div className="flex flex-col gap-1">
      <Label className="mb-1" htmlFor="stock-selector">
        Stocks
      </Label>
      <DropdownMenu onOpenChange={handleDropdownOpenChange}>
        <DropdownMenuTrigger asChild>
          <Button
            id="stock-selector"
            variant="outline"
            className="w-full justify-start text-left font-normal"
            aria-label={`Stock selector. ${selectedSymbols.length > 0 ? `Selected: ${selectedSymbols.join(', ')}` : `No stocks selected. Select up to ${MAX_SELECTED_SYMBOLS} symbols`}`}
            aria-haspopup="listbox"
          >
            {selectedSymbols.length > 0
              ? selectedSymbols.join(', ')
              : `Select up to ${MAX_SELECTED_SYMBOLS} symbols`}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          role="listbox"
          aria-label="Stock symbols"
          className="w-(--radix-dropdown-menu-trigger-width)"
        >
          <div className="relative px-2 py-1.5">
            <SearchIcon className="text-muted-foreground absolute top-1/2 left-4 size-4 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search symbols..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border-input bg-background placeholder:text-muted-foreground focus:border-ring focus:ring-ring w-full rounded-md border px-8 py-1.5 text-sm outline-none focus:ring-1"
              aria-label="Search stock symbols"
              autoFocus
            />
            {!shouldShowResults && searchQuery.length > 0 && (
              <div className="text-muted-foreground mt-1 px-1 text-xs">
                Type at least {MIN_SEARCH_CHARS} characters to search
              </div>
            )}
          </div>
          <DropdownMenuSeparator />
          {shouldShowResults ? (
            <>
              {hasResults ? (
                <>
                  <div className="text-muted-foreground px-2 py-1 text-xs">
                    {filteredSymbols.length} result{filteredSymbols.length !== 1 ? 's' : ''}
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {filteredSymbols.map((symbol) => (
                      <DropdownMenuItem
                        key={symbol}
                        role="option"
                        aria-selected={selectedSymbols.includes(symbol)}
                        onSelect={() => {
                          selectSymbol(symbol)
                        }}
                      >
                        {symbol}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-muted-foreground px-2 py-4 text-center text-sm">
                  No results found
                </div>
              )}
            </>
          ) : (
            <div className="text-muted-foreground px-2 py-4 text-center text-sm">
              {searchQuery.length === 0
                ? 'Type at least 2 characters to search'
                : `Type ${MIN_SEARCH_CHARS - searchQuery.length} more character${MIN_SEARCH_CHARS - searchQuery.length !== 1 ? 's' : ''} to search`}
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default StockSelector
