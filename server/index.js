import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Configuring the environment variables
dotenv.config();


// Initializing the express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
// app.use('/api/auth', authRoutes);

//test
app.get('/', (req, res) => {
  res.send('API is running!............');
});

// Start the server
app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});