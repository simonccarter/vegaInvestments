import type { ZodError } from 'zod'

export class ValidationError extends Error {
  zodError: ZodError
  url?: string

  constructor(message: string, zodError: ZodError, url?: string) {
    super(message)
    this.name = 'ValidationError'
    this.zodError = zodError
    this.url = url
  }

  /**
   * Formats Zod validation errors into a user-friendly message
   */
  getFormattedMessage(): string {
    const issues = this.zodError.issues
    if (issues.length === 0) {
      return this.message
    }

    const issueMessages = issues
      .map((issue) => {
        const path = issue.path.join('.')
        return path ? `${path}: ${issue.message}` : issue.message
      })
      .join('; ')

    return `${this.message}: ${issueMessages}`
  }
}

