import AppLabel from '../common/AppLabel'
import AppTextBox from '../common/AppTextbox'
import AppContentObject from './AppContentObject'
import AppHeadersObject from './AppHeadersObject'
import AppLinksObject from './AppLinksObject'

function AppResponseObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div> Response が object でない</div>
  if (data === null) return <div>Response が null</div>
  return (
    <div>
      <AppLabel value="description"></AppLabel>
      <AppTextBox
        data={data['description']}
        onUpdate={() => (value: string) => {
          data['description'] = value
        }}
      ></AppTextBox>
      <AppLabel value="headers"></AppLabel>
      <AppHeadersObject data={data['headers']}></AppHeadersObject>
      <AppLabel value="content"></AppLabel>
      <AppContentObject data={data['content']}></AppContentObject>
      <AppLabel value="links"></AppLabel>
      <AppLinksObject data={data['links']}></AppLinksObject>
    </div>
  )
}

export default AppResponseObject
