import AppLabel from '@renderer/components/common/AppLabel'
import { columnTitles, columnWidthTemplateStr } from './columnsInfo'

function AppSchemaObjectHeader(): JSX.Element {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: columnWidthTemplateStr() }}>
      {columnTitles().map((c) => (
        <AppLabel key={c} value={c}></AppLabel>
      ))}
    </div>
  )
}

export default AppSchemaObjectHeader
