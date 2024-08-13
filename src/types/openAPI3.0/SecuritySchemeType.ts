import { OAuthFlowsObject } from './OAuthFlowsType'

export type SecuritySchemeObject = {
  type: string
  description?: string
  name?: string
  in?: string
  scheme?: string
  bearerFormat?: string
  flows?: OAuthFlowsObject
  openIdConnectUrl?: string
}
