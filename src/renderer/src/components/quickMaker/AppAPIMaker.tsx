import { useState } from 'react'
import AppPathsMaker from './AppPathsMaker'
import AppLabel from '../common/AppLabel'
import AppTextBox from '../common/AppTextbox'
import AppButton from '../common/AppButton'

const newOpenAPI: object = {
  openapi: '3.0.3',
  info: {
    title: 'title',
    version: '1'
  }
}

const makingSteps = ['createFile', 'createPaths'] as const
type makingStepType = (typeof makingSteps)[number]

export default function AppAPIMaker({
  onMakeFile,
  onComplete
}: {
  onMakeFile: (fileName: string, data: object) => void
  onComplete: () => void
}): JSX.Element {
  const [openAPI] = useState(newOpenAPI)
  const [fileName, setFileName] = useState('')
  const [fullFileName, setFullFileName] = useState('')
  const [makingStep, setMakingStep] = useState<makingStepType>('createFile')
  return (
    <div>
      <AppLabel value="ファイル名" />
      <AppTextBox
        data={fileName}
        onUpdate={(s) => {
          setFileName(s)
          setFullFileName(`${s}.yaml`)
        }}
      />
      <AppLabel value=".yaml" />
      {makingStep === 'createFile' ? (
        <AppButton
          label="作成"
          onClick={() => {
            onMakeFile(fullFileName, openAPI)
            setMakingStep('createPaths')
          }}
        />
      ) : (
        <AppPathsMaker openAPI={openAPI} onSave={onComplete} />
      )}
    </div>
  )
}
