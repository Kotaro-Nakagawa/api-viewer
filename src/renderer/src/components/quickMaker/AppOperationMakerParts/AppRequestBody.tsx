import schemaFromJson from '../functions/schemaFromJson'
import AppJsonBox from './AppJsonBox'

export default function AppRequestBody({
  onUpdate,
  onValidate
}: {
  onUpdate: (value: object) => void
  onValidate: (value: boolean) => void
}): JSX.Element {
  return (
    <div>
      <AppJsonBox
        onUpdate={(value: object) => {
          onUpdate(schemaFromJson(value))
        }}
        onValidate={onValidate}
      />
    </div>
  )
}
