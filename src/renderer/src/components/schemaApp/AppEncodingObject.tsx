function AppEncodingObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>Encoding が object でない</div>
  return <div></div>
}

export default AppEncodingObject
