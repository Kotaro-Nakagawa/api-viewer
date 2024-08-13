function AppExampleObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>example が object でない</div>
  if (data === null) return <div>example が null</div>
  return <div></div>
}

export default AppExampleObject
