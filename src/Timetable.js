// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// function Timetable() {
//   const [timetable, setTimetable] = useState([]);

//   useEffect(() => {
//     // Fetch timetable data from the backend
//     fetchTimetableData();
//   }, []);

//   const fetchTimetableData = () => {
//     // Fetch timetable data from the backend API
//     fetch('http://your-backend-api-url/timetable')
//       .then(response => response.json())
//       .then(data => {
//         setTimetable(data.timetable);
//       })
//       .catch(error => {
//         console.error('Error fetching timetable data:', error);
//       });
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Day</TableCell>
//             <TableCell>Time</TableCell>
//             <TableCell>Subject</TableCell>
//             <TableCell>Faculty</TableCell>
//             <TableCell>Classroom</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {timetable.map(day => (
//             <React.Fragment key={day.day}>
//               <TableRow>
//                 <TableCell rowSpan={day.periods.length + 1}>{day.day}</TableCell>
//               </TableRow>
//               {day.periods.map(period => (
//                 <TableRow key={period.time}>
//                   <TableCell>{period.time}</TableCell>
//                   <TableCell>{period.subject}</TableCell>
//                   <TableCell>{period.faculty}</TableCell>
//                   <TableCell>{period.classroom}</TableCell>
//                 </TableRow>
//               ))}
//             </React.Fragment>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default Timetable;
// -----------------------------------------------------------------------------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function Timetable() {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    // Mock timetable data
    const mockTimetableData = [
      {
        day: 'Monday',
        periods: [
          { time: '9:00 AM', subject: 'AWT', faculty: 'Chitan', classroom: '302' },
          { time: '10:00 AM', subject: 'Cyber', faculty: 'Aksha', classroom: '304' },
          { time: '11:00 AM', subject: 'AI', faculty: 'Rajiv', classroom: '302' },
          { time: '1:00 PM', subject: 'Crypto', faculty: 'Payal', classroom: '304' },
        ],
      },
      {
        day: 'Tuesday',
        periods: [
          { time: '9:00 AM', subject: 'AWT Lab', faculty: 'Komal', classroom: '216' },
          { time: '11:00 AM', subject: 'CDC', faculty: 'No-one', classroom: '404' },
          { time: '12:00 PM', subject: 'Cyber', faculty: 'Aksha', classroom: '304' },
        ],
      },
      {
        day: 'Wednesday',
        periods: [
          { time: '9:00 AM', subject: 'AI Lab', faculty: 'Rajiv', classroom: '401' },
          { time: '11:00 AM', subject: 'AI', faculty: 'Rajiv', classroom: '304' },
          { time: '1:00 PM', subject: 'Crypto', faculty: 'Payal', classroom: '304' },
          { time: '4:00 PM', subject: 'Comm', faculty: 'Boss', classroom: '403' },
        ],
      },
      {
        day: 'Thursday',
        periods: [
          { time: '9:00 AM', subject: 'AI', faculty: 'Rajiv', classroom: '302' },
          { time: '11:00 AM', subject: 'CDC', faculty: 'No-one', classroom: '404' },
          { time: '1:00 PM', subject: 'Crypto', faculty: 'Payal', classroom: '304' },
        ],
      },
      {
        day: 'Friday',
        periods: [
          { time: '9:00 AM', subject: 'Cyber Lab', faculty: 'Aksha', classroom: '401' },
          { time: '12:00 PM', subject: 'Cyber', faculty: 'Aksha', classroom: '304' },
          { time: '2:00 PM', subject: 'Crypto Lab', faculty: 'Payal', classroom: '203' },
        ],
      },
    ];

    setTimetable(mockTimetableData);
  }, []);

  const viewTimetable = () => {
    console.log(timetable);
  };

  const downloadTimetable = () => {
    // Code to download the timetable as a file
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(timetable)], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'timetable.json';
    document.body.appendChild(element);
    element.click();
  };

  const regenerateTimetable = () => {
    // Regenerate timetable here
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day/Time</TableCell>
              <TableCell>9:00 AM</TableCell>
              <TableCell>10:00 AM</TableCell>
              <TableCell>11:00 AM</TableCell>
              <TableCell>12:00 PM</TableCell>
              <TableCell>1:00 PM</TableCell>
              <TableCell>2:00 PM</TableCell>
              <TableCell>4:00 PM</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timetable.map(day => (
              <TableRow key={day.day}>
                <TableCell>{day.day}</TableCell>
                <TableCell>
                  {day.periods
                    .filter(period => period.time === '9:00 AM')
                    .map((period, index) => (
                      <div key={index}>
                        <div>Subject: {period.subject}</div>
                        <div>Faculty: {period.faculty}</div>
                        <div>Classroom: {period.classroom}</div>
                      </div>
                    ))}
                </TableCell>
                <TableCell>
                  {day.periods
                    .filter(period => period.time === '10:00 AM')
                    .map((period, index) => (
                      <div key={index}>
                        <div>Subject: {period.subject}</div>
                        <div>Faculty: {period.faculty}</div>
                        <div>Classroom: {period.classroom}</div>
                      </div>
                    ))}
                </TableCell>
                <TableCell>
                  {day.periods
                    .filter(period => period.time === '11:00 AM')
                    .map((period, index) => (
                      <div key={index}>
                        <div>Subject: {period.subject}</div>
                        <div>Faculty: {period.faculty}</div>
                        <div>Classroom: {period.classroom}</div>
                      </div>
                    ))}
                </TableCell>
                <TableCell>
                  {day.periods
                    .filter(period => period.time === '12:00 PM')
                    .map((period, index) => (
                      <div key={index}>
                        <div>Subject: {period.subject}</div>
                        <div>Faculty: {period.faculty}</div>
                        <div>Classroom: {period.classroom}</div>
                      </div>
                    ))}
                </TableCell>
                <TableCell>
                  {day.periods
                    .filter(period => period.time === '1:00 PM')
                    .map((period, index) => (
                      <div key={index}>
                        <div>Subject: {period.subject}</div>
                        <div>Faculty: {period.faculty}</div>
                        <div>Classroom: {period.classroom}</div>
                      </div>
                    ))}
                </TableCell>
                <TableCell>
                  {day.periods
                    .filter(period => period.time === '2:00 PM')
                    .map((period, index) => (
                      <div key={index}>
                        <div>Subject: {period.subject}</div>
                        <div>Faculty: {period.faculty}</div>
                        <div>Classroom: {period.classroom}</div>
                      </div>
                    ))}
                </TableCell>
                <TableCell>
                  {day.periods
                    .filter(period => period.time === '4:00 PM')
                    .map((period, index) => (
                      <div key={index}>
                        <div>Subject: {period.subject}</div>
                        <div>Faculty: {period.faculty}</div>
                        <div>Classroom: {period.classroom}</div>
                      </div>
                    ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '20px' }}>
        <Button onClick={viewTimetable} variant="contained" size="small" color="primary">
          View
        </Button>{' '}
        <Button onClick={downloadTimetable} variant="contained" size="small" color="success">
          Download
        </Button>{' '}
        <Button onClick={regenerateTimetable} variant="contained" size="small" color="secondary">
          Generate
        </Button>
      </div>
    </div>
  );
}

export default Timetable;


// ---------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// function Timetable() {
//   const [timetable, setTimetable] = useState([]);
//   const [startTime, setStartTime] = useState('');
//   const [endTime, setEndTime] = useState('');

//   useEffect(() => {
//     const fetchTimetable = async () => {
//       try {
//         const response = await fetch('YOUR_BACKEND_URL');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data from the server');
//         }
//         const data = await response.json();
//         setTimetable(data.timetable);
//         setStartTime(data.startTime);
//         setEndTime(data.endTime);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };
//     fetchTimetable();
//   }, []);

//   const viewTimetable = () => {
//     console.log(timetable);
//   };

//   const downloadTimetable = () => {
//     const element = document.createElement('a');
//     const file = new Blob([JSON.stringify(timetable)], { type: 'text/plain' });
//     element.href = URL.createObjectURL(file);
//     element.download = 'timetable.json';
//     document.body.appendChild(element);
//     element.click();
//   };

//   const regenerateTimetable = () => {
//     // Implement a function to regenerate timetable
//   };

//   const generateTimeSlots = () => {
//     const timeSlots = [];
//     const start = new Date(`01/01/2000 ${startTime}`);
//     const end = new Date(`01/01/2000 ${endTime}`);
//     while (start < end) {
//       timeSlots.push(start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
//       start.setHours(start.getHours() + 1);
//     }
//     return timeSlots;
//   };

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Day/Time</TableCell>
//               {generateTimeSlots().map((slot, index) => (
//                 <TableCell key={index}>{slot}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {timetable.map((day, index) => (
//               <TableRow key={index}>
//                 <TableCell>{day.day}</TableCell>
//                 {generateTimeSlots().map((slot, index) => (
//                   <TableCell key={index}>
//                     {day.periods
//                       .filter((period) => period.time === slot)
//                       .map((period, index) => (
//                         <div key={index}>
//                           <div>Subject: {period.subject}</div>
//                           <div>Faculty: {period.faculty}</div>
//                           <div>Classroom: {period.classroom}</div>
//                         </div>
//                       ))}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <div style={{ marginTop: '20px' }}>
//         <Button onClick={viewTimetable} variant="contained" color="primary">
//           View
//         </Button>{' '}
//         <Button onClick={downloadTimetable} variant="contained" color="success">
//           Download
//         </Button>{' '}
//         <Button onClick={regenerateTimetable} variant="contained" color="secondary">
//           Regenerate
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Timetable;
// ----------@ 2nd thing----------------
// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

// function Timetable() {
//   const [timetable, setTimetable] = useState([]);
//   const [startTime, setStartTime] = useState('');
//   const [endTime, setEndTime] = useState('');

//   useEffect(() => {
//     const fetchTimetable = async () => {
//       try {
//         const response = await fetch('YOUR_BACKEND_URL');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data from the server');
//         }
//         const data = await response.json();
//         setTimetable(data.timetable);
//         setStartTime(data.startTime);
//         setEndTime(data.endTime);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };
//     fetchTimetable();
//   }, []);

//   const viewTimetable = () => {
//     console.log(timetable);
//   };

//   const downloadTimetable = () => {
//     const element = document.createElement('a');
//     const file = new Blob([JSON.stringify(timetable)], { type: 'text/plain' });
//     element.href = URL.createObjectURL(file);
//     element.download = 'timetable.json';
//     document.body.appendChild(element);
//     element.click();
//   };

//   const regenerateTimetable = () => {
//     // Regenerate timetable here
//     fetchTimetable();
//   };

//   const generateTimeSlots = () => {
//     const timeSlots = [];
//     const start = new Date(`01/01/2000 ${startTime}`);
//     const end = new Date(`01/01/2000 ${endTime}`);
//     while (start < end) {
//       timeSlots.push(start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
//       start.setHours(start.getHours() + 1);
//     }
//     return timeSlots;
//   };

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Day/Time</TableCell>
//               {generateTimeSlots().map((slot, index) => (
//                 <TableCell key={index}>{slot}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {timetable.map((day, index) => (
//               <TableRow key={index}>
//                 <TableCell>{day.day}</TableCell>
//                 {generateTimeSlots().map((slot, index) => (
//                   <TableCell key={index}>
//                     {day.periods
//                       .filter((period) => period.time === slot)
//                       .map((period, index) => (
//                         <div key={index}>
//                           <div>Subject: {period.subject}</div>
//                           <div>Faculty: {period.faculty}</div>
//                           <div>Classroom: {period.classroom}</div>
//                         </div>
//                       ))}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <div style={{ marginTop: '20px' }}>
//         <Button onClick={viewTimetable} variant="contained" color="primary">
//           View
//         </Button>{' '}
//         <Button onClick={downloadTimetable} variant="contained" color="success">
//           Download
//         </Button>{' '}
//         <Button onClick={regenerateTimetable} variant="contained" color="secondary">
//           Regenerate
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Timetable;
