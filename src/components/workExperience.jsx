import { useState } from "react"
function WorkExperience () {
    const[workExperience, setWorkExperience] = useState({})
    const handleFormChange = (event) => {
        const { id, value } = event.target; 
        const newInfo = {...workExperience, [id]: value}
        setWorkExperience(newInfo)
        console.log(newInfo)
    }
    return (
        <div className = "workExperience dataContainer">
            <h3 className='subtitle'>
                Work Experience
            </h3>
            {/* Company */}
            <input
            type="text"
            id="name"
            value = {workExperience.name}
            placeholder='Company'
            onChange={handleFormChange}
            />
            {/* Position */}
            <input
            type="text"
            id="position"
            value = {workExperience.position}
            placeholder='Position'
            onChange={handleFormChange}
            />
            {/* Start Date */}
            <input
            type="text"
            id="start_date"
            value = {workExperience.start_date}
            placeholder='Start Date'
            onChange={handleFormChange}
            />
            {/* End Date */}
            <input
            type="text"
            id="end_date"
            value = {workExperience.end_date}
            placeholder='End Date'
            onChange={handleFormChange}
            />
        </div>
    )
}
export {WorkExperience}