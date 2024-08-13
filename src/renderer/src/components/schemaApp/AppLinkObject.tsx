function AppLinkObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>link が object でない</div>
  return <div></div>
}

export default AppLinkObject
