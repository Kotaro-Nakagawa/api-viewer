import AppTextBox from '../common/AppTextbox'
import AppInfoObject from './AppInfoObject'
import AppPathsObject from './AppPathsObject'
import AppServersObject from './AppServersObject'

const hasjsonSchemaDialect = (obj: object): obj is { jsonSchemaDialect: string } =>
  'jsonSchemaDialect' in obj
const hasServers = (obj: object): obj is { servers: object } => 'servers' in obj
const hasPaths = (obj: object): obj is { paths: object } => 'paths' in obj
const hasWebhooks = (obj: object): obj is { webhooks: object } => 'webhooks' in obj
const hasComponents = (obj: object): obj is { components: object[] } => 'components' in obj
const hasSecurity = (obj: object): obj is { security: object } => 'security' in obj
const hasTags = (obj: object): obj is { security: object[] } => 'tags' in obj
const hasexternalDocs = (obj: object): obj is { externalDocs: object } => 'externalDocs' in obj

function AppOpenAPIObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>openapi が object でない</div>
  if (data === null) return <div>data is null</div>
  if (!('openapi' in data)) return <div>openapi is required</div> // openAPI 関係ない yaml を開いている可能性があるので、ここだけは必須の判定、
  if (!(typeof data.openapi === 'string')) return <div>openapi must be string</div>

  return (
    <div id={'schema-editor'} style={{ minHeight: '200%' }}>
      <h1>OpenAPI</h1>
      openAPI
      <AppTextBox
        data={data.openapi}
        onUpdate={(value: string) => {
          data.openapi = value
        }}
      ></AppTextBox>
      <h2>info</h2>
      <AppInfoObject data={data['info']} />
      <h2>JsonSchemaDialect</h2>
      <AppTextBox
        data={hasjsonSchemaDialect(data) ? data.jsonSchemaDialect : ''}
        onUpdate={(value: string) => {
          data['jsonSchemaDialect'] = value
        }}
      ></AppTextBox>
      <h2>servers</h2>
      <div>
        <AppServersObject data={!hasServers(data) ? [] : data.servers}></AppServersObject>
      </div>
      <h2>paths</h2>
      {hasPaths(data) ? (
        <AppPathsObject data={data.paths}></AppPathsObject>
      ) : (
        <div>path がありません</div>
      )}
      <h2>webhooks</h2>
      {hasWebhooks(data) ? <div>webhook 未実装</div> : <div>webhooks がありません</div>}
      <h2>components</h2>
      {hasComponents(data) ? <div>components 未実装</div> : <div>components がありません</div>}
      <h2>security</h2>
      {hasSecurity(data) ? <div>security 未実装</div> : <div>security がありません</div>}
      <h2>tags</h2>
      {hasTags(data) ? <div>to be implemented</div> : <div>tags がありません</div>}
      <h2>externalDocs</h2>
      {hasexternalDocs(data) ? <div>to be implemented</div> : <div>externalDocs がありません</div>}
    </div>
  )
}

export default AppOpenAPIObject
