import { Label } from '@/components/ui/label'
import { Loader } from '@/components/ui/loader'
import { Switch } from '@/components/ui/switch'

type Props = {
  fetchAllTickers: boolean
  setFetchAllTickers: (v: boolean) => void
  isLoadingTickers?: boolean
}

function FetchAllTickersToggle({
  fetchAllTickers,
  setFetchAllTickers,
  isLoadingTickers = false,
}: Props) {
  const statusText = fetchAllTickers
    ? isLoadingTickers
      ? 'Loading from API...'
      : 'Using API data'
    : 'Using hardcoded list'

  return (
    <div className="flex flex-col gap-1">
      <Label className="mb-1" htmlFor="fetch-all-tickers">
        Fetch all tickers
      </Label>
      <div className="flex items-center gap-2">
        <Switch
          checked={fetchAllTickers}
          onCheckedChange={setFetchAllTickers}
          id="fetch-all-tickers"
          aria-label={`Fetch all tickers toggle. Currently ${fetchAllTickers ? 'enabled' : 'disabled'}. ${statusText}`}
          aria-describedby="fetch-all-tickers-status"
        />
        <Label htmlFor="fetch-all-tickers" className="text-muted-foreground cursor-pointer text-xs">
          <div
            className="flex items-center gap-2"
            id="fetch-all-tickers-status"
            role="status"
            aria-live="polite"
          >
            {isLoadingTickers && <Loader size={14} aria-hidden="true" />}
            <span>{statusText}</span>
          </div>
        </Label>
      </div>
    </div>
  )
}
export default FetchAllTickersToggle
