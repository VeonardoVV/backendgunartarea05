import {
  obtenerEstudiantes,
  obtenerEstudiantePorId,
  crearEstudiante,
  actualizarEstudiante,
  eliminarEstudiante
} from '../services/estudiantes.service.js';

export const getEstudiantes = async (req, res) => {
  const { data, error } = await obtenerEstudiantes();

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
};

export const getEstudianteById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await obtenerEstudiantePorId(id);

  if (error) {
    return res.status(404).json(error);
  }

  res.json(data);
};

export const createEstudiante = async (req, res) => {
  const { data, error } = await crearEstudiante(req.body);

  if (error) {
    return res.status(500).json(error);
  }

  res.status(201).json(data);
};

export const updateEstudiante = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await actualizarEstudiante(id, req.body);

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
};

export const deleteEstudiante = async (req, res) => {
  const { id } = req.params;

  const { error } = await eliminarEstudiante(id);

  if (error) {
    return res.status(500).json(error);
  }

  res.json({
    message: 'Estudiante eliminado correctamente'
  });
};