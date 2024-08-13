function AppSecuritySchemeObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>security schema が object でない</div>
  return <div></div>
}

export default AppSecuritySchemeObject
