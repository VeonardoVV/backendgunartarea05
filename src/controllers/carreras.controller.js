import {
  obtenerCarreras,
  obtenerCarreraPorId,
  crearCarrera,
  actualizarCarrera,
  eliminarCarrera
} from '../services/carreras.service.js';

export const getCarreras = async (req, res) => {
  const { data, error } = await obtenerCarreras();

  if (error) return res.status(500).json(error);

  res.json(data);
};

export const getCarreraById = async (req, res) => {
  const { data, error } = await obtenerCarreraPorId(req.params.id);

  if (error) return res.status(404).json(error);

  res.json(data);
};

export const createCarrera = async (req, res) => {
  const { data, error } = await crearCarrera(req.body);

  if (error) return res.status(500).json(error);

  res.status(201).json(data);
};

export const updateCarrera = async (req, res) => {
  const { data, error } = await actualizarCarrera(req.params.id, req.body);

  if (error) return res.status(500).json(error);

  res.json(data);
};

export const deleteCarrera = async (req, res) => {
  const { error } = await eliminarCarrera(req.params.id);

  if (error) return res.status(500).json(error);

  res.json({
    message: 'Carrera eliminada'
  });
};