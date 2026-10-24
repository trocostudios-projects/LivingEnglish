/**
 * Academia Living English - Módulo Oficial de Clases Online en Vivo
 * Capacidad máxima: 4 personas por clase
 * Validación venezolana: Cédula de Identidad y Teléfono Venezolano
 */

// Semilla inicial de demostración para cuando las tablas estén vacías o pendientes de migración SQL
const INITIAL_DEMO_CLASSES = [
  {
    id: 'demo-class-1',
    teacher_id: null,
    teacher_name: 'Prof. Carlos Méndez',
    title: 'Speaking Club: Conversational Fluency & Small Talk',
    course_level: 'Abierto a Todo Público',
    class_date: '2026-10-27',
    start_time: '18:00',
    end_time: '19:00',
    meeting_link: 'https://meet.google.com/liv-engl-spk',
    max_capacity: 4,
    description: 'Práctica intensiva 100% hablada para superar el bloqueo y dialogar con confianza en situaciones cotidianas.',
    status: 'active',
    created_at: new Date().toISOString()
  },
  {
    id: 'demo-class-2',
    teacher_id: null,
    teacher_name: 'Prof. Valeria Gómez',
    title: 'Grammar Workshop: Present Perfect vs. Past Simple',
    course_level: 'Abierto a Todo Público',
    class_date: '2026-10-28',
    start_time: '19:30',
    end_time: '20:30',
    meeting_link: 'https://meet.google.com/liv-engl-grm',
    max_capacity: 4,
    description: 'Taller práctico con ejercicios interactivos y dinámicas en parejas para dominar la diferencia de tiempos.',
    status: 'active',
    created_at: new Date().toISOString()
  },
  {
    id: 'demo-class-3',
    teacher_id: null,
    teacher_name: 'Prof. David Rivas',
    title: 'Job Interview & Professional English Lab',
    course_level: 'Abierto a Todo Público',
    class_date: '2026-10-29',
    start_time: '17:00',
    end_time: '18:00',
    meeting_link: 'https://meet.google.com/liv-engl-job',
    max_capacity: 4,
    description: 'Simulación de entrevistas de trabajo en inglés con retroalimentación inmediata sobre dicción y vocabulario corporativo.',
    status: 'active',
    created_at: new Date().toISOString()
  }
];

const INITIAL_DEMO_BOOKINGS = [
  {
    id: 'demo-book-1',
    class_id: 'demo-class-1',
    full_name: 'Alejandro Morales',
    document_id: 'V-26.840.112',
    phone: '0414-7891234',
    email: 'alejandro.morales@gmail.com',
    student_level: 'Intermedio',
    status: 'confirmed',
    confirmation_token: 'tok-demo-1',
    created_at: new Date().toISOString()
  },
  {
    id: 'demo-book-2',
    class_id: 'demo-class-1',
    full_name: 'Mariana Castillo',
    document_id: 'V-28.115.908',
    phone: '0424-5551290',
    email: 'mariana.c@hotmail.com',
    student_level: 'Básico',
    status: 'pending',
    confirmation_token: 'tok-demo-2',
    created_at: new Date().toISOString()
  }
];

// Helper para obtener cliente de Supabase
function getOnlineSupabase() {
  if (typeof window.getSupabaseClient === 'function') {
    return window.getSupabaseClient();
  }
  return window.supabaseClient || null;
}

/**
 * Determina si una clase ya terminó según su fecha y hora de fin
 */
function isClassFinished(cls) {
  if (!cls || !cls.class_date) return false;
  try {
    const dateParts = cls.class_date.split('-');
    if (dateParts.length !== 3) return false;
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[2], 10);

    let hours = 23;
    let minutes = 59;

    if (cls.end_time && cls.end_time.includes(':')) {
      const parts = cls.end_time.split(':');
      hours = parseInt(parts[0], 10) || 0;
      minutes = parseInt(parts[1], 10) || 0;
    } else if (cls.start_time && cls.start_time.includes(':')) {
      const parts = cls.start_time.split(':');
      hours = (parseInt(parts[0], 10) || 0) + 1; // Por defecto 1 hora si no tiene fin
      minutes = parseInt(parts[1], 10) || 0;
    }

    const classEndDateTime = new Date(year, month, day, hours, minutes, 0);
    const now = new Date();

    return now.getTime() >= classEndDateTime.getTime();
  } catch (err) {
    console.error("Error comprobando expiración de clase:", err);
    return false;
  }
}

