import PortfolioChart from './components/PortfolioChart/PortfolioChart'
import PositionsTable from './components/PositionsTable/PositionsTable'
import HistoricalChart from './components/HistoricalChart/HistoricalChart'
import { PageContainer } from '@/components/ui/PageContainer'

export default function VegaDashboard() {
  return (
    <PageContainer>
      <h1 className="mb-6 text-3xl font-bold">Vega Dashboard</h1>
      <div className="grid gap-4 grid-cols-[1fr_2fr]">
        <PortfolioChart />
        <HistoricalChart />
        <div className="col-span-2">
        <PositionsTable />
        </div>
      </div>

    </PageContainer>
  )
}

