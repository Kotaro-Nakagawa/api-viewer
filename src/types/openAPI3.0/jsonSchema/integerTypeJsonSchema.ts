import { BaseJSONSchema } from './jsonCommmonSchema'

const jsonSchremaBuiltinFormatNames = ['int32', 'int64'] as const

export type jsonSchremaBuiltinFormats = (typeof jsonSchremaBuiltinFormatNames)[number]

export interface IntegerTypeJsonSchema extends BaseJSONSchema {
  type: 'integer'
  minimum?: number
  maximum?: number
  exclusiveMinimum?: boolean
  exclusiveMaximum?: boolean
  multipleOf?: number
  format?: jsonSchremaBuiltinFormats
  example: number
}
