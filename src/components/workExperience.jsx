/* eslint-disable react/prop-types */
import { useState } from "react"
function WorkExperienceInputs ({info, handleFormChange}) {
    return (
        <>
            {/* Company */}
            <input
            type="text"
            id="name"
            value = {info.name}
            placeholder='Company'
            onChange={handleFormChange}
            />
            {/* Position */}
            <input
            type="text"
            id="position"
            value = {info.position}
            placeholder='Position'
            onChange={handleFormChange}
            />
            {/* Start Date */}
            <input
            type="text"
            id="start_date"
            value = {info.start_date}
            placeholder='Start Date'
            onChange={handleFormChange}
            />
            {/* End Date */}
            <input
            type="text"
            id="end_date"
            value = {info.end_date}
            placeholder='End Date'
            onChange={handleFormChange}
            />
        </>
    )
}
function WorkExperience ({info, setValue}) {
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

    return (
        <div className = "workExperience dataContainer">
            <h3 className='subtitle'>
                Work Experience
            </h3>
            {show && <WorkExperienceInputs info={info} handleFormChange={handleFormChange}/>}
            <div className="controllers">
                <button onClick={handleShow}>Edit</button>
                <button>Update</button>
            </div>
        </div>
    )
}
export {WorkExperience}