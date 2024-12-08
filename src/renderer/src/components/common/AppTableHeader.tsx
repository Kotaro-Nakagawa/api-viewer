import AppTableCell from './AppTableCell'

function AppTableHeader({
  children,
  columnTemplate
}: {
  children: JSX.Element[]
  columnTemplate: string
}): JSX.Element {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: columnTemplate }} className="table-row table-header-row">
      {children.map((c, i) => (
        <AppTableCell key={i}>{c}</AppTableCell>
      ))}
    </div>
  )
}

export default AppTableHeader