// Helpers de almacenamiento local (fallback resiliente)
function getLocalClasses() {
  try {
    const raw = localStorage.getItem('le_online_classes');
    if (!raw) {
      localStorage.setItem('le_online_classes', JSON.stringify(INITIAL_DEMO_CLASSES));
      return INITIAL_DEMO_CLASSES;
    }
    const parsed = JSON.parse(raw);
    // Depurar clases que hayan sido canceladas o que ya terminaron
    const valid = parsed.filter(c => c.status !== 'cancelled' && !isClassFinished(c));
    if (valid.length !== parsed.length) {
      localStorage.setItem('le_online_classes', JSON.stringify(valid));
    }
    return valid;
  } catch (e) {
    return INITIAL_DEMO_CLASSES;
  }
}

function setLocalClasses(classes) {
  try {
    localStorage.setItem('le_online_classes', JSON.stringify(classes));
  } catch (e) {
    console.error("Error guardando le_online_classes:", e);
  }
}

function getLocalBookings() {
  try {
    const raw = localStorage.getItem('le_class_bookings');
    if (!raw) {
      localStorage.setItem('le_class_bookings', JSON.stringify(INITIAL_DEMO_BOOKINGS));
      return INITIAL_DEMO_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_DEMO_BOOKINGS;
  }
}

function setLocalBookings(bookings) {
  try {
    localStorage.setItem('le_class_bookings', JSON.stringify(bookings));
  } catch (e) {
    console.error("Error guardando le_class_bookings:", e);
  }
}

/**
 * Obtener todas las clases activas con el conteo de cupos ocupados.
 * Automáticamente detecta y borra cualquier clase cuya hora haya finalizado.
 */
async function fetchOnlineClasses(includeAllStatus = false) {
  const client = getOnlineSupabase();
  let classes = [];
  let bookings = [];

  if (client) {
    try {
      let query = client.from('online_classes').select('*');
      if (!includeAllStatus) {
        query = query.eq('status', 'active');
      }
      query = query.order('class_date', { ascending: true }).order('start_time', { ascending: true });

      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        classes = data;
      }
    } catch (err) {
      console.warn("Supabase online_classes fallo o tabla no existe aún. Usando fallback local.", err);
    }

    try {
      const { data: bData, error: bError } = await client.from('class_bookings').select('*');
      if (!bError && bData) {
        bookings = bData;
      }
    } catch (err) {
      console.warn("Supabase class_bookings fallo. Usando fallback local.", err);
    }
  }

  // Fallback si Supabase no tiene aún las tablas creadas o está en modo local
  if (!classes || classes.length === 0) {
    classes = getLocalClasses();
    if (!includeAllStatus) {
      classes = classes.filter(c => c.status === 'active');
    }
  }

  if (!bookings || bookings.length === 0) {
    bookings = getLocalBookings();
  }

  // REGLA: Si la clase ya se acabó (fecha y hora fin en el pasado), SE BORRA del sistema
  const finishedClasses = classes.filter(c => isClassFinished(c));
  if (finishedClasses.length > 0) {
    const finishedIds = finishedClasses.map(c => c.id);
    
    // 1. Borrar de Supabase (reservas y clases)
    if (client) {
      client.from('class_bookings').delete().in('class_id', finishedIds)
        .then(() => client.from('online_classes').delete().in('id', finishedIds))
        .catch(err => console.warn("Error borrando clases finalizadas en Supabase:", err));
    }

    // 2. Borrar de LocalStorage
    const local = getLocalClasses();
    setLocalClasses(local.filter(c => !finishedIds.includes(c.id)));
    const localBookings = getLocalBookings();
    setLocalBookings(localBookings.filter(b => !finishedIds.includes(b.class_id)));

    // 3. Excluir de la respuesta actual
    classes = classes.filter(c => !finishedIds.includes(c.id));
    bookings = bookings.filter(b => !finishedIds.includes(b.class_id));
  }

  // REGLA: Clases canceladas tampoco deben estar (se borran)
  if (!includeAllStatus) {
    classes = classes.filter(c => c.status !== 'cancelled');
  }

  // Calcular ocupación de cada clase (máximo 4)
  return classes.map(cls => {
    const activeBookings = bookings.filter(b => b.class_id === cls.id && b.status !== 'cancelled');
    const confirmedCount = activeBookings.filter(b => b.status === 'confirmed').length;
    const pendingCount = activeBookings.filter(b => b.status === 'pending').length;
    const totalBooked = activeBookings.length;
    const maxCap = cls.max_capacity || 4;
    const remainingSpots = Math.max(0, maxCap - totalBooked);

    return {
      ...cls,
      max_capacity: maxCap,
      bookings_count: totalBooked,
      confirmed_count: confirmedCount,
      pending_count: pendingCount,
      remaining_spots: remainingSpots,
      is_full: remainingSpots <= 0,
      bookings_list: activeBookings
    };
  });
}

