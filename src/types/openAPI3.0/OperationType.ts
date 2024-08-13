import { CallbackObject } from './CallbackType'
import { ExternalDocumentationObject } from './ExternalDocumentationType'
import { ParameterObject } from './Parameter'
import { ReferenceObject } from './ReferenceType'
import { RequestBodyObject } from './RequestBodyType'
import { ResponsesObject } from './ResponsesType'
import { SecurityRequirementObject } from './SecurityRequirementType'
import { ServerObject } from './ServerType'

export type OperationObject = {
  tags?: string[]
  summary?: string
  description?: string
  externalDocs?: ExternalDocumentationObject
  operationId?: string
  parameters?: (ParameterObject | ReferenceObject)[]
  requestBody?: RequestBodyObject | ReferenceObject
  responses: ResponsesObject
  callbacks?: { [callback: string]: CallbackObject | ReferenceObject }
  deprecated?: boolean
  security?: SecurityRequirementObject[]
  servers?: ServerObject[]
}
