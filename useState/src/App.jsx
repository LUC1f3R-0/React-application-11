import React from 'react'
import { useColor } from './hooks/setColor'
import { switchColor } from './functions/switchColor';

const App = () => {
  const { color, setColor } = useColor();
  return (
    <>
      <h1>my favorite color is {color.color}</h1>
      <button onClick={() => switchColor(setColor)}>blue</button >
    </>
  )
}

export default App
