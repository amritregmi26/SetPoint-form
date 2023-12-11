import React from 'react'
import '../../styles/sidebar.css'
import Progress from './progress'

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="container">
                <h2 className="title">
                    <span>Set</span>
                    <span>Point</span>
                </h2>
                <p className="subtitle">Schedule appointments with individuals in your vicinity at your convenience</p>
                
                <Progress />
            </div>
        </section>
    )
}

export default Sidebar