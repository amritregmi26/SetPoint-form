import React, { useState } from 'react'
import { useForm } from '../context/formContext';

const useStep = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const { dispatch } = useForm()

  function next() {
    let index = currentIndex
    if (index >= 3) index = index
    else index = index + 1;

    setcurrentIndex(index)

    dispatch({ type: "UPDATE_STEP", payload: { step: index } })
  }

  function prev() {
    let index = currentIndex
    if (index <= 0) index = index
    else index = index - 1;

    setcurrentIndex(index);
    dispatch({ type: "UPDATE_STEP", payload: { step: index } })
  }

  return {
    currentIndex,
    next,
    prev
  }
}

export default useStep