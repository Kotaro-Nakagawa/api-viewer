import AppSchemaObjectRecord from './AppSchemaObjectRecord'
import AppSchemaObjectSubTable from './AppSchemaObjectSubTable'

const removeValueFromArray = (array: string[], value: string): void => {
  const index = array.indexOf(value)
  if (index > -1) {
    array.splice(index, 1)
  }
}

const recordOrSubTableFromKeyValue = (
  key: string,
  value: unknown,
  keyUpdatable: boolean,
  requiredKeys: string[]
): JSX.Element => {
  if (typeof value !== 'object') return <>要素が object 型ではありません</>
  if (value === null) return <>要素が null です</>
  if (!('type' in value)) return <>type は必須です</>
  if (value.type === 'object' || value.type === 'array') {
    return (
      <AppSchemaObjectSubTable
        key={key}
        recordKey={key}
        data={value}
        onUpdateName={(newvalue: string) => {
          value[newvalue] = value[key]
          delete value[key]
        }}
        keyUpdatable={keyUpdatable}
        required={requiredKeys.includes(key)}
        onUpdateRequired={(newValue: boolean) => {
          newValue ? requiredKeys.push(key) : removeValueFromArray(requiredKeys, key)
        }}
      ></AppSchemaObjectSubTable>
    )
  }
  return (
    <AppSchemaObjectRecord
      key={key}
      recordKey={key}
      data={value}
      onUpdateName={(newvalue: string) => {
        value[newvalue] = value[key]
        delete value[key]
      }}
      keyUpdatable={keyUpdatable}
      required={requiredKeys.includes(key)}
      onUpdateRequired={(newValue: boolean) => {
        newValue ? requiredKeys.push(key) : removeValueFromArray(requiredKeys, key)
      }}
    ></AppSchemaObjectRecord>
  )
}

function AppSchemaObjectList({
  data,
  keyUpdatable,
  requiredKeys
}: {
  data: unknown
  keyUpdatable: boolean
  requiredKeys: string[]
}): JSX.Element {
  // array の場合は items ってキーを付与して送ってもらう
  if (typeof data !== 'object') return <>変です</>
  if (data === null) return <>変です</>
  return (
    <>
      {Object.entries(data).map(([k, v]) => {
        return recordOrSubTableFromKeyValue(k, v, keyUpdatable, requiredKeys)
      })}
    </>
  )
}

export default AppSchemaObjectList
