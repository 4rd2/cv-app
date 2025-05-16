import '../styles/Section.css'

//Creates a 
function Section({value, setValue, placeholder}) {
    return (
        <div className="section">
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        value = {value}
                        onChange={(event) => setValue(event.target.value)}
                        placeholder= {placeholder}
                    />
                </div>
            </form>
        </div>
    )

}

export default Section;