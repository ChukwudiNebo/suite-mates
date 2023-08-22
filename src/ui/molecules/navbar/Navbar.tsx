import React, { useState } from 'react'
import logo from '../../../assets/Suite Mates colored Logo.svg'
import { Link } from 'react-router-dom'
import useMenuOnScroll from '../../../hooks/useMenuOnScroll'
import Button from '../../atoms/button/Button'
import MobileMenu from '../mobileMenu/MobileMenu'

const Navbar = () => {
  const ref = useMenuOnScroll()
  const [openNavbar, setOpenNavbar] = useState(false)
  return (
    <header
      ref={ref}
      className='fixed left-0 right-0 top-0 z-[99] h-[100px] duration-300 ease-in-out'
    >
      <div className='mx-auto flex h-full items-center justify-between gap-2 py-4 lg:py-6 md:px-[19px]'>
        <div className='ml-[17px] lg:ml-[0px]'>
          <img src={logo} alt='logo' className='w-[157px] h-[24px]' />
        </div>
        <div className='sm:hidden'>
          <MobileMenu openNavbar={openNavbar} />
        </div>
        <div className='items-center gap-[39px] hidden md:flex'>
          <div>
            <Link
              to='/'
              className='flex w-full items-center justify-center max-sm:pl-4 sm:w-fit font-medium'
            >
              <span>Home</span>
            </Link>
          </div>
          <div>
            <Link
              to='/'
              className='flex w-full items-center justify-center max-sm:pl-4 sm:w-fit font-medium'
            >
              <span>About</span>
            </Link>
          </div>
          <div>
            <Button className='text-[12.5px] p-[12.5px] text-white font-semibold'>
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
