import React from 'react'
import '../../../styles/button.css'

export const Button = ({value, onClick, className}) => {
  return (
    <button className={`btn ${className}`} type='submit' onClick={onClick}>{value}</button>
  )
}