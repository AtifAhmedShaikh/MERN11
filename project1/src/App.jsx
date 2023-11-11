import React  from 'react'
import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import HeroContainer from './layouts/containers/HeroContainer'
function App() {
  return (
    <React.Fragment>
      <Header/>
        <HeroContainer/>
      <Footer/>
    </React.Fragment>
  )
}

export default App
