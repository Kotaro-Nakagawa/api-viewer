import { BaseJSONSchema } from './jsonCommmonSchema'

export interface BooleanTypeJsonSchema extends BaseJSONSchema {
  type: 'boolean'
  example: boolean
}
