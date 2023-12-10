import React, { useState } from 'react';
import '../../../styles/form.css';

export const PersonalDetails = () => {

  const [numberInput, setNumberInput] = useState("");


  const handleNumericInput = (e) => {
    // Allow only numeric input
    setNumberInput(e.target.value.replace(/[^0-9]/g, ''));
  }

  return (
    <>
      <section id="personal-details">
        <form method='POST'>
          <div className="row">
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
          </div>

          <div className="row">
            <input type="date" name="dob" placeholder="Date of Birth" />
            <div className="select-items">
              <span>Gender: </span>
              <span><input type="radio" name="gender" className="selection" /> Male</span>
              <span><input type="radio" name="gender" className="selection" /> Female</span>
              <span><input type="radio" name="gender" className="selection" /> Other </span>
            </div>
          </div>

          <div className="row">
            <input type="email" name="email" placeholder="Email" />
            <input type="text" pattern="[0-9]{10}" name="phone" placeholder="Phone Number" value={numberInput} onChange={handleNumericInput} />
          </div>

        </form>
      </section>
    </>
  )
}