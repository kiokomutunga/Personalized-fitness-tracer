const Workout = require('../models/Workout');


exports.recommend = async (req, res) => {
const userId = req.user.id;
// Simple rule-based recommendations: check last 7 days activity
const from = new Date();
from.setDate(from.getDate() - 7);
const recent = await Workout.find({ user: userId, date: { $gte: from } });
// If user did lots of cardio, recommend strength and vice versa
const cardio = recent.filter(r => ['Running','Cycling'].includes(r.type)).length;
const strength = recent.filter(r => ['Weights','HIIT'].includes(r.type)).length;
let suggestions = [];
if (cardio > strength) suggestions.push('2x Full-body strength sessions (30 min)');
else suggestions.push('2x 25-30 min cardio intervals');


// Placeholder: integrate OpenAI for richer suggestions
// const openaiRes = await callOpenAI(...)


res.json({ suggestions });
};