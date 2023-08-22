// import React from 'react'

// interface buttonProps {
//   children: React.ReactNode
// }
// const Button = ({ children}: buttonProps) => {
//   return (
//     <>
//       <button type='button' className='button'>
//         {children}
//       </button>
//     </>
//   )
// }

// export default Button

import React from 'react'


interface Props  {
  loading?: boolean
  showIcon?: boolean
  roundedFull?: boolean
  className?: string
  children:React.ReactNode
}

const Button = ({
  roundedFull,
  loading,
  children,
  className,
  showIcon,
  ...props
}: Props) => (
  <button
    {...props}
    className={`shadow-[-3.1254401206970215px_4.167253494262695px_0px_0px_#F0D0BE] bg-primary rounded-[26px] ${className}
        `}
  >
    {children}
  </button>
)


export default Button


