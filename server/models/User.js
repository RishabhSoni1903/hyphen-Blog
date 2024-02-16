import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 4,
    },
    bio: {
        type: String,
        required: true,
    },
    blogs: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],
        default: [],
    },
    followers: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        default: [],
    },
    following: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        default: [],
    },
    profilePhoto: {
        type: String,
        default: ""
    }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema);
export default User;