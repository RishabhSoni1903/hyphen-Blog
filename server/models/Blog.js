import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    blogPreviewImg: {
        type: String,
        default: ""
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: {
        type: [{ type: mongoose.Schema.Types.ObjectId }],
        default: [],
    }
}, { timestamps: true })

const Blog = mongoose.model("Blog", BlogSchema)
export default Blog;