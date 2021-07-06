const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    sureName: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;