//import { useState } from 'react'
import './App.css'
import MainRoutes from "./Routes/MainRoutes"
import Home from './pages/Home/Home'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <MainRoutes />
      <Home />
    </div>
  )
}

export default App
