import express from 'express';
import { verifyToken } from '../middlewares/auth.js';
import { addComment, deleteComment, getCommentsOnPost } from '../controllers/comments.js';

const router = express.Router();

router.get('/:id', getCommentsOnPost)
router.post('/:id', verifyToken, addComment) // Here :id refers to blog's id
router.delete('/:id', verifyToken, deleteComment) // Here :id refers to comment's id to be deleted

export default router;