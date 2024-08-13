import { OperationObject } from './OperationType'
import { ParameterObject } from './Parameter'
import { ReferenceObject } from './ReferenceType'
import { ServerObject } from './ServerType'

export type PathItemObject = {
  $ref?: string
  summary?: string
  description?: string
  get?: OperationObject
  put?: OperationObject
  post?: OperationObject
  delete?: OperationObject
  options?: OperationObject
  head?: OperationObject
  patch?: OperationObject
  trace?: OperationObject
  servers?: ServerObject[]
  parameters?: (ParameterObject | ReferenceObject)[]
}
