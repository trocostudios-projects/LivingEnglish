/**
 * Academia Living English - Supabase Client Configuration
 * Conexión oficial y permanente a Supabase
 */

// Limpieza de claves obsoletas
localStorage.removeItem('supabase_url');
localStorage.removeItem('supabase_key');

const SUPABASE_URL = 'https://ikavqwfnirvpnfhdycml.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrYXZxd2ZuaXJ2cG5maGR5Y21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3MDM5MDEsImV4cCI6MjEwODI3OTkwMX0.UoDBFDgPMp3u4l86wCqyR6vBDcyH57RZn-XegXvyVF0';

window.SUPABASE_CONFIG = {
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY
};

function initSupabase() {
  const lib = window.supabase;
  if (lib && typeof lib.createClient === 'function') {
    try {
      window.supabaseClient = lib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log('✅ Supabase conectado con éxito a:', SUPABASE_URL);
      return window.supabaseClient;
    } catch (e) {
      console.error('❌ Error al inicializar createClient:', e);
      return null;
    }
  } else {
    console.warn('⚠️ La librería Supabase (window.supabase) aún no está disponible.');
    return null;
  }
}

// Inicializar inmediatamente
initSupabase();

// Helper global reactivo: si por alguna razón no estaba listo al inicio, lo instancia al llamarlo
window.getSupabaseClient = function() {
  if (window.supabaseClient) return window.supabaseClient;
  return initSupabase();
};
