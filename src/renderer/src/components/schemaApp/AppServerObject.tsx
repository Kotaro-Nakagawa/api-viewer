function AppServerObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>server が object でない</div>
  return <div></div>
}

export default AppServerObject
