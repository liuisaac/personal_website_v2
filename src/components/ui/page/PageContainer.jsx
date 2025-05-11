import React from 'react'

const PageContainer = ({ children }) => {
  return (
    <div className='2xl:w-[70em] xl:w-[50em] md:w-[40em] w-full md:px-0 px-16 top-0 min-h-screen'>{children}</div>
  )
}

export default PageContainer