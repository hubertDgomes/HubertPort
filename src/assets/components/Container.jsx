import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`md:max-w-[1320px] max-w-[1250px] m-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
