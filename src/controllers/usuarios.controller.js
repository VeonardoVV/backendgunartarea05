import {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
} from '../services/usuarios.service.js';

export const getUsuarios = async (req, res) => {
  const { data, error } = await obtenerUsuarios();

  if (error) return res.status(500).json(error);

  res.json(data);
};

export const getUsuarioById = async (req, res) => {
  const { data, error } = await obtenerUsuarioPorId(req.params.id);

  if (error) return res.status(404).json(error);

  res.json(data);
};

export const createUsuario = async (req, res) => {
  const { data, error } = await crearUsuario(req.body);

  if (error) return res.status(500).json(error);

  res.status(201).json(data);
};

export const updateUsuario = async (req, res) => {
  const { data, error } = await actualizarUsuario(req.params.id, req.body);

  if (error) return res.status(500).json(error);

  res.json(data);
};

export const deleteUsuario = async (req, res) => {
  const { error } = await eliminarUsuario(req.params.id);

  if (error) return res.status(500).json(error);

  res.json({
    message: 'Usuario eliminado'
  });
};