/**
 * Publicar una nueva clase online (desde el panel del docente)
 */
async function createOnlineClass(classData) {
  const client = getOnlineSupabase();
  const maxCapacity = 4; // Regla de negocio: exactamente máx 4 personas por clase

  const newClass = {
    id: 'class-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
    teacher_id: classData.teacher_id || null,
    teacher_name: classData.teacher_name || 'Profesor Living English',
    title: classData.title.trim(),
    course_level: classData.course_level || 'Abierto a Todo Público',
    class_date: classData.class_date,
    start_time: classData.start_time,
    end_time: classData.end_time,
    meeting_link: classData.meeting_link || '',
    max_capacity: maxCapacity,
    description: classData.description || '',
    status: 'active',
    created_at: new Date().toISOString()
  };

  // Intentar guardar en Supabase
  if (client) {
    try {
      const { data, error } = await client.from('online_classes').insert([newClass]).select();
      if (!error && data && data.length > 0) {
        newClass.id = data[0].id;
      }
    } catch (err) {
      console.warn("Fallo insert en Supabase online_classes. Respaldando localmente.", err);
    }
  }

  // Guardar en almacenamiento local
  const current = getLocalClasses();
  current.unshift(newClass);
  setLocalClasses(current);

  return newClass;
}

/**
 * Eliminar / Borrar definitivamente una clase online (cuando el profesor la cancela)
 * Elimina la clase y todas sus reservas asociadas tanto de Supabase como de LocalStorage
 */
async function deleteOnlineClass(classId) {
  const client = getOnlineSupabase();

  if (client) {
    try {
      // 1. Eliminar reservas asociadas en Supabase
      await client.from('class_bookings').delete().eq('class_id', classId);
      // 2. Eliminar la clase en Supabase
      await client.from('online_classes').delete().eq('id', classId);
    } catch (err) {
      console.warn("Error al borrar clase en Supabase:", err);
    }
  }

  // Eliminar de localStorage
  const current = getLocalClasses();
  const updated = current.filter(c => c.id !== classId);
  setLocalClasses(updated);

  const currentBookings = getLocalBookings();
  const updatedBookings = currentBookings.filter(b => b.class_id !== classId);
  setLocalBookings(updatedBookings);

  return true;
}

// Alias para compatibilidad con código existente
async function cancelOnlineClass(classId) {
  return await deleteOnlineClass(classId);
}

/**
 * Registrar solicitud de reserva de un cupo (Público)
 * Requiere: Nombre, Cédula venezolana, Teléfono venezolano, Correo.
 */
