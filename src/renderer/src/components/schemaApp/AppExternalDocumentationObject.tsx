function AppExternalDocumentationObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>externalDocs が object でない</div>
  return <div></div>
}

export default AppExternalDocumentationObject
