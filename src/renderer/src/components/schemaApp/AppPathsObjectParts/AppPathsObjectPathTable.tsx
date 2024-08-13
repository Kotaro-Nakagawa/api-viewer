import AppPathsObjectPathTableRecord from './AppPathsObjectPathTableRecord'

function AppPathsObjectPathTable({
  data,
  onUpdate,
  onChoicePath
}: {
  data: {
    path: string
    hasGet: boolean
    hasPost: boolean
    hasPut: boolean
    hasPatch: boolean
    hasDelete: boolean
  }[]
  onUpdate: (index: number, newValue: string) => void
  onChoicePath: (index: number) => void
}): JSX.Element {
  return (
    <div className="app-paths-object-path-table">
      {data.map((p, i) => (
        <AppPathsObjectPathTableRecord
          key={i}
          path={p.path}
          hasGet={p.hasGet}
          hasPost={p.hasPost}
          hasPut={p.hasPut}
          hasPatch={p.hasPatch}
          hasDelete={p.hasDelete}
          onSelect={() => {
            onChoicePath(i)
          }}
          onUpdate={(value: string) => {
            onUpdate(i, value)
          }}
        ></AppPathsObjectPathTableRecord>
      ))}
    </div>
  )
}

export default AppPathsObjectPathTable
