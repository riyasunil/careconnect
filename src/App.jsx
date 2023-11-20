import { useState } from 'react'
import ClientReg from './components/ClientReg/ClientReg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ClientReg />
      </div>
    </>
  )
}

export default App
