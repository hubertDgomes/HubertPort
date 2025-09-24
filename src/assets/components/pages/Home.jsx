import React, { useEffect, useState } from 'react'
import AllPage from './AllPage'
import AboutMe from './AboutMe'
import MyService from './MyService'
import MyWorks from './MyWorks'
import ContactPart from './ContactPart'
import Loader from '../layouts/Loader'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false) 
    },)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <Header/>
          <AllPage />
          <AboutMe />
          <MyService />
          <MyWorks />
          <ContactPart />
          <Footer/>
        </>
      )}
    </>
  )
}

export default Home
