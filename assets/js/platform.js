/**
 * Academia Living English - Plataforma Educativa Oficial
 * Conexión exclusiva a Supabase (Producción / GitHub Pages)
 */

// ==============================================================================
// 1. CATÁLOGO CURRICULAR OFICIAL (EXTRAÍDO DE LAS GUÍAS)
// ==============================================================================
const ACADEMIC_CURRICULUM = {
  // Adultos 1 / Basic
  'Adultos 1': {
    title: 'Adultos Nivel 1 — Basic Study Guide',
    maxPoints: 2200,
    passingScore: 1500,
    stages: [
      {
        name: 'Lessons 1–4B (700 pts)',
        items: [
          { number: 1, title: 'Written Test 1 & 2', lesson: 'L1–L2', type: 'Escrito', maxPoints: 100 },
          { number: 2, title: 'Oral Description — "Who is in the picture?"', lesson: 'L2', type: 'Oral', maxPoints: 100 },
          { number: 3, title: 'Written Test 3 — Plurals, this/that, some/any, how much/many', lesson: 'L3 + Some/any', type: 'Escrito', maxPoints: 100 },
          { number: 4, title: 'Market Day — Shopping List (buy & sell in pairs)', lesson: 'L3 + Some/any', type: 'Oral', maxPoints: 100 },
          { number: 5, title: 'Verb Games — Routine charades', lesson: 'L4', type: 'Oral', maxPoints: 100 },
          { number: 6, title: 'Live Reporter — "What are they doing right now?"', lesson: 'L4B', type: 'Oral', maxPoints: 100 },
          { number: 7, title: 'Written Test 4 & 4B — Simple vs. Continuous', lesson: 'L4–L4B', type: 'Escrito', maxPoints: 100 }
        ]
      },
      {
        name: 'Midterm (100 pts)',
        items: [
          { number: 8, title: 'Midterm Checkpoint — "First Day at the Academy" roleplay + can-do', lesson: 'L1–L4B', type: 'Oral', maxPoints: 100 }
        ]
      },
      {
        name: 'Lessons 5–8 (800 pts)',
        items: [
          { number: 9, title: 'My Day Vlog — Routine reading + schedule', lesson: 'L5', type: 'Oral', maxPoints: 100 },
          { number: 10, title: 'City Map — Tourist guide (directions)', lesson: 'L6', type: 'Oral', maxPoints: 100 },
          { number: 11, title: 'Written Test 5 & 6', lesson: 'L5–L6', type: 'Escrito', maxPoints: 100 },
          { number: 12, title: 'Time Machine — "Where were you…? / Where will you be…?"', lesson: 'L7', type: 'Oral', maxPoints: 100 },
          { number: 13, title: 'Sing a Song — Fluency & pronunciation', lesson: 'L8', type: 'Oral', maxPoints: 100 },
          { number: 14, title: 'Written Test 7 & 8', lesson: 'L7–L8', type: 'Escrito', maxPoints: 100 },
          { number: 15, title: 'Review Streak + STOP — Quick reviews + STOP word game', lesson: 'All', type: 'Formativo', maxPoints: 100 },
          { number: 16, title: 'Guide Correction — Incl. can-do self-assessments', lesson: 'All', type: 'Formativo', maxPoints: 100 }
        ]
      },
      {
        name: 'Finals (600 pts)',
        items: [
          { number: 17, title: 'Final Written Test', lesson: 'Final', type: 'Escrito', maxPoints: 200 },
          { number: 18, title: 'Final Interview', lesson: 'Final', type: 'Oral', maxPoints: 200 },
          { number: 19, title: 'Final Presentation — "My Life & My Plans"', lesson: 'Final', type: 'Oral', maxPoints: 200 }
        ]
      }
    ]
  },

  // Teens 1 / Basic
  'Teens 1': {
    title: 'Teens Nivel 1 — Basic Study Guide',
    maxPoints: 2200,
    passingScore: 1500,
    stages: [
      {
        name: 'Lessons 1–4B (700 pts)',
        items: [
          { number: 1, title: 'Written Test 1 & 2', lesson: 'L1–L2', type: 'Escrito', maxPoints: 100 },
          { number: 2, title: 'Oral Description — "Who is in the picture?"', lesson: 'L2', type: 'Oral', maxPoints: 100 },
          { number: 3, title: 'Written Test 3 — Plurals, this/that, some/any, how much/many', lesson: 'L3 + Some/any', type: 'Escrito', maxPoints: 100 },
          { number: 4, title: 'Market Day — Shopping List (buy & sell in pairs)', lesson: 'L3 + Some/any', type: 'Oral', maxPoints: 100 },
          { number: 5, title: 'Verb Games — Routine charades', lesson: 'L4', type: 'Oral', maxPoints: 100 },
          { number: 6, title: 'Live Reporter — "What are they doing right now?"', lesson: 'L4B', type: 'Oral', maxPoints: 100 },
          { number: 7, title: 'Written Test 4 & 4B — Simple vs. Continuous', lesson: 'L4–L4B', type: 'Escrito', maxPoints: 100 }
        ]
      },
      {
        name: 'Midterm (100 pts)',
        items: [
          { number: 8, title: 'Midterm Checkpoint — "First Day at the Academy" roleplay + can-do', lesson: 'L1–L4B', type: 'Oral', maxPoints: 100 }
        ]
      },
      {
        name: 'Lessons 5–8 (800 pts)',
        items: [
          { number: 9, title: 'My Day Vlog — Routine reading + schedule', lesson: 'L5', type: 'Oral', maxPoints: 100 },
          { number: 10, title: 'City Map — Tourist guide (directions)', lesson: 'L6', type: 'Oral', maxPoints: 100 },
          { number: 11, title: 'Written Test 5 & 6', lesson: 'L5–L6', type: 'Escrito', maxPoints: 100 },
          { number: 12, title: 'Time Machine — "Where were you…? / Where will you be…?"', lesson: 'L7', type: 'Oral', maxPoints: 100 },
          { number: 13, title: 'Sing a Song — Fluency & pronunciation', lesson: 'L8', type: 'Oral', maxPoints: 100 },
          { number: 14, title: 'Written Test 7 & 8', lesson: 'L7–L8', type: 'Escrito', maxPoints: 100 },
          { number: 15, title: 'Review Streak + STOP — Quick reviews + STOP word game', lesson: 'All', type: 'Formativo', maxPoints: 100 },
          { number: 16, title: 'Guide Correction — Incl. can-do self-assessments', lesson: 'All', type: 'Formativo', maxPoints: 100 }
        ]
      },
      {
        name: 'Finals (600 pts)',
        items: [
          { number: 17, title: 'Final Written Test', lesson: 'Final', type: 'Escrito', maxPoints: 200 },
          { number: 18, title: 'Final Interview', lesson: 'Final', type: 'Oral', maxPoints: 200 },
          { number: 19, title: 'Final Presentation — "My Life & My Plans"', lesson: 'Final', type: 'Oral', maxPoints: 200 }
        ]
      }
    ]
  },

  // Junior 1
  'Junior 1': {
    title: 'Junior Nivel 1 — Study Guide',
    maxPoints: 1200,
    passingScore: 850,
    stages: [
      {
        name: 'Control de Evaluaciones (1200 pts)',
        items: [
          { number: 1, title: 'Lecciones 1 & 2 · Examen escrito', lesson: 'L1–L2', type: 'Escrito', maxPoints: 100 },
          { number: 2, title: 'Lecciones 1 & 2 · Entrevista oral', lesson: 'L1–L2', type: 'Oral', maxPoints: 100 },
          { number: 3, title: 'Lección 3 · Dibujo con colores', lesson: 'L3', type: 'Formativo', maxPoints: 100 },
          { number: 4, title: 'Lecciones 4–7 · Examen escrito', lesson: 'L4–L7', type: 'Escrito', maxPoints: 100 },
          { number: 5, title: 'Lecciones 4–7 · Interrogatorio oral', lesson: 'L4–L7', type: 'Oral', maxPoints: 100 },
          { number: 6, title: 'Lecciones 8 & 9 · Examen escrito', lesson: 'L8–L9', type: 'Escrito', maxPoints: 100 },
          { number: 7, title: 'Lección 10 · Canción inventada', lesson: 'L10', type: 'Oral', maxPoints: 100 },
          { number: 8, title: 'Lecciones 11 & 12 · Examen escrito', lesson: 'L11–L12', type: 'Escrito', maxPoints: 100 },
          { number: 9, title: 'Lección 12 · Diálogo presentándose (parejas)', lesson: 'L12', type: 'Oral', maxPoints: 100 },
          { number: 10, title: 'Toda la guía · Corrección de la guía', lesson: 'All', type: 'Formativo', maxPoints: 100 },
          { number: 11, title: 'Final · Exposición final "All About Me"', lesson: 'Final', type: 'Oral', maxPoints: 200 }
        ]
      }
    ]
  },

  // Kids 1
  'Kids 1': {
    title: 'Kids Nivel 1 — Fun English for Little Stars ⭐',
    maxPoints: 16,
    passingScore: 12,
    isKids: true,
    stages: [
      {
        name: '8 Meses de Juegos, Canciones y Stickers',
        items: [
          { number: 1, title: 'L1 · Hello! I can say hello and my name', lesson: 'L1', type: 'Sticker', maxPoints: 1 },
          { number: 2, title: 'L2 · My Classroom: I can name classroom things', lesson: 'L2', type: 'Sticker', maxPoints: 1 },
          { number: 3, title: 'L3 · Colours: I can say the colours', lesson: 'L3', type: 'Sticker', maxPoints: 1 },
          { number: 4, title: 'L4 · Numbers 1-10: I can count from 1 to 10', lesson: 'L4', type: 'Sticker', maxPoints: 1 },
          { number: 5, title: 'Party Time 1 · Let\'s review!', lesson: 'P1', type: 'Lúdico', maxPoints: 1 },
          { number: 6, title: 'L5 · My Body: I can point to my body', lesson: 'L5', type: 'Sticker', maxPoints: 1 },
          { number: 7, title: 'L6 · Feelings: I can say how I feel', lesson: 'L6', type: 'Sticker', maxPoints: 1 },
          { number: 8, title: 'L7 · My Family: I can talk about my family', lesson: 'L7', type: 'Sticker', maxPoints: 1 },
          { number: 9, title: 'L8 · Pets & Farm: I can name pets & farm animals', lesson: 'L8', type: 'Sticker', maxPoints: 1 },
          { number: 10, title: 'Party Time 2 · Let\'s review!', lesson: 'P2', type: 'Lúdico', maxPoints: 1 },
          { number: 11, title: 'L9 · At the Zoo: I can name zoo animals', lesson: 'L9', type: 'Sticker', maxPoints: 1 },
          { number: 12, title: 'L10 · My Toys: I can talk about my toys', lesson: 'L10', type: 'Sticker', maxPoints: 1 },
          { number: 13, title: 'L11 · Yummy Food: I can say the food I like', lesson: 'L11', type: 'Sticker', maxPoints: 1 },
          { number: 14, title: 'L12 · Shapes & Party: I can name shapes', lesson: 'L12', type: 'Sticker', maxPoints: 1 },
          { number: 15, title: 'Party Time 3 · Let\'s review!', lesson: 'P3', type: 'Lúdico', maxPoints: 1 },
          { number: 16, title: 'Show Day · ¡Mi gran fiesta en inglés! 🎓', lesson: 'Final', type: 'Lúdico', maxPoints: 1 }
        ]
      }
    ]
  },

  // Nursery
  'Nursery': {
    title: 'Nursery — Cuidado Diario & Estimulación Temprana',
    maxPoints: 3,
    passingScore: 2,
    isNursery: true,
    stages: [
      {
        name: 'Seguimiento de Estimulación',
        items: [
          { number: 1, title: 'Participación y respuesta en inglés', lesson: 'Diario', type: 'Formativo', maxPoints: 1 },
          { number: 2, title: 'Juegos musicales y canciones infantiles', lesson: 'Diario', type: 'Formativo', maxPoints: 1 },
          { number: 3, title: 'Rutina y adaptación al salón', lesson: 'Diario', type: 'Formativo', maxPoints: 1 }
        ]
      }
    ]
  }
};

