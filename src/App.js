import React, { createContext, useState } from 'react';
import Timetable from './Timetable';
import Form_field from './Form_field';
import Hero from './Hero';
import Chatbox from './Chatbox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const TimeTableContext = React.createContext("")


function App() {
  const [fields, setFields] = useState([
    {Friday : { 0 : {'classroom': 0, 'faculty': 'Sameer sir', 'subject': 3}}},
    {Friday : { 0 : {'classroom': 0, 'faculty': 'Sameer sir', 'subject': 3}}},
    {Friday : { 0 : {'classroom': 0, 'faculty': 'Sameer sir', 'subject': 3}}},
    {Friday : { 0 : {'classroom': 0, 'faculty': 'Sameer sir', 'subject': 3}}},
    {Friday : { 0 : {'classroom': 0, 'faculty': 'Sameer sir', 'subject': 3}}},
    {Friday : { 0 : {'classroom': 0, 'faculty': 'Sameer sir', 'subject': 3}}}
  ])

 

  console.log(fields[0].Friday)

  console.log(fields)

  return (
    <TimeTableContext.Provider value={{fields,setFields}}>
      <>
    <div className="App">

{/* <TimeTableContext.Provider ></TimeTableContext.Provider> */}
        <Router>
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/timetable' element={<Timetable value={{fields,setFields}} />}/>
            <Route path='/form_field' element={<Form_field/>}/>
          </Routes>
        </Router>
      <Chatbox />
    </div>
    </>
    </TimeTableContext.Provider>
  );
}

export default App;
