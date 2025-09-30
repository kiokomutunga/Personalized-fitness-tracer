require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const workoutRoutes = require('./routes/workouts');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes);


const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_URI).then(() => {
app.listen(PORT, () => console.log('Server running on', PORT));
});