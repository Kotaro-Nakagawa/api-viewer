import AppCheckItem from './AppCheckItem'

export default function AppMethodsCheckList({
  setHasGet,
  setHasPost,
  setHasPut,
  setHasPatch,
  setHasDelete
}: {
  setHasGet: (newValue: boolean) => void
  setHasPost: (newValue: boolean) => void
  setHasPut: (newValue: boolean) => void
  setHasPatch: (newValue: boolean) => void
  setHasDelete: (newValue: boolean) => void
}): JSX.Element {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 7em)' }}>
      <AppCheckItem label="GET" currentCheckState={false} checkStateSetter={setHasGet} />
      <AppCheckItem label="POST" currentCheckState={false} checkStateSetter={setHasPost} />
      <AppCheckItem label="PUT" currentCheckState={false} checkStateSetter={setHasPut} />
      <AppCheckItem label="PATCH" currentCheckState={false} checkStateSetter={setHasPatch} />
      <AppCheckItem label="DELETE" currentCheckState={false} checkStateSetter={setHasDelete} />
    </div>
  )
}
