import React from 'react'
import '../../../styles/form.css'
import { useForm } from '../../../context/formContext'

export const ReviewSection = () => {

  const { state } = useForm();
  const { formData } = state;
  
  return (
    <>
      <section id="review">
        <div className="row">
          <div className="col">
            <h2>Personal Details:</h2>
          </div>
          <div className="col">
            <p> Last Name:
              <span> {formData.lastName}</span>
            </p>
            <p> First Name:
              <span> {formData.firstName}</span>
            </p>
            <p> Email:
              <span> {formData.email}</span>
            </p>
          </div>
          <div className="col">
            <p> Gender:
              <span> {formData.gender}</span>
            </p>
            <p> DOB:
              <span> {formData.dob}</span>
            </p>
            <p> Phone: 
              <span> {formData.phone}</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Family Background:</h2>
          </div>
          <div className="col">
            <p> Father:
              <span> {formData.fatherName}</span>
            </p>
            <p>Mother:
              <span> {formData.motherName}</span>
            </p>
            <p>Grandfather:
              <span> {formData.grandfatherName}</span>
            </p>
          </div>
          <div className="col">
            <p>Occupation:
              <span> {formData.fatherOcc}</span>
            </p>
            <p> Occupation:
              <span> {formData.motherOcc}</span>
            </p>
            <p>Family Income:
              <span> {formData.familyIncome}</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Your Location:</h2>
          </div>
          <div className="col">
            <p>Country:
              <span> Nepal</span>
            </p>
            <p> District:
              <span> {formData.district}</span>
            </p>
            <p> Appointment Date:
              <span> {formData.dateAD}</span>
            </p>
          </div>
          <div className="col">
            <p> Province:
              <span> {formData.province}</span>
            </p>
            <p>City:
              <span> {formData.city}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}