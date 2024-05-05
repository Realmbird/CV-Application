import { useState } from 'react'
import '../styles/generalinfo.css'
function GeneralInfo () {
    const [generalInfo, setValue] = useState({});
    const handleFormChange = (event) => {
        const { id, value } = event.target; 
        const newInfo = {...generalInfo, [id]: value}
        setValue(newInfo)
        console.log(newInfo)
    }
    return (
    <div className="generalInfo">
        <h3 className='subtitle'>
            General Info
        </h3>
        {/* name */}
        <input
        type="text"
        value={generalInfo.name}
        onChange={handleFormChange}
        id="name"
        placeholder='Name'
        />
        {/* email */}
        <input
        type="text"
        value={generalInfo.email}
        onChange={handleFormChange}
        id="email"
        placeholder='Email'
        />
        {/* phone */}
        <input
        type="text"
        value={generalInfo.phone}
        onChange={handleFormChange}
        id="phone"
        placeholder='Phone Number'
        />
    </div>
    )
}

export {GeneralInfo} 