import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './components/create'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Create/>
      </div>
    </>
  )
}

export default App
