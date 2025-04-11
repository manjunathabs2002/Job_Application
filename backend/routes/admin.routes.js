import express from 'express';
import { getAllApplications } from '../controllers/user.controller.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { verifyToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/applications', verifyToken, isAdmin, getAllApplications);

export default router;
