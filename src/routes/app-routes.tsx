import StockTimeSeriesPage from '@/pages/StockTimeSeriesPage/StockTimeSeriesPage'
import type { RouteObject } from 'react-router-dom'

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <StockTimeSeriesPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
]
