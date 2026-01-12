import PortfolioChart from './components/PortfolioChart/PortfolioChart'
import PositionsTable from './components/PositionsTable/PositionsTable'

export default function VegaDashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">Vega Dashboard</h1>
      <PortfolioChart />
      <PositionsTable />
    </div>
  )
}

