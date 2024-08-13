import { OAuthFlowObject } from './OAuthFlowType'

export type OAuthFlowsObject = {
  implicit?: OAuthFlowObject
  password?: OAuthFlowObject
  clientCredentials?: OAuthFlowObject
  authorizationCode?: OAuthFlowObject
}
