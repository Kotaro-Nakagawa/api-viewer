import AppLabel from '../common/AppLabel'
import AppParameters from './AppOperationMakerParts/AppParameters'
import AppRequestBody from './AppOperationMakerParts/AppRequestBody'
import AppResponseBody from './AppOperationMakerParts/AppResponseBody'

const pathParamNameToParamInPath = (
  params: string[]
): {
  name: string
  in: 'path'
  example: string
}[] => {
  return params.map((p) => {
    return {
      name: p,
      in: 'path',
      example: ''
    }
  })
}

const schemaToRequestBody = (schema: object): object => {
  return {
    description: '',
    content: {
      'application/json': {
        schema: schema
      }
    }
  }
}

const schemaToResponse = (schema: object): object => {
  return {
    description: '',
    content: {
      'application/json': {
        schema: schema
      }
    }
  }
}

const schemaToResponses = (responseCode: string, schema: object): object => {
  return {
    [responseCode]: schemaToResponse(schema)
  }
}

export default function AppOperationMaker({
  pathParams,
  onValidate,
  operationObject
}: {
  pathParams: string[]
  onValidate: (result: boolean) => void
  operationObject: object
}): JSX.Element {
  const isValids = {
    requestBody: true,
    responseBody: true
  }
  return (
    <div>
      <AppLabel value="parameters" />
      <AppParameters
        pathParams={pathParamNameToParamInPath(pathParams)}
        onUpdateParameters={(
          value: {
            name: string
            in: 'path' | 'query' | 'header'
            example: unknown
          }[]
        ) => {
          operationObject['parameters'] = value
        }}
      />
      <AppLabel value="request body" />
      <AppRequestBody
        onUpdate={(schema: object) => {
          operationObject['requestBody'] = schemaToRequestBody(schema)
        }}
        onValidate={(value: boolean) => {
          isValids.requestBody = value
          onValidate(isValids.responseBody && value)
        }}
      />
      <AppLabel value="response body" />
      <AppResponseBody
        onUpdate={(schema: object) => {
          operationObject['responses'] = schemaToResponses('200', schema)
        }}
        onValidate={(value: boolean) => {
          isValids.responseBody = value
          onValidate(isValids.requestBody && value)
        }}
      />
    </div>
  )
}
