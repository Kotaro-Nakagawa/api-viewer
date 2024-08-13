import { BaseJSONSchema } from './jsonCommmonSchema'

export interface ArrayTypeJsonSchema extends BaseJSONSchema {
  type: 'array'
  items: BaseJSONSchema
  minItems?: number
  maxItems?: number
  uniqueItems?: boolean
}
