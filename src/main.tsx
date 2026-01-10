// src/main.tsx
import { ErrorBoundary } from '@/components/errorBoundary'
import { queryClient } from '@/lib/query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement, {
  onCaughtError(error, errorInfo) {
    console.error('React caught error (boundary handled):', error, errorInfo)
  },
  onUncaughtError(error, errorInfo) {
    console.error('React uncaught error:', error, errorInfo)
  },
}).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
