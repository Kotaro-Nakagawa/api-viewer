import { useState } from 'react'
import AppHeaders from './AppHeaders'
import AppQueries from './AppQueries'

const headersToParamsInHeader = (
  queries: string
): { name: string; in: 'header'; example: unknown } => {
  const values = queries.split(':')
  return {
    name: values[0],
    in: 'header',
    example: values[1] ?? ''
  }
}

const queriesToParamsInQuery = (
  queries: string
): { name: string; in: 'query'; example: unknown } => {
  const values = queries.split('=')
  return {
    name: values[0],
    in: 'query',
    example: values[1] ?? ''
  }
}

export default function AppParameters({
  pathParams,
  onUpdateParameters
}: {
  pathParams: {
    name: string
    in: 'path'
    example: unknown
  }[]
  onUpdateParameters: (
    params: {
      name: string
      in: 'path' | 'query' | 'header'
      example: unknown
    }[]
  ) => void
}): JSX.Element {
  const [headerParams, setHeaderParams] = useState<
    { name: string; in: 'header'; example: unknown }[]
  >([])
  const [queryParams, setQueryParams] = useState<{ name: string; in: 'query'; example: unknown }[]>(
    []
  )
  const onUpdateOneOf = (): void => {
    const params: {
      name: string
      in: 'path' | 'query' | 'header'
      example: unknown
    }[] = []
    onUpdateParameters(params.concat(pathParams).concat(headerParams).concat(queryParams))
  }
  return (
    <div>
      <AppHeaders
        onUpdate={(value: string[]) => {
          setHeaderParams(value.map((v) => headersToParamsInHeader(v)))
          onUpdateOneOf()
        }}
      ></AppHeaders>
      <AppQueries
        onUpdate={(value: string[]) => {
          setQueryParams(value.map((v) => queriesToParamsInQuery(v)))
          onUpdateOneOf()
        }}
      ></AppQueries>
    </div>
  )
}
