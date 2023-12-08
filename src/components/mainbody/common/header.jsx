import React from 'react'

export const Header = ({text}) => {
  return (
    <div className="header">
        <p className="header-text">
            {text}
        </p>
    </div>
  )
}

