import '../styles/CV.css'
function CV ({cvData}) {
    // {general, education, work}
    return (
        <div className='CV'>
            <h3>{cvData.general.name}</h3>
            <h4>{cvData.general.email} {cvData.general.phone}</h4>
            <h2>
                Educational Experience
            </h2>
            <p>
                {cvData.education.name} {cvData.education.title} {cvData.education.date}
            </p>
            <h2>
                Work Experience
            </h2>
            <p>
                {cvData.work.name} {cvData.work.position} {cvData.work.start_date} {cvData.work.end_date}
            </p>
        </div>
    )
}
export {CV}