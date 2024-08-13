function AppLicenseObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>license が object でない</div>
  return <div></div>
}

export default AppLicenseObject
