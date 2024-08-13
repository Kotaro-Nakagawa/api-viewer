import { useState } from 'react'
import AppQueriesList from './AppQueriesList'
import AppQueriesText from './AppQueriesText'

export default function AppQueries({
  onUpdate
}: {
  onUpdate: (value: string[]) => void
}): JSX.Element {
  const [queries, setQueries] = useState<string[]>([])
  const onChange = (value: string[]): void => {
    setQueries(value)
    onUpdate(value)
  }

  return (
    <div>
      <AppQueriesText queries={queries} setQueries={onChange} />
      <AppQueriesList queries={queries} setQueries={onChange} />
    </div>
  )
}
