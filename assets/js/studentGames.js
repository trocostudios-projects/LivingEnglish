/**
 * Academia Living English — Módulo Oficial de Juegos Interactivos (LinguaQuest)
 * Conectado a la tabla `public.games` en Supabase (columnas: NIVEL, WORDS, CLUE, PICTURE)
 */

(function () {
  // Base de respaldo ligera por si la tabla `games` en Supabase tiene RLS restringido o sin conexión temporal
  const DEFAULT_DATA = [
    // --- LEVEL A1 ---
    { NIVEL: 'A1', CLUE: '(Noun) A round red or green fruit that grows on trees', RESPUESTA: 'Apple' },
    { NIVEL: 'A1', CLUE: '(Noun) A domesticated carnivorous mammal that barks', RESPUESTA: 'Dog' },
    { NIVEL: 'A1', CLUE: '(Noun) A building for human habitation', RESPUESTA: 'House' },
    { NIVEL: 'A1', CLUE: 'She ___ to the gym every Monday morning.', RESPUESTA: 'goes' },
    { NIVEL: 'A1', CLUE: '(Verb) To take liquid into the mouth and swallow it', RESPUESTA: 'Drink' },
    { NIVEL: 'A1', CLUE: '(Noun) A road vehicle with four wheels powered by an engine', RESPUESTA: 'Car' },
    { NIVEL: 'A1', CLUE: 'Last night, my father ___ a delicious pasta dinner.', RESPUESTA: 'cooked' },
    { NIVEL: 'A1', CLUE: '(Noun) A piece of furniture with a flat top and legs', RESPUESTA: 'Table' },
    { NIVEL: 'A1', CLUE: 'Look! The dog is ___ water from the bowl right now.', RESPUESTA: 'drinking' },
    { NIVEL: 'A1', CLUE: '(Adjective) Having a high temperature', RESPUESTA: 'Hot' },
    { NIVEL: 'A1', CLUE: 'She is ___ a very interesting book in her bedroom.', RESPUESTA: 'reading' },
    { NIVEL: 'A1', CLUE: '(Noun) An institution for educating children', RESPUESTA: 'School' },
    { NIVEL: 'A1', CLUE: 'They ___ English together every afternoon.', RESPUESTA: 'study' },
    { NIVEL: 'A1', CLUE: '(Noun) A small domesticated carnivorous mammal with soft fur', RESPUESTA: 'Cat' },
    { NIVEL: 'A1', CLUE: 'I ___ a new jacket at the shopping mall last Saturday.', RESPUESTA: 'bought' },

    // --- LEVEL A2 ---
    { NIVEL: 'A2', CLUE: '(Noun) A complex of runways and buildings for aircraft', RESPUESTA: 'Airport' },
    { NIVEL: 'A2', CLUE: 'The movie ___ ten minutes ago, so hurry up!', RESPUESTA: 'started' },
    { NIVEL: 'A2', CLUE: '(Noun) A place where bread and cakes are baked and sold', RESPUESTA: 'Bakery' },
    { NIVEL: 'A2', CLUE: 'While I was reading, my mom was ___ dinner.', RESPUESTA: 'cooking' },
    { NIVEL: 'A2', CLUE: 'I ___ that movie twice already this month.', RESPUESTA: 'have seen' },
    { NIVEL: 'A2', CLUE: '(Verb) To reach a destination', RESPUESTA: 'Arrive' },
    { NIVEL: 'A2', CLUE: 'Next year, they ___ to Japan for their holidays.', RESPUESTA: 'will travel' },
    { NIVEL: 'A2', CLUE: '(Adjective) Costing a lot of money', RESPUESTA: 'Expensive' },
    { NIVEL: 'A2', CLUE: 'When we arrived at the station, the train ___.', RESPUESTA: 'had left' },
    { NIVEL: 'A2', CLUE: '(Noun) An official document certifying identity for travel', RESPUESTA: 'Passport' },
    { NIVEL: 'A2', CLUE: 'We ___ each other since primary school.', RESPUESTA: 'have known' },
    { NIVEL: 'A2', CLUE: '(Adverb) At a low speed or unhurriedly', RESPUESTA: 'Slowly' },

    // --- LEVEL B1 ---
    { NIVEL: 'B1', CLUE: 'By the time the movie started, we ___ our popcorn.', RESPUESTA: 'had finished' },
    { NIVEL: 'B1', CLUE: '(Noun) A strong desire to achieve success', RESPUESTA: 'Ambition' },
    { NIVEL: 'B1', CLUE: 'A new shopping bridge ___ across the river this year.', RESPUESTA: 'is being built' },
    { NIVEL: 'B1', CLUE: '(Adjective) Showing kindness towards others', RESPUESTA: 'Generous' },
    { NIVEL: 'B1', CLUE: 'She was exhausted because she ___ for hours in the cold.', RESPUESTA: 'had been waiting' },
    { NIVEL: 'B1', CLUE: '(Verb) To put forward with approval as being suitable', RESPUESTA: 'Recommend' },
    { NIVEL: 'B1', CLUE: 'If I won the lottery, I ___ a house near the sea.', RESPUESTA: 'would buy' },
    { NIVEL: 'B1', CLUE: '(Noun) A biological community of interacting organisms', RESPUESTA: 'Ecosystem' },
    { NIVEL: 'B1', CLUE: 'If you had studied harder, you ___ the final examination.', RESPUESTA: 'would have passed' },
    { NIVEL: 'B1', CLUE: '(Verb) To successfully bring about a desired result', RESPUESTA: 'Achieve' },
    { NIVEL: 'B1', CLUE: 'By next December, he ___ his university degree.', RESPUESTA: 'will have completed' },
    { NIVEL: 'B1', CLUE: '(Adjective) Achieving maximum productivity with minimum effort', RESPUESTA: 'Efficient' },

    // --- LEVEL B2 ---
    { NIVEL: 'B2', CLUE: 'She ___ at the firm for five years before she got promoted.', RESPUESTA: 'had been working' },
    { NIVEL: 'B2', CLUE: '(Noun) The capacity to recover quickly from difficulties', RESPUESTA: 'Resilience' },
    { NIVEL: 'B2', CLUE: 'If I had known you were in hospital, I ___ you immediately.', RESPUESTA: 'would have called' },
    { NIVEL: 'B2', CLUE: '(Verb) To make suffering or a problem less severe', RESPUESTA: 'Mitigate' },
    { NIVEL: 'B2', CLUE: 'You ___ the weather forecast before leaving without an umbrella.', RESPUESTA: 'should have checked' },
    { NIVEL: 'B2', CLUE: '(Adjective) Open to more than one interpretation', RESPUESTA: 'Ambiguous' },
    { NIVEL: 'B2', CLUE: 'The accident ___ if safety regulations had been enforced.', RESPUESTA: 'could have been prevented' },
    { NIVEL: 'B2', CLUE: '(Verb) To examine or inspect closely and thoroughly', RESPUESTA: 'Scrutinize' },
    { NIVEL: 'B2', CLUE: 'By 2030, we ___ in this city for over two decades.', RESPUESTA: 'will have been living' },
    { NIVEL: 'B2', CLUE: '(Adjective) Dealing with things sensibly and realistically', RESPUESTA: 'Pragmatic' },

    // --- LEVEL C1 ---
    { NIVEL: 'C1', CLUE: '___ for her intervention, the negotiation would have collapsed.', RESPUESTA: 'had it not been' },
    { NIVEL: 'C1', CLUE: '(Adjective) Present, appearing, or found everywhere', RESPUESTA: 'Ubiquitous' },
    { NIVEL: 'C1', CLUE: 'It is imperative that every candidate ___ equal opportunities.', RESPUESTA: 'be given' },
    { NIVEL: 'C1', CLUE: '(Verb) To make a problem or negative situation worse', RESPUESTA: 'Exacerbate' },
    { NIVEL: 'C1', CLUE: 'Scarcely ___ the risk involved when he signed the contract.', RESPUESTA: 'had he realized' },
    { NIVEL: 'C1', CLUE: '(Adjective) Lasting for a very short time', RESPUESTA: 'Ephemeral' },
    { NIVEL: 'C1', CLUE: 'Seldom ___ such fierce opposition to her proposed reforms.', RESPUESTA: 'had she anticipated' },
    { NIVEL: 'C1', CLUE: '(Verb) To confirm or give support to a statement or theory', RESPUESTA: 'Corroborate' },
    { NIVEL: 'C1', CLUE: '___ the consequences, they would never have approved the motion.', RESPUESTA: 'had they known' },
    { NIVEL: 'C1', CLUE: '(Noun) The occurrence of events by chance in a happy way', RESPUESTA: 'Serendipity' }
  ];

  // Caché en memoria por nivel CEFR traído desde Supabase (`public.games`)
  const supabaseLevelCache = {};
  let isFetchingSupabase = false;
  let hasLoadedAllFromSupabase = false;
  let allSupabaseRows = [];

  let currentLevel = 'A1';
  let currentMode = 'fillrush'; // 'fillrush' | 'swipe' | 'bubbles'
  let scoreStreak = 0;
  let scoreXP = 0;
  let soundEnabled = true;
  let isGamesTabActive = false;
  let swipeEventsBound = false;

  const LEVEL_META = {
    A1: { name: 'Principiante', difficulty: 'Easy', badgeClass: 'lq-level-a1' },
    A2: { name: 'Elemental', difficulty: 'Basic', badgeClass: 'lq-level-a2' },
    B1: { name: 'Intermedio', difficulty: 'Medium', badgeClass: 'lq-level-b1' },
    B2: { name: 'Intermedio Alto', difficulty: 'Hard', badgeClass: 'lq-level-b2' },
    C1: { name: 'Avanzado', difficulty: 'Expert', badgeClass: 'lq-level-c1' }
  };

  // ============================================================================
  // 1. CONEXIÓN A LA TABLA `games` EN SUPABASE
  // ============================================================================
  function normalizeGameRow(row, fallbackLevel) {
    if (!row) return null;
    const nivel = String(row.NIVEL || row.nivel || fallbackLevel || 'A1').trim().toUpperCase();
    const clue = String(row.CLUE || row.clue || '').trim();
    const respuesta = String(row.WORDS || row.words || row.RESPUESTA || row.respuesta || '').trim();
    const picture = String(row.PICTURE || row.picture || '').trim();

    if (!clue || !respuesta) return null;
    return { NIVEL: nivel, CLUE: clue, RESPUESTA: respuesta, PICTURE: picture };
  }

  async function fetchLevelFromSupabase(level) {
    const lvl = (level || 'A1').toUpperCase();
    if (supabaseLevelCache[lvl] && supabaseLevelCache[lvl].length > 0) {
      updateDbStatusChip(true, supabaseLevelCache[lvl].length);
      return supabaseLevelCache[lvl];
    }

    const client = typeof window.getSupabaseClient === 'function' ? window.getSupabaseClient() : window.supabaseClient;
    if (!client) {
      updateDbStatusChip(false, 0);
      return getFallbackQuestions(lvl);
    }

    try {
      isFetchingSupabase = true;
      updateDbStatusChip('loading');

      // Consultar la tabla `games` filtrando por el nivel CEFR seleccionado
      const { data, error } = await client
        .from('games')
        .select('NIVEL, WORDS, CLUE, PICTURE')
        .ilike('NIVEL', `${lvl}%`)
        .limit(1000);

      if (error) {
        console.warn('⚠️ Aviso al consultar tabla games en Supabase:', error.message);
        updateDbStatusChip(false, 0);
        return getFallbackQuestions(lvl);
      }

      if (Array.isArray(data) && data.length > 0) {
        const cleaned = data.map(r => normalizeGameRow(r, lvl)).filter(Boolean);
        if (cleaned.length > 0) {
          supabaseLevelCache[lvl] = cleaned;
          updateDbStatusChip(true, cleaned.length);
          return cleaned;
        }
      }

      // Si no devolvió filas para ese filtro (por ejemplo si NIVEL tiene otro formato o RLS bloquea SELECT)
      if (!hasLoadedAllFromSupabase) {
        const { data: allData, error: allErr } = await client
          .from('games')
          .select('NIVEL, WORDS, CLUE, PICTURE')
          .limit(1000);

        hasLoadedAllFromSupabase = true;
        if (!allErr && Array.isArray(allData) && allData.length > 0) {
          allSupabaseRows = allData.map(r => normalizeGameRow(r, 'A1')).filter(Boolean);
          ['A1', 'A2', 'B1', 'B2', 'C1'].forEach(code => {
            const matching = allSupabaseRows.filter(item => item.NIVEL === code);
            if (matching.length > 0) {
              supabaseLevelCache[code] = matching;
            }
          });
          if (supabaseLevelCache[lvl] && supabaseLevelCache[lvl].length > 0) {
            updateDbStatusChip(true, supabaseLevelCache[lvl].length);
            return supabaseLevelCache[lvl];
          }
        }
      }

      updateDbStatusChip(false, 0);
      return getFallbackQuestions(lvl);
    } catch (err) {
      console.warn('⚠️ Error de red consultando tabla games:', err);
      updateDbStatusChip(false, 0);
      return getFallbackQuestions(lvl);
    } finally {
      isFetchingSupabase = false;
    }
  }

  function getFallbackQuestions(lvl) {
    const filtered = DEFAULT_DATA.filter(item => item.NIVEL === lvl);
    return filtered.length > 0 ? filtered : DEFAULT_DATA;
  }

  function getLevelQuestionsSync() {
    if (supabaseLevelCache[currentLevel] && supabaseLevelCache[currentLevel].length > 0) {
      return supabaseLevelCache[currentLevel];
    }
    return getFallbackQuestions(currentLevel);
  }

  function updateDbStatusChip(status, count) {
    const chip = document.getElementById('lqDbStatusChip');
    if (!chip) return;
    if (status === 'loading') {
      chip.innerHTML = '⏳ Sincronizando banco de ejercicios...';
      chip.className = 'lq-db-chip lq-db-loading';
    } else if (status === true) {
      chip.innerHTML = `🟢 ${count} retos oficiales (${currentLevel})`;
      chip.className = 'lq-db-chip lq-db-online';
    } else {
      chip.innerHTML = `⚡ Modo Práctica Activo (${currentLevel})`;
      chip.className = 'lq-db-chip lq-db-fallback';
    }
  }

  // ============================================================================
  // 2. AUDIO SINTETIZADO Y PRONUNCIACIÓN NATIVA (WEB SPEECH API)
  // ============================================================================
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    return audioCtx;
  }

  function playTone(type) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.2);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'tick') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {}
  }

  function speakText(text) {
    if (!('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const cleanText = String(text)
        .replace(/^\([A-Za-z]+\)\s*/i, '')
        .replace(/_{2,}/g, 'blank');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    } catch (e) {}
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('lqSoundBtn');
    if (btn) {
      btn.innerText = soundEnabled ? '🔊' : '🔇';
      btn.title = soundEnabled ? 'Sonido activado (clic para silenciar)' : 'Sonido silenciado (clic para activar)';
    }
  }

  // ============================================================================
  // 3. PERSISTENCIA DE RACHA Y XP POR ESTUDIANTE
  // ============================================================================
  function getStorageKey(suffix) {
    const uid = (window.currentUserProfile && window.currentUserProfile.id) ? window.currentUserProfile.id : 'guest';
    return `le_linguaquest_${uid}_${suffix}`;
  }

  function loadSavedStats() {
    const savedStreak = localStorage.getItem(getStorageKey('streak'));
    scoreStreak = savedStreak ? (parseInt(savedStreak, 10) || 0) : 0;

    const savedXP = localStorage.getItem(getStorageKey('xp'));
    scoreXP = savedXP ? (parseInt(savedXP, 10) || 0) : 0;

    updateStatsUI();
  }

  function saveStats() {
    try {
      localStorage.setItem(getStorageKey('streak'), String(scoreStreak));
      localStorage.setItem(getStorageKey('xp'), String(scoreXP));
    } catch (e) {}
    updateStatsUI();
  }

  function updateStatsUI() {
    const streakEl = document.getElementById('streakDisplay');
    const xpEl = document.getElementById('xpDisplay');
    if (streakEl) streakEl.innerText = scoreStreak;
    if (xpEl) xpEl.innerText = scoreXP;
  }

  function triggerWinEffects() {
    playTone('success');
    scoreStreak++;
    scoreXP += 10;
    saveStats();

    if (scoreStreak > 0 && scoreStreak % 5 === 0 && typeof window.confetti === 'function') {
      window.confetti({
        particleCount: 45,
        spread: 65,
        origin: { y: 0.78 }
      });
    }
  }

  function triggerFailEffects() {
    playTone('error');
    scoreStreak = 0;
    saveStats();
  }

  // ============================================================================
  // 4. NAVEGACIÓN DE NIVEL CEFR Y MODOS DE JUEGO
  // ============================================================================
  function inferDefaultCefrFromCourse(courseLevel) {
    const raw = String(courseLevel || '').toLowerCase();
    if (raw.includes('3')) return 'B2';
    if (raw.includes('2')) return 'B1';
    return 'A1';
  }

  function toggleLevelMenu(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('levelMenu');
    if (menu) menu.classList.toggle('hidden');
  }

  async function setLevel(lvl) {
    const target = LEVEL_META[lvl] ? lvl : 'A1';
    currentLevel = target;

    const badge = document.getElementById('levelBadge');
    const title = document.getElementById('levelTitle');
    const menu = document.getElementById('levelMenu');

    if (badge) {
      badge.innerText = target;
      badge.className = `lq-level-badge ${LEVEL_META[target].badgeClass}`;
    }
    if (title) {
      title.innerText = LEVEL_META[target].name;
    }
    if (menu) {
      menu.classList.add('hidden');
    }

    await fetchLevelFromSupabase(target);
    initActiveGame(true);
  }

  function switchMode(mode) {
    currentMode = mode;

    // Detener timer de Fill-in Rush si cambiamos a otro modo
    if (mode !== 'fillrush') {
      stopRushTimer();
    }

    document.querySelectorAll('.lq-game-view').forEach(v => v.classList.add('hidden'));
    document.querySelectorAll('.lq-nav-tab').forEach(b => b.classList.remove('active'));

    const activeView = document.getElementById(`game-${mode}`);
    const activeBtn = document.getElementById(`nav-${mode}`);
    if (activeView) activeView.classList.remove('hidden');
    if (activeBtn) activeBtn.classList.add('active');

    initActiveGame(false);
  }

  function initActiveGame(resetTimerIfRush) {
    if (!isGamesTabActive) return;
    if (currentMode === 'fillrush') {
      startFillRush(resetTimerIfRush);
    } else if (currentMode === 'swipe') {
      initSwipeGame();
    } else if (currentMode === 'bubbles') {
      initBubbleGame();
    }
  }

  // ============================================================================
  // 5. MODO 1: FILL-IN RUSH (60s Timer, 4 Opciones 3D, Audio)
  // ============================================================================
  let rushTimerInterval = null;
  let rushTimeLeft = 60;
  let rushHits = 0;
  let currentFillItem = null;
  let isFillAnswering = false;

  function stopRushTimer() {
    if (rushTimerInterval) {
      clearInterval(rushTimerInterval);
      rushTimerInterval = null;
    }
  }

  function startFillRush(forceReset) {
    if (forceReset || !rushTimerInterval) {
      stopRushTimer();
      rushTimeLeft = 60;
      rushHits = 0;

      const scoreEl = document.getElementById('rushScore');
      const timerEl = document.getElementById('rushTimer');
      const timerBox = document.getElementById('timerContainer');

      if (scoreEl) scoreEl.innerText = '0';
      if (timerEl) timerEl.innerText = rushTimeLeft;
      if (timerBox) timerBox.classList.remove('lq-timer-danger');

      rushTimerInterval = setInterval(() => {
        if (!isGamesTabActive || currentMode !== 'fillrush') {
          stopRushTimer();
          return;
        }
        rushTimeLeft = Math.max(0, rushTimeLeft - 1);
        const tEl = document.getElementById('rushTimer');
        const tBox = document.getElementById('timerContainer');
        if (tEl) tEl.innerText = rushTimeLeft;
        if (tBox) {
          tBox.classList.toggle('lq-timer-danger', rushTimeLeft <= 10);
        }

        if (rushTimeLeft <= 0) {
          stopRushTimer();
          onRushTimeOver();
        }
      }, 1000);
    }
    nextFillQuestion();
  }

  function restartFillRushRound() {
    startFillRush(true);
  }

  function onRushTimeOver() {
    const feedback = document.getElementById('fillFeedback');
    const grid = document.getElementById('fillOptionsGrid');
    if (feedback) {
      feedback.innerHTML = `<span class="lq-feedback-over">⏱️ ¡Tiempo completado! Lograste <strong>${rushHits} aciertos</strong> en esta ronda.</span>`;
    }
    if (grid) {
      grid.innerHTML = `
        <button type="button" onclick="window.LivingGames.restartFillRushRound()" class="lq-btn-3d lq-btn-blue lq-btn-full-span">
          🔄 Jugar Nueva Ronda de 60s
        </button>
      `;
    }
  }

  function formatClueAndTag(rawClue) {
    const clue = String(rawClue || '').trim();
    if (clue.includes('___') || clue.includes('__')) {
      return {
        tag: 'Sentence Complete',
        tagClass: 'lq-tag-sentence',
        displayClue: clue
      };
    }
    const match = clue.match(/^\(([^)]+)\)\s*(.*)$/);
    if (match) {
      return {
        tag: match[1],
        tagClass: 'lq-tag-vocab',
        displayClue: match[2] || clue
      };
    }
    return {
      tag: 'Definition',
      tagClass: 'lq-tag-default',
      displayClue: clue
    };
  }

  function nextFillQuestion() {
    isFillAnswering = false;
    const items = getLevelQuestionsSync();
    currentFillItem = items[Math.floor(Math.random() * items.length)];

    const feedback = document.getElementById('fillFeedback');
    if (feedback) feedback.innerHTML = '';

    const parsed = formatClueAndTag(currentFillItem.CLUE);
    const tagEl = document.getElementById('fillGrammarTag');
    const clueEl = document.getElementById('fillClueText');

    if (tagEl) {
      tagEl.innerText = parsed.tag;
      tagEl.className = `lq-category-pill ${parsed.tagClass}`;
    }
    if (clueEl) {
      clueEl.innerText = parsed.displayClue;
    }

    // Generar 4 opciones (1 correcta + 3 distractores del mismo nivel)
    const correctAns = currentFillItem.RESPUESTA.trim();
    const options = [correctAns];
    const pool = items.filter(i => i.RESPUESTA && i.RESPUESTA.trim().toLowerCase() !== correctAns.toLowerCase());

    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    for (let i = 0; i < shuffledPool.length && options.length < 4; i++) {
      const candidate = shuffledPool[i].RESPUESTA.trim();
      if (!options.some(o => o.toLowerCase() === candidate.toLowerCase())) {
        options.push(candidate);
      }
    }
    while (options.length < 4) {
      options.push('Option ' + (options.length + 1));
    }
    options.sort(() => 0.5 - Math.random());

    const grid = document.getElementById('fillOptionsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lq-btn-3d lq-btn-neutral lq-option-btn';
      btn.innerText = opt;
      btn.onclick = () => checkFillAnswer(btn, opt);
      grid.appendChild(btn);
    });
  }

  function checkFillAnswer(buttonElement, chosenWord) {
    if (isFillAnswering || rushTimeLeft <= 0 || !currentFillItem) return;
    isFillAnswering = true;

    const expected = currentFillItem.RESPUESTA.trim();
    const isCorrect = chosenWord.trim().toLowerCase() === expected.toLowerCase();
    const feedback = document.getElementById('fillFeedback');

    if (isCorrect) {
      buttonElement.className = 'lq-btn-3d lq-btn-green lq-option-btn';
      if (feedback) {
        feedback.innerHTML = '<span class="lq-feedback-ok">✨ ¡Excelente! (+3s y +10 XP)</span>';
      }
      rushHits++;
      const scoreEl = document.getElementById('rushScore');
      if (scoreEl) scoreEl.innerText = rushHits;
      rushTimeLeft += 3;
      const timerEl = document.getElementById('rushTimer');
      if (timerEl) timerEl.innerText = rushTimeLeft;
      triggerWinEffects();
      setTimeout(() => {
        if (rushTimeLeft > 0) nextFillQuestion();
      }, 480);
    } else {
      buttonElement.className = 'lq-btn-3d lq-btn-red lq-option-btn lq-shake';
      if (feedback) {
        feedback.innerHTML = `<span class="lq-feedback-err">Respuesta correcta: <strong>${expected}</strong> (-2s)</span>`;
      }
      rushTimeLeft = Math.max(0, rushTimeLeft - 2);
      const timerEl = document.getElementById('rushTimer');
      if (timerEl) timerEl.innerText = rushTimeLeft;
      triggerFailEffects();
      setTimeout(() => {
        if (rushTimeLeft > 0) nextFillQuestion();
        else onRushTimeOver();
      }, 1150);
    }
  }

  function speakCurrentClue() {
    if (currentFillItem) {
      speakText(currentFillItem.CLUE);
    }
  }

  // ============================================================================
  // 6. MODO 2: SWIPE & MATCH (Gestos Touch / Mouse + Botones)
  // ============================================================================
  const swipeCardState = {
    isMatching: true,
    currentWord: '',
    currentClue: '',
    correctWordForClue: ''
  };
  let cardElement = null;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let isAnimatingSwipe = false;

  function initSwipeGame() {
    cardElement = document.getElementById('swipeCard');
    setupSwipeEvents();
    loadNextSwipeCard();
  }

  function loadNextSwipeCard() {
    isAnimatingSwipe = false;
    const items = getLevelQuestionsSync();
    const targetItem = items[Math.floor(Math.random() * items.length)];

    const isMatch = Math.random() >= 0.5;
    swipeCardState.isMatching = isMatch;
    swipeCardState.currentWord = targetItem.RESPUESTA;

    let chosenClueItem = targetItem;
    if (!isMatch) {
      const pool = items.filter(i => i.RESPUESTA.trim().toLowerCase() !== targetItem.RESPUESTA.trim().toLowerCase());
      if (pool.length > 0) {
        chosenClueItem = pool[Math.floor(Math.random() * pool.length)];
      } else {
        swipeCardState.isMatching = true;
      }
    }

    swipeCardState.currentClue = chosenClueItem.CLUE;
    swipeCardState.correctWordForClue = chosenClueItem.RESPUESTA;

    const parsed = formatClueAndTag(swipeCardState.currentClue);
    const catTag = document.getElementById('swipeCategoryTag');
    if (catTag) {
      catTag.innerText = parsed.tag;
      catTag.className = `lq-category-pill ${parsed.tagClass}`;
    }

    if (cardElement) {
      cardElement.style.transform = 'translate(0px, 0px) rotate(0deg)';
      cardElement.style.opacity = '1';
      cardElement.classList.remove('dragging');
    }

    const stampOk = document.getElementById('stampCorrect');
    const stampNo = document.getElementById('stampWrong');
    if (stampOk) stampOk.style.opacity = '0';
    if (stampNo) stampNo.style.opacity = '0';

    const wordEl = document.getElementById('swipeWord');
    const clueEl = document.getElementById('swipeClue');
    if (wordEl) wordEl.innerText = swipeCardState.currentWord;
    if (clueEl) clueEl.innerText = parsed.displayClue;
  }

  function setupSwipeEvents() {
    if (!cardElement || swipeEventsBound) return;
    swipeEventsBound = true;

    cardElement.addEventListener('touchstart', onDragStart, { passive: true });
    window.addEventListener('touchmove', onDragMove, { passive: false });
    window.addEventListener('touchend', onDragEnd);

    cardElement.addEventListener('mousedown', onDragStart);
    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('mouseup', onDragEnd);
  }

  function onDragStart(e) {
    if (!isGamesTabActive || currentMode !== 'swipe' || isAnimatingSwipe) return;
    if (e.target && e.target.closest('button')) return;
    isDragging = true;
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    if (cardElement) cardElement.classList.add('dragging');
  }

  function onDragMove(e) {
    if (!isDragging || !cardElement) return;
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    currentX = clientX - startX;

    const rotate = currentX * 0.08;
    cardElement.style.transform = `translate(${currentX}px, 0px) rotate(${rotate}deg)`;

    const rightStamp = document.getElementById('stampCorrect');
    const leftStamp = document.getElementById('stampWrong');
    if (rightStamp && leftStamp) {
      if (currentX > 30) {
        rightStamp.style.opacity = String(Math.min(1, currentX / 100));
        leftStamp.style.opacity = '0';
      } else if (currentX < -30) {
        leftStamp.style.opacity = String(Math.min(1, Math.abs(currentX) / 100));
        rightStamp.style.opacity = '0';
      } else {
        rightStamp.style.opacity = '0';
        leftStamp.style.opacity = '0';
      }
    }
  }

  function onDragEnd() {
    if (!isDragging || !cardElement) return;
    isDragging = false;
    cardElement.classList.remove('dragging');

    if (currentX > 85) {
      animateCardOut(true);
    } else if (currentX < -85) {
      animateCardOut(false);
    } else {
      cardElement.style.transform = 'translate(0px, 0px) rotate(0deg)';
      const rightStamp = document.getElementById('stampCorrect');
      const leftStamp = document.getElementById('stampWrong');
      if (rightStamp) rightStamp.style.opacity = '0';
      if (leftStamp) leftStamp.style.opacity = '0';
    }
    currentX = 0;
  }

  function handleSwipeAction(userChoseTrue) {
    if (isAnimatingSwipe) return;
    animateCardOut(userChoseTrue);
  }

  function animateCardOut(userChoice) {
    if (!cardElement) return;
    isAnimatingSwipe = true;

    const targetTranslateX = userChoice ? 360 : -360;
    const rotate = userChoice ? 22 : -22;
    cardElement.style.transform = `translate(${targetTranslateX}px, 16px) rotate(${rotate}deg)`;
    cardElement.style.opacity = '0';

    const isCorrectDecision = (userChoice === swipeCardState.isMatching);
    const feedback = document.getElementById('swipeFeedback');

    if (isCorrectDecision) {
      triggerWinEffects();
      if (feedback) {
        feedback.innerHTML = '<span class="lq-feedback-ok">🎯 ¡Correcto! (+10 XP)</span>';
      }
    } else {
      triggerFailEffects();
      if (feedback) {
        feedback.innerHTML = `<span class="lq-feedback-err">❌ Era ${swipeCardState.isMatching ? 'VERDADERO' : `FALSO (${swipeCardState.correctWordForClue})`}</span>`;
      }
    }

    setTimeout(() => {
      loadNextSwipeCard();
    }, 260);
  }

  function speakSwipeWord() {
    speakText(swipeCardState.currentWord);
  }

  // ============================================================================
  // 7. MODO 3: WORD BUBBLES (Constructor de Palabras y Oraciones)
  // ============================================================================
  let currentBubbleItem = null;
  let targetTokens = [];
  let selectedTokens = [];
  let poolTokens = [];

  function initBubbleGame() {
    const items = getLevelQuestionsSync();
    currentBubbleItem = items[Math.floor(Math.random() * items.length)];

    const parsed = formatClueAndTag(currentBubbleItem.CLUE);
    const clueEl = document.getElementById('bubbleClue');
    const feedbackEl = document.getElementById('bubbleFeedback');
    if (clueEl) clueEl.innerText = parsed.displayClue;
    if (feedbackEl) feedbackEl.innerHTML = '';

    const rawAnswer = currentBubbleItem.RESPUESTA.trim();

    if (rawAnswer.includes(' ') || rawAnswer.length > 9) {
      targetTokens = rawAnswer.split(/\s+/);
    } else {
      targetTokens = rawAnswer.split('');
    }

    selectedTokens = [];
    poolTokens = targetTokens
      .map((val, idx) => ({ id: idx, value: val }))
      .sort(() => 0.5 - Math.random());

    // Evitar que salga exactamente en el mismo orden si tiene más de 1 ficha
    if (poolTokens.length > 1 && poolTokens.every((t, i) => t.value === targetTokens[i])) {
      poolTokens.reverse();
    }

    renderBubbleBoard();
  }

  function renderBubbleBoard() {
    const answerArea = document.getElementById('bubbleAnswerArea');
    const poolArea = document.getElementById('bubblePool');
    if (!answerArea || !poolArea) return;

    answerArea.innerHTML = '';
    if (selectedTokens.length === 0) {
      answerArea.innerHTML = '<span class="lq-bubble-placeholder">Toca las fichas de abajo para formar la respuesta</span>';
    } else {
      selectedTokens.forEach(token => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'lq-bubble-selected';
        chip.innerText = token.value;
        chip.onclick = () => returnTokenToPool(token);
        answerArea.appendChild(chip);
      });
    }

    poolArea.innerHTML = '';
    poolTokens.forEach(token => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'lq-btn-3d lq-btn-neutral lq-bubble-token';
      chip.innerText = token.value;
      chip.onclick = () => pushTokenToAnswer(token);
      poolArea.appendChild(chip);
    });
  }

  function pushTokenToAnswer(token) {
    playTone('tick');
    selectedTokens.push(token);
    poolTokens = poolTokens.filter(t => t.id !== token.id);
    renderBubbleBoard();
  }

  function returnTokenToPool(token) {
    playTone('tick');
    poolTokens.push(token);
    selectedTokens = selectedTokens.filter(t => t.id !== token.id);
    renderBubbleBoard();
  }

  function undoLastBubble() {
    if (selectedTokens.length > 0) {
      playTone('tick');
      const last = selectedTokens.pop();
      poolTokens.push(last);
      renderBubbleBoard();
    }
  }

  function checkBubbleSolution() {
    if (!currentBubbleItem) return;
    const joiner = (currentBubbleItem.RESPUESTA.includes(' ') || currentBubbleItem.RESPUESTA.trim().length > 9) ? ' ' : '';
    const userAnswer = selectedTokens.map(t => t.value).join(joiner).trim();
    const expected = currentBubbleItem.RESPUESTA.trim();

    const answerArea = document.getElementById('bubbleAnswerArea');
    const feedbackEl = document.getElementById('bubbleFeedback');
    if (!answerArea) return;

    if (userAnswer.toLowerCase() === expected.toLowerCase()) {
      answerArea.classList.add('lq-bubble-area-correct');
      if (feedbackEl) {
        feedbackEl.innerHTML = `<span class="lq-feedback-ok">🎉 ¡Perfecto! "${expected}" (+10 XP)</span>`;
      }
      triggerWinEffects();
      setTimeout(() => {
        answerArea.classList.remove('lq-bubble-area-correct');
        initBubbleGame();
      }, 850);
    } else {
      answerArea.classList.add('lq-bubble-area-wrong', 'lq-shake');
      if (feedbackEl) {
        feedbackEl.innerHTML = `<span class="lq-feedback-err">Sigue intentando o usa 🔊 para escuchar la respuesta</span>`;
      }
      triggerFailEffects();
      setTimeout(() => {
        answerArea.classList.remove('lq-bubble-area-wrong', 'lq-shake');
      }, 600);
    }
  }

  function speakBubbleTarget() {
    if (currentBubbleItem) {
      speakText(currentBubbleItem.RESPUESTA);
    }
  }

  // ============================================================================
  // 8. CICLO DE VIDA AL ABRIR / CERRAR LA PESTAÑA DE JUEGOS
  // ============================================================================
  let hasInitializedOnce = false;

  async function onTabOpened() {
    isGamesTabActive = true;
    loadSavedStats();

    if (!hasInitializedOnce) {
      hasInitializedOnce = true;
      const studentCourse = (window.currentUserProfile && window.currentUserProfile.course_level)
        ? window.currentUserProfile.course_level
        : 'Adultos 1';
      const defaultCefr = inferDefaultCefrFromCourse(studentCourse);
      await setLevel(defaultCefr);
      switchMode(currentMode || 'fillrush');
    } else {
      await fetchLevelFromSupabase(currentLevel);
      initActiveGame(false);
    }
  }

  function onTabClosed() {
    isGamesTabActive = false;
    stopRushTimer();
  }

  // Cerrar el menú de niveles al hacer clic fuera
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('levelMenu');
    const btn = document.getElementById('levelBtn');
    if (menu && !menu.classList.contains('hidden')) {
      if (btn && !btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
      }
    }
  });

  // Exponer API global para el HTML y para `platform.js`
  window.LivingGames = {
    onTabOpened,
    onTabClosed,
    setLevel,
     toggleLevelMenu,
    switchMode,
    speakCurrentClue,
    speakSwipeWord,
    handleSwipeAction,
    undoLastBubble,
    checkBubbleSolution,
    speakBubbleTarget,
    restartFillRushRound,
    toggleSound,
    skipBubbleQuestion: initBubbleGame
  };

  // Funciones puente con los nombres del template original para compatibilidad directa
  window.setLevel = setLevel;
  window.switchMode = switchMode;
  window.speakCurrentClue = speakCurrentClue;
  window.speakSwipeWord = speakSwipeWord;
  window.handleSwipeAction = handleSwipeAction;
  window.undoLastBubble = undoLastBubble;
  window.checkBubbleSolution = checkBubbleSolution;
  window.speakBubbleTarget = speakBubbleTarget;
})();
