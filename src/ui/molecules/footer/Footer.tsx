import React from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '../../../assets/Suite Mates white logo.svg'
import Facebook from '../../../assets/socials/facebook--ff.svg'
import Twitter from '../../../assets/socials/twitter--ff.svg'
import LinkedIn from '../../../assets/socials/linkedin--ff.svg'
import Instagram from '../../../assets/socials/instagram-ff.svg'

const Footer = () => {
  const socials = [
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: LinkedIn, name: 'LinkedIn', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Facebook, name: 'Facebook', url: '#' },
  ]
  return (
    <div className='bg-[#333333] md:p-[112px_116px_117px_115px]'>
      <div className='flex items-center justify-evenly'>
        <div>
          <img src={whiteLogo} alt='' className='w-[131px] h-[20px]'/>
        </div>
        <div>
          <p className='text-xs text-white font-light'>
            All rights reserved (C) {new Date().getFullYear()}
          </p>
        </div>
        <div>
          <div className='flex items-center justify-center gap-0'>
            {socials.map(({ name, icon, url }) => (
              <Link to={url} key={name}>
                <span className='sr-only'>{name}</span>
                <img src={icon} alt={name} />
              </Link>
            ))}
          </div>
          <div>
            <p className='text-xs text-white font-light'>@MySuiteMates</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
