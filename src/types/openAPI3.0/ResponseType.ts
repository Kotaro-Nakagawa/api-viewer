import { HeaderObject } from './HeaderType'
import { LinkObject } from './LinkType'
import { MediaTypeObject } from './MediaTypeType'
import { ReferenceObject } from './ReferenceType'

export type ResponseObject = {
  description: string
  headers?: { [header: string]: HeaderObject | ReferenceObject }
  content?: { [media: string]: MediaTypeObject }
  links?: { [link: string]: LinkObject | ReferenceObject }
}
