import { BaseJSONSchema } from './jsonCommmonSchema'

const jsonSchremaBuiltinFormatNames = ['float', 'double'] as const

export type jsonSchremaBuiltinFormats = (typeof jsonSchremaBuiltinFormatNames)[number]

export interface NumberTypeJsonSchema extends BaseJSONSchema {
  type: 'number'
  minimum?: number
  maximum?: number
  exclusiveMinimum?: boolean
  exclusiveMaximum?: boolean
  multipleOf?: number
  format?: jsonSchremaBuiltinFormats
  example: number
}
