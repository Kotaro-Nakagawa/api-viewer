function AppCallbacksObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>callbacks が object でない</div>
  return <div></div>
}

export default AppCallbacksObject
