import { ExampleObject } from './Example'
import { MediaTypeObject } from './MediaTypeType'
import { ReferenceObject } from './ReferenceType'
import { SchemaObject } from './SchemaType'

export type ParameterObject = {
  name: string
  in: string
  description?: string
  required?: boolean
  deprecated?: boolean
  allowEmptyValue?: boolean
  style?: string
  explode?: boolean
  allowReserved?: boolean
  schema?: SchemaObject | ReferenceObject
  example?: unknown
  examples?: { [media: string]: ExampleObject | ReferenceObject }
  content?: { [media: string]: MediaTypeObject }
}
