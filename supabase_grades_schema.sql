-- ==============================================================================
-- ACADEMIA LIVING ENGLISH: TABLA Y AJUSTES PARA CALIFICACIONES Y CURRÍCULUM
-- Soporte completo para Adultos 1, 2, 3, Teens, Junior y Kids
-- ==============================================================================

-- 1. CREAR TABLA DE CALIFICACIONES (SI NO EXISTE)
CREATE TABLE IF NOT EXISTS public.student_grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_level TEXT NOT NULL,           -- 'Adultos 1', 'Adultos 2', 'Adultos 3', 'Teens 1', etc.
  item_number INTEGER NOT NULL,         -- 1 al 28 según el nivel
  item_title TEXT,                      -- Nombre de la actividad o examen
  item_type TEXT,                       -- 'Escrito', 'Oral', 'Formativo', 'Proyecto', 'Sticker', 'Lúdico'
  max_points NUMERIC NOT NULL DEFAULT 100,
  points_awarded NUMERIC NOT NULL,
  graded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. RESTRICCIÓN ÚNICA COMPUESTA (CLAVE PARA MULTI-NIVEL)
-- Permite que un estudiante tenga notas de Item 1 en Adultos 1, y luego Item 1 en Adultos 2 o 3 sin colisión.
DO $$
BEGIN
  -- Eliminar restricción antigua si solo era (student_id, item_number)
  IF EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'student_grades_student_id_item_number_key'
  ) THEN
    ALTER TABLE public.student_grades DROP CONSTRAINT student_grades_student_id_item_number_key;
  END IF;

  -- Crear restricción compuesta (student_id, course_level, item_number) si no existe
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'student_grades_student_course_item_key'
  ) THEN
    ALTER TABLE public.student_grades 
      ADD CONSTRAINT student_grades_student_course_item_key 
      UNIQUE (student_id, course_level, item_number);
  END IF;
END $$;

-- 3. VERIFICAR QUE NO HAYA RESTRICCIONES RÍGIDAS DE CHECK EN item_type O course_level
-- Si existen CHECK constraints antiguos que limitaban valores, eliminarlos para permitir 'Adultos 2', 'Adultos 3' y 'Proyecto':
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'student_grades_item_type_check'
  ) THEN
    ALTER TABLE public.student_grades DROP CONSTRAINT student_grades_item_type_check;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'profiles_course_level_check'
  ) THEN
    ALTER TABLE public.profiles DROP CONSTRAINT profiles_course_level_check;
  END IF;
END $$;

-- 4. HABILITAR RLS (Row Level Security)
ALTER TABLE public.student_grades ENABLE ROW LEVEL SECURITY;

-- 5. POLÍTICAS DE SEGURIDAD (RLS)
-- Los estudiantes solo pueden consultar sus propias calificaciones
DROP POLICY IF EXISTS "Estudiantes ven sus propias notas" ON public.student_grades;
CREATE POLICY "Estudiantes ven sus propias notas"
  ON public.student_grades FOR SELECT
  USING (auth.uid() = student_id);

-- Profesores / Administradores autenticados pueden ver y calificar a cualquier alumno
DROP POLICY IF EXISTS "Profesores gestionan notas" ON public.student_grades;
CREATE POLICY "Profesores gestionan notas"
  ON public.student_grades FOR ALL
  USING (auth.role() = 'authenticated');

-- 6. ÍNDICES DE RENDIMIENTO PARA CONSULTAS RÁPIDAS
CREATE INDEX IF NOT EXISTS idx_student_grades_lookup 
  ON public.student_grades (student_id, course_level);

CREATE INDEX IF NOT EXISTS idx_student_grades_level 
  ON public.student_grades (course_level);
