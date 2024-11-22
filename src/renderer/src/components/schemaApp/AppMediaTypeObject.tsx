import AppLabel from '../common/AppLabel'
import AppExampleObject from './AppExampleObject'
import AppExamplesObject from './AppExamplesObject'
import AppSchemaOrReferenceObject from './AppSchemaOrReferenceObject'

function AppMediaTypeObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>Media Type が object でない</div>
  if (data === null) return <div>Media Type が null</div>
  return (
    <div>
      <AppLabel value="schema"></AppLabel>
      <AppSchemaOrReferenceObject data={data['schema']} />
      <AppLabel value="example"></AppLabel>
      <AppExampleObject data={data['example']}></AppExampleObject>
      <AppLabel value="examples"></AppLabel>
      <AppExamplesObject data={data['examples']}></AppExamplesObject>
    </div>
  )
}

export default AppMediaTypeObject
