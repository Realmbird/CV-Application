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
            value = {educationExperience.name}
            placeholder='School Name'
            onChange={handleFormChange}
            />
            {/* Title of Study */}
            <input
            type="text"
            id="title"
            value = {educationExperience.title}
            placeholder='Title of Study'
            onChange={handleFormChange}
            />
            {/* Date of Study */}
            <input
            type="text"
            id="date"
            value = {educationExperience.date}
            placeholder='Date of Study'
            onChange={handleFormChange}
            />
            <div className="controllers">
                <button>Edit</button>
                <button>Update</button>
            </div>
        </div>
    )
}
export {EducationExperience}