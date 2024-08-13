export default function AppCheckItem({
  label,
  currentCheckState,
  checkStateSetter
}: {
  label: string
  currentCheckState: boolean
  checkStateSetter: (newState: boolean) => void
}): JSX.Element {
  return (
    <div
      onClick={() => {
        checkStateSetter(!currentCheckState)
      }}
      className={currentCheckState ? 'app-check-item-checked' : 'app-button'}
    >
      <div>{currentCheckState ? '✓' : '　'}</div>
      <div>{label}</div>
    </div>
  )
}