function getCourseConfig(courseLevel) {
  if (ACADEMIC_CURRICULUM[courseLevel]) {
    return ACADEMIC_CURRICULUM[courseLevel];
  }

  if (courseLevel && courseLevel.startsWith('Adultos')) {
    const base = JSON.parse(JSON.stringify(ACADEMIC_CURRICULUM['Adultos 1']));
    base.title = `${courseLevel} — Study Guide`;
    return base;
  }
  if (courseLevel && courseLevel.startsWith('Teens')) {
    const base = JSON.parse(JSON.stringify(ACADEMIC_CURRICULUM['Teens 1']));
    base.title = `${courseLevel} — Study Guide`;
    return base;
  }
  if (courseLevel && courseLevel.startsWith('Junior')) {
    const base = JSON.parse(JSON.stringify(ACADEMIC_CURRICULUM['Junior 1']));
    base.title = `${courseLevel} — Study Guide`;
    return base;
  }
  if (courseLevel && courseLevel.startsWith('Kids')) {
    const base = JSON.parse(JSON.stringify(ACADEMIC_CURRICULUM['Kids 1']));
    base.title = `${courseLevel} — Fun English`;
    return base;
  }

  return ACADEMIC_CURRICULUM['Adultos 1'];
}

// ==============================================================================
// 2. ESTADO GLOBAL
// ==============================================================================
let currentRole = 'estudiante';
let currentUserProfile = null;
let currentSessionUser = null;

let teacherStudentsList = [];
let selectedStudent = null;
let selectedStudentGrades = {};
let studentGradesCache = {};

// ==============================================================================
// 3. SISTEMA DE TOAST
// ==============================================================================
function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('toast-visible');
  });

  setTimeout(() => {
    toast.classList.remove('toast-visible');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ==============================================================================
// 4. CAMBIO DE ROL EN LOGIN
// ==============================================================================
function switchRole(role) {
  currentRole = role;
  const tabStudent = document.getElementById('tabStudent');
  const tabTeacher = document.getElementById('tabTeacher');
  const btnAuth = document.getElementById('btnAuthAction');

  if (tabStudent) tabStudent.classList.toggle('active', role === 'estudiante');
  if (tabTeacher) tabTeacher.classList.toggle('active', role === 'profesor');

  if (btnAuth) {
    btnAuth.innerText = role === 'estudiante' ? 'Ingresar como Estudiante' : 'Ingresar como Profesor';
  }
}

// Helper para obtener el cliente oficial de Supabase
function getClient() {
  if (window.getSupabaseClient) return window.getSupabaseClient();
  return window.supabaseClient || null;
}

// ==============================================================================
// 5. INICIO DE SESIÓN CON SUPABASE AUTH (SIN MOCK NI DEMO)
// ==============================================================================
async function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPass').value;

  const client = getClient();
  if (!client) {
    showToast("❌ Error: No se pudo conectar con el servidor de Supabase.", "error");
    return;
  }

  const btnAuth = document.getElementById('btnAuthAction');
  const origText = btnAuth.innerText;
  btnAuth.disabled = true;
  btnAuth.innerText = 'Verificando credenciales...';

  try {
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;

    showToast("✅ Inicio de sesión exitoso.", "success");
    await initAuthenticatedUser(data.user);
  } catch (err) {
    console.error("Error al iniciar sesión:", err);
    showToast(`❌ Credenciales incorrectas: ${err.message}`, "error", 4500);
  } finally {
    btnAuth.disabled = false;
    btnAuth.innerText = origText;
  }
}

// ==============================================================================
// 6. RECUPERACIÓN DE CONTRASEÑA
// ==============================================================================
function toggleRecoveryModal(open, event) {
  if (event) event.preventDefault();
  const modal = document.getElementById('recoveryModal');
  if (!modal) return;
  modal.classList.toggle('hidden', !open);

  if (open) {
    const emailInput = document.getElementById('recoveryEmail');
    if (emailInput) {
      emailInput.value = document.getElementById('loginEmail')?.value || '';
      emailInput.focus();
    }
  }
}

// Helper para obtener la URL de retorno canónica de autenticación (GitHub Pages o local)
function getAuthRedirectUrl(targetPage = 'cursos.html') {
  if (typeof window !== 'undefined' && window.location) {
    const origin = window.location.origin;
    let pathname = window.location.pathname;

    const lastSlash = pathname.lastIndexOf('/');
    if (lastSlash !== -1) {
      pathname = pathname.substring(0, lastSlash + 1) + targetPage;
    } else {
      pathname = '/' + targetPage;
    }

    return `${origin}${pathname}`;
  }
  return `https://trocostudios-projects.github.io/LivingEnglish/${targetPage}`;
}

async function handleSendPasswordReset(e) {
  e.preventDefault();
  const email = document.getElementById('recoveryEmail').value.trim();
  const btn = document.getElementById('btnSendRecovery');

  if (!email) return;

  btn.disabled = true;
  btn.innerText = 'Enviando...';

  const client = getClient();
  try {
    const redirectUrl = getAuthRedirectUrl('recuperar.html');
    const { error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl
    });

    if (error) throw error;

    showToast("📨 Enlace enviado. Revisa tu bandeja de entrada o spam.", "success", 6000);
    toggleRecoveryModal(false);
  } catch (err) {
    console.error("Error recuperación:", err);
    showToast(`❌ Error: ${err.message}`, "error", 5000);
  } finally {
    btn.disabled = false;
    btn.innerText = 'Enviar Enlace';
  }
}

async function handleUpdateNewPassword(e) {
  e.preventDefault();
  const newPassword = document.getElementById('updateNewPass').value;
  const btn = document.getElementById('btnUpdatePassword');

  if (!newPassword || newPassword.length < 6) {
    showToast("La contraseña debe tener mínimo 6 caracteres", "error");
    return;
  }

  btn.disabled = true;
  btn.innerText = 'Actualizando...';

  const client = getClient();
  try {
    const { error } = await client.auth.updateUser({ password: newPassword });
    if (error) throw error;

    showToast("🎉 Contraseña actualizada con éxito.", "success", 4000);
    document.getElementById('resetPasswordModal').classList.add('hidden');
  } catch (err) {
    console.error("Error actualización contraseña:", err);
    showToast(`❌ Error: ${err.message}`, "error", 5000);
  } finally {
    btn.disabled = false;
    btn.innerText = 'Guardar y Continuar';
  }
}

// ==============================================================================
// 6.5. GESTIÓN Y CÁLCULO DE CADUCIDAD DE MATRÍCULA
// ==============================================================================
function getExpirationInfo(expiresAt) {
  if (!expiresAt) {
    return {
      status: 'unlimited',
      label: 'Acceso continuo',
      chipClass: 'chip-none',
      days: Infinity,
      formattedDate: 'Permanente'
    };
  }

  const expDate = new Date(expiresAt);
  if (isNaN(expDate.getTime())) {
    return {
      status: 'unlimited',
      label: 'Acceso continuo',
      chipClass: 'chip-none',
      days: Infinity,
      formattedDate: 'Permanente'
    };
  }

  // Establecer hasta el final del día indicado
  expDate.setHours(23, 59, 59, 999);
  const now = new Date();
  const diffMs = expDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const day = String(expDate.getDate()).padStart(2, '0');
  const month = String(expDate.getMonth() + 1).padStart(2, '0');
  const year = expDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  if (diffDays < 0) {
    return {
      status: 'expired',
      label: `🔴 Caducado (${Math.abs(diffDays)}d)`,
      chipClass: 'chip-expired',
      days: diffDays,
      formattedDate
    };
  } else if (diffDays <= 7) {
    return {
      status: 'warning',
      label: `🟡 Vence en ${diffDays} día${diffDays === 1 ? '' : 's'}`,
      chipClass: 'chip-warning',
      days: diffDays,
      formattedDate
    };
  } else {
    return {
      status: 'active',
      label: `🟢 Vence: ${formattedDate}`,
      chipClass: 'chip-active',
      days: diffDays,
      formattedDate
    };
  }
}

function showExpiredAccountModal(profile, expInfo) {
  const modal = document.getElementById('expiredAccountModal');
  const msgElem = document.getElementById('expiredAccountMessage');
  if (msgElem) {
    msgElem.innerHTML = `
      Hola <strong>${profile.full_name}</strong>. El periodo oficial de tu matrícula en Living English finalizó el <strong>${expInfo.formattedDate}</strong>.<br><br>
      Para reactivar tu plataforma y continuar con tus cursos, por favor comunícate con la administración académica o tu profesor.
    `;
  }
  if (modal) modal.classList.remove('hidden');
}

async function logoutFromExpired() {
  const modal = document.getElementById('expiredAccountModal');
  if (modal) modal.classList.add('hidden');
  await logout();
}

// ==============================================================================
// 7. INICIALIZACIÓN DE USUARIO AUTENTICADO
// ==============================================================================
async function initAuthenticatedUser(user) {
  currentSessionUser = user;
  const client = getClient();

  // Consultar perfil oficial en public.profiles
  const { data: profile, error } = await client
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error || !profile) {
    console.error("No se encontró el perfil en public.profiles:", error);
    showToast("⚠️ No se encontró perfil institucional para este usuario.", "error");
    return;
  }

  // Sincronizar fecha de expiración si existe en metadata o en almacenamiento local
  const studentExpiresAt = profile.expires_at || user.user_metadata?.expires_at || localStorage.getItem('le_student_expires_' + profile.id);
  profile.expires_at = studentExpiresAt;

  // Validación estricta de caducidad para estudiantes
  if (profile.role === 'estudiante' && studentExpiresAt) {
    const expInfo = getExpirationInfo(studentExpiresAt);
    if (expInfo.status === 'expired') {
      await client.auth.signOut();
      showExpiredAccountModal(profile, expInfo);
      return;
    }
  }

  currentUserProfile = profile;

  // Interfaz de Usuario
  document.getElementById('authSection').classList.add('hidden');
  const userBadge = document.getElementById('userBadge');
  const userNameElem = document.getElementById('userName');

  userBadge.classList.remove('hidden');
  userNameElem.innerText = `${profile.role === 'profesor' ? 'Prof.' : 'Est.'} ${profile.full_name}`;

  if (profile.role === 'profesor') {
    document.getElementById('teacherDashboard').classList.remove('hidden');
    document.getElementById('studentDashboard').classList.add('hidden');
    switchTeacherTab('students');
    await loadTeacherStudents();
    updateTeacherClassesBadge();
  } else {
    document.getElementById('studentDashboard').classList.remove('hidden');
    document.getElementById('teacherDashboard').classList.add('hidden');
    setupStudentView();
    await loadStudentGrades();
  }
}

