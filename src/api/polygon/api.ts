/**
 * File contains basic wrappers to fix schema used for fetcherWithValidation so return type can be correctly inferred
 **/

import { fetcherWithValidation } from "./fetcher";
import { AggTickerResponseSchema, TickersResponseSchema } from "./schemas";

export const validatedTicketFetcher = async (url: string) => await fetcherWithValidation(url, TickersResponseSchema)
export const validatedAggFetcher = async (url: string) => await fetcherWithValidation(url, AggTickerResponseSchema)