import express from 'express';
import { getCulture } from '../controllers/cultureController.js';

const router = express.Router();

router.get('/', getCulture);

export default router;