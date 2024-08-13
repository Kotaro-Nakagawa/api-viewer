function AppExamplesObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>examples が object でない</div>
  return <div></div>
}

export default AppExamplesObject
