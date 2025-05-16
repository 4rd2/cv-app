import '../styles/experience.css'

function Experience({experiences, setExperiences, boxName}) {
    //Create a new experience into setExperiences
    function handleClick() {
        const newExperience = { company: "", title: "", date: "" };
        setExperiences([...experiences, newExperience]);
    }
    function handleInputChange(index, field, value) {
        const updated = [...experiences];
        updated[index][field] = value;
        setExperiences(updated);
    }

    return (
        <div className="experience-container">
            <button className="add-experience-button" onClick={handleClick}>Add Experience</button>
            <form>
                {experiences.map((exp, index) => (
                    <div className="experience-entry" key={index}>
                        <h3>{boxName} Experience #{index+1}</h3>
                        <div className="form-group">
                            <input 
                                type="text"
                                value={exp.company}
                                onChange={(e) => handleInputChange(index, "company", e.target.value)}
                                placeholder="Company"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                value={exp.title}
                                onChange={(e) => handleInputChange(index, "title", e.target.value)}
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                value={exp.date}
                                onChange={(e) => handleInputChange(index, "date", e.target.value)}
                                placeholder="Date"
                            />
                        </div>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default Experience