import AppSchemaObjectHeader from './JsonSchemaObjectParts/AppSchemaObjectHeader'
import AppSchemaObjectSubTable from './JsonSchemaObjectParts/AppSchemaObjectSubTable'

function AppSchemaObject({ data }: { data: unknown }): JSX.Element {
  if (data === undefined) return <div>Schema が未定義です</div>
  if (!(typeof data === 'object')) return <div>Schema が object でない</div>
  return (
    <div>
      <AppSchemaObjectHeader />
      <AppSchemaObjectSubTable
        recordKey="<root>"
        data={data}
        onUpdateName={() => {
          return undefined
        }}
        keyUpdatable={false}
        required={true}
        onUpdateRequired={() => {
          return undefined
        }}
        depth={0}
      ></AppSchemaObjectSubTable>
    </div>
  )
}

export default AppSchemaObject
