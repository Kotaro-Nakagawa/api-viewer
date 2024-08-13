import { EncodingObject } from './EncodingType'
import { ExampleObject } from './Example'
import { ReferenceObject } from './ReferenceType'
import { SchemaObject } from './SchemaType'

export type MediaTypeObject = {
  schema?: SchemaObject | ReferenceObject
  example?: unknown
  examples?: { [media: string]: ExampleObject | ReferenceObject }
  encoding?: { [property: string]: EncodingObject }
}
