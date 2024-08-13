const gridTemplate = Object.values({
  name: '10em',
  in: '5em',
  description: 'auto',
  required: '3em',
  deprecated: '3em',
  allowEmptyValue: '3em'
}).join(' ')

function AppParameterObjectHeader(): JSX.Element {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: gridTemplate }}>
      <div>{'name'}</div>
      <div>{'in'}</div>
      <div>{'description'}</div>
      <div>{'req.'}</div>
      <div>{'dep.'}</div>
      <div>{'emp.'}</div>
    </div>
  )
}

export default AppParameterObjectHeader
