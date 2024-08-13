import { RefObject, useRef, useState } from 'react'
import AppPathItemObject from './AppPathItemObject'
import AppPathsObjectPathTable from './AppPathsObjectParts/AppPathsObjectPathTable'

const pathItemToPathTableObject = (
  pathStr: string,
  pathItem: object
): {
  path: string
  hasGet: boolean
  hasPost: boolean
  hasPut: boolean
  hasPatch: boolean
  hasDelete: boolean
} => {
  return {
    path: pathStr.toString(),
    hasGet: 'get' in pathItem,
    hasPost: 'post' in pathItem,
    hasPut: 'put' in pathItem,
    hasPatch: 'patch' in pathItem,
    hasDelete: 'delete' in pathItem
  }
}

function AppPathsObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>paths が object でない</div>
  if (data === null) return <div>paths が null</div>
  const pathStrs = Object.keys(data)
  const [paths, setPaths] = useState<string[]>(pathStrs)
  const pathItemRefs = useRef<RefObject<HTMLDivElement>[]>([])
  return (
    <div id={'paths'}>
      <div style={{ display: 'none' }}>
        <pre>{JSON.stringify(data)}</pre>
      </div>
      <AppPathsObjectPathTable
        data={Object.entries(data).map(([p, item]) => pathItemToPathTableObject(p, item))}
        onUpdate={(target: number, newValue: string) => {
          setPaths(paths.map((p, i) => (i === target ? newValue : p)))
        }}
        onChoicePath={(choiced: number) => {
          for (let i = 0; i < pathItemRefs.current.length; i += 1) {
            const refsCurrent = pathItemRefs.current[i].current
            if (refsCurrent !== null) {
              if (i === choiced) {
                refsCurrent.style.display = 'block'
              } else {
                refsCurrent.style.display = 'none'
              }
            }
          }
        }}
      ></AppPathsObjectPathTable>
      {paths.map((p, i) => {
        return (
          <div key={i} ref={pathItemRefs.current[i]}>
            {<AppPathItemObject data={data[p]}></AppPathItemObject>}
          </div>
        )
      })}
    </div>
  )
}

export default AppPathsObject
