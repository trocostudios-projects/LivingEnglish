/**
 * Academia Living English — Módulo Oficial de Juegos Interactivos (LinguaQuest & Kids)
 * - Modo Niños (4 juegos): Escucha y Toca, Arma la Palabra, Explota Burbujas y Parejas de Memoria
 * - Modo Niveles A1–C1 (3 juegos): Fill-in Rush, Swipe Match y Word Bubbles conectados a `public.games` en Supabase
 */

(function () {
  // ============================================================================
  // 1. DICCIONARIO INFANTIL (KIDS MODE) Y RESPALDO MULTINIVEL (A1–C1)
  // ============================================================================
  const DEFAULT_KIDS_ITEMS = [
    // 1. ANIMALS (30)
    { word: 'Cat', emoji: '🐱', category: 'animals', spanish_hint: 'Gato' },
    { word: 'Dog', emoji: '🐶', category: 'animals', spanish_hint: 'Perro' },
    { word: 'Lion', emoji: '🦁', category: 'animals', spanish_hint: 'León' },
    { word: 'Tiger', emoji: '🐯', category: 'animals', spanish_hint: 'Tigre' },
    { word: 'Frog', emoji: '🐸', category: 'animals', spanish_hint: 'Rana' },
    { word: 'Duck', emoji: '🦆', category: 'animals', spanish_hint: 'Pato' },
    { word: 'Bird', emoji: '🐦', category: 'animals', spanish_hint: 'Pájaro' },
    { word: 'Fish', emoji: '🐟', category: 'animals', spanish_hint: 'Pez' },
    { word: 'Bear', emoji: '🐻', category: 'animals', spanish_hint: 'Oso' },
    { word: 'Panda', emoji: '🐼', category: 'animals', spanish_hint: 'Panda' },
    { word: 'Koala', emoji: '🐨', category: 'animals', spanish_hint: 'Koala' },
    { word: 'Pig', emoji: '🐷', category: 'animals', spanish_hint: 'Cerdo' },
    { word: 'Cow', emoji: '🐮', category: 'animals', spanish_hint: 'Vaca' },
    { word: 'Horse', emoji: '🐴', category: 'animals', spanish_hint: 'Caballo' },
    { word: 'Sheep', emoji: '🐑', category: 'animals', spanish_hint: 'Oveja' },
    { word: 'Goat', emoji: '🐐', category: 'animals', spanish_hint: 'Cabra' },
    { word: 'Monkey', emoji: '🐵', category: 'animals', spanish_hint: 'Mono' },
    { word: 'Rabbit', emoji: '🐰', category: 'animals', spanish_hint: 'Conejo' },
    { word: 'Mouse', emoji: '🐭', category: 'animals', spanish_hint: 'Ratón' },
    { word: 'Fox', emoji: '🦊', category: 'animals', spanish_hint: 'Zorro' },
    { word: 'Wolf', emoji: '🐺', category: 'animals', spanish_hint: 'Lobo' },
    { word: 'Zebra', emoji: '🦓', category: 'animals', spanish_hint: 'Cebra' },
    { word: 'Giraffe', emoji: '🦒', category: 'animals', spanish_hint: 'Jirafa' },
    { word: 'Elephant', emoji: '🐘', category: 'animals', spanish_hint: 'Elefante' },
    { word: 'Turtle', emoji: '🐢', category: 'animals', spanish_hint: 'Tortuga' },
    { word: 'Snake', emoji: '🐍', category: 'animals', spanish_hint: 'Serpiente' },
    { word: 'Whale', emoji: '🐳', category: 'animals', spanish_hint: 'Ballena' },
    { word: 'Dolphin', emoji: '🐬', category: 'animals', spanish_hint: 'Delfín' },
    { word: 'Shark', emoji: '🦈', category: 'animals', spanish_hint: 'Tiburón' },
    { word: 'Bee', emoji: '🐝', category: 'animals', spanish_hint: 'Abeja' },
    // 2. FRUITS & VEGGIES (20)
    { word: 'Apple', emoji: '🍎', category: 'fruits', spanish_hint: 'Manzana' },
    { word: 'Banana', emoji: '🍌', category: 'fruits', spanish_hint: 'Banano' },
    { word: 'Orange', emoji: '🍊', category: 'fruits', spanish_hint: 'Naranja' },
    { word: 'Grape', emoji: '🍇', category: 'fruits', spanish_hint: 'Uva' },
    { word: 'Lemon', emoji: '🍋', category: 'fruits', spanish_hint: 'Limón' },
    { word: 'Peach', emoji: '🍑', category: 'fruits', spanish_hint: 'Durazno' },
    { word: 'Pear', emoji: '🍐', category: 'fruits', spanish_hint: 'Pera' },
    { word: 'Mango', emoji: '🥭', category: 'fruits', spanish_hint: 'Mango' },
    { word: 'Melon', emoji: '🍈', category: 'fruits', spanish_hint: 'Melón' },
    { word: 'Watermelon', emoji: '🍉', category: 'fruits', spanish_hint: 'Sandía' },
    { word: 'Cherry', emoji: '🍒', category: 'fruits', spanish_hint: 'Cereza' },
    { word: 'Strawberry', emoji: '🍓', category: 'fruits', spanish_hint: 'Fresa' },
    { word: 'Kiwi', emoji: '🥝', category: 'fruits', spanish_hint: 'Kiwi' },
    { word: 'Coconut', emoji: '🥥', category: 'fruits', spanish_hint: 'Coco' },
    { word: 'Pineapple', emoji: '🍍', category: 'fruits', spanish_hint: 'Piña' },
    { word: 'Carrot', emoji: '🥕', category: 'fruits', spanish_hint: 'Zanahoria' },
    { word: 'Corn', emoji: '🌽', category: 'fruits', spanish_hint: 'Maíz' },
    { word: 'Tomato', emoji: '🍅', category: 'fruits', spanish_hint: 'Tomate' },
    { word: 'Potato', emoji: '🥔', category: 'fruits', spanish_hint: 'Papa' },
    { word: 'Broccoli', emoji: '🥦', category: 'fruits', spanish_hint: 'Brócoli' },
    // 3. FOOD & DRINKS (20)
    { word: 'Pizza', emoji: '🍕', category: 'food', spanish_hint: 'Pizza' },
    { word: 'Burger', emoji: '🍔', category: 'food', spanish_hint: 'Hamburguesa' },
    { word: 'Bread', emoji: '🍞', category: 'food', spanish_hint: 'Pan' },
    { word: 'Cheese', emoji: '🧀', category: 'food', spanish_hint: 'Queso' },
    { word: 'Egg', emoji: '🥚', category: 'food', spanish_hint: 'Huevo' },
    { word: 'Milk', emoji: '🥛', category: 'food', spanish_hint: 'Leche' },
    { word: 'Juice', emoji: '🧃', category: 'food', spanish_hint: 'Jugo' },
    { word: 'Water', emoji: '💧', category: 'food', spanish_hint: 'Agua' },
    { word: 'Cake', emoji: '🎂', category: 'food', spanish_hint: 'Pastel' },
    { word: 'Cookie', emoji: '🍪', category: 'food', spanish_hint: 'Galleta' },
    { word: 'Donut', emoji: '🍩', category: 'food', spanish_hint: 'Dona' },
    { word: 'Candy', emoji: '🍬', category: 'food', spanish_hint: 'Dulce' },
    { word: 'Honey', emoji: '🍯', category: 'food', spanish_hint: 'Miel' },
    { word: 'Soup', emoji: '🥣', category: 'food', spanish_hint: 'Sopa' },
    { word: 'Rice', emoji: '🍚', category: 'food', spanish_hint: 'Arroz' },
    { word: 'Salad', emoji: '🥗', category: 'food', spanish_hint: 'Ensalada' },
    { word: 'Sandwich', emoji: '🥪', category: 'food', spanish_hint: 'Sándwich' },
    { word: 'Taco', emoji: '🌮', category: 'food', spanish_hint: 'Taco' },
    { word: 'Popcorn', emoji: '🍿', category: 'food', spanish_hint: 'Palomitas' },
    { word: 'Ice cream', emoji: '🍦', category: 'food', spanish_hint: 'Helado' },
    // 4. VEHICLES (15)
    { word: 'Car', emoji: '🚗', category: 'vehicles', spanish_hint: 'Carro' },
    { word: 'Bus', emoji: '🚌', category: 'vehicles', spanish_hint: 'Autobús' },
    { word: 'Taxi', emoji: '🚕', category: 'vehicles', spanish_hint: 'Taxi' },
    { word: 'Truck', emoji: '🚚', category: 'vehicles', spanish_hint: 'Camión' },
    { word: 'Bike', emoji: '🚲', category: 'vehicles', spanish_hint: 'Bicicleta' },
    { word: 'Train', emoji: '🚂', category: 'vehicles', spanish_hint: 'Tren' },
    { word: 'Plane', emoji: '✈️', category: 'vehicles', spanish_hint: 'Avión' },
    { word: 'Boat', emoji: '⛵', category: 'vehicles', spanish_hint: 'Barco' },
    { word: 'Ship', emoji: '🚢', category: 'vehicles', spanish_hint: 'Crucero' },
    { word: 'Rocket', emoji: '🚀', category: 'vehicles', spanish_hint: 'Cohete' },
    { word: 'Tractor', emoji: '🚜', category: 'vehicles', spanish_hint: 'Tractor' },
    { word: 'Scooter', emoji: '🛴', category: 'vehicles', spanish_hint: 'Patineta' },
    { word: 'Subway', emoji: '🚇', category: 'vehicles', spanish_hint: 'Metro' },
    { word: 'Ambulance', emoji: '🚑', category: 'vehicles', spanish_hint: 'Ambulancia' },
    { word: 'Helicopter', emoji: '🚁', category: 'vehicles', spanish_hint: 'Helicóptero' },
    // 5. NATURE (15)
    { word: 'Sun', emoji: '🌞', category: 'nature', spanish_hint: 'Sol' },
    { word: 'Moon', emoji: '🌙', category: 'nature', spanish_hint: 'Luna' },
    { word: 'Star', emoji: '⭐', category: 'nature', spanish_hint: 'Estrella' },
    { word: 'Cloud', emoji: '☁️', category: 'nature', spanish_hint: 'Nube' },
    { word: 'Rain', emoji: '🌧️', category: 'nature', spanish_hint: 'Lluvia' },
    { word: 'Snow', emoji: '❄️', category: 'nature', spanish_hint: 'Nieve' },
    { word: 'Rainbow', emoji: '🌈', category: 'nature', spanish_hint: 'Arcoíris' },
    { word: 'Tree', emoji: '🌳', category: 'nature', spanish_hint: 'Árbol' },
    { word: 'Flower', emoji: '🌸', category: 'nature', spanish_hint: 'Flor' },
    { word: 'Rose', emoji: '🌹', category: 'nature', spanish_hint: 'Rosa' },
    { word: 'Leaf', emoji: '🍃', category: 'nature', spanish_hint: 'Hoja' },
    { word: 'Fire', emoji: '🔥', category: 'nature', spanish_hint: 'Fuego' },
    { word: 'Ocean', emoji: '🌊', category: 'nature', spanish_hint: 'Océano' },
    { word: 'Mountain', emoji: '⛰️', category: 'nature', spanish_hint: 'Montaña' },
    { word: 'Volcano', emoji: '🌋', category: 'nature', spanish_hint: 'Volcán' },
    // 6. BODY (12)
    { word: 'Eye', emoji: '👁️', category: 'body', spanish_hint: 'Ojo' },
    { word: 'Ear', emoji: '👂', category: 'body', spanish_hint: 'Oreja' },
    { word: 'Nose', emoji: '👃', category: 'body', spanish_hint: 'Nariz' },
    { word: 'Mouth', emoji: '👄', category: 'body', spanish_hint: 'Boca' },
    { word: 'Tooth', emoji: '🦷', category: 'body', spanish_hint: 'Diente' },
    { word: 'Hand', emoji: '✋', category: 'body', spanish_hint: 'Mano' },
    { word: 'Foot', emoji: '🦶', category: 'body', spanish_hint: 'Pie' },
    { word: 'Leg', emoji: '🦵', category: 'body', spanish_hint: 'Pierna' },
    { word: 'Arm', emoji: '💪', category: 'body', spanish_hint: 'Brazo' },
    { word: 'Heart', emoji: '❤️', category: 'body', spanish_hint: 'Corazón' },
    { word: 'Brain', emoji: '🧠', category: 'body', spanish_hint: 'Cerebro' },
    { word: 'Bone', emoji: '🦴', category: 'body', spanish_hint: 'Hueso' },
    // 7. CLOTHES (12)
    { word: 'Hat', emoji: '🧢', category: 'clothes', spanish_hint: 'Gorra' },
    { word: 'Crown', emoji: '👑', category: 'clothes', spanish_hint: 'Corona' },
    { word: 'Shirt', emoji: '👕', category: 'clothes', spanish_hint: 'Camisa' },
    { word: 'Dress', emoji: '👗', category: 'clothes', spanish_hint: 'Vestido' },
    { word: 'Pants', emoji: '👖', category: 'clothes', spanish_hint: 'Pantalón' },
    { word: 'Shoe', emoji: '👟', category: 'clothes', spanish_hint: 'Zapato' },
    { word: 'Boot', emoji: '🥾', category: 'clothes', spanish_hint: 'Bota' },
    { word: 'Socks', emoji: '🧦', category: 'clothes', spanish_hint: 'Medias' },
    { word: 'Coat', emoji: '🧥', category: 'clothes', spanish_hint: 'Abrigo' },
    { word: 'Gloves', emoji: '🧤', category: 'clothes', spanish_hint: 'Guantes' },
    { word: 'Scarf', emoji: '🧣', category: 'clothes', spanish_hint: 'Bufanda' },
    { word: 'Glasses', emoji: '👓', category: 'clothes', spanish_hint: 'Gafas' },
    // 8. SCHOOL (12)
    { word: 'Book', emoji: '📖', category: 'school', spanish_hint: 'Libro' },
    { word: 'Pen', emoji: '🖊️', category: 'school', spanish_hint: 'Bolígrafo' },
    { word: 'Pencil', emoji: '✏️', category: 'school', spanish_hint: 'Lápiz' },
    { word: 'Crayon', emoji: '🖍️', category: 'school', spanish_hint: 'Crayón' },
    { word: 'Ruler', emoji: '📏', category: 'school', spanish_hint: 'Regla' },
    { word: 'Bag', emoji: '🎒', category: 'school', spanish_hint: 'Morral' },
    { word: 'Clock', emoji: '⏰', category: 'school', spanish_hint: 'Reloj' },
    { word: 'Bell', emoji: '🔔', category: 'school', spanish_hint: 'Campana' },
    { word: 'Globe', emoji: '🌍', category: 'school', spanish_hint: 'Globo' },
    { word: 'Paint', emoji: '🎨', category: 'school', spanish_hint: 'Pintura' },
    { word: 'Scissors', emoji: '✂️', category: 'school', spanish_hint: 'Tijeras' },
    { word: 'Paper', emoji: '📄', category: 'school', spanish_hint: 'Papel' },
    // 9. TOYS (12)
    { word: 'Ball', emoji: '⚽', category: 'toys', spanish_hint: 'Pelota' },
    { word: 'Kite', emoji: '🪁', category: 'toys', spanish_hint: 'Cometa' },
    { word: 'Drum', emoji: '🥁', category: 'toys', spanish_hint: 'Tambor' },
    { word: 'Guitar', emoji: '🎸', category: 'toys', spanish_hint: 'Guitarra' },
    { word: 'Piano', emoji: '🎹', category: 'toys', spanish_hint: 'Piano' },
    { word: 'Robot', emoji: '🤖', category: 'toys', spanish_hint: 'Robot' },
    { word: 'Teddy', emoji: '🧸', category: 'toys', spanish_hint: 'Osito' },
    { word: 'Puzzle', emoji: '🧩', category: 'toys', spanish_hint: 'Rompecabezas' },
    { word: 'Balloon', emoji: '🎈', category: 'toys', spanish_hint: 'Globo' },
    { word: 'Gift', emoji: '🎁', category: 'toys', spanish_hint: 'Regalo' },
    { word: 'Trophy', emoji: '🏆', category: 'toys', spanish_hint: 'Trofeo' },
    { word: 'Skate', emoji: '⛸️', category: 'toys', spanish_hint: 'Patín' },
    // 10. HOUSE (12)
    { word: 'House', emoji: '🏠', category: 'house', spanish_hint: 'Casa' },
    { word: 'Bed', emoji: '🛏️', category: 'house', spanish_hint: 'Cama' },
    { word: 'Chair', emoji: '🪑', category: 'house', spanish_hint: 'Silla' },
    { word: 'Door', emoji: '🚪', category: 'house', spanish_hint: 'Puerta' },
    { word: 'Window', emoji: '🪟', category: 'house', spanish_hint: 'Ventana' },
    { word: 'Key', emoji: '🔑', category: 'house', spanish_hint: 'Llave' },
    { word: 'Lamp', emoji: '💡', category: 'house', spanish_hint: 'Lámpara' },
    { word: 'Phone', emoji: '📱', category: 'house', spanish_hint: 'Teléfono' },
    { word: 'Bath', emoji: '🛁', category: 'house', spanish_hint: 'Bañera' },
    { word: 'Soap', emoji: '🧼', category: 'house', spanish_hint: 'Jabón' },
    { word: 'Broom', emoji: '🧹', category: 'house', spanish_hint: 'Escoba' },
    { word: 'Spoon', emoji: '🥄', category: 'house', spanish_hint: 'Cuchara' },
    // 11. COLORS (10)
    { word: 'Red', emoji: '🟥', category: 'colors', spanish_hint: 'Rojo' },
    { word: 'Blue', emoji: '🟦', category: 'colors', spanish_hint: 'Azul' },
    { word: 'Green', emoji: '🟩', category: 'colors', spanish_hint: 'Verde' },
    { word: 'Yellow', emoji: '🟨', category: 'colors', spanish_hint: 'Amarillo' },
    { word: 'Purple', emoji: '🟪', category: 'colors', spanish_hint: 'Morado' },
    { word: 'Brown', emoji: '🟫', category: 'colors', spanish_hint: 'Café' },
    { word: 'Black', emoji: '⬛', category: 'colors', spanish_hint: 'Negro' },
    { word: 'White', emoji: '⬜', category: 'colors', spanish_hint: 'Blanco' },
    { word: 'Pink', emoji: '🩷', category: 'colors', spanish_hint: 'Rosado' },
    // 12. NUMBERS (10)
    { word: 'One', emoji: '1️⃣', category: 'numbers', spanish_hint: 'Uno' },
    { word: 'Two', emoji: '2️⃣', category: 'numbers', spanish_hint: 'Dos' },
    { word: 'Three', emoji: '3️⃣', category: 'numbers', spanish_hint: 'Tres' },
    { word: 'Four', emoji: '4️⃣', category: 'numbers', spanish_hint: 'Cuatro' },
    { word: 'Five', emoji: '5️⃣', category: 'numbers', spanish_hint: 'Cinco' },
    { word: 'Six', emoji: '6️⃣', category: 'numbers', spanish_hint: 'Seis' },
    { word: 'Seven', emoji: '7️⃣', category: 'numbers', spanish_hint: 'Siete' },
    { word: 'Eight', emoji: '8️⃣', category: 'numbers', spanish_hint: 'Ocho' },
    { word: 'Nine', emoji: '9️⃣', category: 'numbers', spanish_hint: 'Nueve' },
    { word: 'Ten', emoji: '🔟', category: 'numbers', spanish_hint: 'Diez' }
  ];

  let KIDS_ITEMS = [...DEFAULT_KIDS_ITEMS];
  let hasLoadedKidsFromSupabase = false;
  const recentListenWords = [];
  const recentSpellerWords = [];
  const recentMemoryWords = [];

  const DEFAULT_DATA = [
    // --- LEVEL A1 ---
    { NIVEL: 'A1', CLUE: '(Noun) A round red or green fruit that grows on apple trees.', RESPUESTA: 'Apple' },
    { NIVEL: 'A1', CLUE: '(Noun) A domestic animal with four legs, a tail, and a bark.', RESPUESTA: 'Dog' },
    { NIVEL: 'A1', CLUE: '(Noun) A building in which people live, usually one family.', RESPUESTA: 'House' },
    { NIVEL: 'A1', CLUE: 'She goes to ___ every morning to study with her friends.', RESPUESTA: 'school' },
    { NIVEL: 'A1', CLUE: '(Verb) To drink liquid, especially water or tea.', RESPUESTA: 'Drink' },
    { NIVEL: 'A1', CLUE: '(Noun) A large vehicle with four wheels used for carrying passengers.', RESPUESTA: 'Car' },
    { NIVEL: 'A1', CLUE: 'My mother is ___ dinner in the kitchen right now.', RESPUESTA: 'cooking' },
    { NIVEL: 'A1', CLUE: '(Noun) The color of the clear sky or the ocean.', RESPUESTA: 'Blue' },
    { NIVEL: 'A1', CLUE: 'I have two brothers and one ___.', RESPUESTA: 'sister' },
    { NIVEL: 'A1', CLUE: '(Noun) A small animal with fur, whiskers, and claws that purrs.', RESPUESTA: 'Cat' },
    // --- LEVEL A2 ---
    { NIVEL: 'A2', CLUE: 'We ___ to Paris last summer and visited the Eiffel Tower.', RESPUESTA: 'travelled' },
    { NIVEL: 'A2', CLUE: '(Noun) A place where airplanes take off and land.', RESPUESTA: 'Airport' },
    { NIVEL: 'A2', CLUE: 'She is much taller ___ her younger sister.', RESPUESTA: 'than' },
    { NIVEL: 'A2', CLUE: '(Verb) To exchange goods or services for money.', RESPUESTA: 'Sell' },
    { NIVEL: 'A2', CLUE: 'What time does the train usually ___ at the station?', RESPUESTA: 'arrive' },
    { NIVEL: 'A2', CLUE: '(Noun) The meal eaten in the middle of the day.', RESPUESTA: 'Lunch' },
    // --- LEVEL B1 ---
    { NIVEL: 'B1', CLUE: 'By the time we got to the cinema, the movie had already ___.', RESPUESTA: 'started' },
    { NIVEL: 'B1', CLUE: '(Noun) An agreement between two or more people or groups.', RESPUESTA: 'Contract' },
    { NIVEL: 'B1', CLUE: '(Adjective) Willing to give money, help, or time freely.', RESPUESTA: 'Generous' },
    { NIVEL: 'B1', CLUE: 'Although she was exhausted, she kept on ___ until midnight.', RESPUESTA: 'working' },
    { NIVEL: 'B1', CLUE: '(Verb) To formally suggest a person or action for consideration.', RESPUESTA: 'Recommend' },
    { NIVEL: 'B1', CLUE: '(Noun) The general weather conditions usually found in a place.', RESPUESTA: 'Climate' },
    // --- LEVEL B2 ---
    { NIVEL: 'B2', CLUE: 'Hardly had she entered the office ___ the phone rang incessantly.', RESPUESTA: 'when' },
    { NIVEL: 'B2', CLUE: '(Adjective) Happening or existing at the same time; modern.', RESPUESTA: 'Contemporary' },
    { NIVEL: 'B2', CLUE: 'The manager insisted that all safety protocols ___ strictly respected.', RESPUESTA: 'be' },
    { NIVEL: 'B2', CLUE: '(Verb) To lessen the seriousness or intensity of a problem or pain.', RESPUESTA: 'Mitigate' },
    { NIVEL: 'B2', CLUE: 'Had you warned me earlier, I ___ made other arrangements.', RESPUESTA: 'would have' },
    { NIVEL: 'B2', CLUE: '(Noun) The quality of being able to endure difficult situations.', RESPUESTA: 'Resilience' },
    // --- LEVEL C1 ---
    { NIVEL: 'C1', CLUE: 'Seldom ___ such an articulate defense presented in court.', RESPUESTA: 'have I heard' },
    { NIVEL: 'C1', CLUE: '(Adjective) Existing or being everywhere at the same time; omnipresent.', RESPUESTA: 'Ubiquitous' },
    { NIVEL: 'C1', CLUE: 'The committee demanded that the proposal ___ thoroughly scrutinized before vote.', RESPUESTA: 'be' },
    { NIVEL: 'C1', CLUE: '(Noun) An expression of sharp disapproval, criticism, or rebuke.', RESPUESTA: 'Reprimand' },
    { NIVEL: 'C1', CLUE: 'Were the board to approve the merger, hundreds of jobs ___ created.', RESPUESTA: 'would be' },
    { NIVEL: 'C1', CLUE: '(Adjective) Clear, transparent, or easily understood without ambiguity.', RESPUESTA: 'Lucid' }
  ];

  const LEVEL_META = {
    A1: { name: 'Principiante', badgeClass: 'lq-level-a1' },
    A2: { name: 'Elemental', badgeClass: 'lq-level-a2' },
    B1: { name: 'Intermedio', badgeClass: 'lq-level-b1' },
    B2: { name: 'Intermedio Alto', badgeClass: 'lq-level-b2' },
    C1: { name: 'Avanzado', badgeClass: 'lq-level-c1' }
  };

  const CATEGORY_META = {
    animals: { label: '🐾 ANIMALS (Animales)', speech: 'animals' },
    fruits: { label: '🍎 FRUITS (Frutas)', speech: 'fruits' },
    food: { label: '🍕 FOOD (Comida)', speech: 'food' },
    vehicles: { label: '🚗 VEHICLES (Transporte)', speech: 'vehicles' },
    nature: { label: '🌞 NATURE (Naturaleza)', speech: 'nature' },
    body: { label: '✋ BODY (Cuerpo)', speech: 'body parts' },
    clothes: { label: '👕 CLOTHES (Ropa)', speech: 'clothes' },
    school: { label: '🎒 SCHOOL (Escuela)', speech: 'school items' },
    toys: { label: '🧸 TOYS (Juguetes)', speech: 'toys' },
    house: { label: '🏠 HOUSE (Casa)', speech: 'house objects' },
    colors: { label: '🎨 COLORS (Colores)', speech: 'colors' },
    numbers: { label: '🔢 NUMBERS (Números)', speech: 'numbers' }
  };

  const PLAYER_RANKS = [
    { min: 0, max: 10, icon: '🌱', title: 'Explorer' },
    { min: 10, max: 25, icon: '🚀', title: 'Adventurer' },
    { min: 25, max: 50, icon: '⚡', title: 'Scholar' },
    { min: 50, max: 100, icon: '👑', title: 'Champion' },
    { min: 100, max: 250, icon: '💎', title: 'Master Legend' }
  ];

  // Estado general
  const supabaseLevelCache = {};
  let hasLoadedAllFromSupabase = false;
  let allSupabaseRows = [];
  const recentGeneralClues = [];

  let isKidsMode = true;
  let currentGeneralLevel = 'A1';
  let currentKidsGame = 'listen';      // 'listen' | 'letters' | 'bubbles' | 'memory'
  let currentGeneralGame = 'fillrush'; // 'fillrush' | 'swipe' | 'bubbles'

  let starsCount = 0;
  let streakCount = 0;
  let soundEnabled = true;
  let isGamesTabActive = false;
  let swipeEventsBound = false;

  // ============================================================================
  // 2. SISTEMA DE SONIDO SINTETIZADO Y VOZ (WEB SPEECH API)
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

  function playSynth(type) {
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
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.09);
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.18);
        osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.28);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
        osc.start(now);
        osc.stop(now + 0.42);
      } else if (type === 'pop') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(1180, now + 0.08);
        gain.gain.setValueAtTime(0.26, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(125, now + 0.2);
        gain.gain.setValueAtTime(0.11, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
        osc.start(now);
        osc.stop(now + 0.24);
      } else if (type === 'tap') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(620, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {}
  }

  function speakWord(text, rate = 0.88) {
    if (!soundEnabled || !('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const cleanText = String(text)
        .replace(/^\([A-Za-z\s]+\)\s*/i, '')
        .replace(/_{2,}/g, ' blank ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = isKidsMode ? 0.82 : rate;
      utterance.pitch = isKidsMode ? 1.12 : 1.0;

      const megaBtn = document.getElementById('kidsMegaphoneBtn');
      if (megaBtn && isKidsMode && currentKidsGame === 'listen') {
        megaBtn.classList.add('speaking');
        utterance.onend = () => megaBtn.classList.remove('speaking');
        utterance.onerror = () => megaBtn.classList.remove('speaking');
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {}
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    if (!soundEnabled && 'speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch (e) {}
    }
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
      btn.innerText = soundEnabled ? '🔊' : '🔇';
      btn.title = soundEnabled ? 'Sonido activado' : 'Sonido silenciado';
    }
  }

  // ============================================================================
  // 3. ESTADÍSTICAS Y RANGO DEL JUGADOR (ESTRELLAS Y RACHA)
  // ============================================================================
  function getStorageKey(suffix) {
    const uid = (window.currentUserProfile && window.currentUserProfile.id) ? window.currentUserProfile.id : 'guest';
    return `le_linguaquest_${uid}_${suffix}`;
  }

  function loadStats() {
    const savedStars = localStorage.getItem(getStorageKey('stars'));
    starsCount = savedStars ? (parseInt(savedStars, 10) || 0) : 0;

    const savedStreak = localStorage.getItem(getStorageKey('streak'));
    streakCount = savedStreak ? (parseInt(savedStreak, 10) || 0) : 0;

    updateStatsUI();
  }

  function saveStats() {
    try {
      localStorage.setItem(getStorageKey('stars'), String(starsCount));
      localStorage.setItem(getStorageKey('streak'), String(streakCount));
    } catch (e) {}
    updateStatsUI();
  }

  function updateStatsUI() {
    const starsEl = document.getElementById('starsDisplay');
    const streakEl = document.getElementById('streakDisplay');
    if (starsEl) starsEl.innerText = starsCount;
    if (streakEl) streakEl.innerText = streakCount;

    // Actualizar barra de rango
    let rank = PLAYER_RANKS[PLAYER_RANKS.length - 1];
    for (let i = 0; i < PLAYER_RANKS.length; i++) {
      if (starsCount < PLAYER_RANKS[i].max) {
        rank = PLAYER_RANKS[i];
        break;
      }
    }

    const iconEl = document.getElementById('lqRankIcon');
    const titleEl = document.getElementById('lqRankTitle');
    const nextEl = document.getElementById('lqRankNext');
    const fillEl = document.getElementById('lqRankProgressFill');

    if (iconEl) iconEl.innerText = rank.icon;
    if (titleEl) titleEl.innerText = `Rango: ${rank.title}`;
    if (nextEl) {
      const remaining = Math.max(0, rank.max - starsCount);
      nextEl.innerText = remaining > 0
        ? `Faltan ${remaining} ⭐ para el siguiente rango`
        : '¡Rango máximo alcanzado! 🏆';
    }
    if (fillEl) {
      const span = Math.max(1, rank.max - rank.min);
      const pct = Math.min(100, Math.max(6, Math.round(((starsCount - rank.min) / span) * 100)));
      fillEl.style.width = `${pct}%`;
    }
  }

  function addScore(isSuccess) {
    if (isSuccess) {
      starsCount += 1;
      streakCount += 1;
      playSynth('success');
      if (typeof window.confetti === 'function' && (isKidsMode || streakCount % 3 === 0)) {
        window.confetti({
          particleCount: 28,
          spread: 56,
          origin: { y: 0.82 }
        });
      }
    } else {
      streakCount = 0;
      playSynth('error');
    }
    saveStats();
  }

  // ============================================================================
  // 4. CONEXIÓN A SUPABASE (`public.games` Y `public.kids_games`)
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
      return supabaseLevelCache[lvl];
    }

    const client = typeof window.getSupabaseClient === 'function' ? window.getSupabaseClient() : window.supabaseClient;
    if (!client) {
      return getFallbackQuestions(lvl);
    }

    try {
      const { data, error } = await client
        .from('games')
        .select('NIVEL, WORDS, CLUE, PICTURE')
        .ilike('NIVEL', `${lvl}%`)
        .limit(1000);

      if (!error && Array.isArray(data) && data.length > 0) {
        const cleaned = data.map(r => normalizeGameRow(r, lvl)).filter(Boolean);
        if (cleaned.length > 0) {
          supabaseLevelCache[lvl] = cleaned;
          return cleaned;
        }
      }

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
            return supabaseLevelCache[lvl];
          }
        }
      }
    } catch (err) {
      console.warn('⚠️ Aviso consultando tabla games:', err);
    }
    return getFallbackQuestions(lvl);
  }

  function getFallbackQuestions(lvl) {
    const filtered = DEFAULT_DATA.filter(item => item.NIVEL === lvl);
    return filtered.length > 0 ? filtered : DEFAULT_DATA;
  }

  function getLevelQuestionsSync() {
    if (supabaseLevelCache[currentGeneralLevel] && supabaseLevelCache[currentGeneralLevel].length > 0) {
      return supabaseLevelCache[currentGeneralLevel];
    }
    return getFallbackQuestions(currentGeneralLevel);
  }

  function pickNonRepeatingGeneralQuestion() {
    const pool = getLevelQuestionsSync();
    const fresh = pool.filter(item => !recentGeneralClues.includes(item.CLUE));
    const source = fresh.length > 0 ? fresh : pool;
    const picked = source[Math.floor(Math.random() * source.length)];
    if (picked) {
      recentGeneralClues.push(picked.CLUE);
      if (recentGeneralClues.length > 25) {
        recentGeneralClues.shift();
      }
    }
    return picked;
  }

  async function fetchKidsItemsFromSupabase() {
    if (hasLoadedKidsFromSupabase && KIDS_ITEMS.length > 0) {
      return KIDS_ITEMS;
    }

    const client = typeof window.getSupabaseClient === 'function' ? window.getSupabaseClient() : window.supabaseClient;
    if (!client) {
      return KIDS_ITEMS;
    }

    try {
      const { data, error } = await client
        .from('kids_games')
        .select('word, emoji, category, spanish_hint')
        .eq('active', true)
        .limit(1000);

      hasLoadedKidsFromSupabase = true;
      if (!error && Array.isArray(data) && data.length > 0) {
        const cleaned = data
          .map(r => ({
            word: String(r.word || '').trim(),
            emoji: String(r.emoji || '').trim(),
            category: String(r.category || 'animals').trim().toLowerCase(),
            spanish_hint: String(r.spanish_hint || '').trim()
          }))
          .filter(r => r.word && r.emoji);

        if (cleaned.length > 0) {
          KIDS_ITEMS = cleaned;
          return KIDS_ITEMS;
        }
      }
    } catch (err) {
      console.warn('⚠️ Usando banco infantil local (tabla kids_games aún no creada):', err);
    }
    return KIDS_ITEMS;
  }

  function pickNonRepeatingKidsItem(pool, historyArr, maxHistory = 35, excludeWords = []) {
    const available = pool.filter(item => !excludeWords.includes(item.word));
    const basePool = available.length > 0 ? available : pool;
    const fresh = basePool.filter(item => !historyArr.includes(item.word));
    const source = fresh.length > 0 ? fresh : basePool;
    const picked = source[Math.floor(Math.random() * source.length)];
    if (picked) {
      historyArr.push(picked.word);
      if (historyArr.length > maxHistory) {
        historyArr.shift();
      }
    }
    return picked;
  }

  // ============================================================================
  // 5. CAMBIO ENTRE MODO NIÑOS (4 JUEGOS) Y MODO GENERAL A1-C1 (3 JUEGOS)
  // ============================================================================
  function setAudienceMode(kidsModeActive) {
    isKidsMode = Boolean(kidsModeActive);

    const btnKids = document.getElementById('modeBtnKids');
    const btnGen = document.getElementById('modeBtnGeneral');
    const lvlContainer = document.getElementById('generalLevelContainer');
    const kidsNav = document.getElementById('kidsNav');
    const genNav = document.getElementById('generalNav');

    if (btnKids) btnKids.classList.toggle('active', isKidsMode);
    if (btnGen) btnGen.classList.toggle('active', !isKidsMode);

    if (isKidsMode) {
      stopRushTimer();
      if (lvlContainer) lvlContainer.classList.add('hidden');
      if (kidsNav) kidsNav.classList.remove('hidden');
      if (genNav) genNav.classList.add('hidden');

      document.querySelectorAll('.general-view').forEach(v => v.classList.add('hidden'));
      fetchKidsItemsFromSupabase().then(() => {
        switchKidsGame(currentKidsGame);
      });
    } else {
      stopBubbleSpawner();
      if (lvlContainer) lvlContainer.classList.remove('hidden');
      if (kidsNav) kidsNav.classList.add('hidden');
      if (genNav) genNav.classList.remove('hidden');

      document.querySelectorAll('.kids-view').forEach(v => v.classList.add('hidden'));
      fetchLevelFromSupabase(currentGeneralLevel).then(() => {
        switchGeneralGame(currentGeneralGame);
      });
    }
  }

  function toggleAudienceMode() {
    setAudienceMode(!isKidsMode);
  }

  // ============================================================================
  // 6. KIDS GAME 1: LISTEN & TAP (¡ESCUCHA Y TOCA!)
  // ============================================================================
  let currentListenTarget = null;
  let isListenLocked = false;

  function switchKidsGame(gameKey) {
    currentKidsGame = gameKey;
    if (gameKey !== 'bubbles') {
      stopBubbleSpawner();
    }

    document.querySelectorAll('.kids-view').forEach(v => v.classList.add('hidden'));
    document.querySelectorAll('.kids-nav-tab').forEach(b => b.classList.remove('active'));

    const activeView = document.getElementById(`game-kids-${gameKey}`);
    const activeNav = document.getElementById(`knav-${gameKey}`);
    if (activeView) activeView.classList.remove('hidden');
    if (activeNav) activeNav.classList.add('active');

    if (!isGamesTabActive) return;
    if (gameKey === 'listen') initKidsListenGame();
    if (gameKey === 'letters') initKidsSpellerGame();
    if (gameKey === 'bubbles') initKidsBubbleGame();
    if (gameKey === 'memory') initKidsMemoryGame();
  }

  function initKidsListenGame() {
    isListenLocked = false;
    currentListenTarget = pickNonRepeatingKidsItem(KIDS_ITEMS, recentListenWords, 40);
    const distractors = KIDS_ITEMS
      .filter(item => item.word !== currentListenTarget.word && item.emoji !== currentListenTarget.emoji)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    const choices = [currentListenTarget, ...distractors].sort(() => 0.5 - Math.random());

    const hintEl = document.getElementById('kidsListenHint');
    const phonicsEl = document.getElementById('kidsListenPhonics');
    const feedbackEl = document.getElementById('kidsListenFeedback');

    if (hintEl) {
      hintEl.innerText = currentListenTarget.spanish_hint
        ? `💡 Significa: ${currentListenTarget.spanish_hint}`
        : '💡 Escucha con atención';
    }
    if (phonicsEl) {
      phonicsEl.innerText = '🎧 ¿Qué palabra escuchaste?';
    }
    if (feedbackEl) {
      feedbackEl.innerText = '';
      feedbackEl.className = 'lq-kids-feedback';
    }

    const grid = document.getElementById('kidsListenGrid');
    if (!grid) return;
    grid.innerHTML = '';

    choices.forEach(item => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'lq-btn-3d lq-btn-neutral lq-kids-emoji-card';
      card.innerHTML = `
        <span class="lq-kids-card-emoji">${item.emoji}</span>
        <span class="lq-kids-card-word">${item.word}</span>
      `;
      card.onclick = () => checkKidsListen(card, item);
      grid.appendChild(card);
    });

    setTimeout(() => {
      if (isGamesTabActive && isKidsMode && currentKidsGame === 'listen') {
        speakKidsListenTarget();
      }
    }, 240);
  }

  function speakKidsListenTarget() {
    if (currentListenTarget) {
      speakWord(currentListenTarget.word);
    }
  }

  function checkKidsListen(cardBtn, chosenItem) {
    if (!currentListenTarget || isListenLocked) return;
    const isRight = chosenItem.word === currentListenTarget.word;
    const feedback = document.getElementById('kidsListenFeedback');
    const phonicsEl = document.getElementById('kidsListenPhonics');

    if (isRight) {
      isListenLocked = true;
      cardBtn.className = 'lq-btn-3d lq-btn-green lq-kids-emoji-card';
      if (phonicsEl) {
        phonicsEl.innerText = `✨ "${chosenItem.word.toUpperCase()}" ✨`;
      }
      if (feedback) {
        feedback.innerText = `¡Excelente! 🎉 "${chosenItem.word}"`;
        feedback.className = 'lq-kids-feedback lq-feedback-ok';
      }
      addScore(true);
      speakWord(chosenItem.word);
      setTimeout(() => {
        if (isGamesTabActive && isKidsMode && currentKidsGame === 'listen') {
          initKidsListenGame();
        }
      }, 1100);
    } else {
      cardBtn.classList.add('lq-shake', 'lq-card-wrong-border');
      if (feedback) {
        feedback.innerText = '¡Casi! Escucha de nuevo... 🎧';
        feedback.className = 'lq-kids-feedback lq-feedback-err';
      }
      addScore(false);
      setTimeout(() => {
        cardBtn.classList.remove('lq-shake', 'lq-card-wrong-border');
        speakKidsListenTarget();
      }, 580);
    }
  }

  // ============================================================================
  // 7. KIDS GAME 2: ROMPECABEZAS DE LETRAS (ARMA LA PALABRA)
  // ============================================================================
  let currentSpellerItem = null;
  let spellerTargetWord = '';
  let currentPlacedLetters = [];
  let spellerPoolTiles = [];
  let isSpellerLocked = false;

  function initKidsSpellerGame() {
    isSpellerLocked = false;
    const easyPool = KIDS_ITEMS.filter(k => k.word.length <= 6 && !k.word.includes(' '));
    currentSpellerItem = pickNonRepeatingKidsItem(easyPool.length > 0 ? easyPool : KIDS_ITEMS, recentSpellerWords, 35);
    spellerTargetWord = currentSpellerItem.word.toUpperCase();
    currentPlacedLetters = [];

    // Crear fichas fijas por ronda (las letras de la palabra + 1 letra distractora) para que no salten al tocarlas
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nonWordLetters = alphabet.split('').filter(ch => !spellerTargetWord.includes(ch));
    const distractor = nonWordLetters[Math.floor(Math.random() * nonWordLetters.length)] || 'Z';
    const rawLetters = [...spellerTargetWord.split(''), distractor].sort(() => 0.5 - Math.random());
    spellerPoolTiles = rawLetters.map((letter, idx) => ({
      id: idx,
      letter,
      used: false
    }));

    const emojiEl = document.getElementById('spellerEmoji');
    const hintEl = document.getElementById('spellerSpanishHint');
    if (emojiEl) emojiEl.innerText = currentSpellerItem.emoji;
    if (hintEl) {
      hintEl.innerText = currentSpellerItem.spanish_hint
        ? `Significa: ${currentSpellerItem.spanish_hint}`
        : `Categoría: ${currentSpellerItem.category}`;
    }

    renderSpellerBoard();
    setTimeout(() => {
      if (isGamesTabActive && isKidsMode && currentKidsGame === 'letters') {
        speakCurrentSpellerWord();
      }
    }, 220);
  }

  function speakCurrentSpellerWord() {
    if (currentSpellerItem) {
      speakWord(currentSpellerItem.word);
    }
  }

  function renderSpellerBoard() {
    const slotsContainer = document.getElementById('spellerSlots');
    const poolContainer = document.getElementById('spellerLetterPool');
    if (!slotsContainer || !poolContainer) return;

    const isWordComplete = currentPlacedLetters.length === spellerTargetWord.length;

    slotsContainer.innerHTML = '';
    for (let i = 0; i < spellerTargetWord.length; i++) {
      const slot = document.createElement('div');
      const letterAtIdx = currentPlacedLetters[i] || '';
      slot.className = `lq-speller-slot ${letterAtIdx ? 'filled' : ''} ${isWordComplete ? 'completed' : ''}`;
      slot.innerText = letterAtIdx;
      slotsContainer.appendChild(slot);
    }

    poolContainer.innerHTML = '';
    spellerPoolTiles.forEach(tile => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `lq-btn-3d lq-btn-neutral lq-speller-letter-btn ${tile.used ? 'used' : ''}`;
      btn.innerText = tile.letter;
      btn.disabled = tile.used || isSpellerLocked;
      btn.onclick = () => onLetterTapped(tile, btn);
      poolContainer.appendChild(btn);
    });
  }

  function onLetterTapped(tile, btnEl) {
    if (isSpellerLocked || tile.used) return;
    playSynth('tap');
    speakWord(tile.letter, 1.0);

    const nextExpected = spellerTargetWord[currentPlacedLetters.length];
    if (tile.letter === nextExpected) {
      tile.used = true;
      currentPlacedLetters.push(tile.letter);
      renderSpellerBoard();

      if (currentPlacedLetters.length === spellerTargetWord.length) {
        isSpellerLocked = true;
        addScore(true);
        setTimeout(() => speakCurrentSpellerWord(), 240);
        setTimeout(() => {
          if (isGamesTabActive && isKidsMode && currentKidsGame === 'letters') {
            initKidsSpellerGame();
          }
        }, 1250);
      }
    } else {
      addScore(false);
      if (btnEl) {
        btnEl.classList.add('lq-shake', 'lq-card-wrong-border');
        setTimeout(() => btnEl.classList.remove('lq-shake', 'lq-card-wrong-border'), 420);
      }
    }
  }

  function giveKidsSpellerHint() {
    if (isSpellerLocked || !spellerTargetWord) return;
    if (currentPlacedLetters.length >= spellerTargetWord.length) return;
    const nextExpected = spellerTargetWord[currentPlacedLetters.length];
    const matchingTile = spellerPoolTiles.find(t => !t.used && t.letter === nextExpected);
    if (matchingTile) {
      onLetterTapped(matchingTile, null);
    }
  }

  function resetSpellerWord() {
    if (isSpellerLocked) return;
    currentPlacedLetters = [];
    spellerPoolTiles.forEach(t => { t.used = false; });
    renderSpellerBoard();
  }

  // ============================================================================
  // 8. KIDS GAME 3: POP THE BUBBLES (¡EXPLOTA LAS BURBUJAS!)
  // ============================================================================
  let bubbleGoalCategory = 'animals';
  let poppedCount = 0;
  let bubbleSpawnInterval = null;

  function stopBubbleSpawner() {
    if (bubbleSpawnInterval) {
      clearInterval(bubbleSpawnInterval);
      bubbleSpawnInterval = null;
    }
  }

  function initKidsBubbleGame() {
    poppedCount = 0;
    const countEl = document.getElementById('bubblePoppedCount');
    if (countEl) countEl.innerText = '0';
    refreshBubbleGoal();
    startBubbleSpawner();
  }

  function refreshBubbleGoal() {
    const uniqueCats = [...new Set(KIDS_ITEMS.map(i => i.category).filter(Boolean))];
    const categories = uniqueCats.length >= 2 ? uniqueCats : ['animals', 'fruits', 'vehicles', 'food'];
    const filtered = categories.filter(c => c !== bubbleGoalCategory);
    bubbleGoalCategory = filtered[Math.floor(Math.random() * filtered.length)];

    const meta = CATEGORY_META[bubbleGoalCategory] || {
      label: `🎈 ${bubbleGoalCategory.toUpperCase()}`,
      speech: bubbleGoalCategory
    };

    const goalEl = document.getElementById('kidsBubbleGoal');
    if (goalEl) goalEl.innerText = meta.label;
    speakBubbleGoal();
  }

  function speakBubbleGoal() {
    const meta = CATEGORY_META[bubbleGoalCategory];
    const spoken = meta ? meta.speech : bubbleGoalCategory;
    speakWord(`Pop all the ${spoken}!`);
  }

  function startBubbleSpawner() {
    stopBubbleSpawner();
    const sky = document.getElementById('bubbleSky');
    if (!sky) return;
    sky.innerHTML = '';

    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        if (isGamesTabActive && isKidsMode && currentKidsGame === 'bubbles') {
          spawnSingleBubble();
        }
      }, i * 320);
    }

    bubbleSpawnInterval = setInterval(() => {
      if (isGamesTabActive && isKidsMode && currentKidsGame === 'bubbles') {
        spawnSingleBubble();
      } else {
        stopBubbleSpawner();
      }
    }, 1350);
  }

  function spawnSingleBubble() {
    const sky = document.getElementById('bubbleSky');
    if (!sky || sky.childElementCount >= 8) return;

    const goalPool = KIDS_ITEMS.filter(i => i.category === bubbleGoalCategory);
    const useGoalPool = goalPool.length > 0 && Math.random() < 0.48;
    const pool = useGoalPool ? goalPool : KIDS_ITEMS;
    const randomItem = pool[Math.floor(Math.random() * pool.length)];

    const bubble = document.createElement('div');
    const leftPercent = Math.floor(Math.random() * 74) + 6;
    const duration = (Math.random() * 2.4 + 5.4).toFixed(1);
    const size = Math.floor(Math.random() * 14) + 74;

    bubble.className = 'lq-floating-bubble';
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${leftPercent}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.innerHTML = `
      <span class="lq-bubble-emoji">${randomItem.emoji}</span>
      <span class="lq-bubble-mini-word">${randomItem.word}</span>
    `;

    bubble.onclick = (e) => {
      e.stopPropagation();
      handleBubblePop(bubble, randomItem);
    };

    sky.appendChild(bubble);

    setTimeout(() => {
      if (bubble && bubble.parentNode) {
        bubble.remove();
      }
    }, Number(duration) * 1000);
  }

  function handleBubblePop(bubbleElement, item) {
    if (!bubbleElement || bubbleElement.dataset.popped === '1') return;
    bubbleElement.dataset.popped = '1';

    playSynth('pop');
    speakWord(item.word);

    const sky = document.getElementById('bubbleSky');
    const isCorrectCategory = item.category === bubbleGoalCategory;

    if (sky) {
      const toast = document.createElement('div');
      toast.className = `lq-bubble-pop-toast ${isCorrectCategory ? 'lq-pop-toast-ok' : 'lq-pop-toast-err'}`;
      toast.style.left = bubbleElement.style.left;
      toast.style.top = `${Math.max(24, bubbleElement.offsetTop)}px`;
      toast.innerText = isCorrectCategory ? `+1 ⭐ ${item.word}!` : `Oops! ${item.word}`;
      sky.appendChild(toast);
      setTimeout(() => {
        if (toast && toast.parentNode) toast.remove();
      }, 750);
    }

    bubbleElement.style.transform = 'scale(1.38)';
    bubbleElement.style.opacity = '0';
    bubbleElement.style.transition = 'transform 0.15s ease, opacity 0.15s ease';

    setTimeout(() => {
      if (bubbleElement && bubbleElement.parentNode) bubbleElement.remove();
    }, 150);

    if (isCorrectCategory) {
      poppedCount++;
      const countEl = document.getElementById('bubblePoppedCount');
      if (countEl) countEl.innerText = poppedCount;
      addScore(true);
    } else {
      addScore(false);
    }
  }

  // ============================================================================
  // 9. KIDS GAME 4: MEMORY KIDS (ENCUENTRA LAS PAREJAS)
  // ============================================================================
  let memoryCards = [];
  let flippedCards = [];
  let memoryTurns = 0;
  let matchedPairs = 0;

  function initKidsMemoryGame() {
    memoryTurns = 0;
    matchedPairs = 0;
    flippedCards = [];

    const turnsEl = document.getElementById('memoryTurns');
    const pairsEl = document.getElementById('memoryPairsCount');
    const fbEl = document.getElementById('memoryFeedback');
    if (turnsEl) turnsEl.innerText = '0';
    if (pairsEl) pairsEl.innerText = '0/3';
    if (fbEl) {
      fbEl.innerText = '';
      fbEl.className = 'lq-kids-feedback';
    }

    const picked = [];
    const pickedWords = [];
    for (let i = 0; i < 3; i++) {
      const item = pickNonRepeatingKidsItem(KIDS_ITEMS, recentMemoryWords, 36, pickedWords);
      if (item) {
        picked.push(item);
        pickedWords.push(item.word);
      }
    }

    const deck = [];
    picked.forEach((item, index) => {
      deck.push({ id: `${index}-a`, pairId: index, word: item.word, emoji: item.emoji });
      deck.push({ id: `${index}-b`, pairId: index, word: item.word, emoji: item.emoji });
    });

    memoryCards = deck.sort(() => 0.5 - Math.random());

    const grid = document.getElementById('memoryGrid');
    if (!grid) return;
    grid.innerHTML = '';

    memoryCards.forEach(card => {
      const cardBox = document.createElement('div');
      cardBox.className = 'lq-memory-card';
      cardBox.innerHTML = `
        <div class="lq-memory-card-inner">
          <div class="lq-memory-front">⭐</div>
          <div class="lq-memory-back">
            <span class="lq-memory-emoji">${card.emoji}</span>
            <span class="lq-memory-word">${card.word}</span>
          </div>
        </div>
      `;
      cardBox.onclick = () => onMemoryCardClick(cardBox, card);
      grid.appendChild(cardBox);
    });
  }

  function onMemoryCardClick(cardBox, cardData) {
    if (cardBox.classList.contains('flipped') || cardBox.classList.contains('matched') || flippedCards.length >= 2) {
      return;
    }

    playSynth('tap');
    cardBox.classList.add('flipped');
    speakWord(cardData.word);
    flippedCards.push({ element: cardBox, data: cardData });

    if (flippedCards.length === 2) {
      memoryTurns++;
      const turnsEl = document.getElementById('memoryTurns');
      const pairsEl = document.getElementById('memoryPairsCount');
      const fbEl = document.getElementById('memoryFeedback');
      if (turnsEl) turnsEl.innerText = memoryTurns;

      const [card1, card2] = flippedCards;
      if (card1.data.pairId === card2.data.pairId) {
        matchedPairs++;
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');
        if (pairsEl) pairsEl.innerText = `${matchedPairs}/3`;
        if (fbEl) {
          fbEl.innerText = matchedPairs === 3 ? '🎉 ¡Completaste todas las parejas!' : `✨ ¡Pareja encontrada: "${card1.data.word}"!`;
          fbEl.className = 'lq-kids-feedback lq-feedback-ok';
        }
        addScore(true);
        flippedCards = [];

        if (matchedPairs === 3) {
          setTimeout(() => {
            if (isGamesTabActive && isKidsMode && currentKidsGame === 'memory') {
              initKidsMemoryGame();
            }
          }, 1500);
        }
      } else {
        setTimeout(() => {
          card1.element.classList.remove('flipped');
          card2.element.classList.remove('flipped');
          flippedCards = [];
        }, 860);
      }
    }
  }

  // ============================================================================
  // 10. GENERAL MODE GAMES (A1–C1 CONECTADOS A SUPABASE)
  // ============================================================================
  function toggleLevelMenu(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('levelMenu');
    if (menu) menu.classList.toggle('hidden');
  }

  async function setLevel(lvl) {
    const target = LEVEL_META[lvl] ? lvl : 'A1';
    currentGeneralLevel = target;

    const badge = document.getElementById('levelBadge');
    const title = document.getElementById('levelTitle');
    const menu = document.getElementById('levelMenu');

    if (badge) {
      badge.innerText = target;
      badge.className = `lq-level-badge ${LEVEL_META[target].badgeClass}`;
    }
    if (title) title.innerText = LEVEL_META[target].name;
    if (menu) menu.classList.add('hidden');

    await fetchLevelFromSupabase(target);
    initActiveGeneralGame(true);
  }

  function switchGeneralGame(gameKey) {
    currentGeneralGame = gameKey;
    if (gameKey !== 'fillrush') {
      stopRushTimer();
    }

    document.querySelectorAll('.general-view').forEach(v => v.classList.add('hidden'));
    document.querySelectorAll('.gen-nav-tab').forEach(b => b.classList.remove('active'));

    const activeView = document.getElementById(`game-${gameKey}`);
    const activeNav = document.getElementById(`gnav-${gameKey}`);
    if (activeView) activeView.classList.remove('hidden');
    if (activeNav) activeNav.classList.add('active');

    initActiveGeneralGame(false);
  }

  function initActiveGeneralGame(resetRush) {
    if (!isGamesTabActive || isKidsMode) return;
    if (currentGeneralGame === 'fillrush') startFillRush(resetRush);
    if (currentGeneralGame === 'swipe') initSwipeGame();
    if (currentGeneralGame === 'bubbles') initGeneralBubbleGame();
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function formatClueAndTag(rawClue, filledWord = null) {
    const clue = String(rawClue || '').trim();
    const match = clue.match(/^\(([^)]+)\)\s*(.*)$/);
    const cleanClue = match ? (match[2] || clue) : clue;

    if (cleanClue.includes('___') || cleanClue.includes('__')) {
      const slotHtml = filledWord
        ? `<span class="lq-blank-slot filled-ok">${escapeHtml(filledWord)}</span>`
        : '<span class="lq-blank-slot">_____</span>';
      const htmlClue = escapeHtml(cleanClue).replace(/_{2,}/g, slotHtml);
      return {
        tag: match ? match[1] : 'Complete the Sentence',
        tagClass: 'lq-tag-sentence',
        displayClue: cleanClue,
        htmlClue
      };
    }

    return {
      tag: match ? match[1] : 'Definition',
      tagClass: match ? 'lq-tag-vocab' : 'lq-tag-default',
      displayClue: cleanClue,
      htmlClue: escapeHtml(cleanClue)
    };
  }

  // 10.1 Fill-in Rush
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

  function updateRushTimerUI() {
    const tEl = document.getElementById('rushTimer');
    const tBox = document.getElementById('timerContainer');
    const barEl = document.getElementById('rushTimerBar');
    if (tEl) tEl.innerText = rushTimeLeft;
    if (tBox) tBox.classList.toggle('lq-timer-danger', rushTimeLeft <= 10);
    if (barEl) {
      const pct = Math.min(100, Math.max(0, Math.round((rushTimeLeft / 60) * 100)));
      barEl.style.width = `${pct}%`;
    }
  }

  function restartFillRush() {
    startFillRush(true);
  }

  function startFillRush(forceReset) {
    const playArea = document.getElementById('rushPlayArea');
    const overPanel = document.getElementById('rushGameOverPanel');
    if (playArea) playArea.classList.remove('hidden');
    if (overPanel) overPanel.classList.add('hidden');

    if (forceReset || !rushTimerInterval || rushTimeLeft <= 0) {
      stopRushTimer();
      rushTimeLeft = 60;
      rushHits = 0;
      const scoreEl = document.getElementById('rushScore');
      if (scoreEl) scoreEl.innerText = '0';
      updateRushTimerUI();

      rushTimerInterval = setInterval(() => {
        if (!isGamesTabActive || isKidsMode || currentGeneralGame !== 'fillrush') {
          stopRushTimer();
          return;
        }
        rushTimeLeft = Math.max(0, rushTimeLeft - 1);
        updateRushTimerUI();

        if (rushTimeLeft <= 0) {
          stopRushTimer();
          if (playArea) playArea.classList.add('hidden');
          if (overPanel) overPanel.classList.remove('hidden');
          const summaryEl = document.getElementById('rushFinalSummary');
          if (summaryEl) {
            summaryEl.innerText = `Completaste ${rushHits} ${rushHits === 1 ? 'acierto' : 'aciertos'} en el Nivel ${currentGeneralLevel}.`;
          }
        }
      }, 1000);
    }
    nextFillQuestion();
  }

  function nextFillQuestion() {
    isFillAnswering = false;
    const items = getLevelQuestionsSync();
    currentFillItem = pickNonRepeatingGeneralQuestion();

    const fb = document.getElementById('fillFeedback');
    if (fb) fb.innerText = '';

    const parsed = formatClueAndTag(currentFillItem.CLUE);
    const tag = document.getElementById('fillGrammarTag');
    const clueEl = document.getElementById('fillClueText');
    if (tag) {
      tag.innerText = parsed.tag;
      tag.className = `lq-category-pill ${parsed.tagClass}`;
    }
    if (clueEl) clueEl.innerHTML = parsed.htmlClue;

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
      btn.onclick = () => {
        if (isFillAnswering || rushTimeLeft <= 0) return;
        isFillAnswering = true;
        if (opt.trim().toLowerCase() === correctAns.toLowerCase()) {
          btn.className = 'lq-btn-3d lq-btn-green lq-option-btn';
          if (clueEl) {
            clueEl.innerHTML = formatClueAndTag(currentFillItem.CLUE, correctAns).htmlClue;
          }
          rushHits++;
          const sEl = document.getElementById('rushScore');
          if (sEl) sEl.innerText = rushHits;
          rushTimeLeft = Math.min(60, rushTimeLeft + 3);
          updateRushTimerUI();
          if (fb) fb.innerHTML = '<span class="lq-feedback-ok">¡Correcto! (+3s) ⭐</span>';
          addScore(true);
          setTimeout(nextFillQuestion, 520);
        } else {
          btn.className = 'lq-btn-3d lq-btn-red lq-option-btn lq-shake';
          rushTimeLeft = Math.max(0, rushTimeLeft - 2);
          updateRushTimerUI();
          if (fb) fb.innerHTML = `<span class="lq-feedback-err">Respuesta correcta: <strong>${escapeHtml(correctAns)}</strong> (-2s)</span>`;
          addScore(false);
          setTimeout(nextFillQuestion, 1100);
        }
      };
      grid.appendChild(btn);
    });
  }

  function speakCurrentClue() {
    if (currentFillItem) {
      speakWord(currentFillItem.CLUE, 0.94);
    }
  }

  // 10.2 Swipe & Match
  const swipeCardState = { isMatching: true, currentWord: '', currentClue: '', trueWordForClue: '' };
  let swipeCardEl = null;
  let sStartX = 0, sCurX = 0, sDragging = false;
  let isSwipeAnimating = false;

  function initSwipeGame() {
    swipeCardEl = document.getElementById('swipeCard');
    const fb = document.getElementById('swipeFeedback');
    if (fb) fb.innerText = '';
    setupSwipeEvents();
    loadNextSwipeCard();
  }

  function loadNextSwipeCard() {
    isSwipeAnimating = false;
    const items = getLevelQuestionsSync();
    const target = pickNonRepeatingGeneralQuestion();
    const isMatch = Math.random() >= 0.5;

    swipeCardState.isMatching = isMatch;
    swipeCardState.currentWord = target.RESPUESTA;
    if (isMatch) {
      swipeCardState.currentClue = target.CLUE;
      swipeCardState.trueWordForClue = target.RESPUESTA;
    } else {
      const pool = items.filter(i => i.RESPUESTA.trim().toLowerCase() !== target.RESPUESTA.trim().toLowerCase());
      const dist = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : target;
      swipeCardState.currentClue = dist.CLUE;
      swipeCardState.trueWordForClue = dist.RESPUESTA;
      swipeCardState.isMatching = (dist.RESPUESTA.trim().toLowerCase() === target.RESPUESTA.trim().toLowerCase());
    }

    const parsed = formatClueAndTag(swipeCardState.currentClue);
    const catTag = document.getElementById('swipeCategoryTag');
    if (catTag) {
      catTag.innerText = parsed.tag;
      catTag.className = `lq-category-pill ${parsed.tagClass}`;
    }

    if (swipeCardEl) {
      swipeCardEl.style.transform = 'translate(0px, 0px) rotate(0deg)';
      swipeCardEl.style.opacity = '1';
      swipeCardEl.style.borderColor = '#cbd5e1';
      swipeCardEl.classList.remove('dragging');
    }
    const stOk = document.getElementById('stampCorrect');
    const stNo = document.getElementById('stampWrong');
    if (stOk) stOk.style.opacity = '0';
    if (stNo) stNo.style.opacity = '0';

    const wEl = document.getElementById('swipeWord');
    const cEl = document.getElementById('swipeClue');
    if (wEl) wEl.innerText = swipeCardState.currentWord;
    if (cEl) cEl.innerHTML = parsed.htmlClue;
  }

  function setupSwipeEvents() {
    if (!swipeCardEl || swipeEventsBound) return;
    swipeEventsBound = true;
    swipeCardEl.addEventListener('touchstart', onSStart, { passive: true });
    window.addEventListener('touchmove', onSMove, { passive: true });
    window.addEventListener('touchend', onSEnd);
    swipeCardEl.addEventListener('mousedown', onSStart);
    window.addEventListener('mousemove', onSMove);
    window.addEventListener('mouseup', onSEnd);
  }

  function onSStart(e) {
    if (!isGamesTabActive || isKidsMode || currentGeneralGame !== 'swipe' || isSwipeAnimating) return;
    if (e.target && e.target.closest('button')) return;
    sDragging = true;
    sStartX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    if (swipeCardEl) swipeCardEl.classList.add('dragging');
  }

  function onSMove(e) {
    if (!sDragging || !swipeCardEl || isSwipeAnimating) return;
    sCurX = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - sStartX;
    const rot = sCurX * 0.07;
    swipeCardEl.style.transform = `translate(${sCurX}px, 0px) rotate(${rot}deg)`;

    const rightS = document.getElementById('stampCorrect');
    const leftS = document.getElementById('stampWrong');
    if (rightS && leftS) {
      if (sCurX > 25) {
        rightS.style.opacity = String(Math.min(1, sCurX / 95));
        leftS.style.opacity = '0';
      } else if (sCurX < -25) {
        leftS.style.opacity = String(Math.min(1, Math.abs(sCurX) / 95));
        rightS.style.opacity = '0';
      } else {
        rightS.style.opacity = '0';
        leftS.style.opacity = '0';
      }
    }
  }

  function onSEnd() {
    if (!sDragging || !swipeCardEl) return;
    sDragging = false;
    swipeCardEl.classList.remove('dragging');
    if (sCurX > 80) {
      animateCardOut(true);
    } else if (sCurX < -80) {
      animateCardOut(false);
    } else {
      swipeCardEl.style.transform = 'translate(0px, 0px) rotate(0deg)';
      const rightS = document.getElementById('stampCorrect');
      const leftS = document.getElementById('stampWrong');
      if (rightS) rightS.style.opacity = '0';
      if (leftS) leftS.style.opacity = '0';
    }
    sCurX = 0;
  }

  function handleSwipeAction(val) {
    if (isSwipeAnimating) return;
    animateCardOut(val);
  }

  function animateCardOut(userVal) {
    if (!swipeCardEl || isSwipeAnimating) return;
    isSwipeAnimating = true;

    const success = (userVal === swipeCardState.isMatching);
    const fb = document.getElementById('swipeFeedback');
    if (fb) {
      if (success) {
        fb.innerHTML = `<span class="lq-feedback-ok">✅ ¡Correcto! ${swipeCardState.isMatching ? 'Sí coincidían' : `La respuesta para la pista era "${escapeHtml(swipeCardState.trueWordForClue)}"`}</span>`;
      } else {
        fb.innerHTML = `<span class="lq-feedback-err">❌ Incorrecto — ${swipeCardState.isMatching ? `"${escapeHtml(swipeCardState.currentWord)}" sí era la respuesta` : `Correspondía a "${escapeHtml(swipeCardState.trueWordForClue)}"`}</span>`;
      }
    }

    swipeCardEl.style.borderColor = success ? '#10b981' : '#f43f5e';
    const destX = userVal ? 340 : -340;
    swipeCardEl.style.transform = `translate(${destX}px, 16px) rotate(${userVal ? 18 : -18}deg)`;
    swipeCardEl.style.opacity = '0';

    addScore(success);
    setTimeout(loadNextSwipeCard, 340);
  }

  function speakSwipeWord() {
    speakWord(swipeCardState.currentWord, 0.94);
  }

  // 10.3 Word Bubbles (General)
  let currentGenBubbleItem = null;
  let genTargetTokens = [];
  let genSelectedTokens = [];
  let genPoolTokens = [];
  let isGenBubbleLocked = false;

  function initGeneralBubbleGame() {
    isGenBubbleLocked = false;
    currentGenBubbleItem = pickNonRepeatingGeneralQuestion();
    const parsed = formatClueAndTag(currentGenBubbleItem.CLUE);
    const clueEl = document.getElementById('bubbleClue');
    const tagEl = document.getElementById('genBubbleTag');
    const fbEl = document.getElementById('genBubbleFeedback');

    if (clueEl) clueEl.innerHTML = parsed.htmlClue;
    if (fbEl) fbEl.innerText = '';

    const ans = currentGenBubbleItem.RESPUESTA.trim();
    const isMultiWord = ans.includes(' ') || ans.length > 10;
    if (tagEl) {
      tagEl.innerText = isMultiWord ? 'Ordena las palabras' : `Ordena las ${ans.length} letras`;
    }

    genTargetTokens = isMultiWord ? ans.split(/\s+/) : ans.split('');
    genSelectedTokens = [];
    genPoolTokens = genTargetTokens
      .map((val, idx) => ({ id: idx, value: val }))
      .sort(() => 0.5 - Math.random());

    renderGenBubbleBoard();
  }

  function renderGenBubbleBoard() {
    const ansArea = document.getElementById('bubbleAnswerArea');
    const poolArea = document.getElementById('bubblePool');
    if (!ansArea || !poolArea) return;

    ansArea.innerHTML = '';
    if (genSelectedTokens.length === 0) {
      ansArea.innerHTML = '<span class="lq-bubble-placeholder">Toca las fichas de abajo en orden</span>';
    } else {
      genSelectedTokens.forEach(t => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lq-bubble-selected';
        btn.innerText = t.value;
        btn.onclick = () => {
          if (isGenBubbleLocked) return;
          playSynth('tap');
          genPoolTokens.push(t);
          genSelectedTokens = genSelectedTokens.filter(x => x.id !== t.id);
          renderGenBubbleBoard();
        };
        ansArea.appendChild(btn);
      });
    }

    poolArea.innerHTML = '';
    genPoolTokens.forEach(t => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lq-btn-3d lq-btn-neutral lq-bubble-token';
      btn.innerText = t.value;
      btn.onclick = () => {
        if (isGenBubbleLocked) return;
        playSynth('tap');
        genSelectedTokens.push(t);
        genPoolTokens = genPoolTokens.filter(x => x.id !== t.id);
        renderGenBubbleBoard();
      };
      poolArea.appendChild(btn);
    });
  }

  function undoLastBubble() {
    if (isGenBubbleLocked) return;
    if (genSelectedTokens.length > 0) {
      playSynth('tap');
      const last = genSelectedTokens.pop();
      genPoolTokens.push(last);
      renderGenBubbleBoard();
    }
  }

  function giveGeneralBubbleHint() {
    if (isGenBubbleLocked || !currentGenBubbleItem) return;
    // Verificar cuántos tokens colocados desde el inicio son correctos
    let validPrefixLen = 0;
    while (
      validPrefixLen < genSelectedTokens.length &&
      genSelectedTokens[validPrefixLen].value.toLowerCase() === genTargetTokens[validPrefixLen].toLowerCase()
    ) {
      validPrefixLen++;
    }
    // Devolver tokens incorrectos a la piscina
    while (genSelectedTokens.length > validPrefixLen) {
      const removed = genSelectedTokens.pop();
      genPoolTokens.push(removed);
    }
    if (validPrefixLen < genTargetTokens.length) {
      const neededVal = genTargetTokens[validPrefixLen];
      const matchIdx = genPoolTokens.findIndex(t => t.value.toLowerCase() === neededVal.toLowerCase());
      if (matchIdx !== -1) {
        const [token] = genPoolTokens.splice(matchIdx, 1);
        genSelectedTokens.push(token);
        playSynth('tap');
      }
    }
    renderGenBubbleBoard();
  }

  function checkBubbleSolution() {
    if (!currentGenBubbleItem || isGenBubbleLocked) return;
    const ans = currentGenBubbleItem.RESPUESTA.trim();
    const isMultiWord = ans.includes(' ') || ans.length > 10;
    const glue = isMultiWord ? ' ' : '';
    const user = genSelectedTokens.map(t => t.value).join(glue).trim();

    const ansArea = document.getElementById('bubbleAnswerArea');
    const fbEl = document.getElementById('genBubbleFeedback');
    const clueEl = document.getElementById('bubbleClue');
    if (!ansArea) return;

    if (user.toLowerCase() === ans.toLowerCase()) {
      isGenBubbleLocked = true;
      ansArea.classList.add('lq-bubble-area-correct');
      if (clueEl) {
        clueEl.innerHTML = formatClueAndTag(currentGenBubbleItem.CLUE, ans).htmlClue;
      }
      if (fbEl) {
        fbEl.innerHTML = `<span class="lq-feedback-ok">🎉 ¡Excelente! "${escapeHtml(ans)}"</span>`;
      }
      addScore(true);
      speakBubbleTarget();
      setTimeout(() => {
        ansArea.classList.remove('lq-bubble-area-correct');
        initGeneralBubbleGame();
      }, 950);
    } else {
      ansArea.classList.add('lq-bubble-area-wrong', 'lq-shake');
      if (fbEl) {
        fbEl.innerHTML = '<span class="lq-feedback-err">Revisa el orden de las fichas o usa 💡 Pista</span>';
      }
      addScore(false);
      setTimeout(() => {
        ansArea.classList.remove('lq-bubble-area-wrong', 'lq-shake');
      }, 550);
    }
  }

  function speakBubbleTarget() {
    if (currentGenBubbleItem) {
      speakWord(currentGenBubbleItem.RESPUESTA, 0.94);
    }
  }

  // ============================================================================
  // 11. CICLO DE VIDA AL ABRIR / CERRAR LA PESTAÑA DE JUEGOS
  // ============================================================================
  let hasInitializedOnce = false;

  async function onTabOpened() {
    isGamesTabActive = true;
    loadStats();

    if (!hasInitializedOnce) {
      hasInitializedOnce = true;
      const profile = window.currentUserProfile || {};
      const prog = String(profile.program || '').toLowerCase();
      const lvl = String(profile.course_level || '').toLowerCase();

      const isAdultOrTeens = prog.includes('adult') || prog.includes('teen') || lvl.includes('adult') || lvl.includes('teen');
      const startInKids = !isAdultOrTeens;
      const defaultCefr = lvl.includes('3') ? 'B2' : (lvl.includes('2') ? 'B1' : 'A1');
      currentGeneralLevel = defaultCefr;

      const badge = document.getElementById('levelBadge');
      const title = document.getElementById('levelTitle');
      if (badge) {
        badge.innerText = defaultCefr;
        badge.className = `lq-level-badge ${LEVEL_META[defaultCefr].badgeClass}`;
      }
      if (title) title.innerText = LEVEL_META[defaultCefr].name;

      setAudienceMode(startInKids);
    } else {
      if (isKidsMode) {
        switchKidsGame(currentKidsGame);
      } else {
        await fetchLevelFromSupabase(currentGeneralLevel);
        switchGeneralGame(currentGeneralGame);
      }
    }
  }

  function onTabClosed() {
    isGamesTabActive = false;
    stopRushTimer();
    stopBubbleSpawner();
  }

  document.addEventListener('click', (e) => {
    const menu = document.getElementById('levelMenu');
    const btn = document.getElementById('levelBtn');
    if (menu && !menu.classList.contains('hidden')) {
      if (btn && !btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
      }
    }
  });

  // Exponer funciones globales
  window.LivingGames = {
    onTabOpened,
    onTabClosed,
    setAudienceMode,
    toggleAudienceMode,
    switchKidsGame,
    switchGeneralGame,
    toggleLevelMenu,
    setLevel,
    toggleSound,
    restartFillRush
  };

  window.toggleAudienceMode = toggleAudienceMode;
  window.setAudienceMode = setAudienceMode;
  window.switchKidsGame = switchKidsGame;
  window.switchGeneralGame = switchGeneralGame;
  window.setLevel = setLevel;
  window.toggleSound = toggleSound;
  window.speakKidsListenTarget = speakKidsListenTarget;
  window.speakCurrentSpellerWord = speakCurrentSpellerWord;
  window.resetSpellerWord = resetSpellerWord;
  window.giveKidsSpellerHint = giveKidsSpellerHint;
  window.speakBubbleGoal = speakBubbleGoal;
  window.refreshBubbleGoal = refreshBubbleGoal;
  window.initKidsMemoryGame = initKidsMemoryGame;
  window.speakCurrentClue = speakCurrentClue;
  window.speakSwipeWord = speakSwipeWord;
  window.handleSwipeAction = handleSwipeAction;
  window.undoLastBubble = undoLastBubble;
  window.giveGeneralBubbleHint = giveGeneralBubbleHint;
  window.checkBubbleSolution = checkBubbleSolution;
  window.speakBubbleTarget = speakBubbleTarget;
})();
