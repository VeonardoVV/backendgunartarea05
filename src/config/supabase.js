import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://nvbxzqzesabpeahabxug.supabase.co";
const supabaseKey = "sb_publishable_8XM1J_LAxS_eknsSte2Xrw_Kk8c8OFh";

export const supabase = createClient(supabaseUrl, supabaseKey);