function AppXMLObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>xml が object でない</div>
  return <div></div>
}

export default AppXMLObject
