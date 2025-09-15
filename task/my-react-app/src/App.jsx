import { useState } from 'react'
import image1 from './assets/download.jpeg'
import image from "./assets/image1.jpeg"
import image2 from './assets/image2.jpeg'
import viteLogo from '/vite.svg'
import './App.css'
import Profilecard from './components/profilecard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Profilecard data={{ name: 'Micah David', bio: 'Frontend Developer passionate about building interactive, user-friendly web applications.', image: image1}} />
      <Profilecard data={{ name: 'Steven Pius', bio: 'Frontend Developer passionate about building interactive, user-friendly web applications.', image: image2 }} />
      <Profilecard data={{ name: 'Aisha Musa', bio: 'Frontend Developer passionate about building interactive, user-friendly web applications.', image: image }} />
    </div>
    </>
  )
}

export default App
