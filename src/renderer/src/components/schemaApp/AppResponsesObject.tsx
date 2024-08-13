import AppLabel from '../common/AppLabel'
import AppResponseObject from './AppResponseObject'

function AppResponsesObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>Responses が object でない</div>
  if (data === null) return <div>Responses が null</div>
  return (
    <div id={'responses'}>
      {Object.entries(data).map(([k, d]) => {
        return (
          <>
            <AppLabel value={k}></AppLabel>
            <AppResponseObject data={d}></AppResponseObject>
          </>
        )
      })}
    </div>
  )
}

export default AppResponsesObject