async function logout() {
  const client = getClient();
  if (client) {
    await client.auth.signOut();
  }

  currentUserProfile = null;
  currentSessionUser = null;
  selectedStudent = null;

  switchStudentTab('grades');
  closeGameLauncher();
  switchTeacherTab('students');
  closePublishClassModal();
  closeClassBookingsModal();

  document.getElementById('authSection').classList.remove('hidden');
  document.getElementById('userBadge').classList.add('hidden');
  document.getElementById('studentDashboard').classList.add('hidden');
  document.getElementById('teacherDashboard').classList.add('hidden');

  showToast("Sesión cerrada", "info");
}

// ==============================================================================
// 8. DASHBOARD DEL ESTUDIANTE (CON DISCRIMINACIÓN POR NIVEL Y SUBMENÚS)
// ==============================================================================
let studentActiveViewingLevel = null;

function switchStudentTab(tab) {
  const btnGrades = document.getElementById('tabBtnGrades');
  const btnGames = document.getElementById('tabBtnGames');
  const contentGrades = document.getElementById('studentTabGrades');
  const contentGames = document.getElementById('studentTabGames');

  if (!btnGrades || !btnGames || !contentGrades || !contentGames) return;

  if (tab === 'games') {
    btnGrades.classList.remove('active');
    btnGames.classList.add('active');
    contentGrades.classList.add('hidden');
    contentGames.classList.remove('hidden');
  } else {
    btnGrades.classList.add('active');
    btnGames.classList.remove('active');
    contentGrades.classList.remove('hidden');
    contentGames.classList.add('hidden');
  }
}

function openGameLauncher(gameId, title, icon, subtitle, desc, xp, category) {
  const modal = document.getElementById('gameLauncherModal');
  if (!modal) return;

  const iconElem = document.getElementById('gameModalIcon');
  const titleElem = document.getElementById('gameModalTitle');
  const subElem = document.getElementById('gameModalSubtitle');
  const descElem = document.getElementById('gameModalDesc');
  const xpElem = document.getElementById('gameModalXp');
  const badgeElem = document.getElementById('gameModalBadge');
  const targetLevelElem = document.getElementById('gameModalTargetLevel');

  if (iconElem) iconElem.innerText = icon || '🎮';
  if (titleElem) titleElem.innerText = title || 'Juego Interactivo';
  if (subElem) subElem.innerText = subtitle || 'Living English Games';
  if (descElem) descElem.innerText = desc || 'Desafío interactivo para reforzar tu inglés.';
  if (xpElem) xpElem.innerText = xp || '+50 XP';

  if (badgeElem) {
    badgeElem.innerText = category || 'Práctica';
    badgeElem.className = 'game-category-tag';
    const catLower = (category || '').toLowerCase();
    if (catLower.includes('vocab')) badgeElem.classList.add('tag-vocab');
    else if (catLower.includes('gram')) badgeElem.classList.add('tag-grammar');
    else if (catLower.includes('memo') || catLower.includes('audio')) badgeElem.classList.add('tag-memory');
    else if (catLower.includes('speak')) badgeElem.classList.add('tag-speaking');
    else if (catLower.includes('triv') || catLower.includes('quiz')) badgeElem.classList.add('tag-trivia');
    else badgeElem.classList.add('tag-situational');
  }

  const currentLevel = (currentUserProfile && currentUserProfile.course_level) ? currentUserProfile.course_level : 'Tu nivel actual';
  if (targetLevelElem) {
    targetLevelElem.innerText = currentLevel;
  }

  modal.classList.remove('hidden');
}

