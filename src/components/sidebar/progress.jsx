import React from 'react'
import { useForm } from '../../context/formContext'

const Progress = () => {

  const { state } = useForm();
  const { step } = state;

  console.log(step)

  return (
    <div className="progress">
      <div className={step.step >= 0 && "currentStep" }>Your Location</div>
      <div className={step.step >= 1 && "currentStep"}>Personal Details</div>
      <div className={step.step >= 2 && "currentStep"}>Family Background</div>
      <div className={step.step === 3 && "currentStep"}>Review and Submit</div>
    </div>
  )
}

export default Progress