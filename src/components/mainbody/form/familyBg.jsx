import React, { useEffect, useState } from 'react'
import { useForm } from '../../../context/formContext';

export const FamilyBackground = () => {

  const incomeList = ["Below 50000", "50000-200000", "200000-500000", "500000-1000000", "More than 1000000"];
  const checkBoxItems = ["Farmer", "Teacher", "Government Officer", "Other"];

  const { state, dispatch } = useForm()
  const { formData } = state
  const { fatherName, motherName, motherOcc, fatherOcc, familyIncome, grandfatherName } = formData

  // handle user input
  function handleChange(key, value) {
    dispatch({ type: "UPDATE_DATA", payload: { [key]: value } })
  }

  return (
    <>
      <section id="family-bg">
        <form method='POST'>
          <div className="row">
            <input
              type="text"
              name="fathername"
              placeholder="Father's Full Name"
              value={fatherName}
              onChange={(e) => handleChange("fatherName", e.target.value)}
            />

            <div className="select-items family-background">
              <span>Occupation: </span>
              <div className="occupation-items">
                {
                  checkBoxItems.map(checkBoxItem => (
                    <span key={checkBoxItem}>
                      <input type="checkbox" name="occupation" className="selection" value={checkBoxItem} />
                      {checkBoxItem}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="row">
            <input
              type="text"
              name="mothername"
              placeholder="Mother's Full Name"
              value={motherName}
              onChange={(e) => handleChange("motherName", e.target.value)}
            />

            <div className="select-items family-background">
              <span>Occupation: </span>
              <div className="occupation-items">
                {
                  checkBoxItems.map(checkBoxItem => (
                    <span key={checkBoxItem}>
                      <input type="checkbox" name="occupation" className="selection" value={checkBoxItem} onChange={() => handleOccupationChange(checkBoxItem)} />
                      {checkBoxItem}
                    </span>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="row">
            <input
              type="text"
              name="grandfathername"
              placeholder="Grandfather's Full Name"
              value={grandfatherName}
              onChange={(e) => handleChange("grandfatherName", e.target.value)}
            />

            <select
              name='income'
              id='income'
              onChange={(e) => handleChange("familyIncome", e.target.value)}
              value={familyIncome}>
              {
                // Display option at first
                familyIncome === "Family income per year" ? (
                  <option> {familyIncome} </option>) : (
                  null
                )
              }
              {incomeList.map(income => (
                <option key={income} value={income}> {income} </option>
              ))
              }
            </select>
          </div>
        </form>
      </section>
    </>
  )
}