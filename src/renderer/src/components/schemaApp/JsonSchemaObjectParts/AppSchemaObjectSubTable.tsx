import AppSchemaObjectList from './AppSchemaObjectList'
import AppSchemaObjectRecord from './AppSchemaObjectRecord'

const branchRecord = (
  data: unknown,
  recordKey: string,
  onUpdateName: (newValue: string) => void,
  keyUpdatable: boolean,
  required: boolean,
  onUpdateRequired: (newValue: boolean) => void,
  depth: number
): JSX.Element => {
  return (
    <AppSchemaObjectRecord
      data={data}
      recordKey={recordKey}
      onUpdateName={onUpdateName}
      keyUpdatable={keyUpdatable}
      required={required}
      onUpdateRequired={onUpdateRequired}
      depth={depth}
      availableTypes={['object', 'array']}
    ></AppSchemaObjectRecord>
  )
}

const propertiesOrItems = (data: { type: unknown }, depth: number): JSX.Element => {
  if (data.type === 'object') {
    if (!('properties' in data)) return <>object には properties が必須です</>
    if (!('required' in data)) data['required'] = []
    if (!('required' in data)) return <>予期せぬエラーです</>
    const isStringArray = (value: unknown): value is string[] => {
      if (!Array.isArray(value)) return false
      return value.every((v) => typeof v === 'string')
    }
    if (!isStringArray(data.required)) return <>required はキーの配列でなければいけません</>
    return (
      <AppSchemaObjectList
        data={data.properties}
        keyUpdatable={true}
        requiredKeys={data.required}
        depth={depth}
      ></AppSchemaObjectList>
    )
  }
  if (data.type === 'array') {
    if (!('items' in data)) return <>array には items が必須です</>
    return (
      <AppSchemaObjectList
        data={{ item: data.items }}
        keyUpdatable={false}
        requiredKeys={[]}
        depth={depth}
      ></AppSchemaObjectList>
    )
  }
  return <>object または array が必須</>
}

function AppSchemaObjectSubTable({
  recordKey,
  data,
  onUpdateName,
  keyUpdatable,
  required,
  onUpdateRequired,
  depth
}: {
  recordKey: string
  data: unknown
  onUpdateName: (newValue: string) => void
  keyUpdatable: boolean
  required: boolean
  onUpdateRequired: (newValue: boolean) => void
  depth: number
}): JSX.Element {
  if (typeof data !== 'object') return <>schema が object でない</>
  if (data === null) return <>schema が null</>
  if (!('type' in data)) return <>schema の必須パラメータ type がありません</>

  return (
    <>
      {branchRecord(data, recordKey, onUpdateName, keyUpdatable, required, onUpdateRequired, depth)}
      {propertiesOrItems(data, depth + 1)}
    </>
  )
}

export default AppSchemaObjectSubTable
