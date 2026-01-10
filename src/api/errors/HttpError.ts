export class HttpError extends Error {
  status: number
  statusText: string
  url?: string

  constructor(message: string, status: number, statusText: string, url?: string) {
    super(message)
    this.name = 'HttpError'
    this.status = status
    this.statusText = statusText
    this.url = url
  }
}

