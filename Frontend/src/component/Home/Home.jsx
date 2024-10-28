import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Freebook from '../Freebook'
import Footer from '../Footer'
import RadioPlayer from '../RadioPlayer'

function Home() {
  return (
   <>
    <Navbar />
      <Banner />
     <Freebook/>
   <RadioPlayer />
      <Footer />
   </>
  )
}

export default Home