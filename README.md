# Personalized-fitness-tracer
Personalized Fitness Tracker

A complete plan + starter code snippets for a React Native mobile app with a Node.js/Express + MongoDB backend . Features:

User auth (email/password + JWT)

Track workouts (type, duration, calories, notes)

Track daily calories & goals

Progress graphs (frontend using chart library)

Community leaderboard (friends or global)
Project structure
# Personalized Fitness Tracker

A complete plan + starter code snippets for a **React Native** mobile app with a **Node.js/Express + MongoDB** backend (MERN-style, but mobile front-end). Features:

* User auth (email/password + JWT)
* Track workouts (type, duration, calories, notes)
* Track daily calories & goals
* Progress graphs (frontend using chart library)
* Community leaderboard (friends or global)
* Optional: AI-based workout recommendations endpoint (placeholder / OpenAI integration)

---

## Project structure (suggested)

```
fitness-tracker/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  │  ├─ authController.js
│  │  │  ├─ workoutController.js
│  │  │  ├─ goalController.js
│  │  │  └─ recommendationController.js
│  │  ├─ models/
│  │  │  ├─ User.js
│  │  │  ├─ Workout.js
│  │  │  └─ Goal.js
│  │  ├─ routes/
│  │  │  ├─ auth.js
│  │  │  ├─ workouts.js
│  │  │  └─ goals.js
│  │  ├─ middleware/
│  │  │  └─ authMiddleware.js
│  │  └─ app.js
│  └─ package.json
├─ mobile/
│  ├─ App.tsx
│  ├─ src/
│  │  ├─ screens/
│  │  │  ├─ AuthScreen.tsx
│  │  │  ├─ HomeScreen.tsx
│  │  │  ├─ WorkoutLogScreen.tsx
│  │  │  ├─ GraphsScreen.tsx
│  │  │  └─ LeaderboardScreen.tsx
│  │  ├─ components/
│  │  ├─ contexts/
│  │  └─ services/
│  └─ package.json
└─ README.md
```

---

## Database models (MongoDB + Mongoose)

### User.js

```js
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  heightCm: Number,
  weightKg: Number,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);
```

### Workout.js

```js
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
```

### Goal.js

```js
const mongoose = require('mongoose');
const GoalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['calories','workouts','minutes'], required: true },
  target: Number,
  period: { type: String, enum: ['daily','weekly','monthly'], default: 'daily' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Goal', GoalSchema);
```

---

## Backend - key endpoints (Express)

### Auth

* `POST /api/auth/register` { name, email, password }
* `POST /api/auth/login` { email, password } -> returns JWT

### Workouts

* `POST /api/workouts` (auth) create a workout
* `GET /api/workouts?from=&to=&userId=` list workouts (for graphs)
* `GET /api/workouts/:id` get single workout
* `DELETE /api/workouts/:id` delete

### Goals

* `POST /api/goals` create/replace goal
* `GET /api/goals` get user's goals

### Leaderboard

* `GET /api/leaderboard?type=weekly` returns top users by calories or workouts

### Recommendations (AI)

* `GET /api/recommendations` returns workout suggestions based on recent activity or calls external AI

---

## Sample backend code snippets

### `app.js` (Express setup)

```js
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
```

### `authController.js` (register/login essentials)

```js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: 'Email exists' });
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await User.create({ name, email, passwordHash: hash });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  res.json({ token, user: { id: user._id, name: user.name, email } });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid creds' });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(400).json({ message: 'Invalid creds' });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  res.json({ token, user: { id: user._id, name: user.name, email } });
};
```

### `recommendationController.js` (simple rule-based + OpenAI placeholder)

```js
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
```

---

## Mobile (React Native) - key ideas

* Use **TypeScript** for better DX.
* Navigation: `@react-navigation/native` with stack + bottom tabs (Home, Log, Graphs, Friends)
* State: Context API or Redux Toolkit Query for remote data fetching and caching.
* Charts: `react-native-chart-kit` or `victory-native` for line/bar charts.
* HTTP: `axios` or `fetch`, store JWT in `AsyncStorage`.
* Forms: `react-hook-form` for fast forms.

### Example `services/api.ts`

```ts
import axios from 'axios';
const API = axios.create({ baseURL: process.env.API_URL || 'http://10.0.2.2:4000/api' });
export default API;
```

### Example `WorkoutLogScreen.tsx` (simplified)

```tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import API from '../services/api';

export default function WorkoutLogScreen(){
  const [type,setType] = useState('Running');
  const [duration,setDuration] = useState('30');
  const [calories,setCalories] = useState('300');

  const submit = async ()=>{
    await API.post('/workouts', { type, durationMin: Number(duration), calories: Number(calories) });
    // navigate back or show toast
  }

  return (
    <View>
      <TextInput value={type} onChangeText={setType} />
      <TextInput value={duration} onChangeText={setDuration} keyboardType='numeric' />
      <TextInput value={calories} onChangeText={setCalories} keyboardType='numeric' />
      <Button title='Save' onPress={submit} />
    </View>
  )
}
```

### GraphsScreen (fetch workouts, map to chart points)

* Fetch `/api/workouts?from=&to=` and accumulate calories per day for a sparkline

### LeaderboardScreen

* Fetch `/api/leaderboard?type=weekly` and render a FlatList sorted by value. Show user rank highlighted.

---

## Authentication & Security

* Store JWT in `AsyncStorage` (or SecureStore on production).
* Protect backend routes with `authMiddleware` that verifies JWT.
* Rate-limit important endpoints.
* Validate input on both backend and frontend.
* Hash passwords with bcrypt.

---

## Dev & Deployment

* Use Docker for backend (optional) and deploy to Heroku/Vercel (for frontend) or Render/AWS/GCP for backend.
* Use a managed MongoDB (MongoDB Atlas) and set `MONGO_URI`.
* CI: GitHub Actions for tests & lint.

---

## Optional advanced features

* **Social features:** friend invites, follow/unfollow, comments on workouts
* **Real-time:** WebSockets for live leaderboard updates (Socket.io)
* **Wearable integration:** sync with Google Fit / Apple Health
* **AI personalization:** use OpenAI to craft plans, or train a lightweight model on user history
* **Gamification:** badges, streaks, XP & levels

---

## Quick-start checklist

1. `cd backend` → `npm init` → install: express mongoose bcryptjs jsonwebtoken dotenv cors
2. Create models, controllers, routes from the snippets above
3. `cd mobile` → `npx react-native init` (or `expo init`) with TypeScript
4. Implement auth flow, store token, implement workout log & fetch
5. Add charts and leaderboard
6. Add optional recommendation endpoint and wire UI

---

## Next step — what I can deliver now

Tell me **which part you want first** and I'll generate ready-to-run code for it — e.g.:

* Full backend (Express + Mongoose) with Dockerfile and Postman collection, OR
* Mobile starter (React Native / Expo) with auth and workout logging screens, OR
* Both (full minimal MVP) — I can scaffold both in this document.

Pick one and I will scaffold full files you can copy/paste.
