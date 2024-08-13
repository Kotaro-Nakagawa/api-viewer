import { ExternalDocumentationObject } from './ExternalDocumentationType'

export type TagObject = {
  name: string
  description?: string
  externalDocs?: ExternalDocumentationObject
}
