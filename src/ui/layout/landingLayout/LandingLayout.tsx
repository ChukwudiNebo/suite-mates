import React from 'react'
import Navbar from '../../molecules/navbar/Navbar'
import Footer from '../../molecules/footer/Footer'
// import LandingPage from '../../pages/homepage/LandingPage'

interface RootLayoutProps {
  children: React.ReactNode
}
const LandingLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default LandingLayout
