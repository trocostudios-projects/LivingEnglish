/**
 * Academia Living English - Supabase Client Configuration
 * Conexión oficial y permanente a Supabase
 */

// Limpieza de claves obsoletas de pruebas anteriores
localStorage.removeItem('supabase_url');
localStorage.removeItem('supabase_key');

// Credenciales oficiales fijas del proyecto
const SUPABASE_URL = 'https://ikavqwfnirvpnfhdycml.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrYXZxd2ZuaXJ2cG5maGR5Y21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3MDM5MDEsImV4cCI6MjEwODI3OTkwMX0.UoDBFDgPMp3u4l86wCqyR6vBDcyH57RZn-XegXvyVF0';

let supabase = null;

if (typeof window.supabase !== 'undefined') {
  try {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase conectado permanentemente:', SUPABASE_URL);
  } catch (err) {
    console.error('❌ Error al inicializar cliente Supabase:', err);
  }
} else {
  console.error('❌ La librería @supabase/supabase-js no se cargó.');
}

window.supabaseClient = supabase;
window.SUPABASE_CONFIG = {
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY
};
