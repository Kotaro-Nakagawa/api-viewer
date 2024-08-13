import { MediaTypeObject } from './MediaTypeType'

export type RequestBodyObject = {
  description?: string
  content: { [media: string]: MediaTypeObject }
  required?: boolean
}
