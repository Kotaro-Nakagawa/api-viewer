const columnInfo = {
  name: { width: '6%', title: '名前' },
  example: { width: '1fr', title: '例' },
  type: { width: '6%', title: '型' },
  required: { width: '3em', title: '必須' },
  format: { width: '6%', title: '形式' },
  enum: { width: '6%', title: '列挙型' },
  pattern: { width: '6%', title: '正規表現' },
  min: { width: '6%', title: '最小' },
  minex: { width: '3%', title: '<?' },
  sizetype: { width: '4em', title: '' },
  maxex: { width: '3%', title: '<?' },
  max: { width: '6%', title: '最大' },
  description: { width: '18%', title: '詳細' }
} as const

export const columnWidthTemplateStr = (): string => {
  return Object.values(columnInfo)
    .map((i) => i.width)
    .join(' ')
}

export const columnTitles = (): string[] => {
  return Object.values(columnInfo).map((i) => i.title)
}
