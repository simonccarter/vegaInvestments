import { HttpError } from '@/api/errors/HttpError'
import { ValidationError } from '@/api/errors/ValidationError'
import { z } from 'zod'

async function fetcher<T = unknown>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    }
  })

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
