import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div
        className="h-screen w-[1300px] h-100 bg-cover bg-center bg-no-repeat  "
        style={{ backgroundImage: "url('/Landingpage.jpg')" }}
      >
      </div>
    </div>
  )
}

export default App