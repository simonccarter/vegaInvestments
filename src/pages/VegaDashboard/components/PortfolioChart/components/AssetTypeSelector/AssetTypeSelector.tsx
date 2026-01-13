import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon } from 'lucide-react'
import type { AssetTypeFilter } from '../../usePortfolioChart'
import { getDisplayLabel } from './utils'

interface AssetTypeSelectorProps {
  selectedAssetType: AssetTypeFilter
  onAssetTypeChange: (value: AssetTypeFilter) => void
  assetTypeOptions: AssetTypeFilter[]
}

export function AssetTypeSelector({
  selectedAssetType,
  onAssetTypeChange,
  assetTypeOptions,
}: AssetTypeSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          Filter: {getDisplayLabel(selectedAssetType)}
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={selectedAssetType}
          onValueChange={(value) => onAssetTypeChange(value as AssetTypeFilter)}
        >
          {assetTypeOptions.map((type) => (
            <DropdownMenuRadioItem key={type} value={type}>
              {getDisplayLabel(type)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
