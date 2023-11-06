import express from 'express';
import { getAllPosts, createPost } from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getAllPosts);
router.post('/create', createPost);

export default router;
