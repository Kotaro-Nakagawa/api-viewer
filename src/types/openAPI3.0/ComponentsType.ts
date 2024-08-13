import { CallbackObject } from './CallbackType'
import { ExampleObject } from './Example'
import { HeaderObject } from './HeaderType'
import { LinkObject } from './LinkType'
import { ParameterObject } from './Parameter'
import { ReferenceObject } from './ReferenceType'
import { RequestBodyObject } from './RequestBodyType'
import { ResponseObject } from './ResponseType'
import { SchemaObject } from './SchemaType'
import { SecuritySchemeObject } from './SecuritySchemeType'

export type ComponentsObject = {
  schemas?: { [key: string]: SchemaObject | ReferenceObject }
  responses?: { [key: string]: ResponseObject | ReferenceObject }
  parameters?: { [key: string]: ParameterObject | ReferenceObject }
  examples?: { [key: string]: ExampleObject | ReferenceObject }
  requestBodies?: { [key: string]: RequestBodyObject | ReferenceObject }
  headers?: { [key: string]: HeaderObject | ReferenceObject }
  securitySchemes?: { [key: string]: SecuritySchemeObject | ReferenceObject }
  links?: { [key: string]: LinkObject | ReferenceObject }
  callbacks?: { [key: string]: CallbackObject | ReferenceObject }
}
