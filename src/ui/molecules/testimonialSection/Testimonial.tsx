import React, { useEffect, useState } from 'react'
import image1 from '../../../assets/image 2.png'
import image2 from '../../../assets/image 2.png'
import image3 from '../../../assets/image 2.png'
import nextImg from '../../../assets/Vector (1).png'
import prevImg from '../../../assets/Vector (2).png'
import Button from '../../atoms/button/Button'

interface PaginateProp {
  data: Array<{
    id: number
    testimonialImg: string
    testimonialName: string
    testimonialSuiteNumber: string
    testimonialParagraph: string
    testimonialBG: string
  }>
  // data: []
}

const Testimonial = ({ data }: PaginateProp) => {
  const [currentPage, setCurrentPage] = useState(0)

  const next = () => {
    setCurrentPage((currentPage + 1) % data.length)
  }

  const prev = () => {
    setCurrentPage((currentPage - 1 + data.length) % data.length)
  }

  const displayedTestimonials = [
    data[(currentPage + data.length - 1) % data.length],
    data[currentPage],
    data[(currentPage + 1) % data.length],
  ]
  return (
    <div>
      <div className='text-center'>
        <h4 className='text-secondary text-[32px] lg:text-[40px] font-medium mb-[42px]'>
          Testimonials
        </h4>
      </div>
      <div className='flex flex-col lg:flex-row items-center lg:pl-[17px]'>
        {/* next and previous */}
        <div className='flex flex-row lg:flex-col gap-5 order-3 lg:order-none'>
          <div onClick={next}>
            <img
              src={nextImg}
              alt=''
              className='w-[25px] h-[25px] lg:w-[50px] lg:h-[38px]'
            />
          </div>
          <div onClick={prev}>
            <img
              src={prevImg}
              alt=''
              className='w-[25px] h-[25px] lg:w-[50px] lg:h-[38px]'
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center overflow-x-hidden overflow-y-hidden ml-[17px] lg:pl-[30px] transition duration-700 ease-in-out h-[578px] lg:h-[335px]'>
          {displayedTestimonials.map((dataArr) => (
            <div
              className={`${
                dataArr.testimonialBG
              } backdrop-blur-[4px] rounded-[24px] pl-[21px] lg:pl-[40px] transition duration-700 ease-in-out  ${
                currentPage === 0 && dataArr.id === 3
                  ? 'w-[355px] lg:w-[665px]'
                  : ''
              } ${
                currentPage === 0 && dataArr.id === 2
                  ? 'w-[316px] h-[261px] lg:w-[533px] lg:h-[269px] relative top-[-120px] lg:top-0 lg:left-[-150px] -z-10'
                  : ''
              } ${
                currentPage === 0 && dataArr.id === 1
                  ? 'w-[284px] h-[203px] lg:w-[445px] lg:h-[224px] relative top-[-238px] lg:top-0 lg:left-[-320px] -z-20'
                  : ''
              }
              
              ${
                currentPage === 1 && dataArr.id === 3
                  ? 'w-[284px] h-[203px] lg:w-[445px] lg:h-[224px] relative top-[-238px] lg:top-0 lg:left-[-320px] -z-20'
                  : ''
              } ${
                currentPage === 1 && dataArr.id === 2
                  ? 'w-[355px] lg:w-[665px]'
                  : ''
              } ${
                currentPage === 1 && dataArr.id === 1
                  ? 'w-[316px] h-[261px] lg:w-[533px] lg:h-[269px] relative top-[-120px] lg:top-0 lg:left-[-150px] -z-10'
                  : ''
              }
              
              ${
                currentPage === 2 && dataArr.id === 3
                  ? 'w-[316px] h-[261px] lg:w-[533px] lg:h-[269px] relative top-[-120px] lg:top-0 lg:left-[-150px] -z-10'
                  : ''
              } ${
                currentPage === 2 && dataArr.id === 2
                  ? 'w-[284px] h-[203px] lg:w-[445px] lg:h-[224px] relative top-[-238px] lg:top-0 lg:left-[-320px] -z-20'
                  : ''
              } ${
                currentPage === 2 && dataArr.id === 1
                  ? 'w-[355px] lg:w-[665px]'
                  : ''
              }`}
              key={dataArr.id}
            >
              <div
                className={`flex items-center ${
                  currentPage === 0 && dataArr.id === 3 ? 'pt-[46px]' : ''
                }${currentPage === 0 && dataArr.id === 2 ? 'pt-[13px]' : ''} ${
                  currentPage === 0 && dataArr.id === 1 ? 'pt-[0px]' : ''
                }
                
                ${currentPage === 1 && dataArr.id === 3 ? 'pt-[0px]' : ''}${
                  currentPage === 1 && dataArr.id === 2 ? 'pt-[46px]' : ''
                } ${currentPage === 1 && dataArr.id === 1 ? 'pt-[13px]' : ''}
                
                ${currentPage === 2 && dataArr.id === 3 ? 'pt-[13px]' : ''}${
                  currentPage === 2 && dataArr.id === 2 ? 'pt-[0px]' : ''
                } ${currentPage === 2 && dataArr.id === 1 ? 'pt-[46px]' : ''}`}
              >
                <div className=''>
                  <img
                    src={dataArr.testimonialImg}
                    alt='*'
                    className='rounded-full w-[91px] h-[91px] lg:w-[109px] lg:h-[109px] object-cover mr-[15px]'
                  />
                </div>
                <div className='flex flex-col'>
                  <div>
                    <h6 className='lg:text-[32px] text-[28px]'>
                      {dataArr.testimonialName}
                    </h6>
                  </div>
                  <div>
                    <p className='text-[#7B7B7B] text-[18px]'>
                      {dataArr.testimonialSuiteNumber}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className={`font-normal leading-[20px] lg:leading-[32px] pb-[32px] pt-[32px] 
                  ${
                    currentPage === 0 && dataArr.id === 3
                      ? 'text-[21px] lg:text-[24px] w-[309px] lg:w-[625px]'
                      : ''
                  }
                   ${
                     currentPage === 0 && dataArr.id === 2
                       ? 'text-[16px] lg:text-[18px] w-[269px] lg:w-[476px]'
                       : ''
                   }
                   ${
                     currentPage === 0 && dataArr.id === 1
                       ? 'text-[13px] lg:text-[17px] w-[254px] lg:w-[398px] pt-[10px]'
                       : ''
                   }
                  
                  ${
                    currentPage === 1 && dataArr.id === 3
                      ? 'text-[13px] lg:text-[17px] w-[254px] lg:w-[398px] pt-[10px]'
                      : ''
                  }
                  ${
                    currentPage === 1 && dataArr.id === 2
                      ? 'text-[21px] lg:text-[24px] w-[309px] lg:w-[625px]'
                      : ''
                  }
                  ${
                    currentPage === 1 && dataArr.id === 1
                      ? 'text-[16px] lg:text-[18px] w-[269px] lg:w-[476px]'
                      : ''
                  }
                  
                  ${
                    currentPage === 2 && dataArr.id === 3
                      ? 'text-[16px] lg:text-[18px] w-[269px] lg:w-[476px]'
                      : ''
                  }
                  ${
                    currentPage === 2 && dataArr.id === 2
                      ? 'text-[13px] lg:text-[17px] w-[254px] lg:w-[398px] pt-[10px]'
                      : ''
                  }
                  ${
                    currentPage === 2 && dataArr.id === 1
                      ? 'text-[21px] lg:text-[24px] w-[309px] lg:w-[625px]'
                      : ''
                  }`}
                >
                  {dataArr.testimonialParagraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='mt-[54px] text-center'>
          <Button className='text-[16px] lg:text-[26.46px] p-[16px] lg:p-[26.46px] text-white rounded-[33px] lg:rounded-[55px] shadow-[-4.005881309509277px_5.341174602508545px_0px_0px_#F0D0BE] lg:shadow-[-6.613862037658691px_8.818482398986816px_0px_0px_#F0D0BE] w-[165px] lg:w-[276px] font-semibold'>
            Get Early Access
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
/* <div className='flex'>
          div-1 
          <div className='bg-[#F9ECE5] rounded-[24px] pl-[40px] w-[665px]'>
            <div className='flex items-center pt-[46px]'>
              <div className=''>
                <img
                  src={image1}
                  alt='*'
                  className='rounded-full w-[91px] h-[91px] lg:w-[109px] lg:h-[109px] object-cover mr-[15px]'
                />
              </div>
              <div className='flex flex-col'>
                <div>
                  <h6 className='lg:text-[32px] text-[28px]'>Jordan</h6>
                </div>
                <div>
                  <p className='text-[#7B7B7B] text-[18px]'>815 Suites</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-[24px] font-normal leading-[32px] pb-[32px] pt-[32px] w-[625px]'>
                “I Was Using Spreadsheets To Manage 50+ Tenants. Suitemates Will
                Reduce My Time Spent On Administrative Tasks By At Least 50%”
              </p>
            </div>
          </div>
          div-2 
          <div className='bg-[#C5DFCB] rounded-[24px] pl-[40px] w-[665px]'>
            <div>
              <div className='flex items-center pt-[46px]'>
                <div>
                  <img
                    src={image2}
                    alt='*'
                    className='rounded-full w-[91px] h-[91px] lg:w-[109px] lg:h-[109px] object-cover mr-[15px]'
                  />
                </div>
                <div className='flex flex-col'>
                  <div>
                    <h6 className='lg:text-[32px] text-[28px]'>Evans</h6>
                  </div>
                  <div>
                    <p className='text-[#7B7B7B] text-[18px]'>815 Suites</p>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-[24px] font-normal leading-[32px] pb-[32px] pt-[32px] w-[625px]'>
                  “I Got Into This Business So I Wouldn’t Have To Manage People
                  Or Be Physically Present. Suitemates Make This Business Model
                  Even More Attractive”
                </p>
              </div>
            </div>
          </div>
          div-3 
          <div className='bg-[#F9ECE5] rounded-[24px] pl-[40px] w-[665px]'>
            <div>
              <div className='flex items-center pt-[46px]'>
                <div>
                  <img
                    src={image3}
                    alt='*'
                    className='rounded-full w-[91px] h-[91px] lg:w-[109px] lg:h-[109px] object-cover mr-[15px]'
                  />
                </div>
                <div className='flex flex-col'>
                  <div>
                    <h6 className='lg:text-[32px] text-[28px]'>John</h6>
                  </div>
                  <div>
                    <p className='text-[#7B7B7B] text-[18px]'>815 Suites</p>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-[24px] font-normal leading-[32px] pb-[32px] pt-[32px] w-[625px]'>
                  “I Was Using Spreadsheets To Manage 50+ Tenants. Suitemates
                  Will Reduce My Time Spent On Administrative Tasks By At Least
                  50%”
                </p>
              </div>
            </div>
          </div>
        </div> */
