function AppButton({ label, onClick }: { label: string; onClick: () => void }): JSX.Element {
  return (
    <div className="app-button" onClick={onClick}>
      {label}
    </div>
  )
}

export default AppButton
