import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Giris from './components/Giris'
import Hakkimda from './components/Hakkimda'
import Projeler from './components/Projeler'
import Cv from './components/Cv'
import Iletisim from './components/Iletisim'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Giris />
      <Hakkimda />
      <Projeler />
      <Cv />
      <Iletisim />
      <Footer />
    </>
  )
}

export default App
