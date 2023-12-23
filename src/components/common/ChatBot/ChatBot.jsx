import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '50vh',
        }}
      >
        <Box sx={{ flexGrow: 1, overflow: 'auto', width: '15vw' }}>
          {messages.map((message, index) => (
            <Grid
              key={index}
              container
              spacing={2}
              justifyContent={
                message.sender === 'user' ? 'flex-end' : 'flex-start'
              }
            >
              <Grid item>
                <Avatar>{message.sender === 'user' ? 'U' : 'B'}</Avatar>
              </Grid>
              <Grid item xs={8}>
                <Paper elevation={2} sx={{ padding: 1 }}>
                  <Typography>{message.text}</Typography>
                </Paper>
              </Grid>
            </Grid>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
          <TextField
            variant='outlined'
            fullWidth
            label='Type a message...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <SendIcon
            sx={{ cursor: 'pointer', marginLeft: 2 }}
            onClick={handleSendMessage}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default Chatbot;
