import { BrowserWindow, dialog } from 'electron'

class FileDialogue {
  static async openFile(extensions: string[]): Promise<Electron.OpenDialogReturnValue> {
    const win = BrowserWindow.getFocusedWindow()

    const result = await dialog.showOpenDialog(win!, {
      properties: ['openFile'],
      filters: [
        {
          name: 'Documents',
          extensions: extensions
        }
      ]
    })
    return result
  }

  static async openDirectory(): Promise<Electron.OpenDialogReturnValue> {
    const win = BrowserWindow.getFocusedWindow()

    const result = await dialog.showOpenDialog(win!, {
      properties: ['openDirectory']
    })
    return result
  }
}

export default FileDialogue
