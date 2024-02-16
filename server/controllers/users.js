import User from "../models/User.js";
import Blog from "../models/Blog.js"; // ---------- Do not remove this line ----------
import mongoose from 'mongoose';

export const fetchUserProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const fetchUserByJwt = async (req, res) => {
    try {
        const id = req.user.id;
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const fetchAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const fetchUserFollowers = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate('followers').exec();
        if (user) {
            return res.status(200).json(user.followers)
        } else {
            return res.status(400).json({ message: "No user found!" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const fetchUserBlogs = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate('blogs').exec();
        if (user) {
            return res.status(200).json(user.blogs)
        } else {
            return res.status(400).json({ message: "No user found!" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const fetchUserFollowing = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate('following').exec();
        if (user) {
            return res.status(200).json(user.following)
        } else {
            return res.status(400).json({ message: "No user found!" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const follow = async (req, res) => {
    try {
        const id = req.user.id;
        const { userToFollowId } = req.params;

        const user = await User.findById(id);
        const userToFollow = await User.findById(userToFollowId);
        if (!user || !userToFollow) {
            return res.status(400).send({ message: "User not found!" })
        }
        if (user.following.includes(userToFollowId)) {
            return res.status(400).json({ message: "Already following!" })
        }
        user.following.push(userToFollowId);
        userToFollow.followers.push(id);
        await user.save();
        await userToFollow.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const unfollow = async (req, res) => {
    try {
        const userId = req.user.id;
        const { userToUnfollowId } = req.params;

        const user = await User.findById(userId);
        const userToUnfollow = await User.findById(userToUnfollowId);
        if (!user || !userToUnfollow) {
            return res.status(400).send({ message: "User not found!" })
        }
        if (!user.following.includes(userToUnfollowId)) {
            return res.status(400).json({ message: "Not following the user!" })
        }
        user.following = user.following.filter((id) => { return id.toString() !== userToUnfollowId });
        userToUnfollow.followers = userToUnfollow.followers.filter((id) => { return id.toString() !== userId });
        await user.save();
        await userToUnfollow.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}