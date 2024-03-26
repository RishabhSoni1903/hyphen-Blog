import express from 'express';
import { addBlog, deleteBlog, getAllBlogs, getBlogById, likeUnlike } from '../controllers/blog.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', verifyToken, addBlog);
router.put('/:id/like', verifyToken, likeUnlike);
router.delete('/:id', verifyToken, deleteBlog);

export default router;