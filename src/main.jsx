import React, { Provider } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FormProvider } from './context/formContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
)