async function bookOnlineClass(classId, studentData) {
  // 1. Validar que la clase tenga cupos disponibles
  const classes = await fetchOnlineClasses(true);
  const targetClass = classes.find(c => c.id === classId);

  if (!targetClass) {
    throw new Error("La clase seleccionada no fue encontrada o ya no está disponible.");
  }

  if (targetClass.remaining_spots <= 0) {
    throw new Error("¡Lo sentimos! Esta clase ya completó su cupo máximo de 4 personas.");
  }

  // 2. Validar formato de documento venezolano
  const doc = (studentData.document_id || '').trim().toUpperCase();
  if (!doc.match(/^[VE]-\d{5,9}$/)) {
    throw new Error("Formato de cédula venezolana inválido. Ejemplo: V-24123456");
  }

  // 3. Validar teléfono venezolano
  const phone = (studentData.phone || '').trim();
  if (!phone.match(/^(0414|0424|0412|0416|0426)-\d{7}$/) && !phone.match(/^(0414|0424|0412|0416|0426)\d{7}$/)) {
    throw new Error("Formato de teléfono venezolano inválido. Debe comenzar con 0414, 0424, 0412, 0416 o 0426 y tener 7 dígitos (ej. 0414-1234567)");
  }

  // 4. Validar correo electrónico
  const email = (studentData.email || '').trim().toLowerCase();
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    throw new Error("El correo electrónico ingresado no es válido.");
  }

  // 5. Generar token de confirmación para el correo
  const token = 'tok-' + Date.now() + '-' + Math.random().toString(36).substr(2, 8);

  const newBooking = {
    id: 'book-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
    class_id: classId,
    full_name: studentData.full_name.trim(),
    document_id: doc,
    phone: phone,
    email: email,
    student_level: studentData.student_level || 'Básico',
    status: 'pending', // Requiere confirmación por correo
    confirmation_token: token,
    created_at: new Date().toISOString()
  };

  const client = getOnlineSupabase();
  if (client) {
    try {
      const { data, error } = await client.from('class_bookings').insert([newBooking]).select();
      if (!error && data && data.length > 0) {
        newBooking.id = data[0].id;
      }
    } catch (err) {
      console.warn("Fallo insert en Supabase class_bookings. Guardando localmente.", err);
    }
  }

  // Guardar en almacenamiento local
  const currentBookings = getLocalBookings();
  currentBookings.unshift(newBooking);
  setLocalBookings(currentBookings);

  return {
    booking: newBooking,
    targetClass: targetClass,
    confirmationToken: token
  };
}

/**
 * Confirmar asistencia desde el enlace recibido por correo
 */
async function confirmBookingToken(token) {
  const client = getOnlineSupabase();
  let found = null;

  if (client) {
    try {
      const { data, error } = await client
        .from('class_bookings')
        .update({ status: 'confirmed', confirmed_at: new Date().toISOString() })
        .eq('confirmation_token', token)
        .select();

      if (!error && data && data.length > 0) {
        found = data[0];
      }
    } catch (err) {
      console.warn("Error confirmando en Supabase:", err);
    }
  }

  // Actualizar también en almacenamiento local
  const current = getLocalBookings();
  const updated = current.map(b => {
    if (b.confirmation_token === token || b.id === token) {
      found = { ...b, status: 'confirmed', confirmed_at: new Date().toISOString() };
      return found;
    }
    return b;
  });
  setLocalBookings(updated);

  return found;
}

/**
 * Obtener la lista de estudiantes inscritos en una clase para el profesor
 */
async function fetchBookingsForClass(classId) {
  const client = getOnlineSupabase();
  if (client) {
    try {
      const { data, error } = await client
        .from('class_bookings')
        .select('*')
        .eq('class_id', classId)
        .order('created_at', { ascending: false });

      if (!error && data) {
        return data;
      }
    } catch (e) {
      console.warn("Fallo consulta Supabase class_bookings:", e);
    }
  }

  const all = getLocalBookings();
  return all.filter(b => b.class_id === classId);
}

// Helpers de formateo
function formatClassDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${days[d.getDay()]}, ${d.getDate()} de ${months[d.getMonth()]}`;
  }
  return dateStr;
}

function formatClassTime(timeStr) {
  if (!timeStr) return '';
  const parts = timeStr.split(':');
  if (parts.length >= 2) {
    let hour = parseInt(parts[0], 10);
    const min = parts[1];
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    if (hour === 0) hour = 12;
    return `${hour}:${min} ${ampm}`;
  }
  return timeStr;
}

window.OnlineClassesService = {
  fetchOnlineClasses,
  createOnlineClass,
  deleteOnlineClass,
  cancelOnlineClass,
  isClassFinished,
  bookOnlineClass,
  confirmBookingToken,
  fetchBookingsForClass,
  formatClassDate,
  formatClassTime
};
