import React from 'react'

const Button = ({ text, cssProps }) => {
  return (
    <button className={`${ cssProps } `}>
        { text }
    </button>
  )
}

export default Button