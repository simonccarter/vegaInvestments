import { Navbar } from '@/components/layout/navbar'
import { AppRoutes } from '@/routes/app-routes'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="focus:bg-primary focus:text-primary-foreground focus:ring-ring sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="mx-auto w-full max-w-7xl" tabIndex={-1}>
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
