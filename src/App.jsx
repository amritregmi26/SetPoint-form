import React from 'react'
import './styles/App.css'
import Sidebar from './components/sidebar/sidebar'
import { YourLocation } from './components/mainbody/form'

const App = () => {

  return (
    <div className="App">

      <Sidebar />

      <div className="right-section">
        <YourLocation />
      </div>

    </div>
  )
}

export default App;
