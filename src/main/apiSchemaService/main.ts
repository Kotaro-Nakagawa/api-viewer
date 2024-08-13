import AppDirEnt from '@appType/AppDirEnt'
import FileDialogue from '../ioUtil/fileDialogue'
import FileManager from '../ioUtil/fileManager'
import yaml from 'js-yaml'
import DirTree from '../ioUtil/dirTree'
import path from 'path'

class APISchemaService {
  static currentFolder: string
  static async openAPISchema(): Promise<object | ''> {
    const openResult = await FileDialogue.openFile(['yaml'])
    if (openResult.filePaths.length === 0) return ''
    const openApi = yaml.load(FileManager.readFile(openResult.filePaths[0]) || '')
    if (openApi === null) return ''
    if (!(typeof openApi === 'object')) return ''
    return openApi
  }
  static async openSchemaDirectory(): Promise<AppDirEnt | ''> {
    const openResult = await FileDialogue.openDirectory()
    if (openResult.filePaths.length === 0) return ''
    APISchemaService.currentFolder = openResult.filePaths[0]
    return DirTree.from(openResult.filePaths[0])
  }

  static async openAPISchemaOfPath(path: string): Promise<object | ''> {
    const openApi = yaml.load(FileManager.readFile(path) || '')
    const model: object = openApi as object
    return model
  }

  static async saveAPISchemaToPath(path: string, data: object): Promise<void> {
    const apiStr = yaml.dump(data)
    FileManager.saveFile(path, apiStr)
  }

  static async createNewAPISchemaFile(
    dirPath: string,
    fileName: string,
    data: object
  ): Promise<string> {
    const apiStr = yaml.dump(data)
    const filePath = path.join(dirPath, fileName.endsWith('.yaml') ? fileName : `${fileName}.yaml`)
    FileManager.saveFile(filePath, apiStr)
    return filePath
  }

  static async reloadDirTree(): Promise<AppDirEnt | ''> {
    const currentFolder = APISchemaService.currentFolder
    if (!currentFolder) return ''
    APISchemaService.currentFolder = currentFolder
    return DirTree.from(currentFolder)
  }
}

export default APISchemaService
