function AppCallbackObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>callback が object でない</div>
  return <div></div>
}

export default AppCallbackObject
