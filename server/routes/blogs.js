import express from 'express';
import { addBlog, deleteBlog, getAllBlogs } from '../controllers/blog.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', verifyToken, addBlog);
router.delete('/:id', verifyToken, deleteBlog)

export default router