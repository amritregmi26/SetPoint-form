import React, { useState } from 'react'
import './styles/App.css'
import Sidebar from './components/sidebar/sidebar'
import { FamilyBackground, PersonalDetails, YourLocation, ReviewSection } from './components/mainbody/form'
import useStep from './hooks/useStep'
import { Button, Header } from './components/mainbody/common'

const App = () => {

  let steps = [<YourLocation />, <PersonalDetails />, <FamilyBackground />, <ReviewSection />];

  const { currentIndex, next, prev } = useStep(steps)

  function handleNext(e) {
    e.preventDefault();
    next();
  }

  function handlePrev(e) {
    e.preventDefault();
    prev();
  }

  return (
    <div className="App">

      <Sidebar />

      <div className="right-section">

        <Header text={currentIndex === steps.length - 1 ? "Review Your Details" : "Appointment Form"} />

        {
          steps[currentIndex]
        }

        <div className="btn-holder btn-group">
          {
            (currentIndex !== 0) ? (
              <Button
                value="Previous"
                onClick={(e) => handlePrev(e)}
                className="prev-btn"
              />
            ) : (<p></p>)
          }

          <Button
            value={currentIndex === steps.length - 1 ? "Submit" : "Next"}
            onClick={(e) => handleNext(e)}
            className=""
          />

        </div>
      </div>

    </div>
  )
}

export default App;
