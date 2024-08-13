import AppLabel from '../common/AppLabel'
import AppTextBox from '../common/AppTextbox'
import AppCallbacksObject from './AppCallbacksObject'
import AppExternalDocumentationObject from './AppExternalDocumentationObject'
import AppParametersObject from './AppParametersObject'
import AppRequestBodyObject from './AppRequestBodyObject'
import AppResponsesObject from './AppResponsesObject'
import AppSecurityObject from './AppSecurityObject'
import AppServersObject from './AppServersObject'

// deprecated は全体に影響があるような形でポンと置いて、deprecated にすると全体が暗くなるような処理にしたい

function AppOperationObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>operation が object でない</div>
  if (data === null) return <div>operation が null</div>
  console.log(data['operationId'])
  return (
    <>
      <AppLabel value={'summary'}></AppLabel>
      <AppTextBox
        data={data['summary']}
        onUpdate={(value: string) => {
          data['summary'] = value
        }}
      ></AppTextBox>
      <AppLabel value={'description'}></AppLabel>
      <AppTextBox
        data={data['description']}
        onUpdate={(value: string) => {
          data['summary'] = value
        }}
      ></AppTextBox>
      <AppExternalDocumentationObject data={data['externalDocs']}></AppExternalDocumentationObject>
      <AppLabel value={'operationId'}></AppLabel>
      <AppTextBox
        data={data['operationId']}
        onUpdate={(value: string) => {
          console.log(data['operationId'])
          data['operationId'] = value
        }}
      ></AppTextBox>
      <AppParametersObject data={data['parameters']}></AppParametersObject>
      <AppRequestBodyObject data={data['requestBody']}></AppRequestBodyObject>
      <AppResponsesObject data={data['responses']}></AppResponsesObject>
      <AppCallbacksObject data={data['callbacks']}></AppCallbacksObject>
      <AppTextBox
        data={data['deprecated']}
        onUpdate={(value: string) => {
          data['deprecated'] = value
        }}
      ></AppTextBox>
      <AppSecurityObject data={data['security']}></AppSecurityObject>
      <AppServersObject data={data['servers']}></AppServersObject>
    </>
  )
}

export default AppOperationObject
