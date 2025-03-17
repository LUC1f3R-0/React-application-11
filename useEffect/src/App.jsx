import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const start = setInterval(() => {
      setCount(prevNum => prevNum + 1)
    }, 1000)
    return () => clearInterval(start)
  }, [])

  return (
    <>
      <h1>I'm counting {count} times</h1>
    </>
  )
}

export default App
