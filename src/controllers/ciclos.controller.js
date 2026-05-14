import {
  obtenerCiclos,
  obtenerCicloPorId,
  crearCiclo,
  actualizarCiclo,
  eliminarCiclo
} from '../services/ciclos.service.js';

export const getCiclos = async (req, res) => {
  const { data, error } = await obtenerCiclos();

  if (error) return res.status(500).json(error);

  res.json(data);
};

export const getCicloById = async (req, res) => {
  const { data, error } = await obtenerCicloPorId(req.params.id);

  if (error) return res.status(404).json(error);

  res.json(data);
};

export const createCiclo = async (req, res) => {
  const { data, error } = await crearCiclo(req.body);

  if (error) return res.status(500).json(error);

  res.status(201).json(data);
};

export const updateCiclo = async (req, res) => {
  const { data, error } = await actualizarCiclo(req.params.id, req.body);

  if (error) return res.status(500).json(error);

  res.json(data);
};

export const deleteCiclo = async (req, res) => {
  const { error } = await eliminarCiclo(req.params.id);

  if (error) return res.status(500).json(error);

  res.json({
    message: 'Ciclo eliminado'
  });
};