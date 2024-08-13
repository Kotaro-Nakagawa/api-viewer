import ApiSchemaApp from './components/ApiSchemaApp'

function Dock(): JSX.Element {
  return (
    <div id={'dock'} style={{ height: '100%' }}>
      <div></div>
      <ApiSchemaApp></ApiSchemaApp>
    </div>
  )
}

export default Dock
