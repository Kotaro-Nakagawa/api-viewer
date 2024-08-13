function AppDiscriminatorObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>Discriminator が object でない</div>
  return <div></div>
}

export default AppDiscriminatorObject
