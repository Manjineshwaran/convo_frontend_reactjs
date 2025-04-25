import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography, TextField, Paper, List, ListItem, ListItemText } from '@mui/material';
import { sendMessage } from '../api/conversation';
import { logout } from '../api/auth';

const Conversation = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    try {
      const userMessage = { sender: 'user', text: message };
      setConversation([...conversation, userMessage]);
      
      const response = await sendMessage(message);
      const botMessage = { sender: 'bot', text: response.response };
      
      setConversation(prev => [...prev, botMessage]);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5, p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Conversation</Typography>
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
      
      <Paper sx={{ p: 2, mb: 2, height: 400, overflow: 'auto' }}>
        <List>
          {conversation.map((msg, index) => (
            <ListItem key={index} sx={{ 
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              bgcolor: msg.sender === 'user' ? '#e3f2fd' : 'transparent',
              borderRadius: 1,
              mb: 1
            }}>
              <ListItemText primary={msg.text} />
            </ListItem>
          ))}
        </List>
      </Paper>
      
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
        />
        <Button variant="contained" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Conversation;