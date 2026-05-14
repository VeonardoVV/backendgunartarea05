import express from 'express';

import {
  getCarreras,
  getCarreraById,
  createCarrera,
  updateCarrera,
  deleteCarrera
} from '../controllers/carreras.controller.js';

const router = express.Router();

router.get('/', getCarreras);
router.get('/:id', getCarreraById);
router.post('/', createCarrera);
router.put('/:id', updateCarrera);
router.delete('/:id', deleteCarrera);

export default router;