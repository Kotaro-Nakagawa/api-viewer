import { ServerVariableObject } from './ServerVariableType'

export type ServerObject = {
  url: string
  description?: string
  variables?: { [variable: string]: ServerVariableObject }
}
