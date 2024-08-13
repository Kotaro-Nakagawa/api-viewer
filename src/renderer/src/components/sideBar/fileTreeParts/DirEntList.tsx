import AppDirEnt from '@appType/AppDirEnt'
import FileItem from './FileItem'
import FolderItem from './FolderItem'

function DirEntList({
  data,
  onFileSelect,
  onNewSchemaButton
}: {
  data: AppDirEnt
  onFileSelect: (path: string) => void
  onNewSchemaButton: (filePath: string) => void
}): JSX.Element {
  return (
    <>
      {((): JSX.Element[] => {
        if (data.children === undefined) return []
        return data.children.map((d, i) => {
          return d.type === 'file' ? (
            <FileItem key={i} data={d} onClick={onFileSelect}></FileItem>
          ) : (
            <FolderItem
              key={i}
              data={d}
              onFileSelect={onFileSelect}
              onNewSchemaButton={onNewSchemaButton}
            ></FolderItem>
          )
        })
      })()}
    </>
  )
}

export default DirEntList
