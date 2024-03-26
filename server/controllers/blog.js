import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";

export const addBlog = async (req, res) => {
    try {
        const { title, summary, content } = req.body;
        const author = req.user.id;
        const user = await User.findById(author)
        const newBlog = new Blog({
            title, summary, content, author
        })
        await newBlog.save()
        user.blogs.push(newBlog._id)
        await user.save();
        console.log(newBlog)
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', '_id name profilePhoto');
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id).populate('author', 'name').exec();
        if (!blog) {
            res.status(400).json({ message: "Blog not found" })
        } else {
            res.status(200).json(blog)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const likeUnlike = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            res.status(400).json({ message: "Blog not found" })
        }
        else {
            const userId = req.user.id;
            if (blog.likes.includes(userId)) {
                blog.likes.splice(blog.likes.indexOf(userId), 1);
            } else {
                blog.likes.push(userId);
            }
            await blog.save();
            res.status(200).json(blog);
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getFeed = async (req, res) => {
    try {
        const id = req.user.id
        const user = await User.findById(id);
        let ids = user.following;
        let feedPosts = await Blog.find({
            'author': {
                $in: ids
            }
        }).sort({ createdAt: -1 }).populate('author').exec();
        res.status(200).json(feedPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
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