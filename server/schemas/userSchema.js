const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        date: {
            type: Date,
            default: Date.now
        }
    });
userSchema.index({name: 1, email: 1}, {unique: true});
const User = mongoose.model("User", userSchema);
module.exports = User;
