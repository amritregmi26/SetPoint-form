import React, { createContext, useContext, useReducer } from 'react'
import { formReducer } from '../reducer/formReducer';

const initialState = {
    step: 0,
    formData: {
        firstName: "",
        lastName: "",
        province: "Choose your province",
        district: "Choose your district",
        city: "Choose your city",
        dateAD: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        fatherName: "",
        motherName: "",
        grandfatherName: "",
        fatherOcc: "",
        motherOcc: "",
        familyIncome: "Family income per year"
    }
}

const FormContext = createContext(initialState);

// Provider Function implementation
const FormProvider = ({ children }) => {

    const [state, dispatch] = useReducer(formReducer, initialState)

    const value = {
        dispatch,
        state, 
    }

    return <FormContext.Provider value={value}>
        {children}
    </FormContext.Provider>
}

// Custom hook for accessing context
const useForm = () => {
    return useContext(FormContext);
}

export { FormProvider, useForm }