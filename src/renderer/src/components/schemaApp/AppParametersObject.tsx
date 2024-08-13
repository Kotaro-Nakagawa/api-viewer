import AppLabel from '../common/AppLabel'
import AppParameterObject from './AppParameterObject'
import AppParameterObjectHeader from './AppParametersParts/AppParameterObjectHeader'

function AppParametersObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>parameters が object でない</div>
  if (!Array.isArray(data)) return <div>paraemters が array でない</div>
  return (
    <div id={'parameters'}>
      <AppLabel value={'Parameters'}></AppLabel>
      <AppParameterObjectHeader></AppParameterObjectHeader>
      {data.map((d, i) => {
        return <AppParameterObject key={i} data={d}></AppParameterObject>
      })}
    </div>
  )
}
export default AppParametersObject
