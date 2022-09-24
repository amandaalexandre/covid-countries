import { useState } from 'react'
import Request from './services/Request'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Request/>
    </div>
  )
}

export default App
