import React from 'react'
import LandingLayout from '../../layout/landingLayout/LandingLayout'
import CallToActionSection from '../../molecules/callToActionSection/CallToActionSection'
import FeatureCard from '../../molecules/featureCard/FeatureCard'
import featureCardData from '../../molecules/featureCard/FeatureCardData'
import BenefitCard from '../../molecules/benefitCard/BenefitCard'
import benefitCardData from '../../molecules/benefitCard/BenefitCardData'
import HeroSection from '../../molecules/heroSection/HeroSection'
import Testimonial from '../../molecules/testimonialSection/Testimonial'
import TestimonialData from '../../molecules/testimonialSection/TestimonialData'
import dot5 from '../../../assets/dot 5.svg'
import dot4 from '../../../assets/dot4.svg'
const LandingPage = () => {
  return (
    <>
      <LandingLayout>
        <div>
          <div>
            <HeroSection />
          </div>
          <div>
            <p className='w-[80vw] lg:w-[68vw] leading-[42px] lg:leading-[53px] text-[32px] lg:text-[40px] font-medium text-primary m-auto text-center pt-[94px]'>
              Frustrated by the precious time wasted on mundane admin duties?
            </p>
          </div>
          <div>
            <p className='w-[90vw] leading-[21px] text-[16px] lg:w-[48vw] lg:leading-[32px] lg:text-[24px] font-normal text-primary m-auto text-center pt-[37px]'>
              suitemates does all the heavy lifting so you can focus on the
              things that truly matter.
            </p>
          </div>
        </div>
        <div className='relative overflow-x-hidden'>
          <div className='absolute top-[0%] lg:top-[200px] right-[-20px] lg:right-[-100px]'>
            <img
              src={dot4}
              alt='*'
              className='w-[192px] h-[192px] lg:w-[407px] lg:h-[407px]'
            />
          </div>
          <BenefitCard benefitCard={benefitCardData} />
        </div>
        <div className='relative'>
          <div className='absolute top-[-75%] lg:top-[-350px] left-[-30px] lg:left-[-100px]'>
            <img
              src={dot5}
              alt='*'
              className='w-[192px] h-[192px] lg:w-[407px] lg:h-[407px]'
            />
          </div>
          <Testimonial data={TestimonialData} />
        </div>
        <div>
          <p className='w-[90vw] lg:w-[80vw] leading-[32px] lg:leading-[53px] text-[24px] lg:text-[40px] font-medium text-primary m-auto text-center pb-[15px] lg:pb-[129px] pt-[40px] lg:pt-[94px]'>
            As an absentee owner, running and managing your salon suite business
            has never been this easy.
          </p>
        </div>
        <div className='bg-[#F6F6F6]'>
          <FeatureCard featureCard={featureCardData} />
        </div>
        <CallToActionSection />
      </LandingLayout>
    </>
  )
}

export default LandingPage
