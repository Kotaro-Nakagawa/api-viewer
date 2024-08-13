// import { useRef, useState } from 'react'
import { useState } from 'react'
import AppPathMaker from './AppPathMaker'
import AppButton from '../common/AppButton'
import AppLabel from '../common/AppLabel'

export default function AppPathsMaker({
  openAPI,
  onSave
}: {
  openAPI: object
  onSave: () => void
}): JSX.Element {
  if (typeof openAPI['paths'] !== 'object' || openAPI['paths'] === null) openAPI['paths'] = {}
  const [pathsState, setPathsState] = useState(openAPI['paths'])
  const [isSavable, setIsSavavle] = useState<Record<string, boolean>>({})
  const isAllSavable = (): boolean => {
    return Object.values(isSavable).reduce((acc, cur) => acc && cur, true)
  }
  // const inputRef = useRef<HTMLInputElement>(null)
  const [newPath, setNewPath] = useState('') // 追加分
  const makePathButton = (): JSX.Element => {
    return (
      <div id="add-new-path">
        <div>新規 path</div>
        <input
          value={newPath}
          onChange={(e) => {
            setNewPath(e.target.value)
          }}
        ></input>
        <AppButton
          label="path を追加"
          onClick={() => {
            // const newPath = inputRef.current?.value ?? ''
            if (newPath === '') return
            setPathsState(Object.assign({}, pathsState, { [newPath]: {} }))
            setNewPath('')
          }}
        ></AppButton>
      </div>
    )
  }
  return (
    <div id="new-paths">
      <div>
        {((): JSX.Element => {
          console.log('reloaded paths = ↓')
          console.log(pathsState)
          return <div id="dummy">Paths</div>
        })()}
        {Object.keys(pathsState).length === 0 ? (
          <div>path がありません</div>
        ) : (
          Object.entries(pathsState).map(([k]) => {
            console.log(k)
            return (
              <div key={k}>
                <div>path</div>
                <AppLabel value={k}></AppLabel>
                <AppPathMaker
                  apiPath={k}
                  onUpdatePath={(value: string) => {
                    pathsState[value] = pathsState[k]
                    pathsState[k] = undefined
                  }}
                  onValidate={(validate: boolean) => {
                    console.log(`onvalidate ${validate}`)
                    setIsSavavle(Object.assign({}, isSavable, { [k]: validate }))
                  }}
                  onUpdatePathItem={(value: object) => {
                    pathsState[k] = value
                  }}
                />
              </div>
            )
          })
        )}
      </div>
      {makePathButton()}
      {isAllSavable() ? (
        <AppButton
          label="保存"
          onClick={() => {
            openAPI['paths'] = pathsState
            console.log(pathsState)
            onSave()
          }}
        />
      ) : (
        <AppLabel value="保存(無効)" />
      )}
    </div>
  )
}
