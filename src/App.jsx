import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { GeneralInfo } from './components/generalinfo'
import { EducationExperience } from './components/educationalexperience';
import { WorkExperience } from './components/workExperience';
import './styles/section.css'
function App() {
  // for general learning 
  const [generalInfo, setGeneralInfo] = useState({});
  
  return (
    <>
      <GeneralInfo
       info = {generalInfo}
        setValue = {setGeneralInfo}
        />
      <EducationExperience />
      <WorkExperience />
    </>
  )
}

export default App
