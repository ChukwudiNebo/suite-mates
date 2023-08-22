import React from 'react'
import Button from '../../atoms/button/Button'
import landingPage from '../../../assets/landing img.png'
import dot2 from '../../../assets/dot3.png'
import dotMiddle from '../../../assets/dotmiddle.png'

const HeroSection = () => {
  return (
    <div className='mt-[90px] ml-[17px] lg:pl-[10px]'>
      <div className='flex flex-col lg:flex-row items-center justify-between'>
        <div>
          <div>
            <p className='font-thin w-[90vw] lg:w-[45vw] leading-[42px] lg:leading-[64px] text-[32px] lg:text-[48px] text-primary'>
              Grow And Manage Your Salon Suite Business With Minimal Effort
            </p>
          </div>
          <div className='font-normal w-[90vw] lg:w-[45vw] leading-[21px] lg:leading-[32px] text-[16px] lg:text-[24px] text-primary pt-[32px] lg:pb-[50px] pb-[32px]'>
            Suitemates Is The All-In-One Tool To Onboard Tenants, Automate Rent
            Collection And Manage Maintenance Requests On The Go.
          </div>
          <div>
            <div className='pb-[72px] lg:pb-[0px] '>
              <Button className='text-[16px] lg:text-[26.46px] p-[16px] lg:p-[26.46px] text-white rounded-[33px] lg:rounded-[55px] shadow-[-4.005881309509277px_5.341174602508545px_0px_0px_#F0D0BE] lg:shadow-[-6.613862037658691px_8.818482398986816px_0px_0px_#F0D0BE] w-[165px] lg:w-[276px] font-semibold'>
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
        <div className='mt-[45px] w-full'>
          <div className='relative -z-30'>
            <div className='absolute top-[-40px] lg:top-[-50px] right-[0px] lg:right-[0px]'>
              <img
                src={dot2}
                alt=''
                className='w-[150px] h-[422px] lg:w-[370px] lg:h-[755px]'
              />
            </div>
          </div>
          <img
            src={landingPage}
            alt='*'
            className='object-cover lg:w-[662px] w-[354px] h-[320px] lg:h-[579px]'
          />
          <div className='relative -z-30'>
            <div className='absolute top-[-250px] lg:top-[-250px] left-[-210px] lg:left-[-150px]'>
              <img
                src={dotMiddle}
                alt=''
                className='w-[502px] h-[502px] lg:w-[577px] lg:h-[577px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
