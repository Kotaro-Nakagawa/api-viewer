import { ReferenceObject } from './ReferenceType'
import { ResponseObject } from './ResponseType'

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type StatusCode = `${Digit}${Digit}${Digit}`

export type ResponsesObject = {
  [statusCode in StatusCode]: ResponseObject | ReferenceObject
} & {
  default?: ResponseObject | ReferenceObject
}
