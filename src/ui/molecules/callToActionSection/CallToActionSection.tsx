import React from 'react'
import Button from '../../atoms/button/Button'

const CallToActionSection = () => {
  return (
    <div className='bg-[#F2F2F2]'>
      <div>
        <div>
          <p className='font-medium text-[20px] lg:text-[32px] leading-[26px] lg:leading-[42px] textColor-primary text-center w-[356px] lg:w-[75vw] m-auto pt-[35px] lg:pt-[125px]'>
            Transform your salon business operations through easy-to-use
            software that helps you spend less time doing admin work and more
            time growing your business.
          </p>
        </div>
        <div className='text-center pt-[35px] pb-[35px] lg:pb-[80px]'>
          <Button className='text-[16px] lg:text-[21.72px] p-[16px] lg:p-[26.46px] text-white rounded-[33px] lg:rounded-[45px] shadow-[-4.005881309509277px_5.341174602508545px_0px_0px_#F0D0BE] lg:shadow-[-5.429596424102783px_7.239461898803711px_0px_0px_#F0D0BE] w-[155px] lg:w-[256px] font-medium whitespace-nowrap'>
            Get Early Access
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CallToActionSection
