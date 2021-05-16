import React from 'react'
import '../cmp/Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']
const WIDTH = ['btn--wide', 'btn--small']

const Button = ({ children, type, onCLick, buttonStyle, buttonSize, buttonWidth }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
  const checkButtonWidth = WIDTH.includes(buttonWidth) ? buttonWidth : WIDTH[0]

  return (
    <Link to='/services' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onCLick}
        type={type}
        buttonWidth={checkButtonWidth}
        >
        {children}
      </button>
    </Link>
  )
}

export default Button
