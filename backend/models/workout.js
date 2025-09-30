const mongoose = require('mongoose');
const WorkoutSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
type: { type: String, required: true }, // e.g., Running, HIIT, Yoga
durationMin: Number,
calories: Number,
date: { type: Date, default: Date.now },
notes: String
});
module.exports = mongoose.model('Workout', WorkoutSchema);