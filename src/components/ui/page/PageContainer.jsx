import React from 'react'

const PageContainer = ({ children }) => {
  return (
    <div className='2xl:w-[70em] w-[60em] top-0 min-h-screen'>{children}</div>
  )
}

export default PageContainer