function closeGameLauncher() {
  const modal = document.getElementById('gameLauncherModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

async function setupStudentView() {
  switchStudentTab('grades');
  const currentActualLevel = currentUserProfile.course_level || 'Adultos 1';
  if (!studentActiveViewingLevel) {
    studentActiveViewingLevel = currentActualLevel;
  }

  const config = getCourseConfig(studentActiveViewingLevel);

  document.getElementById('studentCourseTitle').innerText = config.title;
  document.getElementById('studentCurrentLevelBadge').innerText = currentActualLevel;

  const targetText = config.isKids
    ? 'Meta: Completar stickers y Show Day'
    : (config.isNursery ? 'Seguimiento de estimulación diaria' : `Meta para aprobar: ${config.passingScore} / ${config.maxPoints} pts`);

  document.getElementById('studentApprovalTarget').innerText = targetText;

  // Cargar selector de niveles históricos del alumno si ha cursado más de un nivel
  await populateStudentLevelSelector(currentActualLevel);

  // Mostrar aviso de caducidad / vigencia en el panel del alumno
  const expiryNotice = document.getElementById('studentExpiryNotice');
  const expiryText = document.getElementById('studentExpiryText');
  const expiryBadge = document.getElementById('studentExpiryBadge');
  const expiryIcon = document.getElementById('studentExpiryIcon');

  if (expiryNotice && currentUserProfile.expires_at) {
    const info = getExpirationInfo(currentUserProfile.expires_at);
    expiryNotice.classList.remove('hidden');
    if (info.status === 'warning') {
      expiryNotice.style.background = 'rgba(234, 179, 8, 0.15)';
      expiryNotice.style.border = '1px solid rgba(234, 179, 8, 0.4)';
      expiryIcon.innerText = '⚠️';
      expiryText.innerHTML = `Tu matrícula vence pronto: <strong>${info.formattedDate}</strong> (${info.days} días restantes). Contacta a la academia para renovar.`;
      expiryBadge.className = 'expiry-chip chip-warning';
      expiryBadge.innerText = 'Por vencer';
    } else {
      expiryNotice.style.background = 'rgba(34, 197, 94, 0.12)';
      expiryNotice.style.border = '1px solid rgba(34, 197, 94, 0.35)';
      expiryIcon.innerText = '🗓️';
      expiryText.innerHTML = `Acceso oficial activo hasta: <strong>${info.formattedDate}</strong> (${info.days} días de vigencia).`;
      expiryBadge.className = 'expiry-chip chip-active';
      expiryBadge.innerText = 'Activo';
    }
  } else if (expiryNotice) {
    expiryNotice.classList.add('hidden');
  }
}

async function populateStudentLevelSelector(currentLevel) {
  const wrapper = document.getElementById('studentLevelSelectorWrapper');
  const select = document.getElementById('studentLevelSelect');
  if (!wrapper || !select) return;

  const client = getClient();
  let distinctLevels = [currentLevel];

  if (client && currentUserProfile) {
    try {
      const { data } = await client
        .from('student_grades')
        .select('course_level')
        .eq('student_id', currentUserProfile.id);

      if (data && data.length > 0) {
        const foundLevels = Array.from(new Set(data.map(d => d.course_level).filter(Boolean)));
        foundLevels.forEach(lvl => {
          if (!distinctLevels.includes(lvl)) distinctLevels.push(lvl);
        });
      }
    } catch (e) {
      console.warn("No se pudo listar historial de niveles:", e);
    }
  }

  if (distinctLevels.length > 1) {
    select.innerHTML = '';
    distinctLevels.forEach(lvl => {
      const opt = document.createElement('option');
      opt.value = lvl;
      opt.textContent = lvl === currentLevel ? `${lvl} (Actual)` : `${lvl} (Histórico)`;
      opt.selected = lvl === studentActiveViewingLevel;
      select.appendChild(opt);
    });
    wrapper.classList.remove('hidden');
  } else {
    wrapper.classList.add('hidden');
  }
}

async function changeStudentViewLevel(newLevel) {
  studentActiveViewingLevel = newLevel;
  const config = getCourseConfig(studentActiveViewingLevel);
  document.getElementById('studentCourseTitle').innerText = config.title;
  await loadStudentGrades();
}

async function loadStudentGrades() {
  const client = getClient();
  studentGradesCache = {};
  const levelToLoad = studentActiveViewingLevel || currentUserProfile?.course_level || 'Adultos 1';

  if (client && currentUserProfile) {
    const { data, error } = await client
      .from('student_grades')
      .select('item_number, points_awarded')
      .eq('student_id', currentUserProfile.id)
      .eq('course_level', levelToLoad);

    if (error) {
      console.error("Error al cargar notas:", error);
      showToast("Error al obtener notas de Supabase", "error");
    } else if (data) {
      data.forEach(item => {
        studentGradesCache[item.item_number] = item.points_awarded;
      });
    }
  }

  renderStudentEvaluations();
}

function renderStudentEvaluations() {
  const container = document.getElementById('evaluationsContainer');
  if (!container) return;
  container.innerHTML = '';

  const courseLevel = currentUserProfile.course_level || 'Adultos 1';
  const config = getCourseConfig(courseLevel);

  let totalScoreEarned = 0;

  config.stages.forEach(stage => {
    const section = document.createElement('div');
    section.innerHTML = `<h3 class="eval-section-title">📖 ${stage.name}</h3>`;

    const grid = document.createElement('div');
    grid.className = 'units-grid';

    stage.items.forEach(item => {
      const awarded = studentGradesCache[item.number];
      const hasScore = awarded !== undefined && awarded !== null;
      if (hasScore) totalScoreEarned += Number(awarded);

      const typeBadgeClass = item.type === 'Oral' ? 'badge-oral' : (item.type === 'Formativo' ? 'badge-formative' : (item.type === 'Sticker' || item.type === 'Lúdico' ? 'badge-kids' : 'badge-written'));

      const card = document.createElement('div');
      card.className = 'unit-card';
      card.innerHTML = `
        <div>
          <div class="unit-number">
            <span>#${item.number} · ${item.lesson}</span>
            <span class="eval-badge-type ${typeBadgeClass}">${item.type}</span>
          </div>
          <div class="unit-title">${item.title}</div>
        </div>
        <div class="exam-badge">
          <span>${config.isKids ? 'Estado:' : `Máx: ${item.maxPoints} pts`}</span>
          <span class="score ${hasScore ? 'score-passed' : 'score-pending'}">
            ${hasScore ? (config.isKids ? '⭐ Logrado' : `${awarded} pts`) : 'Pendiente'}
          </span>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  // Barra de progreso y estadísticas
  const scoreDisplay = document.getElementById('studentScoreDisplay');
  const progressBar = document.getElementById('studentProgressBar');
  const statusBadge = document.getElementById('studentStatusBadge');
  const percentText = document.getElementById('studentPercentText');

  if (config.isKids) {
    scoreDisplay.innerText = `${totalScoreEarned} / ${config.maxPoints} actividades`;
    const pct = Math.min(100, Math.round((totalScoreEarned / config.maxPoints) * 100));
    progressBar.style.width = `${pct}%`;
    percentText.innerText = `${pct}% completado`;
    statusBadge.innerText = totalScoreEarned >= config.passingScore ? '⭐ ¡Nivel Aprobado!' : 'En aprendizaje';
    statusBadge.className = totalScoreEarned >= config.passingScore ? 'score score-passed' : 'score score-pending';
  } else {
    scoreDisplay.innerText = `${totalScoreEarned} / ${config.maxPoints} pts`;
    const pct = Math.min(100, Math.round((totalScoreEarned / config.maxPoints) * 100));
    progressBar.style.width = `${pct}%`;
    percentText.innerText = `${pct}% acumulado`;

    const isApproved = totalScoreEarned >= config.passingScore;
    statusBadge.innerText = isApproved ? '🎉 ¡Nivel Aprobado!' : 'En progreso';
    statusBadge.className = isApproved ? 'score score-passed' : 'score score-pending';
  }
}

// ==============================================================================
// 9. DASHBOARD DEL PROFESOR (CONSULTA, EVALUACIONES Y CADUCIDAD EN SUPABASE)
// ==============================================================================
async function loadTeacherStudents() {
  const client = getClient();
  teacherStudentsList = [];

  const { data, error } = await client
    .from('profiles')
    .select('*')
    .eq('role', 'estudiante')
    .order('full_name', { ascending: true });

  if (error) {
    console.error("Error al listar estudiantes de Supabase:", error);
    showToast("Error al obtener la lista de alumnos", "error");
  } else {
    teacherStudentsList = (data || []).map(student => {
      // Sincronizar documento y caducidad con respaldo local si aplica
      const cachedExpiry = localStorage.getItem('le_student_expires_' + student.id);
      if (!student.expires_at && cachedExpiry) {
        student.expires_at = cachedExpiry;
      }
      const cachedDoc = localStorage.getItem('le_student_doc_' + student.id);
      if (!student.document_id && cachedDoc) {
        student.document_id = cachedDoc;
      }
      return student;
    });
  }

  updateTeacherMetrics();
  renderStudentList();
}

function updateTeacherMetrics() {
  let active = 0;
  let warning = 0;
  let expired = 0;

  teacherStudentsList.forEach(s => {
    const info = getExpirationInfo(s.expires_at);
    if (info.status === 'expired') expired++;
    else if (info.status === 'warning') warning++;
    else active++;
  });

  const totalElem = document.getElementById('metricTotalStudents');
  const activeElem = document.getElementById('metricActiveStudents');
  const warnElem = document.getElementById('metricWarningStudents');
  const expElem = document.getElementById('metricExpiredStudents');

  if (totalElem) totalElem.innerText = teacherStudentsList.length;
  if (activeElem) activeElem.innerText = active;
  if (warnElem) warnElem.innerText = warning;
  if (expElem) expElem.innerText = expired;
}

function renderStudentList() {
  const container = document.getElementById('studentsContainer');
  if (!container) return;
  container.innerHTML = '';

  const progFilter = document.getElementById('filterProgramSelect')?.value || 'all';
  const expiryFilter = document.getElementById('filterExpirySelect')?.value || 'all';
  const q = document.getElementById('searchStudent')?.value?.toLowerCase().trim() || '';

  const filtered = teacherStudentsList.filter(student => {
    const matchesProg = progFilter === 'all' || student.program === progFilter;
    const matchesSearch = !q || 
      (student.full_name && student.full_name.toLowerCase().includes(q)) || 
      (student.email && student.email.toLowerCase().includes(q)) ||
      (student.document_id && String(student.document_id).toLowerCase().includes(q));

    const expInfo = getExpirationInfo(student.expires_at);
    let matchesExpiry = true;
    if (expiryFilter === 'active') matchesExpiry = expInfo.status === 'active' || expInfo.status === 'unlimited';
    else if (expiryFilter === 'warning') matchesExpiry = expInfo.status === 'warning';
    else if (expiryFilter === 'expired') matchesExpiry = expInfo.status === 'expired';

    return matchesProg && matchesSearch && matchesExpiry;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="font-size: 13px; color: var(--color-muted); padding: 18px; text-align: center; line-height: 1.5;">
        No hay estudiantes con los filtros seleccionados.<br>
        Usa el botón <strong>➕ Registrar Nuevo Estudiante</strong> para agregar uno.
      </div>`;
    return;
  }

  filtered.forEach(student => {
    const item = document.createElement('div');
    const isSelected = selectedStudent && selectedStudent.id === student.id;
    const expInfo = getExpirationInfo(student.expires_at);
    const docDisplay = student.document_id ? `🪪 ${student.document_id}` : '🪪 Sin doc';

    item.className = `student-item ${isSelected ? 'active' : ''}`;
    item.onclick = (e) => {
      // Evitar que el clic en el botón de edición active la selección inmediata
      if (e.target.closest('.student-quick-edit-btn')) return;
      selectStudent(student.id);
    };

    item.innerHTML = `
      <div class="student-item-header">
        <span class="student-name">${student.full_name}</span>
        <button type="button" class="student-quick-edit-btn" onclick="openEditStudentModal('${student.id}')" title="Editar estudiante o vigencia">
          ✏️
        </button>
      </div>
      <div class="student-level">${docDisplay} · 📚 ${student.course_level}</div>
      <div style="margin-top: 6px;">
        <span class="expiry-chip ${expInfo.chipClass}">${expInfo.label}</span>
      </div>
    `;
    container.appendChild(item);
  });
}

function filterStudents() {
  renderStudentList();
}

// ==============================================================================
// 8.5. SECUENCIA CURRICULAR PARA PROMOCIÓN DE NIVELES
// ==============================================================================
function getNextCourseLevel(currentLevel) {
  const nextLevelMap = {
    'Adultos 1': 'Adultos 2',
    'Adultos 2': 'Adultos 3',
    'Adultos 3': 'Adultos 3',
    'Teens 1': 'Teens 2',
    'Teens 2': 'Teens 3',
    'Teens 3': 'Teens 3',
    'Junior 1': 'Junior 2',
    'Junior 2': 'Junior 3',
    'Junior 3': 'Junior 3',
    'Kids 1': 'Kids 2',
    'Kids 2': 'Kids 3',
    'Kids 3': 'Junior 1',
    'Nursery': 'Kids 1'
  };
  return nextLevelMap[currentLevel] || currentLevel;
}

let teacherActiveGradingLevel = null;

async function selectStudent(studentId) {
  selectedStudent = teacherStudentsList.find(s => s.id === studentId);
  if (!selectedStudent) return;

  renderStudentList();

  const titleElem = document.getElementById('selectedStudentTitle');
  const subElem = document.getElementById('selectedStudentSub');
  const expiryChip = document.getElementById('selectedStudentExpiryChip');
  const actionsBar = document.getElementById('studentActionsBar');
  const gradeActionsArea = document.getElementById('teacherGradeActionsArea');
  const pointsBadge = document.getElementById('teacherStudentTotalPoints');
  const statusChip = document.getElementById('teacherStudentStatusChip');
  const grid = document.getElementById('teacherUnitsGrid');
  const levelSelectContainer = document.getElementById('teacherLevelSelectorContainer');
  const levelSelect = document.getElementById('teacherActiveLevelSelect');
  const historyNotice = document.getElementById('teacherHistoryNotice');

  titleElem.innerText = selectedStudent.full_name;
  const docText = selectedStudent.document_id ? `🪪 Doc: ${selectedStudent.document_id}` : '🪪 Sin documento registrado';
  subElem.innerText = `${docText} · 📚 ${selectedStudent.course_level} · ✉️ ${selectedStudent.email}`;

  // Configuración del chip de caducidad en el encabezado
  if (expiryChip) {
    const expInfo = getExpirationInfo(selectedStudent.expires_at);
    expiryChip.className = `expiry-chip ${expInfo.chipClass}`;
    expiryChip.innerText = expInfo.label;
    expiryChip.classList.remove('hidden');
  }

  if (actionsBar) actionsBar.classList.remove('hidden');
  if (gradeActionsArea) gradeActionsArea.classList.remove('hidden');

  // Por defecto calificar el nivel actual oficial del estudiante
  teacherActiveGradingLevel = selectedStudent.course_level;

  // Consultar historial de niveles cursados por el alumno para discriminar sus notas
  const client = getClient();
  let distinctLevels = [selectedStudent.course_level];

  if (client) {
    try {
      const { data: pastGrades } = await client
        .from('student_grades')
        .select('course_level')
        .eq('student_id', selectedStudent.id);

      if (pastGrades && pastGrades.length > 0) {
        pastGrades.forEach(r => {
          if (r.course_level && !distinctLevels.includes(r.course_level)) {
            distinctLevels.push(r.course_level);
          }
        });
      }
    } catch (e) {
      console.warn("No se pudo obtener lista de niveles cursados:", e);
    }
  }

  // Poblar selector de libro de notas
  if (levelSelect) {
    levelSelect.innerHTML = '';
    distinctLevels.forEach(lvl => {
      const opt = document.createElement('option');
      opt.value = lvl;
      opt.textContent = lvl === selectedStudent.course_level ? `${lvl} (Nivel Actual)` : `${lvl} (Histórico)`;
      opt.selected = lvl === teacherActiveGradingLevel;
      levelSelect.appendChild(opt);
    });
  }

  if (levelSelectContainer) levelSelectContainer.classList.remove('hidden');
  if (historyNotice) historyNotice.classList.add('hidden');

  // Cargar calificaciones correspondientes al nivel activo
  await loadAndRenderTeacherGradesForActiveLevel();
}

async function changeTeacherGradingLevel(newLevel) {
  if (!selectedStudent) return;
  teacherActiveGradingLevel = newLevel;

  const historyNotice = document.getElementById('teacherHistoryNotice');
  if (historyNotice) {
    if (newLevel !== selectedStudent.course_level) {
      historyNotice.classList.remove('hidden');
    } else {
      historyNotice.classList.add('hidden');
    }
  }

  await loadAndRenderTeacherGradesForActiveLevel();
}

async function loadAndRenderTeacherGradesForActiveLevel() {
  if (!selectedStudent || !teacherActiveGradingLevel) return;

  const pointsBadge = document.getElementById('teacherStudentTotalPoints');
  const statusChip = document.getElementById('teacherStudentStatusChip');
  const grid = document.getElementById('teacherUnitsGrid');

  if (pointsBadge) pointsBadge.innerText = 'Cargando puntaje...';
  if (statusChip) statusChip.innerHTML = '';
  if (grid) grid.innerHTML = '<div style="color: var(--color-muted); padding: 30px; text-align: center;">Cargando libro de calificaciones de ' + teacherActiveGradingLevel + '...</div>';

  selectedStudentGrades = {};
  const client = getClient();

  if (client) {
    const { data, error } = await client
      .from('student_grades')
      .select('item_number, points_awarded')
      .eq('student_id', selectedStudent.id)
      .eq('course_level', teacherActiveGradingLevel);

    if (error) {
      console.error("Error al obtener notas:", error);
      showToast("Error al obtener notas de Supabase", "error");
    } else if (data) {
      data.forEach(item => {
        selectedStudentGrades[item.item_number] = item.points_awarded;
      });
    }
  }

  // Cargar configuración curricular del nivel seleccionado
  const config = getCourseConfig(teacherActiveGradingLevel);
  renderTeacherCurriculumGrades(config);
}

function renderTeacherCurriculumGrades(config) {
  const grid = document.getElementById('teacherUnitsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  let totalPts = 0;

  config.stages.forEach((stage, stageIdx) => {
    const stageBlock = document.createElement('div');
    stageBlock.className = 'teacher-stage-block';

    let stageEarned = 0;
    let stageMax = 0;
    stage.items.forEach(it => {
      stageMax += Number(it.maxPoints || 0);
      const val = selectedStudentGrades[it.number];
      if (val !== undefined && val !== null && val !== '') stageEarned += Number(val);
    });

    stageBlock.innerHTML = `
      <div class="teacher-stage-header">
        <div>📖 ${stage.name}</div>
        <div style="font-size: 13px; color: var(--color-primary-light); font-weight: 700;">
          Puntaje: <span id="stage_pts_${stageIdx}">${stageEarned} / ${stageMax} pts</span>
        </div>
      </div>
      <div class="teacher-stage-grid" id="stage_grid_${stageIdx}"></div>
    `;

    const stageGrid = stageBlock.querySelector(`#stage_grid_${stageIdx}`);

    stage.items.forEach(item => {
      const currentPts = selectedStudentGrades[item.number] !== undefined ? selectedStudentGrades[item.number] : '';
      if (currentPts !== '') totalPts += Number(currentPts);

      const hasScore = currentPts !== '';
      const typeBadgeClass = item.type === 'Oral' ? 'badge-oral' : (item.type === 'Formativo' ? 'badge-formative' : (item.type === 'Sticker' || item.type === 'Lúdico' ? 'badge-kids' : 'badge-written'));

      const box = document.createElement('div');
      box.className = `grade-input-box ${hasScore ? 'graded' : ''}`;
      box.id = `box_grade_${item.number}`;
      box.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--color-muted);">#${item.number} · ${item.lesson}</span>
          <span class="eval-badge-type ${typeBadgeClass}" style="font-size: 10px; padding: 2px 6px;">${item.type}</span>
        </div>
        <div class="grade-input-box-title" title="${item.title}">${item.title}</div>
        <div style="display: flex; gap: 6px; align-items: center;">
          <input type="number" step="0.5" min="0" max="${item.maxPoints}" 
                 id="grade_input_${item.number}" 
                 value="${currentPts}" 
                 placeholder="0 a ${item.maxPoints}"
                 data-item-number="${item.number}"
                 data-item-title="${item.title.replace(/"/g, '&quot;')}"
                 data-item-type="${item.type}"
                 data-max-points="${item.maxPoints}"
                 data-initial-val="${currentPts}"
                 oninput="handleGradeInputChange(${item.number}, ${item.maxPoints})">
        </div>
        <div class="grade-shortcuts">
          <button type="button" class="btn-quick-tag" onclick="quickSetGrade(${item.number}, ${item.maxPoints})" title="Poner puntaje máximo">Máx (${item.maxPoints})</button>
          <button type="button" class="btn-quick-tag" onclick="quickSetGrade(${item.number}, 0)" title="Poner cero">0</button>
          <button type="button" class="btn-quick-tag" onclick="quickSetGrade(${item.number}, '')" title="Borrar calificación">Borrar</button>
        </div>
        <button class="btn-save-grade" id="btn_save_${item.number}" onclick="saveGrade('${selectedStudent.id}', '${teacherActiveGradingLevel}', ${item.number}, '${item.title.replace(/'/g, "\\'")}', '${item.type}', ${item.maxPoints})">Guardar</button>
      `;
      stageGrid.appendChild(box);
    });

    grid.appendChild(stageBlock);
  });

  updateTotalHeaderPoints(totalPts, config);
}

function handleGradeInputChange(itemNumber, maxPoints) {
  const input = document.getElementById(`grade_input_${itemNumber}`);
  const box = document.getElementById(`box_grade_${itemNumber}`);
  if (!input || !box) return;

  const currentVal = input.value.trim();
  const initVal = input.getAttribute('data-initial-val') || '';

  if (currentVal !== initVal) {
    box.classList.add('modified');
  } else {
    box.classList.remove('modified');
  }

  // Recalcular total en tiempo real
  recalculateAllScreenPoints();
}

function quickSetGrade(itemNumber, value) {
  const input = document.getElementById(`grade_input_${itemNumber}`);
  if (!input) return;
  input.value = value;
  const maxPts = parseFloat(input.getAttribute('data-max-points') || '100');
  handleGradeInputChange(itemNumber, maxPts);
}

function recalculateAllScreenPoints() {
  if (!selectedStudent || !teacherActiveGradingLevel) return;
  const config = getCourseConfig(teacherActiveGradingLevel);
  const inputs = document.querySelectorAll('#teacherUnitsGrid input[type="number"]');

  let sum = 0;
  inputs.forEach(inp => {
    const v = inp.value.trim();
    if (v !== '' && !isNaN(parseFloat(v))) {
      sum += parseFloat(v);
    }
  });

  updateTotalHeaderPoints(sum, config);
}

function updateTotalHeaderPoints(totalPts, config) {
  const pointsBadge = document.getElementById('teacherStudentTotalPoints');
  const statusChip = document.getElementById('teacherStudentStatusChip');
  if (!pointsBadge) return;

  const pct = Math.min(100, Math.round((totalPts / config.maxPoints) * 100));
  const isApproved = totalPts >= config.passingScore;

  pointsBadge.innerText = `Total: ${totalPts} / ${config.maxPoints} pts (${pct}%)`;

  if (statusChip) {
    if (isApproved) {
      statusChip.innerHTML = `<span class="score score-passed">🎉 Nivel Aprobado (Meta: ${config.passingScore} pts)</span>`;
    } else {
      statusChip.innerHTML = `<span class="score score-pending">⏳ En progreso (Meta: ${config.passingScore} pts)</span>`;
    }
  }
}

async function saveGrade(studentId, courseLevel, itemNumber, itemTitle, itemType, maxPoints) {
  const inputElem = document.getElementById(`grade_input_${itemNumber}`);
  const btn = document.getElementById(`btn_save_${itemNumber}`);
  const box = document.getElementById(`box_grade_${itemNumber}`);
  if (!inputElem) return;

  const targetLevel = courseLevel || teacherActiveGradingLevel;
  const rawVal = inputElem.value.trim();
  const numericVal = parseFloat(rawVal);

  if (rawVal !== '' && (isNaN(numericVal) || numericVal < 0 || numericVal > maxPoints)) {
    showToast(`⚠️ Ingrese un valor válido entre 0 y ${maxPoints} puntos`, "error");
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerText = 'Guardando...';
  }

  const client = getClient();

  try {
    if (rawVal === '') {
      const { error } = await client
        .from('student_grades')
        .delete()
        .eq('student_id', studentId)
        .eq('course_level', targetLevel)
        .eq('item_number', itemNumber);

      if (error) throw error;
      delete selectedStudentGrades[itemNumber];
      inputElem.setAttribute('data-initial-val', '');
      if (box) {
        box.classList.remove('graded', 'modified');
      }
      showToast(`🗑️ Nota #${itemNumber} eliminada de ${targetLevel}`, "info");
    } else {
      const { error } = await client
        .from('student_grades')
        .upsert({
          student_id: studentId,
          course_level: targetLevel,
          item_number: itemNumber,
          item_title: itemTitle,
          item_type: itemType,
          max_points: maxPoints,
          points_awarded: numericVal,
          graded_by: currentUserProfile?.id || null,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'student_id,course_level,item_number'
        });

      if (error) throw error;
      selectedStudentGrades[itemNumber] = numericVal;
      inputElem.setAttribute('data-initial-val', String(numericVal));
      if (box) {
        box.classList.add('graded');
        box.classList.remove('modified');
      }
      showToast(`✅ Nota #${itemNumber} guardada en ${targetLevel}: ${numericVal} pts`, "success");
    }

    recalculateAllScreenPoints();

  } catch (err) {
    console.error("Error al guardar nota en Supabase:", err);
    showToast(`❌ Error: ${err.message}`, "error", 4500);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerText = 'Guardar';
    }
  }
}

// Guardado Masivo de Todas las Notas en el nivel activo
async function saveAllGrades() {
  if (!selectedStudent || !teacherActiveGradingLevel) return;
  const btn = document.getElementById('btnSaveAllGrades');
  const origText = btn ? btn.innerText : '';

  const inputs = document.querySelectorAll('#teacherUnitsGrid input[type="number"]');
  if (inputs.length === 0) return;

  const recordsToUpsert = [];
  const numbersToDelete = [];

  for (const input of inputs) {
    const itemNum = parseInt(input.getAttribute('data-item-number'), 10);
    const itemTitle = input.getAttribute('data-item-title') || '';
    const itemType = input.getAttribute('data-item-type') || 'Escrito';
    const maxPoints = parseFloat(input.getAttribute('data-max-points') || '100');
    const rawVal = input.value.trim();

    if (rawVal === '') {
      if (selectedStudentGrades[itemNum] !== undefined) {
        numbersToDelete.push(itemNum);
      }
    } else {
      const numericVal = parseFloat(rawVal);
      if (isNaN(numericVal) || numericVal < 0 || numericVal > maxPoints) {
        showToast(`⚠️ Nota inválida en actividad #${itemNum}. Debe estar entre 0 y ${maxPoints}.`, "error");
        input.focus();
        return;
      }

      recordsToUpsert.push({
        student_id: selectedStudent.id,
        course_level: teacherActiveGradingLevel,
        item_number: itemNum,
        item_title: itemTitle,
        item_type: itemType,
        max_points: maxPoints,
        points_awarded: numericVal,
        graded_by: currentUserProfile?.id || null,
        updated_at: new Date().toISOString()
      });
    }
  }

  if (btn) {
    btn.disabled = true;
    btn.innerText = '⏳ Guardando en Supabase...';
  }

  const client = getClient();

  try {
    // 1. Guardar notas cargadas
    if (recordsToUpsert.length > 0) {
      const { error: upsertErr } = await client
        .from('student_grades')
        .upsert(recordsToUpsert, { onConflict: 'student_id,course_level,item_number' });

      if (upsertErr) throw upsertErr;

      recordsToUpsert.forEach(r => {
        selectedStudentGrades[r.item_number] = r.points_awarded;
        const inp = document.getElementById(`grade_input_${r.item_number}`);
        const bx = document.getElementById(`box_grade_${r.item_number}`);
        if (inp) inp.setAttribute('data-initial-val', String(r.points_awarded));
        if (bx) {
          bx.classList.add('graded');
          bx.classList.remove('modified');
        }
      });
    }

    // 2. Eliminar notas vacías
    for (const num of numbersToDelete) {
      await client
        .from('student_grades')
        .delete()
        .eq('student_id', selectedStudent.id)
        .eq('course_level', teacherActiveGradingLevel)
        .eq('item_number', num);

      delete selectedStudentGrades[num];
      const inp = document.getElementById(`grade_input_${num}`);
      const bx = document.getElementById(`box_grade_${num}`);
      if (inp) inp.setAttribute('data-initial-val', '');
      if (bx) bx.classList.remove('graded', 'modified');
    }

    recalculateAllScreenPoints();
    showToast(`🎉 ¡Todas las calificaciones de ${selectedStudent.full_name} (${teacherActiveGradingLevel}) han sido guardadas con éxito!`, "success", 4000);

  } catch (err) {
    console.error("Error al guardar todas las notas:", err);
    showToast(`❌ Error al guardar notas: ${err.message}`, "error", 5000);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerText = origText;
    }
  }
}

// ==============================================================================
// 10. ALTA DE ESTUDIANTES (CON CADUCIDAD POR DEFECTO A 1 AÑO)
// ==============================================================================
function toggleNewStudentModal(open) {
  const modal = document.getElementById('newStudentModal');
  if (!modal) return;
  modal.classList.toggle('hidden', !open);

  if (open) {
    updateNewStudentLevelOptions();
    // Requisito oficial: 1 año calendario exacto después de la fecha de registro
    setNewStudentExpiryPreset(12);
    const nameInput = document.getElementById('newStudentFullName');
    if (nameInput) nameInput.focus();
  }
}

function setNewStudentExpiryPreset(months) {
  const dateInput = document.getElementById('newStudentExpiresAt');
  if (!dateInput) return;

  if (months === 0) {
    dateInput.value = '';
    return;
  }

  const date = new Date();
  date.setFullYear(date.getFullYear() + Math.floor(months / 12));
  date.setMonth(date.getMonth() + (months % 12));
  dateInput.value = date.toISOString().split('T')[0];
}

function generateNewStudentPassword() {
  const passInput = document.getElementById('newStudentPass');
  if (!passInput) return;

  const year = new Date().getFullYear();
  const randNum = Math.floor(100 + Math.random() * 900);
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const randChar = chars.charAt(Math.floor(Math.random() * chars.length));

  passInput.value = `Living${year}#${randNum}${randChar}`;
  passInput.type = 'text'; // Mostrar para que el profesor la pueda copiar
  showToast("🎲 Contraseña generada. Puedes copiarla para el alumno.", "info", 3500);
}

function updateNewStudentLevelOptions() {
  const programSelect = document.getElementById('newStudentProgram');
  const levelSelect = document.getElementById('newStudentCourseLevel');
  if (!programSelect || !levelSelect) return;

  const prog = programSelect.value;
  levelSelect.innerHTML = '';

  const optionsMap = {
    adultos: ['Adultos 1', 'Adultos 2', 'Adultos 3'],
    teens: ['Teens 1', 'Teens 2', 'Teens 3'],
    junior: ['Junior 1', 'Junior 2', 'Junior 3'],
    kids: ['Kids 1', 'Kids 2', 'Kids 3'],
    nursery: ['Nursery']
  };

  const list = optionsMap[prog] || optionsMap.adultos;
  list.forEach(lvl => {
    const opt = document.createElement('option');
    opt.value = lvl;
    opt.textContent = lvl === 'Adultos 1' ? 'Adultos 1 (Basic)' : (lvl === 'Teens 1' ? 'Teens 1 (Basic)' : lvl);
    levelSelect.appendChild(opt);
  });
}

async function handleCreateNewStudent(e) {
  e.preventDefault();
  const fullName = document.getElementById('newStudentFullName').value.trim();
  const documentId = document.getElementById('newStudentDoc')?.value?.trim() || '';
  const email = document.getElementById('newStudentEmail').value.trim();
  const password = document.getElementById('newStudentPass').value;
  const program = document.getElementById('newStudentProgram').value;
  const courseLevel = document.getElementById('newStudentCourseLevel').value;
  const expiresAt = document.getElementById('newStudentExpiresAt').value || null;

  const btn = document.getElementById('btnSaveNewStudent');
  const origText = btn.innerText;
  btn.disabled = true;
  btn.innerText = 'Creando cuenta...';

  try {
    // Cliente aislado sin persistencia de sesión para no cerrar la sesión del docente
    const tempClient = window.supabase.createClient(
      window.SUPABASE_CONFIG.url,
      window.SUPABASE_CONFIG.anonKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false
        }
      }
    );

    const redirectUrl = getAuthRedirectUrl();
    const { data: authData, error } = await tempClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
          document_id: documentId,
          role: 'estudiante',
          program: program,
          course_level: courseLevel,
          expires_at: expiresAt
        }
      }
    });

    if (error) throw error;

    // Intentar sincronizar en tabla profiles directamente
    if (authData && authData.user) {
      const studentId = authData.user.id;
      if (expiresAt) {
        localStorage.setItem('le_student_expires_' + studentId, expiresAt);
      }
      if (documentId) {
        localStorage.setItem('le_student_doc_' + studentId, documentId);
      }

      const client = getClient();
      if (client) {
        try {
          await client.from('profiles').update({
            document_id: documentId,
            expires_at: expiresAt,
            course_level: courseLevel,
            program: program
          }).eq('id', studentId);
        } catch (dbErr) {
          console.warn("Actualización complementaria de profiles:", dbErr);
        }
      }
    }

    showToast(`🎉 Estudiante ${fullName} registrado con éxito en ${courseLevel}.`, "success", 5000);

    // Limpiar formulario y cerrar modal
    document.getElementById('newStudentFullName').value = '';
    const docInput = document.getElementById('newStudentDoc');
    if (docInput) docInput.value = '';
    document.getElementById('newStudentEmail').value = '';
    document.getElementById('newStudentPass').value = '';
    document.getElementById('newStudentExpiresAt').value = '';
    toggleNewStudentModal(false);

    // Recargar lista de alumnos de Supabase en el panel
    await loadTeacherStudents();

  } catch (err) {
    console.error("Error al registrar alumno en Supabase:", err);
    showToast(`❌ Error al registrar en Supabase: ${err.message}`, "error", 5000);
  } finally {
    btn.disabled = false;
    btn.innerText = origText;
  }
}

