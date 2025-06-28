const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://saipavankvrn:J12Y05@cluster0.zbdu2y4.mongodb.net/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/todos', todoRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});