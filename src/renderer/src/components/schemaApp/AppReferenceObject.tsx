function AppReferenceObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>reference が object でない</div>
  return <div></div>
}

export default AppReferenceObject
