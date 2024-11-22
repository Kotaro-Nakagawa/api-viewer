import AppLabel from '@renderer/components/common/AppLabel'
import AppTextBox from '@renderer/components/common/AppTextbox'
import AppReferenceObject from '../AppReferenceObject'

function AppSchemaObjectReferenceRecord({
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
  const setName = (newValue: string): void => {
    onUpdateName(newValue)
  }
  const setRequired = (newValue: string): void => {
    onUpdateRequired(newValue === '✓')
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `${depth}% 6% 3em auto` }}>
      <div></div>
      {keyUpdatable ? (
        <AppTextBox
          data={recordKey}
          onUpdate={(value: string) => {
            setName(value)
          }}
        ></AppTextBox>
      ) : (
        <AppLabel value={recordKey}></AppLabel>
      )}
      <AppTextBox
        data={required ? '必須' : ''}
        onUpdate={(value: string) => {
          setRequired(value)
        }}
        proposer={() => ['必須', '']}
      ></AppTextBox>
      <AppReferenceObject data={data} expectedObjectType="JsonSchema" />
    </div>
  )
}

export default AppSchemaObjectReferenceRecord
