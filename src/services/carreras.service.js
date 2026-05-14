import { supabase } from '../config/supabase.js';

export const obtenerCarreras = async () => {
  return await supabase
    .from('carreras')
    .select('*');
};

export const obtenerCarreraPorId = async (id) => {
  return await supabase
    .from('carreras')
    .select('*')
    .eq('id', id)
    .single();
};

export const crearCarrera = async (carrera) => {
  return await supabase
    .from('carreras')
    .insert([carrera])
    .select();
};

export const actualizarCarrera = async (id, carrera) => {
  return await supabase
    .from('carreras')
    .update(carrera)
    .eq('id', id)
    .select();
};

export const eliminarCarrera = async (id) => {
  return await supabase
    .from('carreras')
    .delete()
    .eq('id', id);
};