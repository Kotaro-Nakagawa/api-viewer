function AppHeadersObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>headers が object でない</div>
  if (data === null) return <div>Headers が null</div>
  return <div></div>
}

export default AppHeadersObject
