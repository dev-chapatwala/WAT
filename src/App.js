// App.js
import React from 'react';
import Timetable from './Timetable';
import Form_field from './Form_field';
import Hero from './Hero';
import Chatbox from './Chatbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TimeTable Generator</h1>
      </header>
      <main>
        {/* <Hero /> */}
        {/* <Timetable /> */}
        {/* <Form_field /> */}
      </main>
      <Chatbox />
    </div>
  );
}

export default App;
