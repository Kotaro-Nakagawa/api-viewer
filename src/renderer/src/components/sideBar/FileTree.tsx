import AppDirEnt from '@appType/AppDirEnt'
import DirEntList from './fileTreeParts/DirEntList'

function FileTree({
  data,
  onFileSelect,
  onNewSchemaButton
}: {
  data: AppDirEnt
  onFileSelect: (path: string) => void
  onNewSchemaButton: (filePath: string) => void
}): JSX.Element {
  return (
    <div>
      <DirEntList
        data={data}
        onFileSelect={onFileSelect}
        onNewSchemaButton={onNewSchemaButton}
      ></DirEntList>
    </div>
  )
}

export default FileTree
