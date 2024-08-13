function AppOAuthFlowObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>oauth flow が object でない</div>
  return <div></div>
}

export default AppOAuthFlowObject