// ==============================================================================
// 10.5. MODAL DE RENOVACIÓN DE MATRÍCULA Y SIGUIENTE NIVEL (+1 AÑO)
// ==============================================================================
function openRenewLevelModal() {
  if (!selectedStudent) return;

  const currentLevel = selectedStudent.course_level || 'Adultos 1';
  const currentProg = selectedStudent.program || 'adultos';
  const nextLvl = getNextCourseLevel(currentLevel);

  document.getElementById('renewStudentName').innerText = selectedStudent.full_name;
  document.getElementById('renewCurrentLevelText').innerText = `Nivel previo: ${currentLevel} (${currentProg})`;
  document.getElementById('renewNewProgram').value = currentProg;

  updateRenewLevelOptions();
  document.getElementById('renewNewCourseLevel').value = nextLvl;

  // Calcular nueva fecha de caducidad: +1 año (365 días) a partir de la fecha de caducidad actual o de hoy
  let baseDate = new Date();
  if (selectedStudent.expires_at) {
    const parsed = new Date(selectedStudent.expires_at);
    if (!isNaN(parsed.getTime()) && parsed > new Date()) {
      baseDate = parsed;
    }
  }
  baseDate.setFullYear(baseDate.getFullYear() + 1);
  document.getElementById('renewExpiresAt').value = baseDate.toISOString().split('T')[0];

  toggleRenewLevelModal(true);
}

