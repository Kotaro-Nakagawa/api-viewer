function AppComponentsObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>components が object でない</div>
  return <div></div>
}

export default AppComponentsObject
