/* eslint-disable react/prop-types */
import { useState } from 'react'
function GeneralInputs ({info, handleFormChange}){
    return (
    <>
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

    </>
    )
}

function GeneralInfo ({info, setValue, cvData, updateCV}) {
    const [show, setShow] = useState(false)
    const handleFormChange = (event) => {
        const { id, value } = event.target; 
        const newInfo = {...info, [id]: value}
        setValue(newInfo)
        console.log(newInfo)
    }
    const handleShow = () => {
        setShow(!show);
        console.log(!show)
    };
    const updateForm = () => {
        const newCV = {...cvData, "general": info}
        updateCV(newCV)
    }
    
    
    return (
    <div className="generalInfo dataContainer">
        <h3 className='subtitle'>
            General Info
        </h3>
        {show && <GeneralInputs info = {info} handleFormChange = {handleFormChange}/> }
        {/* Buttons */}
        <div className="controllers">
            <button onClick = {handleShow}>Edit</button>
            <button onClick={updateForm}>Update</button>
        </div>
    </div>
    )
}

export {GeneralInfo} 