function toggleRenewLevelModal(open) {
  const modal = document.getElementById('renewLevelModal');
  if (!modal) return;
  modal.classList.toggle('hidden', !open);
}

function updateRenewLevelOptions() {
  const programSelect = document.getElementById('renewNewProgram');
  const levelSelect = document.getElementById('renewNewCourseLevel');
  if (!programSelect || !levelSelect) return;

  const prog = programSelect.value;
  levelSelect.innerHTML = '';

  const optionsMap = {
    adultos: ['Adultos 1', 'Adultos 2', 'Adultos 3'],
    teens: ['Teens 1', 'Teens 2', 'Teens 3'],
    junior: ['Junior 1', 'Junior 2', 'Junior 3'],
    kids: ['Kids 1', 'Kids 2', 'Kids 3'],
    nursery: ['Nursery']
  };

  const list = optionsMap[prog] || optionsMap.adultos;
  list.forEach(lvl => {
    const opt = document.createElement('option');
    opt.value = lvl;
    opt.textContent = lvl === 'Adultos 1' ? 'Adultos 1 (Basic)' : (lvl === 'Teens 1' ? 'Teens 1 (Basic)' : lvl);
    levelSelect.appendChild(opt);
  });
}

async function handleConfirmRenewLevel(e) {
  e.preventDefault();
  if (!selectedStudent) return;

  const newProg = document.getElementById('renewNewProgram').value;
  const newLvl = document.getElementById('renewNewCourseLevel').value;
  const newExpiresAt = document.getElementById('renewExpiresAt').value;

  const btn = document.getElementById('btnConfirmRenew');
  const origText = btn.innerText;
  btn.disabled = true;
  btn.innerText = 'Renovando matrícula...';

  const client = getClient();

  try {
    // 1. Actualizar nivel y caducidad en profiles
    const { error: updateErr } = await client
      .from('profiles')
      .update({
        program: newProg,
        course_level: newLvl,
        expires_at: newExpiresAt
      })
      .eq('id', selectedStudent.id);

    if (updateErr) {
      console.warn("Actualización en Supabase profiles:", updateErr);
    }

    // 2. Guardar respaldo local
    localStorage.setItem('le_student_expires_' + selectedStudent.id, newExpiresAt);

    // 3. Actualizar memoria local del estudiante
    selectedStudent.program = newProg;
    selectedStudent.course_level = newLvl;
    selectedStudent.expires_at = newExpiresAt;

    const inList = teacherStudentsList.find(s => s.id === selectedStudent.id);
    if (inList) {
      inList.program = newProg;
      inList.course_level = newLvl;
      inList.expires_at = newExpiresAt;
    }

    updateTeacherMetrics();
    renderStudentList();
    toggleRenewLevelModal(false);

    showToast(`🎓 ¡${selectedStudent.full_name} matriculado en ${newLvl}! Acceso renovado por 1 año.`, "success", 5000);

    // Recargar vista para mostrar el nuevo libro de notas correspondiente al nuevo nivel
    await selectStudent(selectedStudent.id);

  } catch (err) {
    console.error("Error al renovar nivel del alumno:", err);
    showToast(`❌ Error: ${err.message}`, "error", 5000);
  } finally {
    btn.disabled = false;
    btn.innerText = origText;
  }
}

// ==============================================================================
// 10.6. MODAL DE EDICIÓN GENERAL DEL ESTUDIANTE
// ==============================================================================
function openEditStudentModal(studentId) {
  const targetId = studentId || (selectedStudent ? selectedStudent.id : null);
  if (!targetId) return;

  const student = teacherStudentsList.find(s => s.id === targetId);
  if (!student) return;

  document.getElementById('editStudentId').value = student.id;
  document.getElementById('editStudentFullName').value = student.full_name || '';
  const docInput = document.getElementById('editStudentDoc');
  if (docInput) docInput.value = student.document_id || '';
  document.getElementById('editStudentEmail').value = student.email || '';
  document.getElementById('editStudentProgram').value = student.program || 'adultos';

  updateEditStudentLevelOptions();
  document.getElementById('editStudentCourseLevel').value = student.course_level || 'Adultos 1';

  const expInput = document.getElementById('editStudentExpiresAt');
  const statusLabel = document.getElementById('editStudentCurrentStatus');

  if (student.expires_at) {
    const expDateStr = student.expires_at.split('T')[0];
    expInput.value = expDateStr;
    const info = getExpirationInfo(student.expires_at);
    statusLabel.innerHTML = `<span class="expiry-chip ${info.chipClass}">${info.label}</span>`;
  } else {
    expInput.value = '';
    statusLabel.innerHTML = `<span class="expiry-chip chip-none">Sin límite</span>`;
  }

  toggleEditStudentModal(true);
}

function toggleEditStudentModal(open) {
  const modal = document.getElementById('editStudentModal');
  if (!modal) return;
  modal.classList.toggle('hidden', !open);
}

function setEditStudentExpiryPreset(months) {
  const dateInput = document.getElementById('editStudentExpiresAt');
  if (!dateInput) return;

  if (months === 0) {
    dateInput.value = '';
    return;
  }

  const baseDate = dateInput.value ? new Date(dateInput.value) : new Date();
  const startingDate = (!isNaN(baseDate.getTime()) && baseDate > new Date()) ? baseDate : new Date();
  startingDate.setFullYear(startingDate.getFullYear() + Math.floor(months / 12));
  startingDate.setMonth(startingDate.getMonth() + (months % 12));
  dateInput.value = startingDate.toISOString().split('T')[0];
}

