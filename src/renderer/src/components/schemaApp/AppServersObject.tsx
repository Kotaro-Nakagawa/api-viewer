import AppLabel from '../common/AppLabel'
import AppServerObject from './AppServerObject'

function AppServersObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>servers が object でない</div>
  if (!Array.isArray(data)) return <div>servers が array でない</div>
  if (data.length === 0) return <div>servers 情報がありません</div>
  return (
    <div>
      <AppLabel value="Servers"></AppLabel>
      {data.map((d, i) => {
        return <AppServerObject key={i} data={d}></AppServerObject>
      })}
    </div>
  )
}

export default AppServersObject
