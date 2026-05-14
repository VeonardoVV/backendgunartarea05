import { supabase } from '../config/supabase.js';

export const obtenerUsuarios = async () => {
  return await supabase
    .from('usuarios')
    .select('*');
};

export const obtenerUsuarioPorId = async (id) => {
  return await supabase
    .from('usuarios')
    .select('*')
    .eq('id', id)
    .single();
};

export const crearUsuario = async (usuario) => {
  return await supabase
    .from('usuarios')
    .insert([usuario])
    .select();
};

export const actualizarUsuario = async (id, usuario) => {
  return await supabase
    .from('usuarios')
    .update(usuario)
    .eq('id', id)
    .select();
};

export const eliminarUsuario = async (id) => {
  return await supabase
    .from('usuarios')
    .delete()
    .eq('id', id);
};