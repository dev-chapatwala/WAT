import React, { useState, useEffect, useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { TimeTableContext } from './App';

function Timetable() {
  const [timetable, setTimetable] = useState([]);
  const { fields } = useContext(TimeTableContext);
  const [finalData, setFinalData] = useState([])

  console.log('Fields: ', fields)

  useEffect(() => {
    // Use mock timetable data if actual data is not present
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

    if (JSON.stringify(fields[0].Friday) === JSON.stringify({
      "0": {
          "classroom": 0,
          "faculty": "Sameer sir",
          "subject": 3
      }
  })) {
      console.log("I'm in if block");
      setTimetable(mockTimetableData);
  } else {

    console.log("I'm in else block")
      convertSchedule(fields)
  }
  
  }, []);

  const convertSchedule = (originalData) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const convertedData = [];

    days.forEach(day => {
      const periods = [];

      Object.values(originalData[0][day]).forEach((period, index) => {
        if (period.classroom !== null && period.faculty !== null && period.subject !== null) {
          let time = '';
          if (index === 1) time = '9:00 AM';
          else if (index === 2) time = '10:00 AM';
          else if (index === 3) time = '11:00 AM';
          else if (index === 4) time = '12:00 PM';
          else if (index === 5) time = '2:00 PM';
          else if (index === 6) time = '3:00 AM';
          else if (index === 7) time = '4:00 PM';

          periods.push({
            time,
            subject: 'Subject' + index, // You should replace this with the actual subject
            faculty: period.faculty,
            classroom: period.classroom.toString()
          });
        }
      });

      convertedData.push({
        day,
        periods
      });
    });

    setTimetable(convertedData)
  };


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
        <Button onClick={downloadTimetable} variant="contained" size="small" color="primary">
          Download
        </Button>{' '}
      </div>
    </div>
  );
}

export default Timetable;

