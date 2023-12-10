import React from 'react';
import '../../../styles/form.css';

export const YourLocation = () => {

    let provinceList = ["Koshi", "Bagmati", "Gandaki", "Madhesh", "Lumbini", "Sudur-Paschim", "Karnali"];

    return (
        <>
            <section id="your-location">
                <form method='POST'>
                    <div className="row">
                        <select name='country' disabled>
                            <option value="Nepal">Nepal</option>
                        </select>

                        <select name='province' id='province'>
                            <option value="chooseYourProvince"> Choose Your Province </option>
                            {provinceList.map(province => (
                                <option key={province} value={province}> {province} </option>
                            ))
                            }
                        </select>
                    </div>

                    <div className="row">
                        <select name='district' id='district'>
                            <option value="chooseYourDistrict">Choose Your District</option>
                        </select>

                        <select name='city' id='city'>
                            <option value="chooseYourCity">Choose Your City</option>
                        </select>
                    </div>

                    <div className="row">
                        <input type="date" name="date" id="date" />
                        <p> Date in BS: 2080/08/21 </p>
                    </div>

                </form>
            </section>
        </>
    )
}