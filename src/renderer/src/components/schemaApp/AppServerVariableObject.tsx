function AppServerVariableObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>servervariable が object でない</div>
  return <div></div>
}

export default AppServerVariableObject
