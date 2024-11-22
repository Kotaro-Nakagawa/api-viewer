import AppLabel from '../common/AppLabel'
import AppSchemaObject from './AppSchemaObject'

function AppComponentsObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>components が object でない</div>
  if (data === null) return <div>components が null </div>
  const schemas =
    data['schemas'] && typeof data['schemas'] === 'object' ? data['schemas'] : undefined
  return (
    <div>
      <AppLabel value="schemas" />
      {schemas ? (
        Object.entries(schemas).map(([key, value]) => {
          return (
            <div id={`A-components-schemas-${key}`} key={key}>
              <AppLabel value={key} />
              <AppSchemaObject data={value}></AppSchemaObject>
            </div>
          )
        })
      ) : (
        <></>
      )}
    </div>
  )
}

export default AppComponentsObject
