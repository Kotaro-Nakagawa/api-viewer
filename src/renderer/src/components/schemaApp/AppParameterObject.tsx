import AppTextBox from '../common/AppTextbox'

const gridTemplate = Object.values({
  name: '10em',
  in: '5em',
  description: 'auto',
  required: '3em',
  deprecated: '3em',
  allowEmptyValue: '3em'
}).join(' ')

function AppParameterObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>parameter が object でない</div>
  if (data === null) return <div>paraemter が null</div>
  return (
    <div style={{ display: 'grid', gridTemplateColumns: gridTemplate }}>
      <AppTextBox data={data['name']} onUpdate={(v: string) => (data['name'] = v)}></AppTextBox>
      <AppTextBox data={data['in']} onUpdate={(v: string) => (data['in'] = v)}></AppTextBox>
      <AppTextBox
        data={data['description']}
        onUpdate={(v: string) => (data['description'] = v)}
      ></AppTextBox>
      <AppTextBox
        data={data['required']}
        onUpdate={(v: string) => (data['required'] = v)}
      ></AppTextBox>
      <AppTextBox
        data={data['deprecated']}
        onUpdate={(v: string) => (data['deprecated'] = v)}
      ></AppTextBox>
      <AppTextBox
        data={data['allowEmptyValue']}
        onUpdate={(v: string) => (data['allowEmptyValue'] = v)}
      ></AppTextBox>
    </div>
  )
}

export default AppParameterObject
