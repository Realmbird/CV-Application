import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { GeneralInfo } from './components/generalinfo'
import { EducationExperience } from './components/educationalexperience';
import { WorkExperience } from './components/workExperience';
import { CV } from './components/CV';
import './styles/section.css'
import './styles/App.css'
function App() {
  // for general learning 
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationalExperience, setEducationalExperience] = useState({})
  const [workExperience, setWorkExperience] = useState({})
  const [cvData, setCVData] = useState({
    'general': {},
    'education': {},
    'work': {}
  })
  
  return (
    <div className='App'>
      <div className="sections">
        <GeneralInfo
        info = {generalInfo}
          setValue = {setGeneralInfo}
          cvData = {cvData}
          updateCV = {setCVData}
          />
        <EducationExperience info = {educationalExperience} setValue={setEducationalExperience}  cvData = {cvData} updateCV = {setCVData}/>
        <WorkExperience info = {workExperience} setValue = {setWorkExperience}  cvData = {cvData} updateCV = {setCVData}/>
      </div>
      {/* {General, Education, Work} */}
      <CV cvData = {cvData}/>
    </div>
  )
}

export default App
