/* eslint-disable react/prop-types */
// import { useState } from 'react'
function GeneralInfo ({info, setValue}) {
    const handleFormChange = (event) => {
        const { id, value } = event.target; 
        const newInfo = {...info, [id]: value}
        setValue(newInfo)
        console.log(newInfo)
    }
    return (
    <div className="generalInfo dataContainer">
        <h3 className='subtitle'>
            General Info
        </h3>
        {/* name */}
        <input
        type="text"
        value={info.name}
        onChange={handleFormChange}
        id="name"
        placeholder='Name'
        />
        {/* email */}
        <input
        type="text"
        value={info.email}
        onChange={handleFormChange}
        id="email"
        placeholder='Email'
        />
        {/* phone */}
        <input
        type="text"
        value={info.phone}
        onChange={handleFormChange}
        id="phone"
        placeholder='Phone Number'
        />
    </div>
    )
}

export {GeneralInfo} 