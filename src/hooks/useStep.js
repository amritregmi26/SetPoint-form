import React, { useState } from 'react'

const useStep = ({steps}) => {
  const [currentIndex, setcurrentIndex] = useState(0);

    function next()
    {
        setcurrentIndex(index => {
            if(index >= 3) return index;
            return index + 1;
        })
    }

    function prev() 
    {
        setcurrentIndex( index => {
            if(index <= 0) return index;
            return index - 1;
        })
    }

  return{
    currentIndex,
    next,
    prev
  }
}

export default useStep