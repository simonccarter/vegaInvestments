import { HttpError } from './HttpError'
import { RateLimitError } from './RateLimitError'
import { ValidationError } from './ValidationError'

/**
 * Formats error messages for display to users
 * Handles different error types with appropriate formatting
 */
export function getErrorMessage(error: Error): string {
  if (error instanceof RateLimitError) {
    return error.message
  }
  if (error instanceof HttpError) {
    return `${error.message}${error.status ? ` (Status: ${error.status})` : ''}`
  }
  if (error instanceof ValidationError) {
    return error.getFormattedMessage()
  }
  return error.message || 'An unknown error occurred'
}

