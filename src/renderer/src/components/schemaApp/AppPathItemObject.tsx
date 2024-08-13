import { MutableRefObject, RefObject, useRef } from 'react'
import AppOperationObject from './AppOperationObject'
import AppPathItemObjectMethodTab from './AppPathItemObjectParts/AppPathItemObjectMethodTab'
import AppServersObject from './AppServersObject'
import AppParametersObject from './AppParametersObject'

const methods = ['get', 'post', 'put', 'patch', 'delete'] as const

const extractMethods = (data: object): (typeof methods)[number][] => {
  const ret: (typeof methods)[number][] = []
  methods.forEach((m) => {
    if (m in data) ret.push(m)
  })
  return ret
}

function AppPathItemObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>path item が object でない → {`${data}`}</div>
  if (data === null) return <div>path item が null</div>
  // タブで method を選べる形にしたかった
  const dataMethods = extractMethods(data)
  const hasMethods = {
    hasGet: dataMethods.includes('get'),
    hasPost: dataMethods.includes('post'),
    hasPut: dataMethods.includes('put'),
    hasPatch: dataMethods.includes('patch'),
    hasDelete: dataMethods.includes('delete')
  }

  const operationItemRefs: Record<
    (typeof methods)[number],
    MutableRefObject<HTMLDivElement | null>
  > = {
    get: useRef(null),
    post: useRef(null),
    put: useRef(null),
    patch: useRef(null),
    delete: useRef(null)
  }

  const selectRef = (method: string): RefObject<HTMLDivElement> => {
    return operationItemRefs[method]
  }

  return (
    <div className="app-path-item-object">
      <h3>path item</h3>
      {data['summary'] ? <div>{data['summary']}</div> : ''}
      {data['description'] ? <div>{data['description']}</div> : ''}
      <div className="app-path-item-object-methods">
        <AppPathItemObjectMethodTab
          data={hasMethods}
          onChoiceMethod={(choiced: string) => {
            dataMethods.forEach((m) => {
              const ref = operationItemRefs[m]
              if (ref !== undefined) {
                if (ref.current !== null) {
                  const refsCurrent = ref.current
                  console.log(refsCurrent)
                  if (m === choiced) {
                    refsCurrent.style.display = 'block'
                  } else {
                    refsCurrent.style.display = 'none'
                  }
                }
              }
            })
          }}
        ></AppPathItemObjectMethodTab>
        {dataMethods.map((p) => {
          return (
            <div
              key={p}
              ref={selectRef(p)}
              style={{ display: p === dataMethods[0] ? 'block' : 'none' }}
            >
              {<AppOperationObject data={data[p]}></AppOperationObject>}
            </div>
          )
        })}
      </div>
      {data['servers'] ? <AppServersObject data={data['servers']}></AppServersObject> : ''}
      {data['parameters'] ? (
        <AppParametersObject data={data['parameters']}></AppParametersObject>
      ) : (
        ''
      )}
    </div>
  )
}

export default AppPathItemObject
