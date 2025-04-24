import { useState } from 'react'
import './App.css'
import HotelDetails from './pages/HotelDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HotelDetails />
    </>
  )
}

export default App
