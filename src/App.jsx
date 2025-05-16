import { useState } from 'react'
import './App.css'
import Section from './components/Section';
import Resume from './components/resume.jsx';
import Experience from './components/Experience';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(""); 
  const [educational, setEducational] = useState([]);
  const [practical, setPractical] = useState([]);


  return (
    <div className='app-container'>
      <div className="sidebar">
        <h2>General Information</h2>
        <Section value={name} setValue={setName} placeholder={'John Doe'}/>
        <Section value={email} setValue={setEmail} placeholder={'example@email.com'}/>
        <Section value={number} setValue={setNumber} placeholder={'(123) 456-7890'}/>
        <h2>Educational Experience</h2>
        <Experience experiences={educational} setExperiences={setEducational} boxName={'Educational'}/>
        <h2>Practical Experience</h2>
        <Experience experiences={practical} setExperiences={setPractical} boxName={'Practical'}/>
      </div>
      <div className="resume-section">
        <Resume name={name} email={email} number={number} experiences={practical} education={educational}/>
      </div>
    </div>
  )
}

export default App
