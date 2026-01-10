export class RateLimitError extends Error {
  status: number
  retryAfterSeconds?: number

  constructor(message = 'Rate limit reached', retryAfterSeconds?: number) {
    super(message)
    this.name = 'RateLimitError'
    this.status = 429
    this.retryAfterSeconds = retryAfterSeconds
  }
}

