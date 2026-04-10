import React from 'react'

const base =
  '2xl:w-[40em] xl:w-[35em] lg:w-[32em] md:w-[30em] w-full md:px-0 px-10'

const PageContainer = ({ children, className = '' }) => {
  return (
    <div className={[base, className].filter(Boolean).join(' ')}>{children}</div>
  )
}

export default PageContainer