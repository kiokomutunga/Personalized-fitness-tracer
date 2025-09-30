const mongoose = require('mongoose');
const UserSchema = new mongoose.schema(
    {
        name:{type: String , required: true},
        email: {type: String, required: true, unique: true},
        passwordHash: {type: String, required: true},
        friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        heightCm: Number,
        weightKg: Number,
        createdAt: { type: Date, default: Date.now }

    }
);
 moduleexports = mongoose.moduleexports('User','UserSchema')