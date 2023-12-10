import React from 'react'
import { Header, Button } from '../common'

export const FamilyBackground = () => {

  let incomeList = ["Below 50000", "50000-200000", "200000-500000", "500000-1000000", "More than 1000000"];
  let checkBoxItems = ["Farmer", "Teacher", "Government Officer", "Other"];

  return (
    <>
      <section id="family-bg">
        <form method='POST'>
          <div className="row">
            <input type="text" name="fathername" placeholder="Father's Full Name" />
            <div className="select-items family-background">
              <span>Occupation: </span>
              <div className="occupation-items">
                {
                  checkBoxItems.map(checkBoxItem => (
                    <span key={checkBoxItem}> <input type="checkbox" name="occupation" className="selection" />
                  {checkBoxItem}
                </span>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="row">
            <input type="text" name="mothername" placeholder="Mother's Full Name" />
            <div className="select-items family-background">
              <span>Occupation: </span>
              <div className="occupation-items">
                <span><input type="checkbox" name="occupation" className="selection" /> Farmer</span>
                <span><input type="checkbox" name="occupation" className="selection" /> Teacher </span>
                <span><input type="checkbox" name="occupation" className="selection" /> Government Officer</span>
                <span><input type="checkbox" name="occupation" className="selection" /> Other</span>
              </div>
            </div>
          </div>
          <div className="row">
            <input type="text" name="grandfathername" placeholder="Grandfather's Full Name" />

            <select name='income' id='income'>
              <option value="Family Income Per Year"> Family Income Per Year </option>
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