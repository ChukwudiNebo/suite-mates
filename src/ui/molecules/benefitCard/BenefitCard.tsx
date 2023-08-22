import React from 'react'

interface BenefitCardProp {
  benefitCard: Array<{
    benefitCardImg: string
    benefitCardParagraph: string
  }>
}

const BenefitCard: React.FC<BenefitCardProp> = ({ benefitCard }) => {
  return (
    <div className='flex justify-center mb-[50px] mt-[64px]'>
      <div className='grid gap-[48px] grid-cols-1 grid-row-4 lg:gap-[112px] lg:grid-cols-2 lg:grid-rows-2'>
        {benefitCard.map(({ benefitCardImg, benefitCardParagraph }, index) => (
          <div
            key={index}
            className='rounded-[24px] w-[316px] lg:w-[416px] pl-[26px] pt-[18px] lg:pt-[32px] border border-[#2C8056] border-solid'
          >
            <div className='relative left-[-26px]'>
              <img
                src={benefitCardImg}
                alt='*'
                className='w-[109px] lg:w-[135px] h-[135px] rounded-[21px]'
              />
            </div>
            <div className='relative top-[-10px] lg:normal lg:top-[0px]'>
              <p className='w-[246px] lg:w-[348px] font-normal text-[21px] lg:text-[28px] pb-[30px] lg:pb-[40px] leading-[28px] lg:leading-[37px]'>
                {benefitCardParagraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BenefitCard
