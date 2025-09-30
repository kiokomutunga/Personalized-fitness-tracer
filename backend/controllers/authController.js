const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


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