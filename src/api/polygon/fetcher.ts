import { HttpError } from '@/api/errors/HttpError'
import { RateLimitError } from '@/api/errors/RateLimitError'
import { ValidationError } from '@/api/errors/ValidationError'
import { z } from 'zod'

const VITE_POLYGON_API_KEY = import.meta.env.VITE_POLYGON_API_KEY as string

async function fetcher<T = unknown>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${VITE_POLYGON_API_KEY}`,
    }
  })

  if (res.status === 429) {
    throw new RateLimitError(
      'API rate limit reached. Please wait a minute before trying again.',
      60,
    )
  }

  if (!res.ok) {
    throw new HttpError(
      `Failed to fetch ${url}: ${res.status} ${res.statusText}`,
      res.status,
      res.statusText,
      url,
    )
  }

  const data = await res.json()
  return data as T
}


export async function fetcherWithValidation<TSchema extends z.ZodTypeAny>(
  url: string,
  schema: TSchema,
): Promise<z.infer<TSchema>> {
  const data = await fetcher<unknown>(url)

  const result = schema.safeParse(data)

  if (!result.success) {
    throw new ValidationError(
      `API response validation failed for ${url}`,
      result.error,
      url,
    )
  }

  return result.data as z.infer<TSchema>
}
