import AppDirEnt from '@appType/AppDirEnt'
import DirEntList from './DirEntList'
import { useRef, useState } from 'react'
import AppButton from '@renderer/components/common/AppButton'

function FolderItem({
  data,
  onFileSelect,
  onNewSchemaButton
}: {
  data: AppDirEnt
  onFileSelect: (path: string) => void
  onNewSchemaButton: (filePath: string) => void
}): JSX.Element {
  const list = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(true)
  return (
    <>
      <AppButton
        label={data.name}
        onClick={() => {
          if (list.current === null) return
          list.current.style.display = isOpen ? 'none' : 'block'
          setIsOpen(!isOpen)
        }}
      ></AppButton>
      <div ref={list} className="indent-small">
        <DirEntList data={data} onFileSelect={onFileSelect} onNewSchemaButton={onNewSchemaButton} />
        <AppButton
          label="<追加>"
          onClick={() => {
            onNewSchemaButton(data.path)
          }}
        />
      </div>
    </>
  )
}

export default FolderItem
