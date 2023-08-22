import React from 'react'

interface FeatureCardProp {
  featureCard: Array<{
    featureCardImg: string
    featureCardTitle: string
    featureCardParagraph: string
    featureCardBoxShadow: string
    featureCardBG: string
  }>
}

const FeatureCard: React.FC<FeatureCardProp> = ({ featureCard }) => {
  return (
    <div className='flex justify-center pb-[92px] pt-[90px]'>
      <div className='grid gap-[64px] grid-cols-1 grid-row-4 lg:gap-[160px] lg:grid-cols-2 lg:grid-rows-2'>
        {featureCard.map(
          ({
            featureCardImg,
            featureCardTitle,
            featureCardParagraph,
            featureCardBG,
            featureCardBoxShadow,
          }) => (
            <div
              key={featureCardTitle}
              className={`rounded-[21px] w-[339px] lg:w-[456px] pl-[23px] pt-[29px] ${featureCardBG} ${featureCardBoxShadow}`}
            >
              <div className='mr-6'>
                <img
                  src={featureCardImg}
                  alt='*'
                  className='w-[371px] h-[208px] lg:w-[412px] lg:h-[289px] rounded-[21px] pt[29px]'
                />
              </div>
              <div>
                <h2 className='font-normal text-[26px] lg:text-[35px] pt-[15px] lg:pt-[33px] pb-[11px] lg:pb-[24px]'>
                  {featureCardTitle}
                </h2>
              </div>
              <div>
                <p className='w-[302px] lg:w-[408px] font-normal text-[15px] lg:text-[21px] pb-[30px]'>
                  {featureCardParagraph}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default FeatureCard
