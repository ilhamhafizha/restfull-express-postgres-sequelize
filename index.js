require('dotenv').config();
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const sequelize = require('./config/pg');

const todosRouter = require('./routes/todos.route');
const userRoutes = require('./routes/user.route');
const categoryRoutes = require('./routes/category.routes');
const priorityRoutes = require('./routes/priority.routes');
const statusLogRoutes = require('./routes/statusLog.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Halaman utama
app.get('/', (req, res) => {
  res.send('<h1>Berhasil Login! Ini halaman utama 🚀</h1>');
});

// Halaman login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Proses login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await sequelize.query(
      'SELECT * FROM users WHERE email = :email',
      {
        replacements: { email },
        type: QueryTypes.SELECT
      }
    );

    if (!users.length) {
      return res.status(401).send("Email tidak ditemukan!");
    }

    const validPassword = await bcrypt.compare(password, users[0].password);
    if (!validPassword) {
      return res.status(401).send("Password salah!");
    }

    return res.redirect("/");

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).send("Internal Server Error");
  }
});

// Halaman register
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Proses register
app.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "Semua field wajib diisi!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sequelize.query(
      'INSERT INTO users (name, email, password) VALUES (:name, :email, :password)',
      {
        replacements: { name, email, password: hashedPassword },
        type: QueryTypes.INSERT
      }
    );

    res.redirect("/login");

  } catch (err) {
    console.error("Register error:", err);
    res.status(500).send("Gagal register");
  }
});

// API routes
app.use('/api/todos', todosRouter);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/priorities', priorityRoutes);
app.use('/api/status-logs', statusLogRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
sequelize.authenticate()
  .then(() => {
    console.log('✅ Connected to PostgreSQL via Sequelize');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });
