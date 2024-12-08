import AppLabel from '@renderer/components/common/AppLabel'
import { columnTitles, columnWidthTemplateStr } from './columnsInfo'
import AppTableHeader from '@renderer/components/common/AppTableHeader'

function AppSchemaObjectHeader(): JSX.Element {
  return (
    <AppTableHeader columnTemplate={columnWidthTemplateStr()}>
      {columnTitles().map((c) => (
        <AppLabel key={c} value={c}></AppLabel>
      ))}
    </AppTableHeader>
  )
}

export default AppSchemaObjectHeader
