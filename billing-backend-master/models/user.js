//create a mongoose schema for user containing username, password, first name, last name, email and role

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
});

const userModel = mongoose.model('User', userSchema);
export default userModel;