-- ==============================================================================
-- ACADEMIA LIVING ENGLISH: TABLAS PARA SISTEMA DE CLASES ONLINE EN VIVO
-- Cupo máximo: 4 estudiantes por clase
-- Contacto venezolano: Cédula de Identidad y Teléfono Venezolano
-- ==============================================================================

-- 1. TABLA DE CLASES ONLINE PUBLICADAS POR PROFESORES
CREATE TABLE IF NOT EXISTS public.online_classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  teacher_name TEXT NOT NULL,
  title TEXT NOT NULL,
  course_level TEXT NOT NULL,
  class_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  meeting_link TEXT,
  max_capacity INTEGER NOT NULL DEFAULT 4,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'active', -- active, completed, cancelled
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. TABLA DE RESERVAS DE ESTUDIANTES / USUARIOS
CREATE TABLE IF NOT EXISTS public.class_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL REFERENCES public.online_classes(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  document_id TEXT NOT NULL,       -- Cédula venezolana (ej. V-24123456)
  phone TEXT NOT NULL,             -- Teléfono venezolano (ej. 0414-1234567)
  email TEXT NOT NULL,             -- Correo para confirmación
  student_level TEXT,              -- Básico, Intermedio, Avanzado
  status TEXT NOT NULL DEFAULT 'pending', -- pending, confirmed, cancelled
  confirmation_token TEXT,         -- Token aleatorio para confirmación por correo
  confirmed_at TIMESTAMPTZ,        -- Fecha de confirmación
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. HABILITAR SEGURIDAD RLS (Row Level Security)
ALTER TABLE public.online_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_bookings ENABLE ROW LEVEL SECURITY;

-- 4. POLÍTICAS DE ACCESO: CLASES ONLINE
-- Cualquier visitante (estudiantes o público) puede ver las clases publicadas activas
DROP POLICY IF EXISTS "Lectura publica de clases online" ON public.online_classes;
CREATE POLICY "Lectura publica de clases online"
  ON public.online_classes FOR SELECT
  USING (true);

-- Profesores autenticados pueden crear, editar o cancelar clases
DROP POLICY IF EXISTS "Profesores gestionan clases" ON public.online_classes;
CREATE POLICY "Profesores gestionan clases"
  ON public.online_classes FOR ALL
  USING (auth.role() = 'authenticated');

-- Permitir borrado automático de clases finalizadas
DROP POLICY IF EXISTS "Borrado automatico de clases finalizadas" ON public.online_classes;
CREATE POLICY "Borrado automatico de clases finalizadas"
  ON public.online_classes FOR DELETE
  USING (class_date < CURRENT_DATE OR (class_date = CURRENT_DATE AND end_time <= CURRENT_TIME));

-- 5. POLÍTICAS DE ACCESO: RESERVAS
-- Cualquier visitante puede registrar una reserva (INSERT público)
DROP POLICY IF EXISTS "Insercion publica de reservas" ON public.class_bookings;
CREATE POLICY "Insercion publica de reservas"
  ON public.class_bookings FOR INSERT
  WITH CHECK (true);

-- Lectura pública básica de reservas para contabilizar cupos ocupados
DROP POLICY IF EXISTS "Lectura publica de conteo de reservas" ON public.class_bookings;
CREATE POLICY "Lectura publica de conteo de reservas"
  ON public.class_bookings FOR SELECT
  USING (true);

-- Profesores autenticados pueden ver todos los datos y gestionar reservas
DROP POLICY IF EXISTS "Profesores ven y gestionan reservas" ON public.class_bookings;
CREATE POLICY "Profesores ven y gestionan reservas"
  ON public.class_bookings FOR ALL
  USING (auth.role() = 'authenticated');

-- Permitir actualizar estado de reserva (ej. para confirmar mediante token/correo)
DROP POLICY IF EXISTS "Confirmacion de reservas" ON public.class_bookings;
CREATE POLICY "Confirmacion de reservas"
  ON public.class_bookings FOR UPDATE
  USING (true);

-- 6. ÍNDICES DE RENDIMIENTO
CREATE INDEX IF NOT EXISTS idx_online_classes_date ON public.online_classes(class_date, status);
CREATE INDEX IF NOT EXISTS idx_class_bookings_class ON public.class_bookings(class_id, status);
