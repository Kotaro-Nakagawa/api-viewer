const hinge = '&'

export default function AppQueriesText({
  queries,
  setQueries
}: {
  queries: string[]
  setQueries: (value: string[]) => void
}): JSX.Element {
  return (
    <div>
      <input
        value={queries.join(hinge)}
        onChange={(e) => {
          setQueries(e.target.value.split(hinge))
        }}
      ></input>
    </div>
  )
}
