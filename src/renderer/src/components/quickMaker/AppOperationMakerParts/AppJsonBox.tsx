import { useState } from 'react'

export default function AppJsonBox({
  onUpdate,
  onValidate
}: {
  onUpdate: (value: object) => void
  onValidate: (value: boolean) => void
}): JSX.Element {
  const [error, setError] = useState('')
  return (
    <div>
      <div>{error}</div>
      <textarea
        onChange={(ev) => {
          try {
            const object = JSON.parse(ev.target.value)
            onUpdate(object)
            setError('')
            onValidate(true)
          } catch (er) {
            onUpdate({})
            setError(String(er))
            onValidate(false)
          }
        }}
      ></textarea>
    </div>
  )
}
