import { PageContainer } from '@/components/ui/PageContainer'
import HistoricalChart from './components/HistoricalChart/HistoricalChart'
import PortfolioChart from './components/PortfolioChart/PortfolioChart'
import PositionsTable from './components/PositionsTable/PositionsTable'

export default function VegaDashboard() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr]">
        <PortfolioChart />
        <HistoricalChart />
        <div className="col-span-1 md:col-span-2">
          <PositionsTable />
        </div>
      </div>
    </PageContainer>
  )
}
