function AppContactObject({ data }: { data: unknown }): JSX.Element {
  if (data === undefined) return <div>Contact が存在しない</div>
  if (!(typeof data === 'object')) return <div>Contact が object でない</div>
  if (data === null) return <div>Contact が null</div>
  return <div></div>
}

export default AppContactObject
