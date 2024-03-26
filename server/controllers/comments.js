import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";


export const addComment = async (req, res) => {
    try {
        const userId = req.user.id;
        const blogId = req.params.id;
        const { content } = req.body;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            res.status(400).json({ message: "Blog not found" })
        } else {
            const newComment = new Comment({
                content,
                user: userId,
                blogId
            })
            const savedComment = await newComment.save();
            const comment = await Comment.findById(savedComment._id).populate('user', '_id name profilePhoto').exec()
            res.status(200).json(comment);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const userId = req.user.id
        const comment = await Comment.findById(commentId);
        if (!comment) {
            res.status(400).json({ message: "Comment not found!" })
        } else if (userId !== comment.user.toString()) {
            res.status(404).json({ message: "Access Denied!" })
        } else {
            const deletedComment = await Comment.findByIdAndDelete(commentId);
            res.status(200).json({ deletedComment })
        }
    } catch (error) {

    }
}

export const getCommentsOnPost = async (req, res) => {
    try {
        const blogId = req.params.id;
        const comments = await Comment.find({ blogId: blogId }).sort([['date', -1]]).populate('user', '_id name profilePhoto').exec();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}