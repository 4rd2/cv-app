import '../styles/Resume.css'

function Resume({name, email, number, experiences, education}) {
    return (
        <div className="resume-container">
            <div className="resume-content">
                <h1>{name}</h1>
                <div className="contacts">
                    <p><strong>{email}</strong></p>
                    <p><strong>{number}</strong></p>
                </div>
                <h2>Experience</h2>
                <div>
                    {experiences.map((exp, index) => (
                        <div className="practical" key={index}>
                            <p><strong>{exp.title}</strong>{exp.company}</p>
                            <p>{exp.date}</p>
                        </div>
                    ))}
                </div>
                <h2>Education</h2>
                <div>
                    {education.map((exp, index) => (
                        <div className="practical" key={index}>
                            <p><strong>{exp.title}</strong>{exp.company}</p>
                            <p>{exp.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Resume