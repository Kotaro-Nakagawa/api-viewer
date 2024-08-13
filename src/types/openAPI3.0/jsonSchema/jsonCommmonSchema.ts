export const jsonTypeNames = [
  'string',
  'number',
  'integer',
  'object',
  'array',
  'boolean',
  'null'
] as const
export type jsonType = (typeof jsonTypeNames)[number]

export interface BaseJSONSchema {
  type?: jsonType | jsonType[]
  [key: string]: unknown
}
