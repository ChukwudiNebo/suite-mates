import React, { useState } from 'react'
import hamburger from '../../../assets/hamburger.svg'
import { Link } from 'react-router-dom'
import Button from '../../atoms/button/Button'

interface MobileMenuProps {
  openNavbar: boolean
}

const MobileMenu = ({ openNavbar }: MobileMenuProps) => {
  const [handleOpenNavbar, setHandleOpenNavbar] = useState(openNavbar)
  const handleOpenMobileNavbar = () => {
    setHandleOpenNavbar(!handleOpenNavbar)
  }
  return (
    <div className='mr-[17px]'>
      <div>
        <div onClick={handleOpenMobileNavbar}>
          <img src={hamburger} alt='' />
        </div>
        {handleOpenNavbar && (
          <div>
            <div className='absolute left-0 bg-orange-50 w-full pt-[70px] min-h-screen'>
              <div className='flex flex-col items-center gap-[85px]'>
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
                <div className='text-center'>
                  <Button className='text-[12.5px] p-[12.5px] text-white font-semibold'>
                    Get Early Access
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MobileMenu
