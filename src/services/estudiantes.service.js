import { supabase } from '../config/supabase.js';

export const obtenerEstudiantes = async () => {
  return await supabase
    .from('estudiantes')
    .select(`
      *,
      carreras(nombre),
      ciclos(numero, descripcion)
    `);
};

export const obtenerEstudiantePorId = async (id) => {
  return await supabase
    .from('estudiantes')
    .select(`
      *,
      carreras(nombre),
      ciclos(numero, descripcion)
    `)
    .eq('id', id)
    .single();
};

export const crearEstudiante = async (estudiante) => {
  return await supabase
    .from('estudiantes')
    .insert([estudiante])
    .select();
};

export const actualizarEstudiante = async (id, estudiante) => {
  return await supabase
    .from('estudiantes')
    .update(estudiante)
    .eq('id', id)
    .select();
};

export const eliminarEstudiante = async (id) => {
  return await supabase
    .from('estudiantes')
    .delete()
    .eq('id', id);
};