function AppOAuthFlowsObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>auth flows が object でない</div>
  return <div></div>
}

export default AppOAuthFlowsObject
