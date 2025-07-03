
// index.js
require('dotenv').config();

const express = require('express');
const path = require('path');
const todosRouter = require('./routes/todos.route');
const userRoute = require('./routes/user.route');
const categoryRoutes = require('./routes/category.routes');
const priorityRoutes = require('./routes/priority.routes');
const statusLogRoutes = require('./routes/statusLog.routes');
const sequelize = require('./config/pg'); // Tambahkan ini

const app = express();
const PORT = 3000;

// Middleware to parse JSON in request bodies
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Base route 
app.get('/', (req, res) => {
  res.send('✅ Welcome to the Todo API — visit /api/todos');
});

// Mounting the todos router
app.use('/api/todos', todosRouter);
app.use('/api/users', userRoute);
app.use('/api/categories', categoryRoutes);
app.use('/api/priorities', priorityRoutes);
app.use('/api/status-logs', statusLogRoutes);

// Error handling middleware 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

sequelize.authenticate()
  .then(() => {
    console.log('✅ Connected to PostgreSQL via Sequelize');
    return sequelize.sync(); // Sinkronisasi model, hapus jika tidak ingin auto sync
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Unable to connect to the database:', err);
  });