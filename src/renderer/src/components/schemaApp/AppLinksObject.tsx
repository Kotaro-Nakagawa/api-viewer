function AppLinksObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>Links が object でない</div>
  if (data === null) return <div>Links が null</div>
  return <div></div>
}

export default AppLinksObject
