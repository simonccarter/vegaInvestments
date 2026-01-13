import { describe, expect, it } from 'vitest'
import { formatDateForAPI } from './dates'

describe('dates', () => {
  describe('formatDateForAPI', () => {
    it('should format a date in yyyy-MM-dd format', () => {
      const date = new Date(2024, 0, 15) // January 15, 2024
      const result = formatDateForAPI(date)
      expect(result).toBe('2024-01-15')
    })

    it('should format dates with single digit months and days with leading zeros', () => {
      const date = new Date(2024, 0, 5) // January 5, 2024
      const result = formatDateForAPI(date)
      expect(result).toBe('2024-01-05')
    })

    it('should format dates with double digit months and days', () => {
      const date = new Date(2024, 11, 25) // December 25, 2024
      const result = formatDateForAPI(date)
      expect(result).toBe('2024-12-25')
    })

    it('should handle leap year dates correctly', () => {
      const date = new Date(2024, 1, 29) // February 29, 2024 (leap year)
      const result = formatDateForAPI(date)
      expect(result).toBe('2024-02-29')
    })

    it('should format year boundaries correctly', () => {
      const newYear = new Date(2024, 0, 1) // January 1, 2024
      expect(formatDateForAPI(newYear)).toBe('2024-01-01')

      const yearEnd = new Date(2024, 11, 31) // December 31, 2024
      expect(formatDateForAPI(yearEnd)).toBe('2024-12-31')
    })

    it('should handle different years correctly', () => {
      const date2020 = new Date(2020, 5, 15)
      expect(formatDateForAPI(date2020)).toBe('2020-06-15')

      const date2030 = new Date(2030, 5, 15)
      expect(formatDateForAPI(date2030)).toBe('2030-06-15')
    })

    it('should format dates from different months correctly', () => {
      const january = new Date(2024, 0, 20)
      expect(formatDateForAPI(january)).toBe('2024-01-20')

      const june = new Date(2024, 5, 20)
      expect(formatDateForAPI(june)).toBe('2024-06-20')

      const september = new Date(2024, 8, 20)
      expect(formatDateForAPI(september)).toBe('2024-09-20')
    })

    it('should handle dates created from ISO strings', () => {
      const date = new Date('2024-03-15T10:30:00Z')
      const result = formatDateForAPI(date)
      expect(result).toBe('2024-03-15')
    })

    it('should handle dates created from timestamp', () => {
      const date = new Date(1700000000000) // A specific timestamp
      const result = formatDateForAPI(date)
      // Verify it's in the correct format (yyyy-MM-dd)
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    })
  })
})
