import AppLabel from '@renderer/components/common/AppLabel'
import AppTextBox from '@renderer/components/common/AppTextbox'

const jsonTypeNames = ['string', 'number', 'integer', 'object', 'array', 'boolean', 'null']

const columnTemplate = (depth: number): string => {
  return Object.values({
    indent: `${depth * 0.5}%`,
    name: '6%',
    type: '6%',
    description: '1fr',
    required: '2em',
    format: '3%',
    enum: '3%',
    pattern: '3%',
    min: '3%',
    minex: '3%',
    sizetype: '4em',
    maxex: '3%',
    max: '3%',
    example: '12%'
  }).join(' ')
}

function AppSchemaObjectRecord({
  recordKey,
  data,
  onUpdateName,
  keyUpdatable,
  required,
  onUpdateRequired
}: {
  recordKey: string
  data: unknown
  onUpdateName: (newValue: string) => void
  keyUpdatable: boolean
  required: boolean
  onUpdateRequired: (newValue: boolean) => void
}): JSX.Element {
  if (typeof data !== 'object') return <>変です</>
  if (data === null) return <>変です</>
  const myObject = data
  const name = recordKey
  const setName = (newValue: string): void => {
    onUpdateName(newValue)
  }
  const type = 'type' in data && typeof data.type === 'string' ? data.type : ''
  const setType = (newValue: string): void => {
    myObject['type'] = newValue
  }
  const description =
    'description' in data && typeof data.description === 'string' ? data.description : ''
  const setDescription = (newValue: string): void => {
    myObject['description'] = newValue
  }
  const setRequired = (newValue: string): void => {
    onUpdateRequired(newValue === '✓')
  }
  const format = 'format' in data && typeof data.format === 'string' ? data.format : ''
  const setFormat = (newValue: string): void => {
    myObject['format'] = newValue
  }
  const enumWords = 'enumWords' in data && typeof data.enumWords === 'string' ? data.enumWords : ''
  const setEnumWords = (newValue: string): void => {
    myObject['enumWords'] = newValue
  }
  const pattern = 'pattern' in data && typeof data.pattern === 'string' ? data.pattern : ''
  const setPattern = (newValue: string): void => {
    myObject['pattern'] = newValue
  }
  const min = 'min' in data && typeof data.min === 'string' ? data.min : ''
  const setMin = (newValue: string): void => {
    // 構造が一致してないので単にこう書けない
    myObject['min'] = newValue
  }
  const isMinExclusive =
    'isMinExclusive' in data && typeof data.isMinExclusive === 'string' ? data.isMinExclusive : ''
  const setIsMinExclusive = (newValue: string): void => {
    myObject['isMinExclusive'] = newValue
  }
  const max = 'max' in data && typeof data.max === 'string' ? data.max : ''
  const setMax = (newValue: string): void => {
    myObject['max'] = newValue
  }
  const isMaxExclusive =
    'isMaxExclusive' in data && typeof data.isMaxExclusive === 'string' ? data.isMaxExclusive : ''
  const setIsMaxExclusive = (newValue: string): void => {
    myObject['isMaxExclusive'] = newValue
  }
  const example = 'example' in data && typeof data.example === 'string' ? data.example : ''
  const setExample = (newValue: string): void => {
    myObject['example'] = newValue
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: columnTemplate(0) }}>
      <div></div>
      {keyUpdatable ? (
        <AppTextBox
          data={name}
          onUpdate={(value: string) => {
            setName(value)
          }}
        ></AppTextBox>
      ) : (
        <AppLabel value={name}></AppLabel>
      )}
      <AppTextBox
        data={type}
        onUpdate={(value: string) => {
          setType(value)
        }}
        proposer={(value: string) => {
          return jsonTypeNames.filter((t) => t.startsWith(value))
        }}
      ></AppTextBox>
      <AppTextBox
        data={description}
        onUpdate={(value: string) => {
          setDescription(value)
        }}
      ></AppTextBox>
      <AppTextBox
        data={required ? '✓' : ''}
        onUpdate={(value: string) => {
          setRequired(value)
        }}
        proposer={() => ['✓', '']}
      ></AppTextBox>
      <AppTextBox
        data={format}
        onUpdate={(value: string) => {
          setFormat(value)
        }}
      ></AppTextBox>
      <AppTextBox
        data={enumWords}
        onUpdate={(value: string) => {
          setEnumWords(value)
        }}
      ></AppTextBox>
      <AppTextBox
        data={pattern}
        onUpdate={(value: string) => {
          setPattern(value)
        }}
      ></AppTextBox>
      <AppTextBox
        data={min}
        onUpdate={(value: string) => {
          setMin(value)
        }}
      ></AppTextBox>
      <AppTextBox
        data={isMinExclusive}
        onUpdate={(value: string) => {
          setIsMinExclusive(value)
        }}
      ></AppTextBox>
      <div>{type === 'number' ? 'value' : 'length'}</div>
      <AppTextBox
        data={isMaxExclusive}
        onUpdate={(value: string) => {
          setIsMaxExclusive(value)
        }}
      ></AppTextBox>
      <AppTextBox
        data={max}
        onUpdate={(value: string) => {
          setMax(value)
        }}
      ></AppTextBox>
      <AppTextBox
        data={example}
        onUpdate={(value: string) => {
          setExample(value)
        }}
      ></AppTextBox>
    </div>
  )
}

export default AppSchemaObjectRecord
