import fs, { Dirent } from 'fs'
import path from 'path'
import AppDirEnt from '@appType/AppDirEnt'

class DirTree implements AppDirEnt {
  name: string
  path: string
  type: 'file' | 'directory'
  children?: AppDirEnt[]
  constructor(parentPath: string, dirent: Dirent) {
    this.name = dirent.name
    this.path = path.join(parentPath, dirent.name)
    if (dirent.isFile()) {
      this.type = 'file'
    } else {
      this.type = 'directory'
      const dirPath = path.join(parentPath, dirent.name)
      const dirents = fs.readdirSync(dirPath, { withFileTypes: true })
      this.children = dirents.map((d) => new DirTree(dirPath, d))
    }
  }

  static from(pathStr: string): DirTree | '' {
    const dirPath = path.dirname(pathStr)
    const dirent = fs
      .readdirSync(dirPath, { withFileTypes: true })
      .find((d) => d.name === path.basename(pathStr))
    if (dirent === undefined) return ''
    return new DirTree(dirPath, dirent)
  }
}

export default DirTree
