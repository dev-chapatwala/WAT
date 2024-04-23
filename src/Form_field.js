import React, { useState, useContext } from 'react';
import './App.css';
import { TimeTableContext } from './App';
import Timetable from './Timetable';

function Form_field() {
  
  const {setFields} = useContext(TimeTableContext)

  const [data,setData] = useState([])
  const [division, setDivision] = useState('');
  const [numberOfSubjects, setNumberOfSubjects] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const [numberOfFaculties, setNumberOfFaculties] = useState(0);
  const [faculties, setFaculties] = useState([]);
  const [numberOfClassrooms, setNumberOfClassrooms] = useState(0);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [lunchBreak, setLunchBreak] = useState('');

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const handleFacultyChange = (index, field, value) => {
    const updatedFaculties = [...faculties];
    updatedFaculties[index][field] = value;
    setFaculties(updatedFaculties);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      division,
      numberOfSubjects,
      subjects,
      numberOfFaculties,
      faculties,
      numberOfClassrooms,
      startTime,
      endTime,
      lunchBreak,
    };
    console.log('Data sent to backend:', data); // Log the data before sending it to the backend
    try {
      const response = await fetch('http://localhost:5000/timetable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json(); // Parse response JSON
        console.log("Response from backend", responseData);
        setFields(responseData)
       // Set the redirect state to true
       window.location.href('http://localhost:3000/timetable')
      } else {
        console.error('Failed to generate timetable.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleNumberOfSubjectsChange = (e) => {
    const count = parseInt(e.target.value);
    if (count >= 0) {
      setNumberOfSubjects(count);
      const newSubjects = [];
      for (let i = 0; i < count; i++) {
        newSubjects.push({ name: '', credits: '' });
      }
      setSubjects(newSubjects);
    }
  };

  const handleNumberOfFacultiesChange = (e) => {
    const count = parseInt(e.target.value);
    if (count >= 0) {
      setNumberOfFaculties(count);
      const newFaculties = [];
      for (let i = 0; i < count; i++) {
        newFaculties.push({ name: '', subject: '' });
      }
      setFaculties(newFaculties);
    }
  };

  const handleNumberOfClassroomsChange = (e) => {
    const count = parseInt(e.target.value);
    if (count >= 0) {
      setNumberOfClassrooms(count);
    }
  };

  return (
    <div>
      
      <h1>TimeTable Generator</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Division:
          <input
            type="text"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number of Subjects:
          <input
            type="number"
            value={numberOfSubjects}
            onChange={handleNumberOfSubjectsChange}
          />
        </label>
        <br />
        {subjects.map((subject, index) => (
          <div key={index}>
            <label>
              Subject {index + 1} Name:
              <input
                type="text"
                value={subject.name}
                onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
              />
            </label>
            <br />
            <label>
              Subject {index + 1} Credits:
              <select
                value={subject.credits}
                onChange={(e) => handleSubjectChange(index, 'credits', e.target.value)}
              >
                <option value="">Select Credits</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
            <br />
          </div>
        ))}
        <br />
        <label>
          Number of Faculties:
          <input
            type="number"
            value={numberOfFaculties}
            onChange={handleNumberOfFacultiesChange}
          />
        </label>
        <br />
        {faculties.map((faculty, index) => (
          <div key={index}>
            <label>
              Faculty {index + 1} Name:
              <input
                type="text"
                value={faculty.name}
                onChange={(e) => handleFacultyChange(index, 'name', e.target.value)}
              />
            </label>
            <br />
            <label>
              Faculty {index + 1} Subject:
              <select
                value={faculty.subject}
                onChange={(e) => handleFacultyChange(index, 'subject', e.target.value)}
              >
                <option value="">Select Subject</option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject.name}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </label>
            <br />
          </div>
        ))}
        <br />
        <label>
          Number of Classrooms Available:
          <input
            type="number"
            value={numberOfClassrooms}
            onChange={handleNumberOfClassroomsChange}
          />
        </label>
        <br />
        <label>
          Start Time:
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Time:
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time for Lunch Break:
          <select
            value={lunchBreak}
            onChange={(e) => setLunchBreak(e.target.value)}
          >
            <option value="">Select Lunch Break</option>
            <option value="30">30 Minutes</option>
            <option value="60">1 Hour</option>
            <option value="90">1 Hour 30 Minutes</option>
            <option value="120">2 Hours</option>
          </select>
        </label>
        <br />
        <br />
        <a href='/timetable'>
        <button type="submit">Generate Timetable</button>
        </a>
      </form>

      {/* <Timetable /> */}
    </div>
  );
}

export default Form_field;
