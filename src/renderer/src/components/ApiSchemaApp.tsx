import { useState } from 'react'
import AppOpenAPIObject from './schemaApp/AppOpenAPIObject'
import SideArea from './sideBar/SideArea'
import AppDirEnt from '@appType/AppDirEnt'
import AppAPIMaker from './quickMaker/AppAPIMaker'

const editorTypes = ['none', 'newFile', 'edit'] as const
type editorTypeType = (typeof editorTypes)[number]

function ApiSchemaApp(): JSX.Element {
  const [dirInfo, setDirInfo] = useState<AppDirEnt>({ name: '', path: '', type: 'directory' })
  const [currentFilePath, setCurrentFilePath] = useState('')
  const [openFile, setOpenFile] = useState({})
  const [currentEditorType, setCurrentEditorType] = useState<editorTypeType>('none')

  const openTargetFile = async (target: string): Promise<void> => {
    const fetchedFile = await window.electron.ipcRenderer.invoke('loadYaml', target)
    setCurrentFilePath(target)
    setOpenFile(fetchedFile)
    setCurrentEditorType('edit')
  }
  const onNewSchemaButton = async (dirPath: string): Promise<void> => {
    console.log(`to be implemented ${dirPath}`)
    setCurrentEditorType('newFile')
    setCurrentFilePath(dirPath)
  }
  const selectFolder = async (): Promise<void> => {
    const fetchedDir = await window.electron.ipcRenderer.invoke('openFolder')
    setDirInfo(fetchedDir)
  }
  const saveFile = async (): Promise<void> => {
    if (currentFilePath === '') return
    await window.electron.ipcRenderer.invoke('saveYaml', currentFilePath, openFile)
  }
  const createNewFile = async (fileName: string, data: object): Promise<void> => {
    console.log('↓↓↓ new file path is ↓↓↓↓')
    console.log(`${currentFilePath}${fileName}`)
    console.log('↑↑↑ new file path is ↑↑↑↑')
    setCurrentFilePath(`${currentFilePath}\\${fileName}`) // TODO 緊急回避(mac だとバグる)なので修正
    setOpenFile(data)
    await window.electron.ipcRenderer.invoke('createYaml', currentFilePath, fileName, data)
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '20em 1fr', height: '100%' }}>
      <SideArea
        data={dirInfo}
        onFileSelect={openTargetFile}
        onNewSchemaButton={onNewSchemaButton}
        selectFolder={selectFolder}
      ></SideArea>
      <div
        style={{ overflowY: 'scroll', height: '100vh' }}
        onKeyDown={(e) => {
          console.log('onKeyDown')
          console.log(e)
          if (e.ctrlKey && e.key === 's') {
            if (currentEditorType === 'edit' && currentFilePath !== '') {
              console.log('saving')
              saveFile()
            }
          }
        }}
      >
        {((): JSX.Element => {
          switch (currentEditorType) {
            case 'edit':
              return <AppOpenAPIObject data={openFile} />
            case 'newFile':
              return (
                <AppAPIMaker
                  onMakeFile={createNewFile}
                  onComplete={() => {
                    console.log('-- complete new file --')
                    console.log(currentFilePath)
                    console.log(openFile)
                    saveFile()
                    setCurrentEditorType('edit')
                    // TODO サイドメニューのリロード
                  }}
                />
              )
            default:
              return <div />
          }
        })()}
      </div>
    </div>
  )
}

export default ApiSchemaApp
