import { LoginPage } from '@/pages/LoginPage/LoginPage'
import StockTimeSeriesPage from '@/pages/StockTimeSeriesPage/StockTimeSeriesPage'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<StockTimeSeriesPage />} />
        {/* Add more protected routes here as children */}
        {/* Example:
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        */}
      </Route>
    </Routes>
  )
}
