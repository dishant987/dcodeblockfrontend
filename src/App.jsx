import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoComp from './components/VideoComp'
import Image from './components/Image'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Image imgUrl={"/1.png"} />
      <VideoComp />
      <Image imgUrl={"/2.png"} />
    <Footer/>
    </div>

  )
}

export default App