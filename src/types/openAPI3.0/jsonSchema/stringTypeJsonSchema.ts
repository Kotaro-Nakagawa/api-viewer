import { BaseJSONSchema } from './jsonCommmonSchema'

const jsonSchemaBuiltinFormatNames = [
  'date-time',
  'time',
  'date',
  'duration',
  'email',
  'idn-email',
  'hostname',
  'idn-hostname',
  'ipv4',
  'ipv6',
  'uuid',
  'uri',
  'uri-reference',
  'iri',
  'iri-reference',
  'uri-template',
  'json-pointer',
  'relative-json-pointer',
  'regex'
] as const

type jsonSchemaBuiltinFormats = (typeof jsonSchemaBuiltinFormatNames)[number]

export interface StringTypeJsonSchema extends BaseJSONSchema {
  type: 'string'
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  format?: jsonSchemaBuiltinFormats
  example: string
}
