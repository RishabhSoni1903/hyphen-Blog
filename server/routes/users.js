import express from 'express';
import {
    fetchAllUsers,
    fetchUserBlogs,
    fetchUserByJwt,
    fetchUserFollowers,
    fetchUserFollowing,
    fetchUserProfile,
    follow,
    unfollow,
} from '../controllers/users.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/all', fetchAllUsers);
router.get('/:id', fetchUserProfile);
router.get('/:id/blogs', fetchUserBlogs);
router.get('/:id/followers', fetchUserFollowers);
router.get('/:id/following', fetchUserFollowing);
router.get('/', verifyToken, fetchUserByJwt);
router.post('/follow/:userToFollowId', verifyToken, follow);
router.post('/unfollow/:userToUnfollowId', verifyToken, unfollow);

export default router;