import fs from 'fs'

class FileManager {
  static readFile(path: string): string | void {
    try {
      const data = fs.readFileSync(path, 'utf-8')
      console.log(data)
      return data
    } catch (e) {
      //エラー処理
      console.log(e)
    }
  }
  static saveFile(path: string, data: string): void {
    try {
      fs.writeFileSync(path, data)
    } catch (e) {
      console.log(e)
    }
  }
}

export default FileManager
