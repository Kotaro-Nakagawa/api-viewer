import { DiscriminatorObject } from './DiscriminatorType'
import { ExternalDocumentationObject } from './ExternalDocumentationType'
import { ReferenceObject } from './ReferenceType'
import { XMLObject } from './XMLType'

export type SchemaObject = {
  title?: string
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: boolean
  minimum?: number
  exclusiveMinimum?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
  maxProperties?: number
  minProperties?: number
  required?: string[]
  enum?: unknown[]
  type?: string
  allOf?: (SchemaObject | ReferenceObject)[]
  oneOf?: (SchemaObject | ReferenceObject)[]
  anyOf?: (SchemaObject | ReferenceObject)[]
  not?: SchemaObject | ReferenceObject
  items?: SchemaObject | ReferenceObject
  properties?: { [name: string]: SchemaObject | ReferenceObject }
  additionalProperties?: boolean | SchemaObject | ReferenceObject
  description?: string
  format?: string
  default?: unknown
  nullable?: boolean
  discriminator?: DiscriminatorObject
  readOnly?: boolean
  writeOnly?: boolean
  xml?: XMLObject
  externalDocs?: ExternalDocumentationObject
  example?: unknown
  deprecated?: boolean
}
