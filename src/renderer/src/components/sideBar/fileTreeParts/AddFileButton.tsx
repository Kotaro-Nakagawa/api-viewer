import AppButton from '@renderer/components/common/AppButton'

export default function AppFileButton({
  dirPath,
  onClick
}: {
  dirPath: string
  onClick: (path: string) => void
}): JSX.Element {
  return (
    <AppButton
      label="新規ファイル"
      onClick={() => {
        onClick(dirPath)
      }}
    />
  )
}
