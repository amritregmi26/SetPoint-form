import React, { useState } from 'react';
import '../../../styles/form.css';
import data from '../../../locationData/result.json'
import { useForm } from '../../../context/formContext';

export const YourLocation = () => {

    const { dispatch, state } = useForm();
    const { formData } = state;
    const { province, city, district, dateAD, dateBS } = formData;

    const [selectedProvince, setSelectedProvince] = useState(province);
    const [selectedDistrict, setSelectedDistrict] = useState(district);


    // Updating user input using dispatch
    function handleChange(key, value) {
        dispatch({ type: "UPDATE_DATA", payload: { [key]: value } })
        if (key === "province") setSelectedProvince(value);
        if (key === "district") setSelectedDistrict(value);
    }

    return (
        <>
            <section id="your-location">
                <form method='POST'>
                    <div className="row">
                        <select name='country' disabled>
                            <option value="Nepal">Nepal</option>
                        </select>

                        <select
                            name='province'
                            id='province'
                            value={province}
                            onChange={(e) => handleChange("province", e.target.value)}>
                            {
                                // Display Choose your province option at first
                                province === "Choose your province" ? (
                                    <option> {province} </option>) : (
                                    null
                                )
                            }

                            {data.provinceList.map(province => (
                                <option key={province} value={province}> {province} </option>
                            ))
                            }
                        </select>
                    </div>

                    <div className="row">
                        <select
                            name='district'
                            id='district'
                            value={district}
                            onChange={(e) => handleChange("district", e.target.value)}>
                            {
                                // Display Choose your district option at first if province is selected
                                district === "Choose your district" ? (
                                    <option>
                                        {selectedProvince === "Choose your province" ?
                                            "Select a province first" :
                                            "Choose your district"}
                                    </option>) : (
                                    null
                                )
                            }

                            {
                                selectedProvince !== "Choose your province" && data[selectedProvince].map(item => (
                                    <option key={item.district} value={item.district}> {item.district} </option>

                                ))
                            }
                        </select>

                        <select
                            name='city'
                            id='city'
                            value={city}
                            onChange={(e) => handleChange("city", e.target.value)}>
                            {
                                // Display province and district are required option at first
                                city === "Choose your city" ? (
                                    <option>
                                        {selectedDistrict === "Choose your district" ?
                                            "Select district first" :
                                            "Choose your city"}
                                    </option>) : (
                                    null
                                )
                            }

                            {

                               
                                data[selectedProvince] &&
                                data[selectedProvince]
                                    .find(entry => entry.district === selectedDistrict)?.cities.map(city => (
                                        <option key={city} value={city}> {city} </option>
                                    ))
                            }
                        </select>
                    </div>

                    <div className="row">
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={dateAD}
                            onChange={(e) => handleChange("dateAD", e.target.value)}
                        />
                        <p></p>
                    </div>

                </form>
            </section>
        </>
    )
}