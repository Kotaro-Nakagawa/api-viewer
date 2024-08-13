function AppSecurityRequirementObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>securityrequired が object でない</div>
  return <div></div>
}

export default AppSecurityRequirementObject
