import { HeaderObject } from './HeaderType'
import { ReferenceObject } from './ReferenceType'

export type EncodingObject = {
  contentType?: string
  headers?: { [header: string]: HeaderObject | ReferenceObject }
  style?: string
  explode?: boolean
  allowReserved?: boolean
}
