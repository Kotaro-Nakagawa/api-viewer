import AppDirEnt from '@appType/AppDirEnt'
import FileTree from './FileTree'
import AppButton from '../common/AppButton'

function SideArea({
  data,
  onFileSelect,
  onNewSchemaButton,
  selectFolder
}: {
  data: AppDirEnt
  onFileSelect: (path: string) => void
  onNewSchemaButton: (filePath: string) => void
  selectFolder: () => void
}): JSX.Element {
  return (
    <div style={{ height: '100vh' }}>
      <AppButton label="フォルダを選択" onClick={selectFolder}></AppButton>
      <div style={{ overflowY: 'auto', height: '100%' }}>
        <FileTree
          data={data}
          onFileSelect={onFileSelect}
          onNewSchemaButton={onNewSchemaButton}
        ></FileTree>
      </div>
    </div>
  )
}

export default SideArea
