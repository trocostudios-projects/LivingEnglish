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

// ==============================================================================
// 5. INICIO DE SESIÓN CON SUPABASE AUTH (SIN MOCK NI DEMO)
// ==============================================================================
async function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPass').value;

  const client = window.supabaseClient;
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

async function handleSendPasswordReset(e) {
  e.preventDefault();
  const email = document.getElementById('recoveryEmail').value.trim();
  const btn = document.getElementById('btnSendRecovery');

  if (!email) return;

  btn.disabled = true;
  btn.innerText = 'Enviando...';

  const client = window.supabaseClient;
  try {
    const { error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.href
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

  const client = window.supabaseClient;
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
// 7. INICIALIZACIÓN DE USUARIO AUTENTICADO
// ==============================================================================
async function initAuthenticatedUser(user) {
  currentSessionUser = user;
  const client = window.supabaseClient;

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
    await loadTeacherStudents();
  } else {
    document.getElementById('studentDashboard').classList.remove('hidden');
    document.getElementById('teacherDashboard').classList.add('hidden');
    setupStudentView();
    await loadStudentGrades();
  }
}

async function logout() {
  const client = window.supabaseClient;
  if (client) {
    await client.auth.signOut();
  }

  currentUserProfile = null;
  currentSessionUser = null;
  selectedStudent = null;

  document.getElementById('authSection').classList.remove('hidden');
  document.getElementById('userBadge').classList.add('hidden');
  document.getElementById('studentDashboard').classList.add('hidden');
  document.getElementById('teacherDashboard').classList.add('hidden');

  showToast("Sesión cerrada", "info");
}

// ==============================================================================
// 8. DASHBOARD DEL ESTUDIANTE
// ==============================================================================
function setupStudentView() {
  const courseLevel = currentUserProfile.course_level || 'Adultos 1';
  const config = getCourseConfig(courseLevel);

  document.getElementById('studentCourseTitle').innerText = config.title;
  document.getElementById('studentCurrentLevelBadge').innerText = courseLevel;

  const targetText = config.isKids
    ? 'Meta: Completar stickers y Show Day'
    : (config.isNursery ? 'Seguimiento de estimulación diaria' : `Meta para aprobar: ${config.passingScore} / ${config.maxPoints} pts`);

  document.getElementById('studentApprovalTarget').innerText = targetText;
}

async function loadStudentGrades() {
  const client = window.supabaseClient;
  studentGradesCache = {};

  if (client && currentUserProfile) {
    const { data, error } = await client
      .from('student_grades')
      .select('item_number, points_awarded')
      .eq('student_id', currentUserProfile.id)
      .eq('course_level', currentUserProfile.course_level);

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
// 9. DASHBOARD DEL PROFESOR (CONSULTA Y CALIFICACIÓN REAL EN SUPABASE)
// ==============================================================================
async function loadTeacherStudents() {
  const client = window.supabaseClient;
  teacherStudentsList = [];

  const { data, error } = await client
    .from('profiles')
    .select('id, full_name, email, program, course_level')
    .eq('role', 'estudiante')
    .order('full_name', { ascending: true });

  if (error) {
    console.error("Error al listar estudiantes de Supabase:", error);
    showToast("Error al obtener la lista de alumnos", "error");
  } else {
    teacherStudentsList = data || [];
  }

  renderStudentList();
}

function renderStudentList() {
  const container = document.getElementById('studentsContainer');
  if (!container) return;
  container.innerHTML = '';

  const progFilter = document.getElementById('filterProgramSelect')?.value || 'all';
  const q = document.getElementById('searchStudent')?.value?.toLowerCase() || '';

  const filtered = teacherStudentsList.filter(student => {
    const matchesProg = progFilter === 'all' || student.program === progFilter;
    const matchesSearch = !q || (student.full_name && student.full_name.toLowerCase().includes(q)) || (student.email && student.email.toLowerCase().includes(q));
    return matchesProg && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="font-size: 13px; color: var(--color-muted); padding: 18px; text-align: center; line-height: 1.5;">
        No hay estudiantes registrados para este filtro.<br>
        Usa el botón <strong>➕ Registrar Nuevo Estudiante</strong> para agregar uno.
      </div>`;
    return;
  }

  filtered.forEach(student => {
    const item = document.createElement('div');
    const isSelected = selectedStudent && selectedStudent.id === student.id;
    item.className = `student-item ${isSelected ? 'active' : ''}`;
    item.onclick = () => selectStudent(student.id);
    item.innerHTML = `
      <div class="student-name">${student.full_name}</div>
      <div class="student-level">📚 ${student.course_level} · ${student.email}</div>
    `;
    container.appendChild(item);
  });
}

function filterStudents() {
  renderStudentList();
}

async function selectStudent(studentId) {
  selectedStudent = teacherStudentsList.find(s => s.id === studentId);
  if (!selectedStudent) return;

  renderStudentList();

  const titleElem = document.getElementById('selectedStudentTitle');
  const subElem = document.getElementById('selectedStudentSub');
  const pointsBadge = document.getElementById('teacherStudentTotalPoints');
  const grid = document.getElementById('teacherUnitsGrid');

  titleElem.innerText = selectedStudent.full_name;
  subElem.innerText = `Evaluaciones asignadas para ${selectedStudent.course_level} (${selectedStudent.email})`;
  pointsBadge.innerText = 'Cargando puntaje...';

  grid.innerHTML = '<div style="color: var(--color-muted); padding: 20px;">Cargando lista de evaluaciones...</div>';

  selectedStudentGrades = {};
  const client = window.supabaseClient;

  const { data, error } = await client
    .from('student_grades')
    .select('item_number, points_awarded')
    .eq('student_id', selectedStudent.id)
    .eq('course_level', selectedStudent.course_level);

  if (error) {
    console.error("Error al obtener notas:", error);
  } else if (data) {
    data.forEach(item => {
      selectedStudentGrades[item.item_number] = item.points_awarded;
    });
  }

  // Cargar configuración curricular del alumno
  const config = getCourseConfig(selectedStudent.course_level);
  grid.innerHTML = '';

  let totalPts = 0;

  config.stages.forEach(stage => {
    stage.items.forEach(item => {
      const currentPts = selectedStudentGrades[item.number] !== undefined ? selectedStudentGrades[item.number] : '';
      if (currentPts !== '') totalPts += Number(currentPts);

      const box = document.createElement('div');
      box.className = 'grade-input-box';
      box.innerHTML = `
        <label>#${item.number} (${item.type} · ${item.lesson})</label>
        <div class="grade-input-box-title">${item.title}</div>
        <input type="number" step="0.5" min="0" max="${item.maxPoints}" id="grade_input_${item.number}" value="${currentPts}" placeholder="0 a ${item.maxPoints} pts">
        <button class="btn-save-grade" id="btn_save_${item.number}" onclick="saveGrade('${selectedStudent.id}', '${selectedStudent.course_level}', ${item.number}, '${item.title.replace(/'/g, "\\'")}', '${item.type}', ${item.maxPoints})">Guardar</button>
      `;
      grid.appendChild(box);
    });
  });

  pointsBadge.innerText = `Total: ${totalPts} / ${config.maxPoints} pts`;
}

async function saveGrade(studentId, courseLevel, itemNumber, itemTitle, itemType, maxPoints) {
  const inputElem = document.getElementById(`grade_input_${itemNumber}`);
  const btn = document.getElementById(`btn_save_${itemNumber}`);
  if (!inputElem) return;

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

  const client = window.supabaseClient;

  try {
    if (rawVal === '') {
      const { error } = await client
        .from('student_grades')
        .delete()
        .eq('student_id', studentId)
        .eq('course_level', courseLevel)
        .eq('item_number', itemNumber);

      if (error) throw error;
      delete selectedStudentGrades[itemNumber];
      showToast(`🗑️ Nota eliminada para #${itemNumber}`, "info");
    } else {
      const { error } = await client
        .from('student_grades')
        .upsert({
          student_id: studentId,
          course_level: courseLevel,
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
      showToast(`✅ Nota #${itemNumber} guardada en Supabase: ${numericVal} pts`, "success");
    }

    // Recalcular total en pantalla
    let sum = 0;
    Object.values(selectedStudentGrades).forEach(val => sum += Number(val || 0));
    const config = getCourseConfig(courseLevel);
    document.getElementById('teacherStudentTotalPoints').innerText = `Total: ${sum} / ${config.maxPoints} pts`;

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

// ==============================================================================
// 10. ALTA DE ESTUDIANTES DESDE EL PANEL DE PROFESOR
// ==============================================================================
function toggleNewStudentModal(open) {
  const modal = document.getElementById('newStudentModal');
  if (!modal) return;
  modal.classList.toggle('hidden', !open);

  if (open) {
    updateNewStudentLevelOptions();
    const nameInput = document.getElementById('newStudentFullName');
    if (nameInput) nameInput.focus();
  }
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
  const email = document.getElementById('newStudentEmail').value.trim();
  const password = document.getElementById('newStudentPass').value;
  const program = document.getElementById('newStudentProgram').value;
  const courseLevel = document.getElementById('newStudentCourseLevel').value;

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

    const { error } = await tempClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: 'estudiante',
          program: program,
          course_level: courseLevel
        }
      }
    });

    if (error) throw error;

    showToast(`🎉 Estudiante ${fullName} registrado con éxito en ${courseLevel}.`, "success", 5000);

    // Limpiar formulario y cerrar modal
    document.getElementById('newStudentFullName').value = '';
    document.getElementById('newStudentEmail').value = '';
    document.getElementById('newStudentPass').value = '';
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
// 11. INICIALIZACIÓN Y DETECCIÓN DE EVENTOS AUTH
// ==============================================================================
document.addEventListener('DOMContentLoaded', async () => {
  const client = window.supabaseClient;
  if (!client) return;

  // 1. Detectar si el usuario viene de un enlace de recuperación de contraseña
  client.auth.onAuthStateChange(async (event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      const modal = document.getElementById('resetPasswordModal');
      if (modal) modal.classList.remove('hidden');
    }
  });

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
window.toggleRecoveryModal = toggleRecoveryModal;
window.handleSendPasswordReset = handleSendPasswordReset;
window.handleUpdateNewPassword = handleUpdateNewPassword;
window.filterStudents = filterStudents;
window.selectStudent = selectStudent;
window.saveGrade = saveGrade;
window.toggleNewStudentModal = toggleNewStudentModal;
window.updateNewStudentLevelOptions = updateNewStudentLevelOptions;
window.handleCreateNewStudent = handleCreateNewStudent;
