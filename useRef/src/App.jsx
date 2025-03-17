import React from 'react'

const App = () => {
  const [value, setValue] = React.useState(0)
  const countRef = React.useRef(0)

  function increase() {
    setValue(pre => pre + 1)
    countRef.current++
    console.log('the ref:', countRef.current)
    console.log('the state:', value)
  }

  function decrease() {
    setValue(pre => pre - 1)
    countRef.current--
    console.log(countRef.current)
  }
  
  return (
    <div>
      <button onClick={increase}>increment</button>
      <div>{value}</div>
      <button onClick={decrease}>-</button>
      <div>count {countRef.current}</div>
    </div>
  )
}

export default App
