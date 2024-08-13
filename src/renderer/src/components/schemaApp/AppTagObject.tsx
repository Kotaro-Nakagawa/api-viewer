function AppTagObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>tag が object でない</div>
  return <div></div>
}

export default AppTagObject
