import React from 'react'
import '../../../styles/header.css'

export const Header = ({text}) => {
  return (
    <div className="header">
        <p className="header-text">
            {text}
        </p>
    </div>
  )
}

