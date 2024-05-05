/* eslint-disable react/prop-types */
import { useState } from 'react'
function EducationInputs ({info, handleFormChange}) {
    return (<>
    {/* School Name */}
    <input
    type="text"
    id="name"
    value = {info.name}
    placeholder='School Name'
    onChange={handleFormChange}
    />
    {/* Title of Study */}
    <input
    type="text"
    id="title"
    value = {info.title}
    placeholder='Title of Study'
    onChange={handleFormChange}
    />
    {/* Date of Study */}
    <input
    type="text"
    id="date"
    value = {info.date}
    placeholder='Date of Study'
    onChange={handleFormChange}
    />
    </>)
}
function EducationExperience ({info, setValue, cvData, updateCV}) {
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
        const newCV = {...cvData, "education": info}
        updateCV(newCV)
    }

    return (
        <div className="educationExperience dataContainer">
            <h3 className='subtitle'>
                Educational Experience
            </h3>
            {show && <EducationInputs info={info} handleFormChange={handleFormChange}/>}
            <div className="controllers">
                <button onClick={handleShow}>Edit</button>
                <button onClick={updateForm}>Update</button>
            </div>
        </div>
    )
}
export {EducationExperience}