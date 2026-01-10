import type { DateRange } from 'react-day-picker'
import { describe, expect, it } from 'vitest'
import { formatDate, getTimespanForDateRange, isSingleDay } from './dateUtils'

describe('dateUtils', () => {
  describe('formatDate', () => {
    it('should format a date to YYYY-MM-DD format', () => {
      const date = new Date('2025-01-15T10:30:00Z')
      expect(formatDate(date)).toBe('2025-01-15')
    })

    it('should handle dates at midnight', () => {
      const date = new Date('2025-12-31T00:00:00Z')
      expect(formatDate(date)).toBe('2025-12-31')
    })

    it('should handle dates at end of day', () => {
      const date = new Date('2025-06-15T23:59:59Z')
      expect(formatDate(date)).toBe('2025-06-15')
    })

    it('should handle leap year dates', () => {
      const date = new Date('2024-02-29T12:00:00Z')
      expect(formatDate(date)).toBe('2024-02-29')
    })
  })

  describe('isSingleDay', () => {
    it('should return true for the same day', () => {
      const from = new Date('2025-01-15T10:00:00Z')
      const to = new Date('2025-01-15T15:30:00Z')
      expect(isSingleDay(from, to)).toBe(true)
    })

    it('should return false for different days', () => {
      const from = new Date('2025-01-15T10:00:00Z')
      const to = new Date('2025-01-16T10:00:00Z')
      expect(isSingleDay(from, to)).toBe(false)
    })

    it('should return false for dates far apart', () => {
      const from = new Date('2025-01-15T10:00:00Z')
      const to = new Date('2025-12-31T10:00:00Z')
      expect(isSingleDay(from, to)).toBe(false)
    })

    it('should handle same day at different times', () => {
      const from = new Date('2025-01-15T00:00:00Z')
      const to = new Date('2025-01-15T23:59:59Z')
      expect(isSingleDay(from, to)).toBe(true)
    })
  })

  describe('getTimespanForDateRange', () => {
    it('should return "hour" for single day range', () => {
      const dateRange: DateRange = {
        from: new Date('2025-01-15T10:00:00Z'),
        to: new Date('2025-01-15T15:00:00Z'),
      }
      expect(getTimespanForDateRange(dateRange)).toBe('hour')
    })

    it('should return "day" for multi-day range', () => {
      const dateRange: DateRange = {
        from: new Date('2025-01-15T10:00:00Z'),
        to: new Date('2025-01-20T10:00:00Z'),
      }
      expect(getTimespanForDateRange(dateRange)).toBe('day')
    })

    it('should return "day" when dateRange is undefined', () => {
      expect(getTimespanForDateRange(undefined)).toBe('day')
    })

    it('should return "day" when from is missing', () => {
      const dateRange: DateRange = {
        from: undefined,
        to: new Date('2025-01-15T10:00:00Z'),
      }
      expect(getTimespanForDateRange(dateRange)).toBe('day')
    })

    it('should return "day" when to is missing', () => {
      const dateRange: DateRange = {
        from: new Date('2025-01-15T10:00:00Z'),
        to: undefined,
      }
      expect(getTimespanForDateRange(dateRange)).toBe('day')
    })

    it('should return "hour" for same day at different times', () => {
      const dateRange: DateRange = {
        from: new Date('2025-01-15T00:00:00Z'),
        to: new Date('2025-01-15T23:59:59Z'),
      }
      expect(getTimespanForDateRange(dateRange)).toBe('hour')
    })
  })
})

