function AppSecurityObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>security が object でない</div>
  return <div></div>
}

export default AppSecurityObject
