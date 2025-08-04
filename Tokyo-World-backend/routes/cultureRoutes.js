import express from 'express';
import { getCulture, getCultureById } from '../controllers/cultureController.js';

const router = express.Router();

router.get('/', getCulture);
router.get('/:id', getCultureById);

export default router;
