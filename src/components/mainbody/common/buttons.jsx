import React from 'react'
import '../../../styles/button.css'

export const Button = ({value, onClick}) => {
  return (
    <button className="btn" type='submit' onClick={onClick}>{value}</button>
  )
}