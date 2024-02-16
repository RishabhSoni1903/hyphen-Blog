import mongoose from 'mongoose';
import User from './User.js';

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

}, { timestamps: true })

const Comment = mongoose.model('Comment', CommentSchema);;
export default Comment;