function updateEditStudentLevelOptions() {
  const programSelect = document.getElementById('editStudentProgram');
  const levelSelect = document.getElementById('editStudentCourseLevel');
  if (!programSelect || !levelSelect) return;

  const prog = programSelect.value;
  levelSelect.innerHTML = '';

  const optionsMap = {
    adultos: ['Adultos 1', 'Adultos 2', 'Adultos 3'],
    teens: ['Teens 1', 'Teens 2', 'Teens 3'],
    junior: ['Junior 1', 'Junior 2', 'Junior 3'],
    kids: ['Kids 1', 'Kids 2', 'Kids 3'],
    nursery: ['Nursery']
  };

  const list = optionsMap[prog] || optionsMap.adultos;
  list.forEach(lvl => {
    const opt = document.createElement('option');
    opt.value = lvl;
    opt.textContent = lvl === 'Adultos 1' ? 'Adultos 1 (Basic)' : (lvl === 'Teens 1' ? 'Teens 1 (Basic)' : lvl);
    levelSelect.appendChild(opt);
  });
}

async function handleSaveEditStudent(e) {
  e.preventDefault();
  const studentId = document.getElementById('editStudentId').value;
  const fullName = document.getElementById('editStudentFullName').value.trim();
  const documentId = document.getElementById('editStudentDoc')?.value?.trim() || '';
  const program = document.getElementById('editStudentProgram').value;
  const courseLevel = document.getElementById('editStudentCourseLevel').value;
  const expiresAt = document.getElementById('editStudentExpiresAt').value || null;

  const btn = document.getElementById('btnSaveEditStudent');
  const origText = btn.innerText;
  btn.disabled = true;
  btn.innerText = 'Guardando cambios...';

  const client = getClient();

  try {
    // 1. Actualizar tabla public.profiles en Supabase
    const { error: profileErr } = await client
      .from('profiles')
      .update({
        full_name: fullName,
        document_id: documentId,
        program: program,
        course_level: courseLevel,
        expires_at: expiresAt
      })
      .eq('id', studentId);

    if (profileErr) {
      console.warn("Actualización complementaria de profiles:", profileErr);
    }

    // 2. Guardar en respaldo local
    if (expiresAt) {
      localStorage.setItem('le_student_expires_' + studentId, expiresAt);
    } else {
      localStorage.removeItem('le_student_expires_' + studentId);
    }
    if (documentId) {
      localStorage.setItem('le_student_doc_' + studentId, documentId);
    } else {
      localStorage.removeItem('le_student_doc_' + studentId);
    }

    // 3. Actualizar memoria local de estudiantes
    const student = teacherStudentsList.find(s => s.id === studentId);
    if (student) {
      student.full_name = fullName;
      student.document_id = documentId;
      student.program = program;
      student.course_level = courseLevel;
      student.expires_at = expiresAt;
    }

    if (selectedStudent && selectedStudent.id === studentId) {
      selectedStudent.full_name = fullName;
      selectedStudent.document_id = documentId;
      selectedStudent.program = program;
      selectedStudent.course_level = courseLevel;
      selectedStudent.expires_at = expiresAt;
      await selectStudent(studentId);
    }

    updateTeacherMetrics();
    renderStudentList();
    toggleEditStudentModal(false);

    showToast(`✅ Datos y vigencia de ${fullName} actualizados con éxito.`, "success");

  } catch (err) {
    console.error("Error al actualizar estudiante:", err);
    showToast(`❌ Error: ${err.message}`, "error", 5000);
  } finally {
    btn.disabled = false;
    btn.innerText = origText;
  }
}

// Renovación rápida de 30 días con un clic
async function quickRenewStudent(days = 30) {
  if (!selectedStudent) return;

  const currentExp = selectedStudent.expires_at;
  let baseDate = new Date();
  if (currentExp) {
    const parsed = new Date(currentExp);
    if (!isNaN(parsed.getTime()) && parsed > new Date()) {
      baseDate = parsed;
    }
  }

  baseDate.setDate(baseDate.getDate() + days);
  const newExpiryStr = baseDate.toISOString().split('T')[0];

  const client = getClient();
  try {
    await client
      .from('profiles')
      .update({ expires_at: newExpiryStr })
      .eq('id', selectedStudent.id);

    localStorage.setItem('le_student_expires_' + selectedStudent.id, newExpiryStr);
    selectedStudent.expires_at = newExpiryStr;

    updateTeacherMetrics();
    renderStudentList();

    // Actualizar chip en cabecera
    const expiryChip = document.getElementById('selectedStudentExpiryChip');
    if (expiryChip) {
      const expInfo = getExpirationInfo(newExpiryStr);
      expiryChip.className = `expiry-chip ${expInfo.chipClass}`;
      expiryChip.innerText = expInfo.label;
    }

    showToast(`⚡ Acceso renovado por +${days} días hasta el ${baseDate.toLocaleDateString('es-ES')}.`, "success", 4000);

  } catch (err) {
    console.error("Error en renovación rápida:", err);
    showToast(`❌ Error: ${err.message}`, "error");
  }
}

// ==============================================================================
// 11. INICIALIZACIÓN Y DETECCIÓN DE EVENTOS AUTH
// ==============================================================================
document.addEventListener('DOMContentLoaded', async () => {
  const client = getClient();
  if (!client) return;

  // 1. Detectar si el usuario viene de un enlace de recuperación de contraseña
  client.auth.onAuthStateChange(async (event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      const modal = document.getElementById('resetPasswordModal');
      if (modal) modal.classList.remove('hidden');
    }
  });

  // Detección directa por parámetros de URL (hash o query params de Supabase)
  try {
    const hash = window.location.hash ? window.location.hash.substring(1) : '';
    const hashParams = new URLSearchParams(hash);
    const searchParams = new URLSearchParams(window.location.search);
    const authType = hashParams.get('type') || searchParams.get('type');

    if (authType === 'recovery') {
      const modal = document.getElementById('resetPasswordModal');
      if (modal) modal.classList.remove('hidden');
    } else if (authType === 'signup') {
      showToast("🎉 ¡Correo verificado con éxito! Ya puedes iniciar sesión.", "success", 6000);
    }
  } catch (errParams) {
    console.warn("Detección de parámetros URL:", errParams);
  }

  // 2. Restaurar sesión existente
  try {
    const { data: { session } } = await client.auth.getSession();
    if (session && session.user) {
      await initAuthenticatedUser(session.user);
    }
  } catch (e) {
    console.warn("No se pudo restaurar la sesión automáticamente:", e);
  }
});

// Exposición en ventana global
window.switchRole = switchRole;
window.handleAuthSubmit = handleAuthSubmit;
window.logout = logout;
window.logoutFromExpired = logoutFromExpired;
window.toggleRecoveryModal = toggleRecoveryModal;
window.handleSendPasswordReset = handleSendPasswordReset;
window.handleUpdateNewPassword = handleUpdateNewPassword;
window.filterStudents = filterStudents;
window.selectStudent = selectStudent;
window.changeTeacherGradingLevel = changeTeacherGradingLevel;
window.changeStudentViewLevel = changeStudentViewLevel;
window.saveGrade = saveGrade;
window.saveAllGrades = saveAllGrades;
window.quickSetGrade = quickSetGrade;
window.handleGradeInputChange = handleGradeInputChange;
window.toggleNewStudentModal = toggleNewStudentModal;
window.updateNewStudentLevelOptions = updateNewStudentLevelOptions;
window.handleCreateNewStudent = handleCreateNewStudent;
window.setNewStudentExpiryPreset = setNewStudentExpiryPreset;
window.generateNewStudentPassword = generateNewStudentPassword;
window.openRenewLevelModal = openRenewLevelModal;
window.toggleRenewLevelModal = toggleRenewLevelModal;
window.updateRenewLevelOptions = updateRenewLevelOptions;
window.handleConfirmRenewLevel = handleConfirmRenewLevel;
window.openEditStudentModal = openEditStudentModal;
window.toggleEditStudentModal = toggleEditStudentModal;
window.setEditStudentExpiryPreset = setEditStudentExpiryPreset;
window.updateEditStudentLevelOptions = updateEditStudentLevelOptions;
window.handleSaveEditStudent = handleSaveEditStudent;
window.quickRenewStudent = quickRenewStudent;

// ==============================================================================
// 12. GESTIÓN DE CLASES ONLINE EN EL PANEL DEL DOCENTE
// ==============================================================================
let teacherLoadedClasses = [];
let currentViewingClassForBookings = null;

function switchTeacherTab(tab) {
  const btnStudents = document.getElementById('tabBtnTeacherStudents');
  const btnClasses = document.getElementById('tabBtnTeacherClasses');
  const contentStudents = document.getElementById('teacherTabStudents');
  const contentClasses = document.getElementById('teacherTabClasses');

  if (!btnStudents || !btnClasses || !contentStudents || !contentClasses) return;

  if (tab === 'classes') {
    btnStudents.classList.remove('active');
    btnClasses.classList.add('active');
    contentStudents.classList.add('hidden');
    contentClasses.classList.remove('hidden');
    loadTeacherOnlineClasses();
  } else {
    btnStudents.classList.add('active');
    btnClasses.classList.remove('active');
    contentStudents.classList.remove('hidden');
    contentClasses.classList.add('hidden');
  }
}

async function updateTeacherClassesBadge() {
  if (!window.OnlineClassesService) return;
  try {
    const classes = await window.OnlineClassesService.fetchOnlineClasses(false);
    const badge = document.getElementById('teacherClassesPillCount');
    if (badge) {
      badge.innerText = `${classes.length} activas`;
    }
  } catch (e) {}
}

