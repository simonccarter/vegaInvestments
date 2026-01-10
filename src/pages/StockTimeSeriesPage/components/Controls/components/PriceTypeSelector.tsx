import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import { priceTypes, type PriceType } from '@/models/stocks'
import { type Dispatch, type SetStateAction } from 'react'

type Props = {
  selectedPriceType: PriceType
  setSelectedPriceType: Dispatch<SetStateAction<PriceType>>
}

function PriceTypeSelector({ selectedPriceType, setSelectedPriceType }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="mb-1" htmlFor="price-type-selector">
        Price type
      </Label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            id="price-type-selector"
            variant="outline"
            className="w-full justify-start text-left font-normal"
            aria-label={`Price type selector. Current selection: ${selectedPriceType}`}
            aria-haspopup="listbox"
          >
            {selectedPriceType}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent role="listbox" aria-label="Price types">
          {priceTypes.map((priceType) => (
            <DropdownMenuItem
              key={priceType}
              role="option"
              aria-selected={priceType === selectedPriceType}
              onSelect={() => {
                setSelectedPriceType(priceType)
              }}
            >
              {priceType}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default PriceTypeSelector
