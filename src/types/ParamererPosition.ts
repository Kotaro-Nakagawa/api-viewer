const parameterPositions = ['query', 'header', 'path', 'cookie'] as const

export type parameterPosition = (typeof parameterPositions)[number]
export function isParameterPositon(value: string): value is parameterPosition {
  return parameterPositions.reduce((acc, cur) => acc || value === cur, false) // I need ts-reset
}
