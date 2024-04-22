// Chatbox.js
import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

const config = {
  floating: true,
};

function Chatbox() {
  const [steps, setSteps] = useState([
    {
      id: '0',
      message: 'Hey there! I am your assistant. How can I help you?',
      trigger: '1'
    },
    {
      id: '1',
      user: true,
      trigger: '2'
    },
    {
      id: '2',
      message: 'Hello, how can I assist you further?',
      end: true
    }
  ]);

  const handleEnd = (input) => {
    setSteps([
      ...steps,
      { id: 'user', message: input, trigger: '2' }
    ]);
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Bot"
        steps={steps}
        {...config}
        userDelay={500}
        handleEnd={handleEnd}
      />
    </ThemeProvider>
  );
}

export default Chatbox;
