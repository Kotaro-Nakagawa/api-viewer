import AppTextBox from '@renderer/components/common/AppTextbox'

const gridTemplate = Object.values({
  path: 'auto',
  get: '5em',
  post: '5em',
  put: '5em',
  patch: '5em',
  delete: '5em'
}).join(' ')

function AppPathsObjectPathTableRecord({
  path,
  hasGet,
  hasPost,
  hasPut,
  hasPatch,
  hasDelete,
  onSelect,
  onUpdate
}: {
  path: string
  hasGet: boolean
  hasPost: boolean
  hasPut: boolean
  hasPatch: boolean
  hasDelete: boolean
  onSelect: () => void
  onUpdate: (value: string) => void
}): JSX.Element {
  return (
    <div onClick={onSelect} style={{ display: 'grid', gridTemplateColumns: gridTemplate }}>
      <AppTextBox data={path} onUpdate={onUpdate}></AppTextBox>
      <div>{hasGet ? 'GET' : ''}</div>
      <div>{hasPost ? 'POST' : ''}</div>
      <div>{hasPut ? 'PUT' : ''}</div>
      <div>{hasPatch ? 'PATCH' : ''}</div>
      <div>{hasDelete ? 'DELETE' : ''}</div>
    </div>
  )
}

export default AppPathsObjectPathTableRecord
