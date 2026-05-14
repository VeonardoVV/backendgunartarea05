import { supabase } from '../config/supabase.js';

export const obtenerCiclos = async () => {
  return await supabase
    .from('ciclos')
    .select('*');
};

export const obtenerCicloPorId = async (id) => {
  return await supabase
    .from('ciclos')
    .select('*')
    .eq('id', id)
    .single();
};

export const crearCiclo = async (ciclo) => {
  return await supabase
    .from('ciclos')
    .insert([ciclo])
    .select();
};

export const actualizarCiclo = async (id, ciclo) => {
  return await supabase
    .from('ciclos')
    .update(ciclo)
    .eq('id', id)
    .select();
};

export const eliminarCiclo = async (id) => {
  return await supabase
    .from('ciclos')
    .delete()
    .eq('id', id);
};