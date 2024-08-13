import AppDirEnt from '@appType/AppDirEnt'
import AppButton from '@renderer/components/common/AppButton'

function FileItem({
  data,
  onClick
}: {
  data: AppDirEnt
  onClick: (path: string) => void
}): JSX.Element {
  return (
    <AppButton
      label={data.name}
      onClick={() => {
        onClick(data.path)
      }}
    ></AppButton>
  )
}

export default FileItem
