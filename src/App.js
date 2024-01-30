import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import Career from './components/Career'
import Footer from './components/Footer'
import Background from './components/Background'
import { useEffect } from 'react'

function App() {
  const isWhitePaper = window.location.pathname === '/whitepaper'
  useEffect(() => {
    if (isWhitePaper) {
      window.location.href =
        'https://drive.google.com/file/d/1Yb3VJ0AYGDhvTHNzE-hkv8-0gFjWkt8m/view'
    }
  }, [isWhitePaper])
  return (
    <>
      {!isWhitePaper ? (
        <div className='App' style={{ width: '100%', overflow: 'hidden' }}>
          <Background />
          <Home />
          <TrustedBy />
          <About />
          <Products />
          <Services />
          <Career />
          <Footer />
        </div>
      ) : null}
    </>
  )
}

export default App
