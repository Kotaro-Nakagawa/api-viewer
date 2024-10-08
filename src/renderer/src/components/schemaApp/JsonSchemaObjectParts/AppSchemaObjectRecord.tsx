import AppLabel from '@renderer/components/common/AppLabel'
import AppTextBox from '@renderer/components/common/AppTextbox'
import { columnWidthTemplateStr } from './columnsInfo'
import { reflectChange } from '../reflectChange'

const columnTemplate = (depth: number): string => {
  return `${depth}% ${columnWidthTemplateStr()}`
}

const exclusiveTypes = ['<', '≤']

function AppSchemaObjectRecord({
  recordKey,
  data,
  onUpdateName,
  keyUpdatable,
  required,
  onUpdateRequired,
  depth,
  availableTypes
}: {
  recordKey: string
  data: unknown
  onUpdateName: (newValue: string) => void
  keyUpdatable: boolean
  required: boolean
  onUpdateRequired: (newValue: boolean) => void
  depth: number
  availableTypes: string[]
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
  const enumWords = 'enum' in data && Array.isArray(data.enum) ? data.enum.join(',') : ''
  const setEnumWords = (newValue: string): void => {
    const parts = newValue.split(',')
    if (type === 'string') {
      myObject['enum'] = parts
    } else if (type === 'number') {
      myObject['enum'] = parts.map((p) => parseFloat(p))
    } else if (type === 'integer') {
      myObject['enum'] = parts.map((p) => parseInt(p, 10))
    }
  }
  const pattern = 'pattern' in data && typeof data.pattern === 'string' ? data.pattern : ''
  const setPattern = (newValue: string): void => {
    myObject['pattern'] = newValue
  }
  const min =
    type === 'string'
      ? 'minLength' in data && typeof data.minLength === 'number'
        ? data.minLength
        : ''
      : 'minimum' in data && typeof data.minimum === 'number'
        ? data.minimum
        : ''
  const setMin = (newValue: string): void => {
    if (type === 'string') {
      myObject['minLength'] = parseInt(newValue, 10)
    } else {
      myObject['minimum'] = parseFloat(newValue)
    }
  }
  const isMinExclusive =
    'exclusiveMinimum' in data && typeof data.exclusiveMinimum === 'boolean'
      ? data.exclusiveMinimum
        ? exclusiveTypes[0]
        : exclusiveTypes[1]
      : ''
  const setIsMinExclusive = (newValue: string): void => {
    myObject['exclusiveMinimum'] = !(newValue === exclusiveTypes[0])
  }
  const max =
    type === 'string'
      ? 'maxLength' in data && typeof data.maxLength === 'number'
        ? data.maxLength
        : ''
      : 'maximum' in data && typeof data.maximum === 'number'
        ? data.maximum
        : ''
  const setMax = (newValue: string): void => {
    if (type === 'string') {
      myObject['maxLength'] = parseInt(newValue, 10)
    } else {
      myObject['maximum'] = parseFloat(newValue)
    }
  }
  const isMaxExclusive =
    'exclusiveMaximum' in data && typeof data.exclusiveMaximum === 'boolean'
      ? data.exclusiveMaximum
        ? exclusiveTypes[0]
        : exclusiveTypes[1]
      : ''
  const setIsMaxExclusive = (newValue: string): void => {
    myObject['exclusiveMaximum'] = !(newValue === exclusiveTypes[0])
  }
  const example = 'example' in data && typeof data.example === 'string' ? data.example : ''
  const setExample = (newValue: string): void => {
    myObject['example'] = newValue
  }
  const restrictTarget = ((): string => {
    switch (type) {
      case 'string':
        return 'length'
      case 'number':
        return 'value'
      case 'integer':
        return 'value'
    }
    return '-'
  })()
  return (
    <div style={{ display: 'grid', gridTemplateColumns: columnTemplate(depth) }}>
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
        data={example}
        onUpdate={(value: string) => {
          setExample(value)
          reflectChange()
        }}
      ></AppTextBox>
      <AppTextBox
        data={type}
        onUpdate={(value: string) => {
          setType(value)
          reflectChange()
        }}
        proposer={(value: string) => {
          return availableTypes.filter((t) => t.startsWith(value))
        }}
      ></AppTextBox>
      <AppTextBox
        data={required ? '✓' : ''}
        onUpdate={(value: string) => {
          setRequired(value)
          reflectChange()
        }}
        proposer={() => ['✓', '']}
      ></AppTextBox>
      <AppTextBox
        data={format}
        onUpdate={(value: string) => {
          setFormat(value)
          reflectChange()
        }}
      ></AppTextBox>
      <AppTextBox
        data={enumWords}
        onUpdate={(value: string) => {
          setEnumWords(value)
          reflectChange()
        }}
      ></AppTextBox>
      <AppTextBox
        data={pattern}
        onUpdate={(value: string) => {
          setPattern(value)
          reflectChange()
        }}
      ></AppTextBox>
      <AppTextBox
        data={min.toString()}
        onUpdate={(value: string) => {
          setMin(value)
          reflectChange()
        }}
      ></AppTextBox>
      <AppTextBox
        data={isMinExclusive}
        onUpdate={(value: string) => {
          setIsMinExclusive(value)
          reflectChange()
        }}
        proposer={() => exclusiveTypes}
      ></AppTextBox>
      <AppLabel value={restrictTarget} />
      <AppTextBox
        data={isMaxExclusive}
        onUpdate={(value: string) => {
          setIsMaxExclusive(value)
          reflectChange()
        }}
        proposer={() => exclusiveTypes}
      ></AppTextBox>
      <AppTextBox
        data={max.toString()}
        onUpdate={(value: string) => {
          setMax(value)
          reflectChange()
        }}
      ></AppTextBox>
      <AppTextBox
        data={description}
        onUpdate={(value: string) => {
          setDescription(value)
          reflectChange()
        }}
      ></AppTextBox>
    </div>
  )
}

export default AppSchemaObjectRecord
