function AppHeaderObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>header が object でない</div>
  return <div></div>
}

export default AppHeaderObject
