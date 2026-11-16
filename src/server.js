const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let notes = [
  { id: 1, course: 'CSCI 3106 - OS Lab', title: 'Docker & GitHub Assignment', status: 'In Progress' },
  { id: 2, course: 'Computer Networks', title: 'Review TCP/IP Handshake', status: 'Completed' }
];

// Healthcheck endpoint (Bonus D)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', service: 'Campus-Notes-Service', timestamp: new Date().toISOString() });
});

// Get all notes
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

// Add a new note
app.post('/api/notes', (req, res) => {
  const { course, title } = req.body;
  if (!course || !title) {
    return res.status(400).json({ error: 'Course and title are required' });
  }
  const newNote = { id: Date.now(), course, title, status: 'Pending' };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter(n => n.id !== id);
  res.status(204).send();
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Campus-Notes-Service running on http://localhost:${PORT}`);
});