async function loadTeacherOnlineClasses() {
  const container = document.getElementById('teacherClassesContainer');
  if (!container || !window.OnlineClassesService) return;

  container.innerHTML = '<div style="color: var(--color-muted); text-align: center; padding: 30px; grid-column: 1/-1;">Cargando clases online...</div>';

  try {
    const classes = await window.OnlineClassesService.fetchOnlineClasses(true);
    teacherLoadedClasses = classes;

    // Calcular métricas
    const activeClasses = classes.filter(c => c.status === 'active');
    const totalBookings = activeClasses.reduce((acc, c) => acc + (c.bookings_count || 0), 0);
    const maxPossibleSpots = activeClasses.length * 4;
    const freeSpots = Math.max(0, maxPossibleSpots - totalBookings);
    const confirmedBookings = activeClasses.reduce((acc, c) => acc + (c.confirmed_count || 0), 0);

    const mClasses = document.getElementById('metricTotalClasses');
    const mBookings = document.getElementById('metricTotalClassBookings');
    const mFree = document.getElementById('metricFreeClassSpots');
    const mConfirmed = document.getElementById('metricConfirmedBookings');

    if (mClasses) mClasses.innerText = activeClasses.length;
    if (mBookings) mBookings.innerText = `${totalBookings} / ${maxPossibleSpots}`;
    if (mFree) mFree.innerText = freeSpots;
    if (mConfirmed) mConfirmed.innerText = confirmedBookings;

    if (classes.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: rgba(0,0,0,0.25); border-radius: var(--radius-xl); border: 1px dashed rgba(255,255,255,0.2);">
          <div style="font-size: 40px; margin-bottom: 8px;">🌐</div>
          <h3 style="font-size: 18px; margin-bottom: 6px;">Aún no has publicado clases online</h3>
          <p style="color: var(--color-muted); font-size: 13px; margin-bottom: 16px;">
            Haz clic en «Publicar Nueva Clase Online» para programar sesiones de máximo 4 personas.
          </p>
          <button class="btn-primary" onclick="openPublishClassModal()" style="width: auto; padding: 10px 20px;">➕ Publicar Primera Clase</button>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    classes.forEach(cls => {
      const card = document.createElement('div');
      const isCancelled = cls.status === 'cancelled';
      const isFull = cls.is_full;
      card.className = 'class-card';
      if (isCancelled) {
        card.style.opacity = '0.6';
        card.style.filter = 'grayscale(0.5)';
      }

      const formattedDate = window.OnlineClassesService.formatClassDate(cls.class_date);
      const startTime = window.OnlineClassesService.formatClassTime(cls.start_time);
      const endTime = window.OnlineClassesService.formatClassTime(cls.end_time);

      // Bloques de cupos (máx 4)
      let blocksHtml = '';
      for (let i = 0; i < 4; i++) {
        if (i < (cls.bookings_count || 0)) {
          blocksHtml += `<div class="spot-block ${isFull ? 'occupied-full' : 'occupied'}"></div>`;
        } else {
          blocksHtml += `<div class="spot-block free"></div>`;
        }
      }

      const statusBadge = isCancelled
        ? '<span style="background: rgba(239,68,68,0.2); color: #f87171; border: 1px solid #ef4444; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 700;">Cancelada</span>'
        : (isFull 
            ? '<span style="background: rgba(239,68,68,0.2); color: #f87171; border: 1px solid #ef4444; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 700;">Completa (4/4)</span>'
            : `<span style="background: rgba(34,197,94,0.2); color: #4ade80; border: 1px solid #22c55e; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 700;">${cls.remaining_spots} cupos libres</span>`);

      card.innerHTML = `
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; gap: 8px; flex-wrap: wrap;">
            <span class="game-category-tag tag-vocab" style="font-size: 11px;">${cls.course_level}</span>
            ${statusBadge}
          </div>

          <h3 style="font-family: var(--font-display); font-size: 18px; color: #ffffff; margin: 0 0 4px 0;">${cls.title}</h3>
          
          <div style="font-size: 12px; color: #93c5fd; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span>📅 ${formattedDate}</span>
            <span>·</span>
            <span>🕒 ${startTime} - ${endTime}</span>
          </div>

          ${cls.meeting_link ? `
            <div style="margin-bottom: 12px;">
              <a href="${cls.meeting_link}" target="_blank" style="color: #60a5fa; font-size: 12px; text-decoration: underline; display: inline-flex; align-items: center; gap: 4px;">
                🔗 Enlace de videollamada
              </a>
            </div>
          ` : ''}

          <div class="spots-indicator-box" style="margin: 10px 0 16px 0;">
            <div style="display: flex; justify-content: space-between; font-size: 12px;">
              <span>Inscritos: <strong>${cls.bookings_count || 0} de 4 máx</strong></span>
              <span style="color: #4ade80;">(${cls.confirmed_count || 0} confirmados)</span>
            </div>
            <div class="spots-gauge">
              ${blocksHtml}
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 8px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px;">
          <button type="button" class="btn-primary" style="flex: 2; padding: 8px 12px; font-size: 12px;" onclick="openClassBookingsModal('${cls.id}')">
            👥 Ver Alumnos (${cls.bookings_count || 0})
          </button>
          ${!isCancelled ? `
            <button type="button" class="btn-secondary" style="flex: 1; padding: 8px 8px; font-size: 12px; color: #f87171; border-color: rgba(239,68,68,0.4);" onclick="handleCancelClass('${cls.id}')" title="Cancelar esta sesión">
              🗑️ Cancelar
            </button>
          ` : ''}
        </div>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Error al cargar clases de profesor:", err);
    container.innerHTML = '<div style="color: #f87171; text-align: center; padding: 30px; grid-column: 1/-1;">Error al cargar las clases online.</div>';
  }
}

function openPublishClassModal() {
  const modal = document.getElementById('publishClassModal');
  if (!modal) return;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateInput = document.getElementById('newClassDate');
  if (dateInput && !dateInput.value) {
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }
  const startInput = document.getElementById('newClassStartTime');
  const endInput = document.getElementById('newClassEndTime');
  if (startInput && !startInput.value) startInput.value = "18:00";
  if (endInput && !endInput.value) endInput.value = "19:00";

  modal.classList.remove('hidden');
}

function closePublishClassModal() {
  const modal = document.getElementById('publishClassModal');
  if (modal) modal.classList.add('hidden');
}

async function handlePublishClassSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('btnPublishClass');
  btn.disabled = true;
  btn.innerText = 'Publicando clase...';

  try {
    const title = document.getElementById('newClassTitle').value;
    const level = document.getElementById('newClassLevel').value;
    const date = document.getElementById('newClassDate').value;
    const startTime = document.getElementById('newClassStartTime').value;
    const endTime = document.getElementById('newClassEndTime').value;
    const meetLink = document.getElementById('newClassMeetingLink').value;
    const desc = document.getElementById('newClassDesc').value;

    const teacherName = currentUserProfile && currentUserProfile.full_name 
      ? `Prof. ${currentUserProfile.full_name}` 
      : 'Profesor Living English';

    await window.OnlineClassesService.createOnlineClass({
      teacher_id: currentUserProfile ? currentUserProfile.id : null,
      teacher_name: teacherName,
      title: title,
      course_level: level,
      class_date: date,
      start_time: startTime,
      end_time: endTime,
      meeting_link: meetLink,
      description: desc
    });

    closePublishClassModal();
    showToast("🎉 ¡Clase online publicada con éxito! Ya está disponible en el portal.", "success", 5000);
    
    document.getElementById('newClassTitle').value = '';
    document.getElementById('newClassDesc').value = '';
    document.getElementById('newClassMeetingLink').value = '';

    await loadTeacherOnlineClasses();
    updateTeacherClassesBadge();

  } catch (err) {
    showToast(`❌ Error: ${err.message}`, "error", 5000);
  } finally {
    btn.disabled = false;
    btn.innerText = 'Publicar Clase en el Portal';
  }
}

async function handleCancelClass(classId) {
  if (!confirm("¿Estás seguro de que deseas cancelar esta clase online? Ya no se admitirán más reservas.")) {
    return;
  }
  try {
    await window.OnlineClassesService.cancelOnlineClass(classId);
    showToast("Clase cancelada.", "info");
    await loadTeacherOnlineClasses();
  } catch (err) {
    showToast("Error al cancelar la clase.", "error");
  }
}

async function openClassBookingsModal(classId) {
  const modal = document.getElementById('viewClassBookingsModal');
  if (!modal || !window.OnlineClassesService) return;

  const target = teacherLoadedClasses.find(c => c.id === classId);
  if (!target) return;
  currentViewingClassForBookings = target;

  document.getElementById('viewBookingsClassTitle').innerText = target.title;
  document.getElementById('viewBookingsClassSchedule').innerText = 
    `📅 ${window.OnlineClassesService.formatClassDate(target.class_date)} · 🕒 ${window.OnlineClassesService.formatClassTime(target.start_time)} - ${window.OnlineClassesService.formatClassTime(target.end_time)}`;

  const meetWrapper = document.getElementById('viewBookingsMeetLinkWrapper');
  if (meetWrapper) {
    meetWrapper.innerHTML = target.meeting_link 
      ? `<a href="${target.meeting_link}" target="_blank" class="btn-talk" style="font-size: 12px; padding: 6px 12px; text-decoration: none;">🎥 Iniciar Llamada</a>` 
      : '';
  }

  const container = document.getElementById('viewBookingsListContainer');
  container.innerHTML = '<div style="color: var(--color-muted); text-align: center; padding: 20px;">Cargando inscritos...</div>';

  modal.classList.remove('hidden');

  try {
    const bookings = await window.OnlineClassesService.fetchBookingsForClass(classId);
    const countText = document.getElementById('viewBookingsCountText');
    if (countText) {
      countText.innerText = `${bookings.length} de 4 cupos ocupados`;
    }

    if (bookings.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 30px; background: rgba(0,0,0,0.25); border-radius: var(--radius-md); border: 1px dashed rgba(255,255,255,0.15);">
          <div style="font-size: 32px; margin-bottom: 6px;">👥</div>
          <p style="margin: 0; color: var(--color-muted); font-size: 13px;">Aún no se ha agendado ningún estudiante para esta sesión.</p>
        </div>
      `;
      return;
    }

    let html = `
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <thead>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.2); color: var(--color-muted); text-align: left;">
              <th style="padding: 10px 8px;">Estudiante</th>
              <th style="padding: 10px 8px;">Cédula Vzla</th>
              <th style="padding: 10px 8px;">Teléfono Vzla</th>
              <th style="padding: 10px 8px;">Correo</th>
              <th style="padding: 10px 8px;">Estado</th>
              <th style="padding: 10px 8px; text-align: right;">Contacto</th>
            </tr>
          </thead>
          <tbody>
    `;

    bookings.forEach((b) => {
      const isConfirmed = b.status === 'confirmed';
      const statusChip = isConfirmed 
        ? '<span style="background: rgba(34,197,94,0.2); color: #4ade80; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: 700;">🟢 Confirmado</span>'
        : '<span style="background: rgba(234,179,8,0.2); color: #fde047; padding: 3px 8px; border-radius: 12px; font-size: 11px; font-weight: 700;">🟡 Pendiente</span>';

      const cleanPhone = (b.phone || '').replace(/\D/g, '');
      const waNumber = cleanPhone.startsWith('0') ? '58' + cleanPhone.substring(1) : (cleanPhone.startsWith('58') ? cleanPhone : '58' + cleanPhone);
      const waMsg = encodeURIComponent(`Hola ${b.full_name}, te escribo de la Academia Living English sobre tu clase online de "${target.title}".`);

      html += `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
          <td style="padding: 10px 8px;">
            <strong style="color: #ffffff; display: block;">${b.full_name}</strong>
            <span style="font-size: 11px; color: var(--color-muted);">${b.student_level || 'General'}</span>
          </td>
          <td style="padding: 10px 8px; font-family: monospace; font-size: 12px; color: #93c5fd;">
            ${b.document_id}
          </td>
          <td style="padding: 10px 8px; font-family: monospace; font-size: 12px; color: #e2e8f0;">
            ${b.phone}
          </td>
          <td style="padding: 10px 8px; font-size: 12px; color: #cbd5e1;">
            ${b.email}
          </td>
          <td style="padding: 10px 8px;">
            ${statusChip}
          </td>
          <td style="padding: 10px 8px; text-align: right;">
            <a href="https://wa.me/${waNumber}?text=${waMsg}" target="_blank" style="background: #25d366; color: #ffffff; text-decoration: none; padding: 5px 10px; border-radius: 4px; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
              📲 WhatsApp
            </a>
          </td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    container.innerHTML = html;

  } catch (err) {
    console.error("Error al cargar postulantes:", err);
    container.innerHTML = '<div style="color: #f87171; padding: 20px;">Error al cargar la lista de postulantes.</div>';
  }
}

function closeClassBookingsModal() {
  const modal = document.getElementById('viewClassBookingsModal');
  if (modal) modal.classList.add('hidden');
}

// Exposición global
window.switchTeacherTab = switchTeacherTab;
window.loadTeacherOnlineClasses = loadTeacherOnlineClasses;
window.openPublishClassModal = openPublishClassModal;
window.closePublishClassModal = closePublishClassModal;
window.handlePublishClassSubmit = handlePublishClassSubmit;
window.handleCancelClass = handleCancelClass;
window.openClassBookingsModal = openClassBookingsModal;
window.closeClassBookingsModal = closeClassBookingsModal;
window.updateTeacherClassesBadge = updateTeacherClassesBadge;

