import { ComponentsObject } from './ComponentsType'
import { ExternalDocumentationObject } from './ExternalDocumentationType'
import { InfoObject } from './InfoType'
import { PathsObject } from './PathsType'
import { SecurityRequirementObject } from './SecurityRequirementType'
import { ServerObject } from './ServerType'
import { TagObject } from './TagType'

export type OpenAPIObject = {
  openapi: string
  info: InfoObject
  servers?: ServerObject[]
  paths: PathsObject
  components?: ComponentsObject
  security?: SecurityRequirementObject[]
  tags?: TagObject[]
  externalDocs?: ExternalDocumentationObject
}
