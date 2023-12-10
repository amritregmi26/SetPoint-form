import React, { createContext, useReducer } from 'react'
import { formReducer } from '../reducer/formReducer';
import useStep from '../hooks/useStep';

const initialState = {
    step: 0, 
    formData: {}
}

const FormContext = createContext(initialState);

const FormProvider = ({children}) => {

    const [state, dispatch] = useReducer(formReducer, initialState)

    return <FormContext.Provider >
        {children}
    </FormContext.Provider>
}  


export { FormProvider }