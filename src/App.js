// App.js
import React, { createContext, useState } from 'react';
import Timetable from './Timetable';
import Form_field from './Form_field';
import Hero from './Hero';
import Chatbox from './Chatbox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '@mui/icons-material';

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>TimeTable Generator</h1>
      </header>
      <main>

<TimeTableContext.Provider ></TimeTableContext.Provider>
        <Router>
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/timetable' element={<Timetable/>}/>
            <Route path='/form_field' element={<Form_field/>}/>
          </Routes>
        </Router>
        {/* <Hero /> */}
        {/* <Timetable /> */}
        {/* <Form_field /> */}
      </main>
      <Chatbox />
    </div>
  );
}

export default App;
