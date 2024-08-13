import { useState } from 'react'
import AppMethodsCheckList from './AppPathsMakerParts/AppMethodsCheckList'
import AppOperationMaker from './AppOperationMaker'
import AppTextBox from '../common/AppTextbox'
import AppLabel from '../common/AppLabel'

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] as const
type methodsName = (typeof methods)[number]

export default function AppPathMaker({
  apiPath,
  onUpdatePath,
  onValidate,
  onUpdatePathItem
}: {
  apiPath: string
  onUpdatePath: (value: string) => void
  onValidate: (result: boolean) => void
  onUpdatePathItem: (value: object) => void
}): JSX.Element {
  const [creatingPath, setCreatingPath] = useState(apiPath)
  const [hasGet, setHasGet] = useState(false)
  const [hasPost, setHasPost] = useState(false)
  const [hasPut, setHasPut] = useState(false)
  const [hasPatch, setHasPatch] = useState(false)
  const [hasDelete, setHasDelete] = useState(false)
  const [isCorrectGet, setIsCorrectGet] = useState(false)
  const [isCorrectPost, setIsCorrectPost] = useState(false)
  const [isCorrectPut, setIsCorrectPut] = useState(false)
  const [isCorrectPatch, setIsCorrectPatch] = useState(false)
  const [isCorrectDelete, setIsCorrectDelete] = useState(false)
  const [getObject] = useState({})
  const [postObject] = useState({})
  const [putObject] = useState({})
  const [patchObject] = useState({})
  const [deleteObject] = useState({})
  const updateSavable = (changedMethod: methodsName, newStatus: boolean): void => {
    if (!(hasGet || hasPost || hasPut || hasPatch || hasDelete)) {
      onValidate(false)
      console.log('no methods')
      return
    }
    const result =
      (!hasGet || (changedMethod === 'GET' ? newStatus : isCorrectGet)) &&
      (!hasPost || (changedMethod === 'POST' ? newStatus : isCorrectPost)) &&
      (!hasPut || (changedMethod === 'PUT' ? newStatus : isCorrectPut)) &&
      (!hasPatch || (changedMethod === 'PATCH' ? newStatus : isCorrectPatch)) &&
      (!hasDelete || (changedMethod === 'DELETE' ? newStatus : isCorrectDelete))
    console.log(result)
    onValidate(result)
  }
  const pathToPathParams = (path: string): string[] => {
    return path.split('/').filter((p) => p.startsWith('{'))
  }
  const onValidUpdate = (): void => {
    onUpdatePathItem({
      get: hasGet ? getObject : undefined,
      post: hasPost ? postObject : undefined,
      put: hasPut ? putObject : undefined,
      patch: hasPatch ? patchObject : undefined,
      delete: hasDelete ? deleteObject : undefined
    })
  }
  return (
    <div>
      <AppLabel value="path" />
      <AppTextBox
        data={creatingPath}
        onUpdate={(value) => {
          onUpdatePath(value)
          setCreatingPath(value)
        }}
      />
      <AppLabel value="existing method" />
      <AppMethodsCheckList
        setHasGet={setHasGet}
        setHasPost={setHasPost}
        setHasPut={setHasPut}
        setHasPatch={setHasPatch}
        setHasDelete={setHasDelete}
      />
      <div style={{ display: hasGet ? 'block' : 'none' }}>
        <AppLabel value="GET" />
        <AppOperationMaker
          pathParams={pathToPathParams(creatingPath)}
          onValidate={(result) => {
            console.log(`${result ? 'Get is correct' : 'Get is not correct'}`)
            setIsCorrectGet(result)
            updateSavable('GET', result)
            onValidUpdate()
          }}
          operationObject={getObject}
        />
      </div>
      <div style={{ display: hasPost ? 'block' : 'none' }}>
        <AppLabel value="POST" />
        <AppOperationMaker
          pathParams={pathToPathParams(creatingPath)}
          onValidate={(result) => {
            setIsCorrectPost(result)
            updateSavable('POST', result)
            onValidUpdate()
          }}
          operationObject={postObject}
        />
      </div>
      <div style={{ display: hasPut ? 'block' : 'none' }}>
        <AppLabel value="PUT" />
        <AppOperationMaker
          pathParams={pathToPathParams(creatingPath)}
          onValidate={(result) => {
            setIsCorrectPut(result)
            updateSavable('PUT', result)
            onValidUpdate()
          }}
          operationObject={putObject}
        />
      </div>
      <div style={{ display: hasPatch ? 'block' : 'none' }}>
        <AppLabel value="PATCH" />
        <AppOperationMaker
          pathParams={pathToPathParams(creatingPath)}
          onValidate={(result) => {
            setIsCorrectPatch(result)
            updateSavable('PATCH', result)
            onValidUpdate()
          }}
          operationObject={patchObject}
        />
      </div>
      <div style={{ display: hasDelete ? 'block' : 'none' }}>
        <AppLabel value="DELETE" />
        <AppOperationMaker
          pathParams={pathToPathParams(creatingPath)}
          onValidate={(result) => {
            setIsCorrectDelete(result)
            updateSavable('DELETE', result)
            onValidUpdate()
          }}
          operationObject={deleteObject}
        />
      </div>
    </div>
  )
}
