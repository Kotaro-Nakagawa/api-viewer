import { BaseJSONSchema } from './jsonCommmonSchema'

export interface ObjectTypeJsonSchema extends BaseJSONSchema {
  type: 'object'
  properties: {
    [key: string]: BaseJSONSchema
  }
  required?: string[]
}
