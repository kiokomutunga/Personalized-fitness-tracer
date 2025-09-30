const mongoose = require('mongoose');
const GoalSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
type: { type: String, enum: ['calories','workouts','minutes'], required: true },
target: Number,
period: { type: String, enum: ['daily','weekly','monthly'], default: 'daily' },
createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Goal', GoalSchema);