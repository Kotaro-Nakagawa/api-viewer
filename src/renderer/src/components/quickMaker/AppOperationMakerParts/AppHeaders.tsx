import { useState } from 'react'

const hinge = `\n`

export default function AppHeaders({
  onUpdate
}: {
  onUpdate: (value: string[]) => void
}): JSX.Element {
  const [headers, setHeaders] = useState<string[]>([])
  return (
    <textarea
      value={headers.join(hinge)}
      onChange={(e) => {
        setHeaders(e.target.value.split(hinge))
        onUpdate(e.target.value.split(hinge))
      }}
    ></textarea>
  )
}
