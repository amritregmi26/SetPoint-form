import React, { useEffect, useState } from 'react';
import '../../../styles/form.css';
import { useForm } from '../../../context/formContext';

export const PersonalDetails = () => {

  const [numberInput, setNumberInput] = useState("");

  // Context variables
  const { dispatch, state } = useForm();
  const { formData } = state;
  const { firstName, lastName, dob, gender, email, phone } = formData;


  const handleNumberInput = (e) => {
    // Allow only numeric input
    const cleanedValue = e.target.value.replace(/[^0-9]/g, '');
    setNumberInput(cleanedValue);
    handleChange("phone", cleanedValue);
  }

  // Updating user input using dispatch
  function handleChange(key, value) {
    dispatch({ type: "UPDATE_DATA", payload: { [key]: value } })
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <>
      <section id="personal-details">
        <form method='POST'>
          <div className="row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>

          <div className="row">
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => handleChange("dob", e.target.value)}
            />
            <div className="select-items">
              <span>Gender: </span>
              <span>
                <input
                  type="radio"
                  name="gender"
                  className="selection"
                  checked={gender === "male"}
                  onChange={(e) => handleChange("gender", e.target.value)}
                  value="male"
                /> Male </span>

              <span>
                <input
                  type="radio"
                  name="gender"
                  className="selection"
                  checked={gender === "female"}
                  onChange={(e) => handleChange("gender", e.target.value)}
                  value="female"
                /> Female </span>

              <span>
                <input
                  type="radio"
                  name="gender"
                  className="selection"
                  checked={gender === "other"}
                  onChange={(e) => handleChange("gender", e.target.value)}
                  value="other"
                /> Other </span>
            </div>
          </div>

          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <input
              type="text"
              pattern="[0-9]{10}"
              name="phone"
              placeholder="Phone Number"
              value={numberInput || phone}
              onChange={handleNumberInput}
            />

          </div>

        </form>
      </section>
    </>
  )
}