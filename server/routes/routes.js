import express, { Router } from 'express';
import find from '../controllers/findCollege.js'

const router = express.Router();

router.post('/find', find);

export default router;