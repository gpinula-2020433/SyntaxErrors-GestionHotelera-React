import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Body from './body/body'
import Footer from './footer/footer'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default App