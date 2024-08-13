import AppTextBox from '../common/AppTextbox'

const hasTitle = (obj: object): obj is { title: string } => 'title' in obj
const hasSummary = (obj: object): obj is { summary: string } => 'summary' in obj
const hasDescription = (obj: object): obj is { description: string } => 'description' in obj
const hasTermsOfService = (obj: object): obj is { termsOfService: string } =>
  'termsOfService' in obj

function AppInfoObject({ data }: { data: unknown }): JSX.Element {
  if (data === undefined) return <div>info object is required</div>
  if (data === null) return <div>info は null 非許容です</div>
  if (!(typeof data === 'object')) return <div>info は key-value 形式で記述してください</div>
  return (
    <div className="app-info-object">
      title
      <AppTextBox
        data={hasTitle(data) ? data.title : ''}
        onUpdate={(value: string) => {
          data['title'] = value
        }}
      ></AppTextBox>
      summary
      <AppTextBox
        data={hasSummary(data) ? data.summary : ''}
        onUpdate={(value: string) => {
          data['summary'] = value
        }}
      ></AppTextBox>
      description
      <AppTextBox
        data={hasDescription(data) ? data.description : ''}
        onUpdate={(value: string) => {
          data['description'] = value
        }}
      ></AppTextBox>
      termsOfService
      <AppTextBox
        data={hasTermsOfService(data) ? data.termsOfService : ''}
        onUpdate={(value: string) => {
          data['termsOfService'] = value
        }}
      ></AppTextBox>
    </div>
  )
}

export default AppInfoObject
