import { ServerObject } from './ServerType'

export type LinkObject = {
  operationRef?: string
  operationId?: string
  parameters?: { [key: string]: unknown }
  requestBody?: unknown
  description?: string
  server?: ServerObject
}
