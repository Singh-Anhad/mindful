// routes/sentiment.route.js
import express from 'express';
const router = express.Router();
import { analyzeSentiment } from '../controller/sentiment.controller.js';

router.post('/analyze', analyzeSentiment);

export default router;
