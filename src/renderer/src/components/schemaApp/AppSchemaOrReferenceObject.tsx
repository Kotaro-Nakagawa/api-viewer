import AppReferenceObject from './AppReferenceObject'
import AppSchemaObject from './AppSchemaObject'

function AppSchemaOrReferenceObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>schema|reference が object でない</div>
  if (data === null) return <div>schema|reference が null</div>
  if (typeof data['$ref'] === 'string')
    return <AppReferenceObject data={data} expectedObjectType="JsonSchema"></AppReferenceObject>
  return <AppSchemaObject data={data}></AppSchemaObject>
}

export default AppSchemaOrReferenceObject
