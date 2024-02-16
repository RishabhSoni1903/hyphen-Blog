import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";

export const addBlog = async (req, res) => {
    try {
        const { title, summary, content } = req.body;
        const author = req.user.id;
        const newBlog = new Blog({
            title, summary, content, author
        })
        await newBlog.save()
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const blog = await Blog.findById(id);
        if (!blog) {
            res.status(400).json({ message: "Blog not found" })
        } else if (blog.author !== userId) {
            res.status(404).json({ message: "Access Denied!" })
        } else {
            const deletedBlog = await Blog.findByIdAndDelete(id);
            res.status(200).json(deletedBlog);
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}