import express from 'express';

import {
  getCiclos,
  getCicloById,
  createCiclo,
  updateCiclo,
  deleteCiclo
} from '../controllers/ciclos.controller.js';

const router = express.Router();

router.get('/', getCiclos);
router.get('/:id', getCicloById);
router.post('/', createCiclo);
router.put('/:id', updateCiclo);
router.delete('/:id', deleteCiclo);

export default router;