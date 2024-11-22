import AppButton from '../common/AppButton'

function AppReferenceObject({
  data,
  expectedObjectType
}: {
  data: unknown
  expectedObjectType: string
}): JSX.Element {
  if (!(typeof data === 'object')) return <div>reference が object でない</div>
  if (data === null) return <div>reference が null</div>
  if (data['$ref'] === undefined) return <div>$ref が無い</div>
  if (!(typeof data['$ref'] === 'string')) return <div>$ref が文字列でない</div>
  const refId = data['$ref'].replace('#', 'A').replaceAll('/', '-')
  if (expectedObjectType === 'JsonSchema') {
    return (
      <AppButton
        label={data['$ref']}
        onClick={() => {
          document.getElementById(refId)?.scrollIntoView()
        }}
      ></AppButton>
    )
  }
  return <div></div>
}

export default AppReferenceObject
