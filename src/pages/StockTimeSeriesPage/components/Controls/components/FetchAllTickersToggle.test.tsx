import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import FetchAllTickersToggle from './FetchAllTickersToggle'

describe('FetchAllTickersToggle', () => {
  it('should render with toggle disabled by default', () => {
    const setFetchAllTickers = vi.fn()
    render(
      <FetchAllTickersToggle fetchAllTickers={false} setFetchAllTickers={setFetchAllTickers} />,
    )

    // Check label is present
    expect(screen.getByLabelText(/fetch all tickers/i)).toBeInTheDocument()

    // Check toggle is not checked
    const toggle = screen.getByRole('switch', { name: /fetch all tickers toggle/i })
    expect(toggle).not.toBeChecked()

    // Check status text shows "Using hardcoded list"
    expect(screen.getByText('Using hardcoded list')).toBeInTheDocument()
  })

  it('should render with toggle enabled', () => {
    const setFetchAllTickers = vi.fn()
    render(<FetchAllTickersToggle fetchAllTickers={true} setFetchAllTickers={setFetchAllTickers} />)

    const toggle = screen.getByRole('switch')
    expect(toggle).toBeChecked()
    expect(screen.getByText('Using API data')).toBeInTheDocument()
  })

  it('should call setFetchAllTickers when toggle is clicked', async () => {
    const user = userEvent.setup()
    const setFetchAllTickers = vi.fn()

    render(
      <FetchAllTickersToggle fetchAllTickers={false} setFetchAllTickers={setFetchAllTickers} />,
    )

    const toggle = screen.getByRole('switch')
    await user.click(toggle)

    expect(setFetchAllTickers).toHaveBeenCalledTimes(1)
    expect(setFetchAllTickers).toHaveBeenCalledWith(true)
  })

  it('should call setFetchAllTickers with false when toggling off', async () => {
    const user = userEvent.setup()
    const setFetchAllTickers = vi.fn()

    render(<FetchAllTickersToggle fetchAllTickers={true} setFetchAllTickers={setFetchAllTickers} />)

    const toggle = screen.getByRole('switch')
    await user.click(toggle)

    expect(setFetchAllTickers).toHaveBeenCalledTimes(1)
    expect(setFetchAllTickers).toHaveBeenCalledWith(false)
  })

  it('should show loading state when isLoadingTickers is true', () => {
    const setFetchAllTickers = vi.fn()
    render(
      <FetchAllTickersToggle
        fetchAllTickers={true}
        setFetchAllTickers={setFetchAllTickers}
        isLoadingTickers={true}
      />,
    )

    expect(screen.getByText('Loading from API...')).toBeInTheDocument()

    // Check that loader icon is present (it has aria-hidden="true")
    const loader = screen.getByRole('status')
    expect(loader).toBeInTheDocument()
  })

  it('should show "Using API data" when enabled and not loading', () => {
    const setFetchAllTickers = vi.fn()
    render(
      <FetchAllTickersToggle
        fetchAllTickers={true}
        setFetchAllTickers={setFetchAllTickers}
        isLoadingTickers={false}
      />,
    )

    expect(screen.getByText('Using API data')).toBeInTheDocument()
    expect(screen.queryByText('Loading from API...')).not.toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    const setFetchAllTickers = vi.fn()
    render(
      <FetchAllTickersToggle fetchAllTickers={false} setFetchAllTickers={setFetchAllTickers} />,
    )

    const toggle = screen.getByRole('switch')
    expect(toggle).toHaveAttribute('aria-label')
    expect(toggle).toHaveAttribute('aria-describedby', 'fetch-all-tickers-status')

    // Check status region
    const status = screen.getByRole('status')
    expect(status).toHaveAttribute('aria-live', 'polite')
    expect(status).toHaveAttribute('id', 'fetch-all-tickers-status')
  })

  it('should update aria-label based on toggle state', () => {
    const setFetchAllTickers = vi.fn()
    const { rerender } = render(
      <FetchAllTickersToggle fetchAllTickers={false} setFetchAllTickers={setFetchAllTickers} />,
    )

    let toggle = screen.getByRole('switch')
    expect(toggle).toHaveAttribute('aria-label', expect.stringContaining('disabled'))

    rerender(
      <FetchAllTickersToggle fetchAllTickers={true} setFetchAllTickers={setFetchAllTickers} />,
    )

    toggle = screen.getByRole('switch')
    expect(toggle).toHaveAttribute('aria-label', expect.stringContaining('enabled'))
  })
})
