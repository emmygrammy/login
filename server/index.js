import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routers/authRoutes.js';




// Configuring the environment variables
dotenv.config();


// Connect to MongoDB
connectDB();


// Initializing the express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/api/auth', authRoutes);

//test
app.get('/test', (req, res) => {
  console.log('🔥 TEST ROUTE HIT');
  res.send('API is running!............');
});

// Start the server
app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});