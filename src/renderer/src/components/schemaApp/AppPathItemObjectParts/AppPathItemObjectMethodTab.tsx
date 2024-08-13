import AppButton from '@renderer/components/common/AppButton'

const gridTemplate = Object.values({
  get: '5em',
  post: '5em',
  put: '5em',
  patch: '5em',
  delete: '5em'
}).join(' ')

function AppPathItemObjectMethodTab({
  data,
  onChoiceMethod
}: {
  data: {
    hasGet: boolean
    hasPost: boolean
    hasPut: boolean
    hasPatch: boolean
    hasDelete: boolean
  }
  onChoiceMethod: (method: string) => void
}): JSX.Element {
  // TODO クリックしたボタンに selected item class を付与する機能を追加
  // 引数の onChoicedMethod を直接呼び出すのではなく、class 付与処理も含めた処理を作ってそれを呼び出すように修正すれば良い
  return (
    <div style={{ display: 'grid', gridTemplateColumns: gridTemplate }}>
      {data.hasGet ? (
        <AppButton
          onClick={() => {
            onChoiceMethod('get')
          }}
          label="GET"
        />
      ) : (
        ''
      )}
      {data.hasPost ? (
        <AppButton
          onClick={() => {
            onChoiceMethod('post')
          }}
          label="POST"
        />
      ) : (
        ''
      )}
      {data.hasPut ? (
        <AppButton
          onClick={() => {
            onChoiceMethod('put')
          }}
          label="PUT"
        />
      ) : (
        ''
      )}
      {data.hasPatch ? (
        <AppButton
          onClick={() => {
            onChoiceMethod('patch')
          }}
          label="PATCH"
        />
      ) : (
        ''
      )}
      {data.hasDelete ? (
        <AppButton
          onClick={() => {
            onChoiceMethod('delete')
          }}
          label="DELETE"
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default AppPathItemObjectMethodTab
