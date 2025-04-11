import express from 'express';
import { applyJob } from '../controllers/user.controller.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { getAllApplications } from '../controllers/user.controller.js';


const router = express.Router();

// Multer setup for resume uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploads/resumes';
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/apply', upload.single('resume'), applyJob);


export default router;
