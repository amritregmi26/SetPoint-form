import React from 'react'

export const Button = ({value}) => {
  return (
    <button className="btn" type='submit' onClick={(e) => e.preventDefault()}>{value}</button>
  )
}