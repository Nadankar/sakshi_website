import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Achievements from './Achievements'
import Contact from './contact'
import Footer from './Footer'


function Home() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <About/>
    <Experience/>
    <Achievements/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home


  // <div className='bg-pink-500'>
    //   1.about me
    //   2.where i worked
    //   3.achivements(10th ,12,enginring,tfws)
    //   featured talks(add all certifcates)
    //   4.contact(socail media,footer)
    //   resume(linkidin)
    // </div>