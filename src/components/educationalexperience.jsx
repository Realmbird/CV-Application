import { useState } from 'react'
function EducationExperience () {
    const[educationExperience, setEducationExperience] = useState({})
    const handleFormChange = (event) => {
        const { id, value } = event.target; 
        const newInfo = {...educationExperience, [id]: value}
        setEducationExperience(newInfo)
        console.log(newInfo)
    }
    return (
        <div className="educationExperience dataContainer">
            <h3 className='subtitle'>
                Educational Experience
            </h3>
            {/* School Name */}
            <input
            type="text"
            id="name"
            placeholder='School Name'
            onChange={handleFormChange}
            />
            {/* Title of Study */}
            <input
            type="text"
            id="title"
            placeholder='Title of Study'
            onChange={handleFormChange}
            />
            {/* Date of Study */}
            <input
            type="text"
            id="date"
            placeholder='Date of Study'
            onChange={handleFormChange}
            />
        </div>
    )
}
export {EducationExperience}