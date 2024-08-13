const hinge = `\n`

export default function AppQueriesList({
  queries,
  setQueries
}: {
  queries: string[]
  setQueries: (value: string[]) => void
}): JSX.Element {
  return (
    <textarea
      value={queries.join(hinge)}
      onChange={(e) => {
        setQueries(e.target.value.split(hinge))
      }}
    ></textarea>
  )
}
