import { RefObject, useRef } from 'react'
import AppMediaTypeObject from './AppMediaTypeObject'
import AppTextBox from '../common/AppTextbox'

const mediaTypes = ['application/json', 'application/xml', 'text/plain']

function AppContentObject({ data }: { data: unknown }): JSX.Element {
  if (!(typeof data === 'object')) return <div>Content が object でない</div>
  if (data === null) return <div>Content が null</div>
  const mediaTypeRefs = useRef<Record<string, RefObject<HTMLDivElement> | undefined>>({})
  return (
    <>
      media type
      <AppTextBox
        data={Object.keys(data)[0]}
        onUpdate={(v: string) => {
          const keys = Object.keys(mediaTypeRefs.current)
          if (!keys.includes(v)) return
          keys.forEach((k) => {
            const tmpCurrent = mediaTypeRefs.current
            if (tmpCurrent === undefined) return
            const tmpCurrentV = tmpCurrent[k]
            if (tmpCurrentV === undefined) return
            const mayTarget = tmpCurrentV.current
            if (mayTarget !== null) {
              mayTarget.style.display = k === v ? 'block' : 'none'
            }
          })
        }}
        proposer={(value: string) => {
          return mediaTypes.filter((m) => m.startsWith(value))
        }}
      ></AppTextBox>
      {Object.entries(data).map(([k, v]) => {
        return (
          <div key={k} ref={mediaTypeRefs.current[k]}>
            <AppMediaTypeObject data={v}></AppMediaTypeObject>
          </div>
        )
      })}
    </>
  )
}

export default AppContentObject
