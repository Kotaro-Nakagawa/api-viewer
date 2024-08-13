import { ArrayTypeJsonSchema } from '@appType/openAPI3.0/jsonSchema/arrayTypeJsonSchema'
import { BooleanTypeJsonSchema } from '@appType/openAPI3.0/jsonSchema/booleanTypeJsonSchema'
import { IntegerTypeJsonSchema } from '@appType/openAPI3.0/jsonSchema/integerTypeJsonSchema'
import { BaseJSONSchema, jsonType } from '@appType/openAPI3.0/jsonSchema/jsonCommmonSchema'
import { NumberTypeJsonSchema } from '@appType/openAPI3.0/jsonSchema/numberTypeJsonSchema'
import { ObjectTypeJsonSchema } from '@appType/openAPI3.0/jsonSchema/objectTypeJsonSchema'
import { StringTypeJsonSchema } from '@appType/openAPI3.0/jsonSchema/stringTypeJsonSchema'

const jsonTypeOfValue = (value: unknown): jsonType => {
  if (typeof value === 'string') return 'string'
  if (typeof value === 'number') return Number.isInteger(value) ? 'integer' : 'number'
  if (typeof value === 'bigint') return 'integer'
  if (typeof value === 'boolean') return 'boolean'
  if (typeof value === 'object') {
    if (Array.isArray(value)) return 'array'
    if (value === null) return 'null'
    return 'object'
  }
  return 'null'
}

const parseToStringSchema = (example: string): StringTypeJsonSchema => {
  return {
    type: 'string',
    example: example
  }
}

const parseToNumberSchema = (example: number): NumberTypeJsonSchema => {
  return {
    type: 'number',
    example: example
  }
}

const parseToIntegerSchema = (example: number): IntegerTypeJsonSchema => {
  return {
    type: 'integer',
    example: example
  }
}

const parseToBooleanSchema = (example: boolean): BooleanTypeJsonSchema => {
  return {
    type: 'boolean',
    example: example
  }
}

const parseToArraySchema = (item: unknown): ArrayTypeJsonSchema => {
  return {
    type: 'array',
    items: schemaFromValue(item)
  }
}

const parseToObjectSchema = (json: object): ObjectTypeJsonSchema => {
  return {
    type: 'object',
    properties: Object.fromEntries(
      Object.entries(json).map(([k, v]) => {
        return [k, schemaFromValue(v)]
      })
    )
  }
}

function schemaFromValue(v: unknown): BaseJSONSchema {
  const valueType = jsonTypeOfValue(v)
  switch (valueType) {
    case 'string':
      return parseToStringSchema(v as string)
    case 'number':
      return parseToNumberSchema(v as number)
    case 'boolean':
      return parseToBooleanSchema(v as boolean)
    case 'object':
      return parseToObjectSchema(v as object)
    case 'integer':
      return parseToIntegerSchema(v as number)
    case 'array':
      return parseToArraySchema((v as unknown[])[0])
    case 'null':
      return parseToStringSchema('')
  }
}

export default function schemaFromJson(json: object): object {
  console.log(json)
  const schema = parseToObjectSchema(json)
  console.log(schema)
  return schema
}
