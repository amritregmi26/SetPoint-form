import React from 'react';
import '../../../styles/form.css';
import { Header } from '../common';

export const YourLocation = () => {

    let provinceList = ["Choose Your Province", "Koshi", "Bagmati", "Gandaki", "Madhesh", "Lumbini", "Sudur-Paschim", "Karnali"]

    return (
        <>
            <Header text="Appointment Form" />
            <section id="your-location">
                <form className='location-form'>

                    <div className="row row-1">

                        <select name='country' disabled>
                            <option value="Nepal">Nepal</option>
                        </select>

                        <select name='province' id='province'>
                            {
                                provinceList.map(province => (
                                    <option key={province} value={province}> {province} </option>
                                ))
                            }
                        </select>

                    </div>

                    

                </form>
            </section>
        </>
    )
}