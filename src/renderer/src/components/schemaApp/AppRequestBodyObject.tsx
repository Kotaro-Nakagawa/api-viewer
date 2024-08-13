import AppTextBox from '../common/AppTextbox'
import AppContentObject from './AppContentObject'

function AppRequestBodyObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>request body が object でない</div>
  if (data === null) return <div>request body が null</div>
  return (
    <div>
      required
      <AppTextBox
        data={data['required']}
        onUpdate={(v: string) => {
          data['required'] = v
        }}
      ></AppTextBox>
      <AppTextBox
        data={data['description']}
        onUpdate={(value: string) => {
          data['operationId'] = value
        }}
      ></AppTextBox>
      <AppContentObject data={data['content']}></AppContentObject>
    </div>
  )
}

export default AppRequestBodyObject
