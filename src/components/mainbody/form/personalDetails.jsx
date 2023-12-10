import React from 'react';
import { Button, Header } from '../common';
import '../../../styles/form.css';

export const PersonalDetails = () => {
  return (
    <>
      <Header text="Appointment Form" />

      <section id="personal-details">
        <form>
          <div className="row">
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
          </div>

          <div className="row">
            <input type="date" name="dob" placeholder="Date of Birth" />
            <div className="gender">
              <span>Gender: </span>
              <span><input type="radio" name="gender" className="gender-selection" /> Male</span>
              <span><input type="radio" name="gender" className="gender-selection" /> Female</span>
              <span><input type="radio" name="gender" className="gender-selection" /> Other </span>
            </div>
          </div>

          <div className="row">
            <input type="email" name="email" placeholder="Email" />
            <input type="text" pattern="[0-9]{10}" name="phone" placeholder="Phone Number" />
          </div>

          <div className="row btn-holder btn-group">
            <Button value="Previous" onClick={(e) => e.preventDefault()} />
            <Button value="Next" onClick={(e) => e.preventDefault()} />
          </div>
        </form>
      </section>
    </>
  )
}