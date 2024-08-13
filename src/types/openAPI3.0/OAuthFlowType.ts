export type OAuthFlowObject = {
  authorizationUrl?: string
  tokenUrl?: string
  refreshUrl?: string
  scopes: { [scope: string]: string }
}
