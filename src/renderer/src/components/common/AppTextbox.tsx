import { useState } from 'react'

function AppTextBox({
  data,
  onUpdate,
  proposer
}: {
  data: string
  onUpdate: (value: string) => void
  proposer?: (value: string) => (string | number)[]
}): JSX.Element {
  const mayPropose = (text: string): (string | number)[] => (proposer ? proposer(text) : [])
  const [text, setText] = useState(typeof data === 'string' ? data : '')
  const [suggestions, setSuggestions] = useState(mayPropose(text))
  const [focused, setFocused] = useState(false)
  const [inputtingValue, setInputtingValue] = useState(text)
  const onFocus = (): void => setFocused(true)
  const onBlur = (): void => {
    setFocused(false)
    onUpdate(text)
  }
  const AppTextSuggestionList = (suggestions: (string | number)[]): JSX.Element => {
    const AppTextSuggestionListItem = (value: string | number): JSX.Element => {
      return (
        <div
          key={value}
          onMouseOver={() => {
            console.log(`set value to ${value}`)
            setText(value.toString())
          }}
        >
          {value}
        </div>
      )
    }
    return (
      <div
        style={{
          position: 'absolute',
          top: '100%',
          zIndex: 1,
          width: '100%',
          backgroundColor: '#222222'
        }}
        onMouseLeave={() => {
          setText(inputtingValue)
        }}
      >
        {suggestions.map((s) => AppTextSuggestionListItem(s))}
      </div>
    )
  }

  return (
    <div style={{ position: 'relative' }}>
      <input
        style={{ boxSizing: 'content-box', WebkitBoxSizing: 'border-box', width: '100%' }}
        type="text"
        value={text}
        onChange={(e) => {
          setInputtingValue(e.target.value)
          setText(e.target.value)
          setSuggestions(mayPropose(e.target.value))
          onUpdate(e.target.value)
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      ></input>
      {focused ? AppTextSuggestionList(suggestions) : ''}
    </div>
  )
}

export default AppTextBox
