/**
 * Academia Living English — Módulo Oficial de Ejercicios de Práctica por Lección
 * Conectado a la tabla `public.lesson_exercises` en Supabase con respaldo completo
 * de los 8 libros oficiales (Kids 1, Junior 1, Teens 1–3 y Adultos 1–3).
 */
(function () {
  const DEFAULT_BOOK_CATALOG = {
  "Kids 1": {
    "title": "Kids Nivel 1 — Fun English for Little Stars",
    "badge": "🧸 Kids 1",
    "lessons": [
      {
        "code": "L1",
        "title": "L1 · Hello! Michi & Chiqui",
        "topic": "Saludos básicos y decir tu nombre",
        "icon": "🐱",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "🐱 Michi says: «Hello! What's your name?»",
            "options": [
              "Hello! I'm Sofi!",
              "Goodbye!",
              "Red and blue!",
              "One, two, three!"
            ],
            "answer": "Hello! I'm Sofi!",
            "explanation": "Cuando nos preguntan «What's your name?», respondemos «I'm + nuestro nombre»."
          },
          {
            "type": "multiple_choice",
            "prompt": "👋 When class finishes and we go home, we wave and say:",
            "options": [
              "Goodbye! See you soon!",
              "Good morning!",
              "Hello!",
              "What's your name?"
            ],
            "answer": "Goodbye! See you soon!",
            "explanation": "Para despedirnos decimos «Goodbye! / Bye! / See you soon!»."
          },
          {
            "type": "multiple_choice",
            "prompt": "👧 «Girl» means niña, and 👦 «Boy» means ___.",
            "options": [
              "niño",
              "maestro",
              "gatito",
              "amigo"
            ],
            "answer": "niño",
            "explanation": "Girl = niña, Boy = niño, Friend = amigo/a."
          }
        ]
      },
      {
        "code": "L2",
        "title": "L2 · My Classroom",
        "topic": "Útiles escolares y objetos del salón",
        "icon": "✏️",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "✏️ What do we use to write and draw in our notebook?",
            "options": [
              "a pencil",
              "a chair",
              "a door",
              "a window"
            ],
            "answer": "a pencil",
            "explanation": "✏️ «Pencil» es lápiz."
          },
          {
            "type": "multiple_choice",
            "prompt": "📖 We open our ___ to read stories in class.",
            "options": [
              "book",
              "bag",
              "chair",
              "table"
            ],
            "answer": "book",
            "explanation": "📖 «Book» significa libro."
          },
          {
            "type": "multiple_choice",
            "prompt": "🎒 Where do you carry your books and crayons to school?",
            "options": [
              "in my schoolbag",
              "on the window",
              "under the shoe",
              "in the pencil"
            ],
            "answer": "in my schoolbag",
            "explanation": "🎒 «Bag / Schoolbag» es el morral o bolso escolar."
          }
        ]
      },
      {
        "code": "L3",
        "title": "L3 · Colours",
        "topic": "Colores principales en inglés",
        "icon": "🌈",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "🍎 An apple is ___, and 🍌 a banana is ___.",
            "options": [
              "red / yellow",
              "blue / purple",
              "pink / black",
              "white / brown"
            ],
            "answer": "red / yellow",
            "explanation": "Red = rojo (🍎) y Yellow = amarillo (🍌)."
          },
          {
            "type": "multiple_choice",
            "prompt": "🐸 What colour is a little frog and the grass?",
            "options": [
              "green",
              "pink",
              "orange",
              "purple"
            ],
            "answer": "green",
            "explanation": "🐸 «Green» significa verde."
          },
          {
            "type": "multiple_choice",
            "prompt": "🍇 Grapes are ___ and 🍊 an orange is ___.",
            "options": [
              "purple / orange",
              "black / white",
              "blue / red",
              "yellow / pink"
            ],
            "answer": "purple / orange",
            "explanation": "Purple = morado (🍇) y Orange = naranja (🍊)."
          }
        ]
      },
      {
        "code": "L4",
        "title": "L4 · Numbers 1–10",
        "topic": "Contar del 1 al 10 en inglés",
        "icon": "🔟",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Count in order: One, two, three, ___, five!",
            "options": [
              "four (4)",
              "six (6)",
              "eight (8)",
              "ten (10)"
            ],
            "answer": "four (4)",
            "explanation": "1 = one, 2 = two, 3 = three, 4 = four, 5 = five."
          },
          {
            "type": "multiple_choice",
            "prompt": "🖐️ How many fingers do you have on TWO hands?",
            "options": [
              "ten (10)",
              "five (5)",
              "seven (7)",
              "three (3)"
            ],
            "answer": "ten (10)",
            "explanation": "En las dos manos tenemos 10 dedos: «ten»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Count: Six, seven, ___, nine, ten!",
            "options": [
              "eight (8)",
              "two (2)",
              "four (4)",
              "one (1)"
            ],
            "answer": "eight (8)",
            "explanation": "Después de seven (7) viene eight (8)."
          }
        ]
      },
      {
        "code": "L5",
        "title": "L5 · My Body",
        "topic": "Partes del cuerpo y la cara",
        "icon": "✋",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "👀 I see with my ___ and 👂 I listen with my ___.",
            "options": [
              "eyes / ears",
              "nose / mouth",
              "hands / feet",
              "head / toes"
            ],
            "answer": "eyes / ears",
            "explanation": "Eyes = ojos (👀) y Ears = orejas (👂)."
          },
          {
            "type": "multiple_choice",
            "prompt": "👏 Clap your ___ and 🦶 stomp your ___!",
            "options": [
              "hands / feet",
              "ears / eyes",
              "nose / head",
              "mouth / hair"
            ],
            "answer": "hands / feet",
            "explanation": "Aplaudimos con las manos («hands») y pisamos fuerte con los pies («feet»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "👃 What part of your face do you use to smell a flower?",
            "options": [
              "my nose",
              "my knees",
              "my shoulders",
              "my toes"
            ],
            "answer": "my nose",
            "explanation": "👃 «Nose» es la nariz."
          }
        ]
      },
      {
        "code": "L6",
        "title": "L6 · Feelings",
        "topic": "Emociones y cómo me siento hoy",
        "icon": "😀",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "😀 When I smile and play with my friends, I am ___!",
            "options": [
              "happy",
              "sad",
              "angry",
              "sleepy"
            ],
            "answer": "happy",
            "explanation": "😀 «Happy» significa feliz."
          },
          {
            "type": "multiple_choice",
            "prompt": "🥱 It is late at night and I want to go to bed. I am ___.",
            "options": [
              "sleepy",
              "hungry",
              "happy",
              "scared"
            ],
            "answer": "sleepy",
            "explanation": "🥱 «Sleepy» significa tener sueño."
          },
          {
            "type": "multiple_choice",
            "prompt": "🍕 My tummy is rumbling and I want to eat pizza! I am ___.",
            "options": [
              "hungry",
              "angry",
              "sad",
              "cold"
            ],
            "answer": "hungry",
            "explanation": "«Hungry» significa tener hambre."
          }
        ]
      },
      {
        "code": "L7",
        "title": "L7 · My Family",
        "topic": "Miembros de la familia",
        "icon": "🏡",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "👩 «Mom» is mamá, and 👨 «___» is papá.",
            "options": [
              "Dad",
              "Brother",
              "Baby",
              "Sister"
            ],
            "answer": "Dad",
            "explanation": "Mom / Mother = mamá; Dad / Father = papá."
          },
          {
            "type": "multiple_choice",
            "prompt": "👵 My mom's mother is my ___, and 👴 my mom's father is my ___.",
            "options": [
              "grandma / grandpa",
              "sister / brother",
              "aunt / baby",
              "mom / dad"
            ],
            "answer": "grandma / grandpa",
            "explanation": "Grandma = abuela (👵) y Grandpa = abuelo (👴)."
          },
          {
            "type": "multiple_choice",
            "prompt": "👶 The smallest member of the family is the ___.",
            "options": [
              "baby",
              "grandpa",
              "teacher",
              "doctor"
            ],
            "answer": "baby",
            "explanation": "👶 «Baby» es el bebé de la familia."
          }
        ]
      },
      {
        "code": "L8",
        "title": "L8 · Pets & Farm Animals",
        "topic": "Mascotas y animales de la granja",
        "icon": "🐶",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "🐶 Which pet barks «Woof! Woof!» and wags its tail?",
            "options": [
              "a dog",
              "a cat",
              "a fish",
              "a duck"
            ],
            "answer": "a dog",
            "explanation": "🐶 «Dog» es perro."
          },
          {
            "type": "multiple_choice",
            "prompt": "🐷 Which pink farm animal loves mud and says «Oink»?",
            "options": [
              "a pig",
              "a horse",
              "a sheep",
              "a bird"
            ],
            "answer": "a pig",
            "explanation": "🐷 «Pig» es cerdito."
          },
          {
            "type": "multiple_choice",
            "prompt": "🐱 Michi is a little kitten that says «Meow!». Michi is a ___.",
            "options": [
              "cat",
              "dog",
              "cow",
              "duck"
            ],
            "answer": "cat",
            "explanation": "🐱 «Cat» es gato y «kitten» es gatito."
          }
        ]
      },
      {
        "code": "L9",
        "title": "L9 · At the Zoo",
        "topic": "Animales del zoológico",
        "icon": "🐘",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "🐘 Which big grey animal has huge ears and a long trunk?",
            "options": [
              "an elephant",
              "a monkey",
              "a lion",
              "a frog"
            ],
            "answer": "an elephant",
            "explanation": "🐘 «Elephant» es el elefante."
          },
          {
            "type": "multiple_choice",
            "prompt": "🐵 Which funny animal loves bananas and climbs trees?",
            "options": [
              "a monkey",
              "a zebra",
              "a fish",
              "a turtle"
            ],
            "answer": "a monkey",
            "explanation": "🐵 «Monkey» es el mono."
          },
          {
            "type": "multiple_choice",
            "prompt": "🦁 Who is called the King of the Jungle and roars loudly?",
            "options": [
              "the lion",
              "the duck",
              "the rabbit",
              "the sheep"
            ],
            "answer": "the lion",
            "explanation": "🦁 «Lion» es el león."
          }
        ]
      },
      {
        "code": "L10",
        "title": "L10 · My Toys",
        "topic": "Juguetes favoritos",
        "icon": "🧸",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "⚽ What round toy do we kick when we play football?",
            "options": [
              "a ball",
              "a doll",
              "a kite",
              "a puzzle"
            ],
            "answer": "a ball",
            "explanation": "⚽ «Ball» es pelota o balón."
          },
          {
            "type": "multiple_choice",
            "prompt": "🪁 Which toy flies high up in the sky when it is windy?",
            "options": [
              "a kite",
              "a teddy bear",
              "a train",
              "a bike"
            ],
            "answer": "a kite",
            "explanation": "🪁 «Kite» es cometa o papagayo."
          },
          {
            "type": "multiple_choice",
            "prompt": "🧸 A soft, cuddly toy bear is called a ___.",
            "options": [
              "teddy bear",
              "robot",
              "car",
              "drum"
            ],
            "answer": "teddy bear",
            "explanation": "🧸 «Teddy bear» es osito de peluche."
          }
        ]
      },
      {
        "code": "L11",
        "title": "L11 · Yummy Food",
        "topic": "Comidas, frutas y bebidas que me gustan (I like...)",
        "icon": "🍕",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "🍦 On a hot day, I love eating cold sweet ___!",
            "options": [
              "ice cream",
              "soup",
              "bread",
              "broccoli"
            ],
            "answer": "ice cream",
            "explanation": "🍦 «Ice cream» es helado."
          },
          {
            "type": "multiple_choice",
            "prompt": "🥛 What white drink comes from a cow and is great for breakfast?",
            "options": [
              "milk",
              "orange juice",
              "pizza",
              "apple"
            ],
            "answer": "milk",
            "explanation": "🥛 «Milk» es leche."
          },
          {
            "type": "multiple_choice",
            "prompt": "😋 How do you say «¡Me gustan las manzanas!» in English?",
            "options": [
              "I like apples!",
              "I am an apple!",
              "Goodbye apples!",
              "Where is the apple?"
            ],
            "answer": "I like apples!",
            "explanation": "«I like...!» significa «¡Me gusta(n)...!»."
          }
        ]
      },
      {
        "code": "L12",
        "title": "L12 · Shapes & Party Time!",
        "topic": "Figuras geométricas y vocabulario de fiesta",
        "icon": "🎉",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "⭐ What bright shape shines in the night sky and goes on your sticker chart?",
            "options": [
              "a star",
              "a square",
              "a triangle",
              "a box"
            ],
            "answer": "a star",
            "explanation": "⭐ «Star» significa estrella."
          },
          {
            "type": "multiple_choice",
            "prompt": "❤️ Which shape represents love?",
            "options": [
              "a heart",
              "a circle",
              "a square",
              "a rectangle"
            ],
            "answer": "a heart",
            "explanation": "❤️ «Heart» significa corazón."
          },
          {
            "type": "multiple_choice",
            "prompt": "🎈 At our Show Day party, we decorate the classroom with colorful ___!",
            "options": [
              "balloons",
              "pencils",
              "shoes",
              "erasers"
            ],
            "answer": "balloons",
            "explanation": "🎈 «Balloons» son globos de fiesta."
          }
        ]
      }
    ]
  },
  "Junior 1": {
    "title": "Junior Nivel 1 — Study Guide",
    "badge": "🚀 Junior 1",
    "lessons": [
      {
        "code": "L1",
        "title": "Lesson 1 · Hello! The Alphabet & Greetings",
        "topic": "Saludos en inglés, despedidas y el abecedario A–Z",
        "icon": "👋",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "What do you say when you wake up in the morning?",
            "options": [
              "Good morning!",
              "Good night!",
              "Goodbye!",
              "Good evening!"
            ],
            "answer": "Good morning!",
            "explanation": "Por la mañana saludamos diciendo «Good morning!» (¡Buenos días!)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What do you say right before going to sleep at night?",
            "options": [
              "Good night!",
              "Good morning!",
              "Good afternoon!",
              "Hello!"
            ],
            "answer": "Good night!",
            "explanation": "Al despedirnos para ir a dormir decimos «Good night!»."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: Hello! How are you? — B: ___",
            "options": [
              "I'm fine, thank you!",
              "I'm ten years old.",
              "It's blue.",
              "Goodbye!"
            ],
            "answer": "I'm fine, thank you!",
            "explanation": "A la pregunta «How are you?» (¿Cómo estás?) respondemos «I'm fine, thank you!»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which of these letters are all VOWELS (vocales)?",
            "options": [
              "A, E, I, O, U",
              "B, C, D, F, G",
              "A, B, C, D, E",
              "X, Y, Z, W, V"
            ],
            "answer": "A, E, I, O, U",
            "explanation": "Las 5 vocales del inglés son A, E, I, O, U."
          }
        ]
      },
      {
        "code": "L2",
        "title": "Lesson 2 · Numbers 1–20 & My Age",
        "topic": "Números del 1 al 20 y cómo decir tu edad",
        "icon": "🔢",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Which word represents the number «12»?",
            "options": [
              "twelve",
              "twenty",
              "two",
              "eleven"
            ],
            "answer": "twelve",
            "explanation": "11 = eleven, 12 = twelve, 20 = twenty."
          },
          {
            "type": "multiple_choice",
            "prompt": "Ten + Five = ___",
            "options": [
              "fifteen",
              "fifty",
              "fourteen",
              "sixteen"
            ],
            "answer": "fifteen",
            "explanation": "10 (ten) + 5 (five) = 15 (fifteen)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: How old are you, Leo? — B: ___",
            "options": [
              "I'm ten years old.",
              "I have ten years.",
              "My name is Leo.",
              "I'm fine, thanks."
            ],
            "answer": "I'm ten years old.",
            "explanation": "En inglés la edad se dice con el verbo To Be («I'm ten years old»), nunca con have."
          },
          {
            "type": "multiple_choice",
            "prompt": "What number comes after nineteen (19)?",
            "options": [
              "twenty (20)",
              "eighteen (18)",
              "twelve (12)",
              "thirteen (13)"
            ],
            "answer": "twenty (20)",
            "explanation": "Después de nineteen (19) viene twenty (20)."
          }
        ]
      },
      {
        "code": "L3",
        "title": "Lesson 3 · Colours & Shapes",
        "topic": "Colores, figuras geométricas y describir objetos",
        "icon": "🎨",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "If you mix RED and YELLOW, what colour do you get?",
            "options": [
              "orange",
              "purple",
              "green",
              "pink"
            ],
            "answer": "orange",
            "explanation": "Rojo (red) + amarillo (yellow) forman el color naranja (orange)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A shape with 3 sides is a ___, and a round shape like the sun is a ___.",
            "options": [
              "triangle / circle",
              "square / rectangle",
              "star / diamond",
              "circle / square"
            ],
            "answer": "triangle / circle",
            "explanation": "Un triángulo (triangle) tiene 3 lados y un círculo (circle) es redondo."
          },
          {
            "type": "multiple_choice",
            "prompt": "What colour is the sky on a sunny day?",
            "options": [
              "blue",
              "green",
              "brown",
              "black"
            ],
            "answer": "blue",
            "explanation": "El cielo despejado es azul («blue»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do you say «una estrella amarilla» in English?",
            "options": [
              "a yellow star",
              "a star yellow",
              "an yellow star",
              "yellow a star"
            ],
            "answer": "a yellow star",
            "explanation": "En inglés el color va ANTES de la figura: «a yellow star»."
          }
        ]
      },
      {
        "code": "L4",
        "title": "Lesson 4 · On the Farm",
        "topic": "Animales de la granja y uso de There is / There are",
        "icon": "🐮",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Which farm animal gives us milk and says «Moo»?",
            "options": [
              "a cow",
              "a duck",
              "a hen",
              "a horse"
            ],
            "answer": "a cow",
            "explanation": "La vaca se dice «cow» en inglés."
          },
          {
            "type": "multiple_choice",
            "prompt": "On the farm, ___ one brown horse and ___ three white sheep.",
            "options": [
              "there is / there are",
              "there are / there is",
              "is / are",
              "have / has"
            ],
            "answer": "there is / there are",
            "explanation": "Usamos «there is» para 1 solo animal/objeto y «there are» para 2 o más."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which bird lives on the farm, swims in the pond, and says «Quack»?",
            "options": [
              "a duck",
              "a pig",
              "a rabbit",
              "a goat"
            ],
            "answer": "a duck",
            "explanation": "El pato se dice «duck»."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the plural of «sheep»?",
            "options": [
              "sheep",
              "sheeps",
              "sheepes",
              "shoop"
            ],
            "answer": "sheep",
            "explanation": "«Sheep» (oveja/ovejas) se escribe igual en singular y en plural: one sheep, three sheep."
          }
        ]
      },
      {
        "code": "L5",
        "title": "Lesson 5 · Wild Animals (Can / Can't)",
        "topic": "Animales salvajes y lo que pueden o no pueden hacer (can / can't)",
        "icon": "🦁",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Which wild animal has a very long neck and eats leaves from tall trees?",
            "options": [
              "a giraffe",
              "a crocodile",
              "a monkey",
              "a snake"
            ],
            "answer": "a giraffe",
            "explanation": "La jirafa («giraffe») tiene el cuello muy largo."
          },
          {
            "type": "multiple_choice",
            "prompt": "A bird ___ fly in the sky, but an elephant ___ fly.",
            "options": [
              "can / can't",
              "can't / can",
              "is / isn't",
              "has / hasn't"
            ],
            "answer": "can / can't",
            "explanation": "«Can» significa que puede hacerlo y «can't» que no puede hacerlo."
          },
          {
            "type": "multiple_choice",
            "prompt": "A snake has no legs, so it ___ walk, but it ___ slither!",
            "options": [
              "can't / can",
              "can / can't",
              "isn't / is",
              "don't / do"
            ],
            "answer": "can't / can",
            "explanation": "Una serpiente no puede caminar (can't walk), pero sí puede deslizarse (can slither)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: Can a monkey climb trees? — B: ___",
            "options": [
              "Yes, it can!",
              "Yes, it is.",
              "No, it doesn't.",
              "Yes, I am."
            ],
            "answer": "Yes, it can!",
            "explanation": "Las preguntas con «Can it...?» se responden con «Yes, it can / No, it can't»."
          }
        ]
      },
      {
        "code": "L6",
        "title": "Lesson 6 · Under the Sea",
        "topic": "Animales marinos y el océano",
        "icon": "🐬",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Which sea animal has eight arms (tentacles)?",
            "options": [
              "an octopus",
              "a shark",
              "a whale",
              "a seahorse"
            ],
            "answer": "an octopus",
            "explanation": "El pulpo («octopus») tiene 8 tentáculos."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which is the biggest animal in the ocean?",
            "options": [
              "the blue whale",
              "the crab",
              "the starfish",
              "the clownfish"
            ],
            "answer": "the blue whale",
            "explanation": "La ballena azul («blue whale») es el animal más grande del océano."
          },
          {
            "type": "multiple_choice",
            "prompt": "A ___ walks sideways on the beach and has two claws.",
            "options": [
              "crab",
              "dolphin",
              "jellyfish",
              "shark"
            ],
            "answer": "crab",
            "explanation": "El cangrejo se dice «crab» en inglés."
          },
          {
            "type": "multiple_choice",
            "prompt": "Dolphins are very smart and they live ___ the sea.",
            "options": [
              "in",
              "on",
              "underneath of",
              "at"
            ],
            "answer": "in",
            "explanation": "Decimos «in the sea / in the ocean»."
          }
        ]
      },
      {
        "code": "L7",
        "title": "Lesson 7 · Bugs & Minibeasts",
        "topic": "Insectos, bichitos y preposiciones de lugar",
        "icon": "🐝",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Which insect makes sweet honey and is yellow and black?",
            "options": [
              "a bee",
              "an ant",
              "a spider",
              "a snail"
            ],
            "answer": "a bee",
            "explanation": "La abeja («bee») produce miel («honey»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A caterpillar turns into a colorful ___!",
            "options": [
              "butterfly",
              "ladybug",
              "spider",
              "worm"
            ],
            "answer": "butterfly",
            "explanation": "La oruga (caterpillar) se transforma en mariposa («butterfly»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "How many legs does a spider have?",
            "options": [
              "eight (8)",
              "six (6)",
              "four (4)",
              "ten (10)"
            ],
            "answer": "eight (8)",
            "explanation": "Las arañas (spiders) tienen 8 patas."
          },
          {
            "type": "multiple_choice",
            "prompt": "A small red bug with black spots is called a ___.",
            "options": [
              "ladybug",
              "grasshopper",
              "dragonfly",
              "mosquito"
            ],
            "answer": "ladybug",
            "explanation": "La mariquita se llama «ladybug» (o ladybird)."
          }
        ]
      },
      {
        "code": "L8",
        "title": "Lesson 8 · My Things: A or An?",
        "topic": "Objetos escolares y personales, uso de A vs. AN",
        "icon": "🎒",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "In my schoolbag, I have ___ pencil, ___ notebook, and ___ eraser.",
            "options": [
              "a / a / an",
              "an / a / a",
              "a / an / an",
              "a / a / a"
            ],
            "answer": "a / a / an",
            "explanation": "Usamos «an» antes de vocal (an eraser) y «a» antes de consonante (a pencil, a notebook)."
          },
          {
            "type": "multiple_choice",
            "prompt": "It's raining! Take ___ umbrella and ___ raincoat.",
            "options": [
              "an / a",
              "a / an",
              "a / a",
              "an / an"
            ],
            "answer": "an / a",
            "explanation": "«Umbrella» empieza con sonido vocálico (an umbrella) y «raincoat» con consonante (a raincoat)."
          },
          {
            "type": "multiple_choice",
            "prompt": "She is eating ___ apple and ___ banana.",
            "options": [
              "an / a",
              "a / an",
              "an / an",
              "a / a"
            ],
            "answer": "an / a",
            "explanation": "«An apple» (empieza con vocal a) y «a banana» (empieza con consonante b)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What do you use to cut paper in art class?",
            "options": [
              "scissors",
              "a ruler",
              "a crayon",
              "an eraser"
            ],
            "answer": "scissors",
            "explanation": "Las tijeras se dicen «scissors» en inglés."
          }
        ]
      },
      {
        "code": "L9",
        "title": "Lesson 9 · Days of the Week",
        "topic": "Los 7 días de la semana y actividades semanales",
        "icon": "📅",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "What day comes after Tuesday and before Thursday?",
            "options": [
              "Wednesday",
              "Monday",
              "Friday",
              "Sunday"
            ],
            "answer": "Wednesday",
            "explanation": "El orden es Monday, Tuesday, Wednesday, Thursday, Friday."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which two days form the weekend (fin de semana)?",
            "options": [
              "Saturday and Sunday",
              "Monday and Friday",
              "Tuesday and Thursday",
              "Friday and Monday"
            ],
            "answer": "Saturday and Sunday",
            "explanation": "El fin de semana está formado por «Saturday» (sábado) y «Sunday» (domingo)."
          },
          {
            "type": "multiple_choice",
            "prompt": "We play football ___ Fridays.",
            "options": [
              "on",
              "in",
              "at",
              "to"
            ],
            "answer": "on",
            "explanation": "Con los días de la semana siempre usamos la preposición «on» (on Monday, on Fridays)."
          },
          {
            "type": "multiple_choice",
            "prompt": "In English, days of the week always start with a ___ letter.",
            "options": [
              "capital (mayúscula)",
              "small (minúscula)",
              "silent",
              "number"
            ],
            "answer": "capital (mayúscula)",
            "explanation": "En inglés los días de la semana y los meses se escriben SIEMPRE con letra inicial mayúscula (Monday, Friday)."
          }
        ]
      },
      {
        "code": "L10",
        "title": "Lesson 10 · Months & Birthdays",
        "topic": "Los 12 meses del año y cuándo es tu cumpleaños",
        "icon": "🎂",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "What is the first month of the year, and what is the last month?",
            "options": [
              "January / December",
              "March / November",
              "February / October",
              "January / August"
            ],
            "answer": "January / December",
            "explanation": "El primer mes es «January» (enero) y el último es «December» (diciembre)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: When is your birthday? — B: My birthday is ___ May.",
            "options": [
              "in",
              "on",
              "at",
              "for"
            ],
            "answer": "in",
            "explanation": "Cuando decimos solamente el mes (sin el número del día), usamos la preposición «in» (in May)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which month comes right after July?",
            "options": [
              "August",
              "June",
              "September",
              "April"
            ],
            "answer": "August",
            "explanation": "Después de July (julio) viene August (agosto)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Halloween is celebrated in ___, and Christmas is in ___.",
            "options": [
              "October / December",
              "November / January",
              "September / December",
              "August / July"
            ],
            "answer": "October / December",
            "explanation": "Halloween se celebra en «October» y Navidad en «December»."
          }
        ]
      },
      {
        "code": "L11",
        "title": "Lesson 11 · Seasons & Weather",
        "topic": "Las 4 estaciones del año y el clima",
        "icon": "🌦️",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "In ___, it is very hot and sunny, and we go to the beach!",
            "options": [
              "summer",
              "winter",
              "autumn",
              "rainy"
            ],
            "answer": "summer",
            "explanation": "El verano («summer») es la estación más calurosa y soleada."
          },
          {
            "type": "multiple_choice",
            "prompt": "In ___, flowers bloom and trees turn green again.",
            "options": [
              "spring",
              "winter",
              "autumn",
              "snowy"
            ],
            "answer": "spring",
            "explanation": "En la primavera («spring») florecen las plantas."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: How's the weather today? — B: Take your umbrella, it's ___!",
            "options": [
              "rainy",
              "sunny",
              "hot",
              "dry"
            ],
            "answer": "rainy",
            "explanation": "Si necesitas paraguas (umbrella), el clima está lluvioso («rainy»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "In ___, it is very cold and snowy in many countries.",
            "options": [
              "winter",
              "summer",
              "spring",
              "hot"
            ],
            "answer": "winter",
            "explanation": "El invierno se dice «winter»."
          }
        ]
      },
      {
        "code": "L12",
        "title": "Lesson 12 · All About Me & My Family",
        "topic": "Presentación personal completa y miembros de la familia",
        "icon": "🌟",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Complete the presentation: «Hello! ___ name is Sofi. I ___ 9 years old.»",
            "options": [
              "My / am",
              "I / have",
              "Me / is",
              "My / have"
            ],
            "answer": "My / am",
            "explanation": "Decimos «My name is...» (Mi nombre es...) y «I am 9 years old» (Tengo 9 años)."
          },
          {
            "type": "multiple_choice",
            "prompt": "My mother and my father are my ___.",
            "options": [
              "parents",
              "grandparents",
              "cousins",
              "siblings"
            ],
            "answer": "parents",
            "explanation": "«Parents» significa padres (mamá y papá); «grandparents» significa abuelos."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: What is your favorite animal? — B: ___",
            "options": [
              "My favorite animal is the dolphin.",
              "I am ten years old.",
              "I live in Venezuela.",
              "Yes, I do."
            ],
            "answer": "My favorite animal is the dolphin.",
            "explanation": "Respondemos «My favorite animal is...»."
          },
          {
            "type": "multiple_choice",
            "prompt": "I ___ pizza and ice cream, but I don't like broccoli.",
            "options": [
              "like",
              "likes",
              "am like",
              "liking"
            ],
            "answer": "like",
            "explanation": "Con «I» usamos «I like...» (Me gusta) y «I don't like...» (No me gusta)."
          }
        ]
      }
    ]
  },
  "Teens 1": {
    "title": "Teens Nivel 1 — Basic Study Guide",
    "badge": "🎒 Teens 1",
    "lessons": [
      {
        "code": "L1",
        "title": "Lesson 1 · The English Alphabet, Spelling & Professions",
        "topic": "Abecedario, deletreo, ocupaciones y frases de clase",
        "icon": "🔤",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "How many letters and vowels are there in the English alphabet?",
            "options": [
              "26 letters and 5 vowels",
              "27 letters and 5 vowels",
              "26 letters and 6 vowels",
              "24 letters and 5 vowels"
            ],
            "answer": "26 letters and 5 vowels",
            "explanation": "El abecedario en inglés tiene 26 letras en total y 5 vocales (A, E, I, O, U)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ do you spell your last name? — B: R - O - J - A - S.",
            "options": [
              "How",
              "What",
              "Where",
              "Who"
            ],
            "answer": "How",
            "explanation": "Para preguntar cómo se deletrea una palabra o nombre usamos siempre: «How do you spell...?»."
          },
          {
            "type": "multiple_choice",
            "prompt": "In emails and usernames, how do we say the symbols «@» and «_» in English?",
            "options": [
              "at / underscore",
              "in / dash",
              "at / point",
              "around / line"
            ],
            "answer": "at / underscore",
            "explanation": "En usuarios y correos electrónicos, «@» se dice «at», «.» se dice «dot» y «_» se dice «underscore»."
          },
          {
            "type": "multiple_choice",
            "prompt": "My sister works in a hospital and helps sick patients. She is a ___.",
            "options": [
              "nurse",
              "lawyer",
              "architect",
              "accountant"
            ],
            "answer": "nurse",
            "explanation": "«Nurse» significa enfermera/o; «lawyer» es abogado/a y «accountant» es contador/a."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which classroom phrase do you use when you don't know a word in English?",
            "options": [
              "How do you say ___ in English?",
              "Where are you from?",
              "Nice to meet you!",
              "See you tomorrow!"
            ],
            "answer": "How do you say ___ in English?",
            "explanation": "«How do you say ___ in English?» es la frase clave del salón para preguntar vocabulario nuevo."
          }
        ]
      },
      {
        "code": "L2",
        "title": "Lesson 2 · Personal Pronouns, Verb To Be, Family & Articles",
        "topic": "Am / is / are, artículos a/an/the, países y familia",
        "icon": "👨‍👩‍👧‍👦",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Carlos and I ___ from Venezuela. We ___ students at Living English.",
            "options": [
              "are / are",
              "am / are",
              "is / are",
              "are / is"
            ],
            "answer": "are / are",
            "explanation": "«Carlos and I» equivale al pronombre «We» (nosotros), que siempre usa la forma «are» del verbo To Be."
          },
          {
            "type": "multiple_choice",
            "prompt": "My uncle is ___ engineer and my aunt is ___ teacher.",
            "options": [
              "an / a",
              "a / an",
              "a / a",
              "an / an"
            ],
            "answer": "an / a",
            "explanation": "Usamos «an» antes de sonido vocálico (an engineer) y «a» antes de sonido consonántico (a teacher)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ your sister a doctor? — B: No, she ___. She is a lawyer.",
            "options": [
              "Is / isn't",
              "Are / aren't",
              "Am / not",
              "Does / doesn't"
            ],
            "answer": "Is / isn't",
            "explanation": "Para tercera persona singular (she/he/it) preguntamos con «Is...?» y negamos con «isn't»."
          },
          {
            "type": "multiple_choice",
            "prompt": "My mother's brother is my ___, and his daughter is my ___.",
            "options": [
              "uncle / cousin",
              "grandfather / niece",
              "nephew / aunt",
              "brother / sister"
            ],
            "answer": "uncle / cousin",
            "explanation": "El hermano de mi mamá es mi tío («uncle») y su hija es mi prima («cousin»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Choose the correct order for physical description in English:",
            "options": [
              "She has long brown hair.",
              "She has hair brown long.",
              "She is long hair brown.",
              "She has brown hair long."
            ],
            "answer": "She has long brown hair.",
            "explanation": "En inglés los adjetivos van ANTES del sustantivo (tamaño + color + sustantivo: long brown hair)."
          }
        ]
      },
      {
        "code": "L3",
        "title": "Lesson 3 · Plural Nouns, Food, Some / Any & Demonstratives",
        "topic": "Plurales regulares e irregulares, some/any, how much/many, this/that/these/those",
        "icon": "🍎",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "What is the correct plural form of: «child», «tooth», and «woman»?",
            "options": [
              "children, teeth, women",
              "childs, tooths, womans",
              "childrens, teeths, women",
              "children, tooths, womens"
            ],
            "answer": "children, teeth, women",
            "explanation": "Son plurales irregulares: child → children, tooth → teeth, woman → women."
          },
          {
            "type": "multiple_choice",
            "prompt": "There isn't ___ milk in the fridge, but there are ___ apples on the table.",
            "options": [
              "any / some",
              "some / any",
              "many / much",
              "a / an"
            ],
            "answer": "any / some",
            "explanation": "Usamos «any» en oraciones negativas e interrogativas, y «some» en oraciones afirmativas."
          },
          {
            "type": "multiple_choice",
            "prompt": "___ sugar do you want in your coffee, and ___ oranges do we need?",
            "options": [
              "How much / how many",
              "How many / how much",
              "How much / how much",
              "Some / any"
            ],
            "answer": "How much / how many",
            "explanation": "«How much» se usa con incontables (sugar, water, money) y «How many» con contables en plural (oranges)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Look at ___ birds up in the sky! And look at ___ book in my hand.",
            "options": [
              "those / this",
              "these / that",
              "this / those",
              "that / these"
            ],
            "answer": "those / this",
            "explanation": "«Those» es para plural lejos (birds in the sky) y «this» es para singular cerca (in my hand)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the plural of «city» and «box»?",
            "options": [
              "cities / boxes",
              "citys / boxs",
              "cities / boxies",
              "cityes / boxes"
            ],
            "answer": "cities / boxes",
            "explanation": "Consonante + y cambia a «-ies» (cities); palabras terminadas en -s, -sh, -ch, -x agregan «-es» (boxes)."
          }
        ]
      },
      {
        "code": "L4",
        "title": "Lesson 4 · Simple Present (Do / Does) & Question Words",
        "topic": "Rutinas en presente simple, tercera persona (-s/-es), do vs. make",
        "icon": "⚡",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Sofía ___ English every afternoon, and her brothers ___ soccer.",
            "options": [
              "studies / play",
              "study / plays",
              "studies / plays",
              "studys / play"
            ],
            "answer": "studies / play",
            "explanation": "En 3ra persona singular (Sofía = she) «study» pasa a «studies». En plural (her brothers = they) el verbo va en forma base «play»."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ your father work on Saturdays? — B: No, he ___.",
            "options": [
              "Does / doesn't",
              "Do / don't",
              "Is / isn't",
              "Does / don't"
            ],
            "answer": "Does / doesn't",
            "explanation": "Con he/she/it usamos el auxiliar «Does» para preguntar y «doesn't» para responder en negativo."
          },
          {
            "type": "multiple_choice",
            "prompt": "Every morning I ___ my bed, and at night I ___ my English homework.",
            "options": [
              "make / do",
              "do / make",
              "make / make",
              "do / do"
            ],
            "answer": "make / do",
            "explanation": "Decimos «make the bed / make breakfast / make a mistake» pero «do homework / do exercises / do housework»."
          },
          {
            "type": "multiple_choice",
            "prompt": "___ do you usually have lunch with? — With my coworkers.",
            "options": [
              "Who",
              "Where",
              "When",
              "Why"
            ],
            "answer": "Who",
            "explanation": "«Who ... with?» pregunta «¿Con quién...?» (preposición al final de la pregunta)."
          },
          {
            "type": "multiple_choice",
            "prompt": "She doesn't ___ coffee at night because she wants to sleep well.",
            "options": [
              "drink",
              "drinks",
              "drinking",
              "to drink"
            ],
            "answer": "drink",
            "explanation": "Después de «doesn't» o «don't», el verbo principal va SIEMPRE en su forma base sin «-s» (drink)."
          }
        ]
      },
      {
        "code": "L4B",
        "title": "Lesson 4B · Present Continuous vs. Simple Present",
        "topic": "Acciones ahora mismo (am/is/are + -ing) vs. hábitos y rutinas",
        "icon": "🎬",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Look! It ___ outside right now. Take your umbrella!",
            "options": [
              "is raining",
              "rains",
              "rain",
              "are raining"
            ],
            "answer": "is raining",
            "explanation": "Para algo que está ocurriendo en este preciso momento («Look! / right now») usamos Present Continuous (is + -ing)."
          },
          {
            "type": "multiple_choice",
            "prompt": "My mom usually ___ dinner, but tonight my dad ___ pizza.",
            "options": [
              "cooks / is making",
              "is cooking / makes",
              "cook / is making",
              "cooks / makes"
            ],
            "answer": "cooks / is making",
            "explanation": "«Usually» indica hábito (Simple Present: cooks) y «tonight / right now» indica acción temporal en progreso (is making)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the correct -ing spelling of «swim», «write», and «run»?",
            "options": [
              "swimming, writing, running",
              "swiming, writeing, runing",
              "swimming, writting, running",
              "swiming, writing, running"
            ],
            "answer": "swimming, writing, running",
            "explanation": "Verbos cortos CVC duplican la última consonante (swimming, running); verbos terminados en -e muda la eliminan (writing)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: What ___ the children doing? — B: They ___ playing in the yard.",
            "options": [
              "are / are",
              "do / are",
              "is / are",
              "are / do"
            ],
            "answer": "are / are",
            "explanation": "«The children» es plural (they), por lo que usa «are» tanto en la pregunta como en la respuesta."
          },
          {
            "type": "multiple_choice",
            "prompt": "I ___ English every week, and right now I ___ a practice exercise.",
            "options": [
              "study / am doing",
              "am studying / do",
              "studies / am doing",
              "study / do"
            ],
            "answer": "study / am doing",
            "explanation": "«Every week» = rutina (study); «right now» = en progreso ahora mismo (am doing)."
          }
        ]
      },
      {
        "code": "L5",
        "title": "Lesson 5 · Numbers, Dates, Years & Telling the Time",
        "topic": "Números ordinales, fechas, años, meses y cómo decir la hora",
        "icon": "⏰",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "How do you write and say the ordinal numbers 1st, 2nd, and 3rd?",
            "options": [
              "first, second, third",
              "oneth, twoth, threeth",
              "first, twosecond, third",
              "one, two, three"
            ],
            "answer": "first, second, third",
            "explanation": "Para fechas y posiciones usamos números ordinales: 1st = first, 2nd = second, 3rd = third, 4th = fourth."
          },
          {
            "type": "multiple_choice",
            "prompt": "It's 7:45. What is another natural way to say this time in English?",
            "options": [
              "It's a quarter to eight.",
              "It's a quarter past seven.",
              "It's half past seven.",
              "It's fifteen to seven."
            ],
            "answer": "It's a quarter to eight.",
            "explanation": "7:45 = faltan 15 minutos (un cuarto) para las ocho: «It's a quarter to eight»."
          },
          {
            "type": "multiple_choice",
            "prompt": "It's 3:30. How do we say this time?",
            "options": [
              "It's half past three.",
              "It's a quarter to three.",
              "It's thirty to four.",
              "It's half to three."
            ],
            "answer": "It's half past three.",
            "explanation": "Las y media se expresan con «half past + hora»: 3:30 = It's half past three (o three thirty)."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do we read the year «1998» and «2027» in English?",
            "options": [
              "nineteen ninety-eight / twenty twenty-seven",
              "one九nine-eight / two twenty-seven",
              "nineteen hundred eight / two thousand seven",
              "ninety-eight / twenty-seven"
            ],
            "answer": "nineteen ninety-eight / twenty twenty-seven",
            "explanation": "Los años de 4 cifras suelen dividirse en dos pares de números: 19-98 (nineteen ninety-eight) y 20-27 (twenty twenty-seven)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What time ___ you wake up on Mondays? — I wake up ___ 6:30 am.",
            "options": [
              "do / at",
              "are / on",
              "does / in",
              "do / in"
            ],
            "answer": "do / at",
            "explanation": "Para horas exactas del reloj usamos siempre la preposición «at» (at 6:30 am)."
          }
        ]
      },
      {
        "code": "L6",
        "title": "Lesson 6 · Prepositions of Time & Place + Directions",
        "topic": "Uso de IN / ON / AT, lugares de la ciudad y cómo dar direcciones",
        "icon": "🗺️",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "My birthday is ___ July, ___ July 15th, and the party starts ___ 8:00 pm.",
            "options": [
              "in / on / at",
              "on / in / at",
              "in / at / on",
              "at / on / in"
            ],
            "answer": "in / on / at",
            "explanation": "Regla de oro: IN para meses y años (in July), ON para días y fechas específicas (on July 15th) y AT para horas (at 8:00 pm)."
          },
          {
            "type": "multiple_choice",
            "prompt": "The pharmacy is ___ the bank and the bakery.",
            "options": [
              "between",
              "among",
              "in",
              "under"
            ],
            "answer": "between",
            "explanation": "«Between» significa «entre dos lugares específicos» (between the bank and the bakery)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Excuse me, how can I get to the museum? — Go ___ ahead for two blocks and ___ left.",
            "options": [
              "straight / turn",
              "direct / go",
              "front / make",
              "up / walk"
            ],
            "answer": "straight / turn",
            "explanation": "Para dar direcciones usamos «Go straight ahead» (sigue derecho) y «turn left / turn right» (cruza a la izquierda/derecha)."
          },
          {
            "type": "multiple_choice",
            "prompt": "The bus stop is right ___ of the hospital, on the other side of the street.",
            "options": [
              "across from",
              "inside",
              "under",
              "between"
            ],
            "answer": "across from",
            "explanation": "«Across from» (o «in front of / opposite») indica que está cruzando la calle, frente al otro lugar."
          },
          {
            "type": "multiple_choice",
            "prompt": "We never have classes ___ Sundays, but we study ___ the morning.",
            "options": [
              "on / in",
              "in / on",
              "at / in",
              "on / at"
            ],
            "answer": "on / in",
            "explanation": "Usamos «on» con los días de la semana (on Sundays) e «in» con las partes del día (in the morning / afternoon / evening)."
          }
        ]
      },
      {
        "code": "L7",
        "title": "Lesson 7 · Past of Verb To Be: Was / Were",
        "topic": "Pasado del verbo To Be (was, were, wasn't, weren't) y expresiones de pasado",
        "icon": "⏳",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Where ___ you yesterday evening? — I ___ at the cinema with my friends.",
            "options": [
              "were / was",
              "was / were",
              "were / were",
              "did / was"
            ],
            "answer": "were / was",
            "explanation": "Con «you/we/they» usamos «were», y con «I/he/she/it» usamos «was»."
          },
          {
            "type": "multiple_choice",
            "prompt": "The weather ___ cold last weekend; it ___ sunny and warm!",
            "options": [
              "wasn't / was",
              "weren't / were",
              "didn't / was",
              "isn't / is"
            ],
            "answer": "wasn't / was",
            "explanation": "«The weather» (it) es singular, por lo que en pasado usa «wasn't» y «was»."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ they tired after the soccer match? — B: Yes, they ___.",
            "options": [
              "Were / were",
              "Was / was",
              "Did / did",
              "Are / are"
            ],
            "answer": "Were / were",
            "explanation": "Con «they» preguntamos «Were they...?» y respondemos «Yes, they were.»"
          },
          {
            "type": "multiple_choice",
            "prompt": "When ___ your brother born? — He ___ born in 2010.",
            "options": [
              "was / was",
              "were / was",
              "did / is",
              "is / was"
            ],
            "answer": "was / was",
            "explanation": "En inglés «nacer» se expresa en pasado pasivo con To Be: «He was born in...»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which time expression is used with the Past Tense (was / were)?",
            "options": [
              "two days ago",
              "next week",
              "tomorrow morning",
              "right now"
            ],
            "answer": "two days ago",
            "explanation": "«Ago» (two days ago = hace dos días), «yesterday» y «last night» indican tiempo pasado."
          }
        ]
      },
      {
        "code": "L8",
        "title": "Lesson 8 · Simple Future: Will & Be Going To",
        "topic": "Futuro con Will / Won't y planes con Am/Is/Are Going To",
        "icon": "🚀",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Look at those dark clouds! It ___ rain in a few minutes.",
            "options": [
              "is going to",
              "will be",
              "going to",
              "wills"
            ],
            "answer": "is going to",
            "explanation": "Usamos «be going to» para planes ya decididos o predicciones con evidencia visible ahora mismo (nubes oscuras)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Don't worry about the heavy bag. I ___ help you carry it!",
            "options": [
              "will",
              "am going",
              "going to",
              "did"
            ],
            "answer": "will",
            "explanation": "Usamos «will» para decisiones espontáneas tomadas en el momento de hablar, promesas y ofrecimientos."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the negative contraction of «will not»?",
            "options": [
              "won't",
              "willn't",
              "don't will",
              "not will"
            ],
            "answer": "won't",
            "explanation": "La forma negativa contraída de «will not» es «won't» (She won't arrive late)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Next year we ___ travel to Madrid to visit our cousins.",
            "options": [
              "are going to",
              "going to",
              "will to",
              "is going to"
            ],
            "answer": "are going to",
            "explanation": "La estructura completa requiere el verbo To Be antes de «going to»: We + are going to + verbo."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ she be at the meeting tomorrow? — B: Yes, she ___.",
            "options": [
              "Will / will",
              "Is / will",
              "Does / will",
              "Will / is"
            ],
            "answer": "Will / will",
            "explanation": "Las preguntas con «Will» se responden de forma corta con «Yes, she will / No, she won't»."
          }
        ]
      }
    ]
  },
  "Teens 2": {
    "title": "Teens Nivel 2 — Intermediate Study Guide",
    "badge": "⚡ Teens 2",
    "lessons": [
      {
        "code": "Review",
        "title": "Review · The 4 Simple Tenses & Phrases to Gain Time",
        "topic": "Repaso de To Be, Do/Does, Was/Were, Will y muletillas conversacionales",
        "icon": "🔄",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "___ your mother cook arepas on weekends? — Yes, she ___.",
            "options": [
              "Does / does",
              "Is / is",
              "Do / do",
              "Did / does"
            ],
            "answer": "Does / does",
            "explanation": "Con un verbo de acción («cook») en presente simple y 3ra persona singular usamos el auxiliar «Does»."
          },
          {
            "type": "multiple_choice",
            "prompt": "They ___ at home last night because they went to a concert.",
            "options": [
              "weren't",
              "didn't",
              "don't",
              "wasn't"
            ],
            "answer": "weren't",
            "explanation": "Para estar en un lugar en pasado («at home last night») con «they» usamos «weren't»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which phrase is best to gain time while thinking in a conversation without staying silent?",
            "options": [
              "Well... let me think...",
              "Goodbye, see you!",
              "I don't speak.",
              "Repeat the test."
            ],
            "answer": "Well... let me think...",
            "explanation": "Frases como «Well... let me think...» o «What I mean is...» te dan tiempo para pensar manteniendo la fluidez."
          },
          {
            "type": "multiple_choice",
            "prompt": "We ___ travel next month because we have exams at the university.",
            "options": [
              "won't",
              "weren't",
              "doesn't",
              "aren't"
            ],
            "answer": "won't",
            "explanation": "Para negar una acción futura («next month») con «will» usamos «won't» + verbo base."
          },
          {
            "type": "multiple_choice",
            "prompt": "Transform into a negative sentence: «He lives in Maracay.»",
            "options": [
              "He doesn't live in Maracay.",
              "He don't live in Maracay.",
              "He isn't live in Maracay.",
              "He doesn't lives in Maracay."
            ],
            "answer": "He doesn't live in Maracay.",
            "explanation": "En negativo de 3ra persona usamos «doesn't» y el verbo vuelve a su forma base sin -s («live»)."
          }
        ]
      },
      {
        "code": "L1",
        "title": "Lesson 1 · Pronouns, There + To Be, Both/Either/Neither & Connectors",
        "topic": "Pronombres reflexivos e indefinidos, there was/will be, hogar, cine y recetas",
        "icon": "🏠",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Be careful with that knife! You might cut ___.",
            "options": [
              "yourself",
              "himself",
              "myself",
              "yourselves"
            ],
            "answer": "yourself",
            "explanation": "El pronombre reflexivo para «you» (singular) es «yourself»."
          },
          {
            "type": "multiple_choice",
            "prompt": "In my future house, ___ a big swimming pool and three bedrooms.",
            "options": [
              "there will be",
              "there is",
              "there were",
              "will have"
            ],
            "answer": "there will be",
            "explanation": "«Habrá» en futuro se dice «there will be» (tanto para singular como para plural)."
          },
          {
            "type": "multiple_choice",
            "prompt": "I knocked on the door, but ___ answered. The house was empty.",
            "options": [
              "nobody",
              "anybody",
              "somebody",
              "everybody"
            ],
            "answer": "nobody",
            "explanation": "Con verbo en afirmativo («answered»), «nobody / no one» expresa ausencia total («nadie respondió»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "___ coffee and tea have caffeine, so I don't drink ___ of them at night.",
            "options": [
              "Both / either",
              "Either / neither",
              "Neither / both",
              "Both / neither"
            ],
            "answer": "Both / either",
            "explanation": "«Both A and B» = ambos; después de un verbo negativo («don't drink») usamos «either» (ninguno de los dos)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which sequence of connectors is best to explain a recipe step by step?",
            "options": [
              "First, then, after that, finally",
              "Because, although, however, so",
              "Yesterday, ago, last, never",
              "Who, which, whose, where"
            ],
            "answer": "First, then, after that, finally",
            "explanation": "Para ordenar pasos de una receta o historia usamos conectores de secuencia: First, then, next, after that, finally."
          }
        ]
      },
      {
        "code": "L2",
        "title": "Lesson 2 · Simple Past: Regular & Irregular Verbs + DID",
        "topic": "Verbos regulares (-ed), irregulares y preguntas/negaciones con DID",
        "icon": "✈️",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Last summer we ___ to Mérida and ___ lots of photos in the mountains.",
            "options": [
              "went / took",
              "go / take",
              "went / taked",
              "goed / took"
            ],
            "answer": "went / took",
            "explanation": "Ambos son verbos irregulares en pasado: go → went, take → took."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: Where ___ you go on your last vacation? — B: I ___ to Margarita Island.",
            "options": [
              "did / went",
              "did / go",
              "were / went",
              "do / went"
            ],
            "answer": "did / went",
            "explanation": "En la pregunta con «did» el verbo va en base («did you go»), pero en la respuesta afirmativa va en pasado («I went»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "She ___ the movie last night because she ___ too tired.",
            "options": [
              "didn't watch / was",
              "didn't watched / was",
              "wasn't watch / did",
              "don't watch / were"
            ],
            "answer": "didn't watch / was",
            "explanation": "Con «didn't» el verbo queda en base («didn't watch»); el verbo To Be no usa did sino «was/were»."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the Simple Past of «buy», «see», and «write»?",
            "options": [
              "bought, saw, wrote",
              "buyed, seed, writed",
              "bought, seen, written",
              "brought, saw, wrote"
            ],
            "answer": "bought, saw, wrote",
            "explanation": "Pasado simple irregular: buy → bought, see → saw, write → wrote."
          },
          {
            "type": "multiple_choice",
            "prompt": "How is the -ed ending pronounced in «wanted» and «needed»?",
            "options": [
              "/ɪd/ (extra syllable)",
              "/t/",
              "/d/",
              "silent"
            ],
            "answer": "/ɪd/ (extra syllable)",
            "explanation": "Cuando el verbo termina en sonido /t/ o /d/ (want, need, decide), la terminación «-ed» se pronuncia /ɪd/."
          }
        ]
      },
      {
        "code": "L3",
        "title": "Lesson 3 · Possessive Adjectives & Possessive Pronouns",
        "topic": "My vs. mine, your vs. yours, her vs. hers, their vs. theirs, Whose...?",
        "icon": "🔑",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "This is not ___ umbrella. ___ is blue, and this one is black.",
            "options": [
              "my / Mine",
              "mine / My",
              "my / My",
              "me / Mine"
            ],
            "answer": "my / Mine",
            "explanation": "«My» es adjetivo posesivo (va antes del sustantivo: my umbrella); «Mine» es pronombre posesivo (reemplaza al sustantivo)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ notebook is this on the desk? — B: It's ___ (belonging to María).",
            "options": [
              "Whose / hers",
              "Who's / her",
              "Whose / her",
              "Who / hers"
            ],
            "answer": "Whose / hers",
            "explanation": "«Whose» pregunta «¿De quién?» y «hers» significa «el/la de ella» sin repetir el sustantivo."
          },
          {
            "type": "multiple_choice",
            "prompt": "We love ___ academy, and the students in the other classroom love ___ too.",
            "options": [
              "our / theirs",
              "ours / their",
              "our / their",
              "ours / theirs"
            ],
            "answer": "our / theirs",
            "explanation": "«Our» acompaña a «academy»; «theirs» va solo al final significando «la de ellos»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Is that car ___? — Yes, they bought it last week.",
            "options": [
              "theirs",
              "their",
              "them",
              "they're"
            ],
            "answer": "theirs",
            "explanation": "Como no sigue ningún sustantivo después, usamos el pronombre posesivo «theirs»."
          },
          {
            "type": "multiple_choice",
            "prompt": "The dog wagged ___ tail happily when it saw ___ owner.",
            "options": [
              "its / its",
              "it's / its",
              "its / it's",
              "his / it's"
            ],
            "answer": "its / its",
            "explanation": "«Its» (sin apóstrofo) es el posesivo de cosas o animales; «it's» con apóstrofo significa «it is»."
          }
        ]
      },
      {
        "code": "L4",
        "title": "Lesson 4 · Past Habits: Used To vs. Be Used To",
        "topic": "Hábitos del pasado (used to + verbo) vs. estar acostumbrado a (be used to + -ing)",
        "icon": "🚲",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "When I was a child, I ___ play video games all afternoon, but now I'm busy.",
            "options": [
              "used to",
              "use to",
              "am used to",
              "was used to"
            ],
            "answer": "used to",
            "explanation": "«Used to + verbo base» expresa un hábito o estado en el pasado que ya no ocurre en el presente."
          },
          {
            "type": "multiple_choice",
            "prompt": "She ___ like coffee before, but now she drinks two cups every morning.",
            "options": [
              "didn't use to",
              "didn't used to",
              "wasn't use to",
              "not used to"
            ],
            "answer": "didn't use to",
            "explanation": "En negativo e interrogativo con «did/didn't», «used to» pierde la «d» y se escribe «use to»."
          },
          {
            "type": "multiple_choice",
            "prompt": "I live in a big city now, so I ___ the heavy traffic and noise.",
            "options": [
              "am used to",
              "used to",
              "use to",
              "did use to"
            ],
            "answer": "am used to",
            "explanation": "«Be used to + sustantivo o verbo -ing» significa «estar acostumbrado a algo» en el presente."
          },
          {
            "type": "multiple_choice",
            "prompt": "Doctors are used to ___ long hours at the hospital.",
            "options": [
              "working",
              "work",
              "worked",
              "works"
            ],
            "answer": "working",
            "explanation": "Después de «be used to» o «get used to», el verbo lleva siempre «-ing» porque «to» aquí es preposición."
          },
          {
            "type": "multiple_choice",
            "prompt": "___ you ___ live in Valencia before moving to Caracas?",
            "options": [
              "Did / use to",
              "Did / used to",
              "Were / use to",
              "Are / used to"
            ],
            "answer": "Did / use to",
            "explanation": "Pregunta sobre hábito pasado: «Did + sujeto + use to + verbo base?»."
          }
        ]
      },
      {
        "code": "L5",
        "title": "Lesson 5 · Adjectives -ED vs. -ING & Adjective Order",
        "topic": "Diferencia entre adjetivos con -ed y -ing y orden correcto de los adjetivos",
        "icon": "🎭",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "The lecture was really ___, so many students felt ___ and sleepy.",
            "options": [
              "boring / bored",
              "bored / boring",
              "boring / boring",
              "bored / bored"
            ],
            "answer": "boring / bored",
            "explanation": "Los adjetivos con «-ing» describen lo que causa la emoción (the lecture was boring) y con «-ed» cómo se siente la persona (felt bored)."
          },
          {
            "type": "multiple_choice",
            "prompt": "We are very ___ about our trip to London next month! It will be an ___ experience.",
            "options": [
              "excited / exciting",
              "exciting / excited",
              "excited / excited",
              "exciting / exciting"
            ],
            "answer": "excited / exciting",
            "explanation": "Nosotros nos sentimos «excited» (-ed); la experiencia es «exciting» (-ing)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Choose the correct order of adjectives (OSASCOMP):",
            "options": [
              "a beautiful small old Italian car",
              "an Italian old small beautiful car",
              "a small beautiful Italian old car",
              "an old Italian beautiful small car"
            ],
            "answer": "a beautiful small old Italian car",
            "explanation": "El orden natural en inglés es: Opinion (beautiful) → Size (small) → Age (old) → Origin (Italian) + sustantivo."
          },
          {
            "type": "multiple_choice",
            "prompt": "She bought a ___ jacket at the mall yesterday.",
            "options": [
              "nice new black leather",
              "leather black new nice",
              "black leather nice new",
              "new black nice leather"
            ],
            "answer": "nice new black leather",
            "explanation": "Orden OSASCOMP: Opinion (nice) → Age (new) → Color (black) → Material (leather)."
          },
          {
            "type": "multiple_choice",
            "prompt": "That horror movie was ___! I was ___ the whole time.",
            "options": [
              "terrifying / terrified",
              "terrified / terrifying",
              "terrify / terrifying",
              "terrified / terrified"
            ],
            "answer": "terrifying / terrified",
            "explanation": "La película causa miedo («terrifying») y yo sentí miedo («terrified»)."
          }
        ]
      },
      {
        "code": "L6",
        "title": "Lesson 6 · Comparatives & Superlatives",
        "topic": "Comparativos (-er / more), superlativos (-est / the most), igualdades e irregulares",
        "icon": "🏆",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "A plane ticket is ___ than a bus ticket, but flying is much ___.",
            "options": [
              "more expensive / faster",
              "expensiver / more fast",
              "most expensive / fastest",
              "more expensive / more fast"
            ],
            "answer": "more expensive / faster",
            "explanation": "Adjetivos largos usan «more ... than» (more expensive); adjetivos cortos agregan «-er» (faster)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Angel Falls is ___ waterfall in the world!",
            "options": [
              "the highest",
              "higher than",
              "the most high",
              "highest"
            ],
            "answer": "the highest",
            "explanation": "Para el superlativo de un adjetivo corto usamos «the + adjetivo-est» (the highest)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What are the comparative and superlative forms of «good» and «bad»?",
            "options": [
              "better – the best / worse – the worst",
              "gooder – the goodest / badder – the baddest",
              "more good / more bad",
              "better – the best / badder – the worst"
            ],
            "answer": "better – the best / worse – the worst",
            "explanation": "Son irregulares: good → better → the best; bad → worse → the worst."
          },
          {
            "type": "multiple_choice",
            "prompt": "This laptop is just ___ fast ___ the new model, and it costs less!",
            "options": [
              "as / as",
              "more / than",
              "so / than",
              "as / than"
            ],
            "answer": "as / as",
            "explanation": "Para comparaciones de igualdad usamos «as + adjetivo + as» (tan rápido como)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Yesterday was ___ day of the year so far.",
            "options": [
              "the hottest",
              "the hotter",
              "the most hot",
              "hotter than"
            ],
            "answer": "the hottest",
            "explanation": "«Hot» es CVC (consonante-vocal-consonante), por lo que duplica la «t» en el superlativo: «the hottest»."
          }
        ]
      },
      {
        "code": "L7",
        "title": "Lesson 7 · Adverbs of Manner & Frequency",
        "topic": "Adjetivo vs. adverbio (-ly, well, fast, hard) y posición de adverbios de frecuencia",
        "icon": "🎯",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Sofía is a very ___ pianist; she plays the piano ___.",
            "options": [
              "good / well",
              "well / good",
              "good / goodly",
              "good / good"
            ],
            "answer": "good / well",
            "explanation": "«Good» es adjetivo (describe a pianist) y «well» es su adverbio irregular (describe cómo toca: plays well)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Please drive ___! It is raining ___ tonight.",
            "options": [
              "carefully / heavily",
              "careful / heavy",
              "carefully / heavy",
              "careful / heavily"
            ],
            "answer": "carefully / heavily",
            "explanation": "Para describir cómo se realiza un verbo (drive, raining) usamos adverbios terminados en «-ly»."
          },
          {
            "type": "multiple_choice",
            "prompt": "He works very ___ and runs very ___. (Be careful with irregular adverbs!)",
            "options": [
              "hard / fast",
              "hardly / fastly",
              "hard / fastly",
              "hardly / fast"
            ],
            "answer": "hard / fast",
            "explanation": "«Hard» y «fast» tienen la misma forma como adjetivo y como adverbio («hardly» significa «apenas/casi no» y «fastly» no existe)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Choose the sentence with the correct position of the frequency adverb:",
            "options": [
              "She is never late, and she always arrives early.",
              "She never is late, and she arrives always early.",
              "Never she is late, and always she arrives.",
              "She is late never, and she always arrives early."
            ],
            "answer": "She is never late, and she always arrives early.",
            "explanation": "Los adverbios de frecuencia van DESPUÉS del verbo To Be (is never) y ANTES de los demás verbos (always arrives)."
          },
          {
            "type": "multiple_choice",
            "prompt": "After verbs of perception like «look», «feel», «taste», and «smell», we use:",
            "options": [
              "an adjective (e.g., This soup tastes great!)",
              "an adverb with -ly (e.g., This soup tastes greatly!)",
              "a noun only",
              "an infinitive"
            ],
            "answer": "an adjective (e.g., This soup tastes great!)",
            "explanation": "Los verbos de los sentidos (taste, smell, look, sound, feel) van seguidos de adjetivo: «You look tired / It smells delicious»."
          }
        ]
      },
      {
        "code": "L8",
        "title": "Lesson 8 · Modal Verbs: Ability, Advice & Obligation",
        "topic": "Can, could, should, must, have to, may y might",
        "icon": "💡",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "You look very pale and have a fever. You ___ see a doctor today.",
            "options": [
              "should",
              "can't",
              "may not",
              "could to"
            ],
            "answer": "should",
            "explanation": "Para dar consejos o recomendaciones («deberías») usamos «should / shouldn't» + verbo base."
          },
          {
            "type": "multiple_choice",
            "prompt": "Passengers ___ wear a seatbelt during takeoff. It is mandatory by law.",
            "options": [
              "must",
              "might",
              "could",
              "may"
            ],
            "answer": "must",
            "explanation": "«Must» y «have to» expresan obligación firme o reglas obligatorias."
          },
          {
            "type": "multiple_choice",
            "prompt": "Tomorrow is a holiday, so we ___ wake up early! It's not necessary.",
            "options": [
              "don't have to",
              "mustn't",
              "can't",
              "shouldn't to"
            ],
            "answer": "don't have to",
            "explanation": "«Don't have to» significa «no es necesario»; en cambio «mustn't» significa «está prohibido»."
          },
          {
            "type": "multiple_choice",
            "prompt": "When my grandfather was young, he ___ run a marathon in three hours.",
            "options": [
              "could",
              "can",
              "may",
              "must"
            ],
            "answer": "could",
            "explanation": "«Could» expresa habilidad general en el pasado («podía / sabía»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Take a jacket with you because it ___ get cold later tonight.",
            "options": [
              "might",
              "must",
              "should to",
              "has to"
            ],
            "answer": "might",
            "explanation": "«May» y «might» expresan posibilidad futura no segura («puede que / tal vez»)."
          }
        ]
      }
    ]
  },
  "Teens 3": {
    "title": "Teens Nivel 3 — Advanced Study Guide",
    "badge": "👑 Teens 3",
    "lessons": [
      {
        "code": "L1",
        "title": "Lesson 1 · Progressive Tenses (Present, Past & Future) & Stative Verbs",
        "topic": "Los 3 tiempos continuos, verbos de estado (stative verbs) y acciones interrumpidas",
        "icon": "⚡",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "I ___ her phone number, and I ___ she is telling the truth. (Stative verbs!)",
            "options": [
              "know / believe",
              "am knowing / am believing",
              "knows / believing",
              "knew / am believing"
            ],
            "answer": "know / believe",
            "explanation": "Los verbos de estado mental o posesión (know, believe, own, want, need) NO llevan «-ing»; se usan en forma simple."
          },
          {
            "type": "multiple_choice",
            "prompt": "While the teacher ___ into the classroom, the students ___ loudly.",
            "options": [
              "was walking / were talking",
              "walked / talked",
              "is walking / were talking",
              "will walk / talked"
            ],
            "answer": "was walking / were talking",
            "explanation": "Dos acciones en progreso al mismo tiempo en el pasado usan Past Progressive (was/were + -ing)."
          },
          {
            "type": "multiple_choice",
            "prompt": "I ___ dinner when suddenly the lights ___ out.",
            "options": [
              "was cooking / went",
              "cooked / were going",
              "am cooking / went",
              "was cooking / go"
            ],
            "answer": "was cooking / went",
            "explanation": "La acción larga de fondo va en Past Progressive (was cooking) y la acción corta que interrumpe va en Simple Past (went)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Don't call me at 8:00 pm tomorrow because I ___ in the concert at that time.",
            "options": [
              "will be singing",
              "am singing",
              "sang",
              "will sing"
            ],
            "answer": "will be singing",
            "explanation": "Para una acción que estará en pleno progreso en una hora específica del futuro usamos Future Progressive (will be + -ing)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Why does the sentence «She is always forgetting my birthday!» use Present Progressive?",
            "options": [
              "To express an annoying habit or complaint",
              "Because it is a stative verb",
              "To talk about the past",
              "Because forget is irregular"
            ],
            "answer": "To express an annoying habit or complaint",
            "explanation": "«Always + Present Progressive» se usa en nivel avanzado para expresar una queja sobre un hábito que molesta."
          }
        ]
      },
      {
        "code": "L2",
        "title": "Lesson 2 · Perfect Tenses (Present, Past & Future)",
        "topic": "Have/has + participio, had + participio, will have + participio, already/yet/since/for",
        "icon": "⏳",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "We have lived in this city ___ 2018, so we have been here ___ several years.",
            "options": [
              "since / for",
              "for / since",
              "since / since",
              "already / yet"
            ],
            "answer": "since / for",
            "explanation": "«Since» marca el punto de inicio en el tiempo (since 2018) y «for» marca la duración total (for several years)."
          },
          {
            "type": "multiple_choice",
            "prompt": "By the time we arrived at the station, the train ___ already ___.",
            "options": [
              "had / left",
              "has / left",
              "have / leave",
              "will have / left"
            ],
            "answer": "had / left",
            "explanation": "El Past Perfect («had + participio») expresa una acción que ocurrió ANTES que otra acción pasada (arrived)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: Have you finished the report ___? — B: Yes, I have ___ sent it to the manager.",
            "options": [
              "yet / already",
              "already / yet",
              "since / for",
              "ever / never"
            ],
            "answer": "yet / already",
            "explanation": "«Yet» va al final de preguntas y negaciones; «already» va en afirmaciones entre have/has y el participio."
          },
          {
            "type": "multiple_choice",
            "prompt": "By December next year, she ___ graduated from university.",
            "options": [
              "will have",
              "has",
              "had",
              "would have"
            ],
            "answer": "will have",
            "explanation": "«By + fecha futura» usa Future Perfect («will have + participio») para algo que ya se habrá completado."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the difference between «She has gone to Madrid» and «She has been to Madrid»?",
            "options": [
              "'Has gone' means she is still in Madrid; 'has been' means she visited and returned",
              "They mean the exact same thing",
              "'Has been' means she is still there now",
              "'Has gone' is past simple"
            ],
            "answer": "'Has gone' means she is still in Madrid; 'has been' means she visited and returned",
            "explanation": "«Has gone to» = se fue y sigue allá; «has been to» = ha ido/visitado alguna vez y ya regresó."
          }
        ]
      },
      {
        "code": "L3",
        "title": "Lesson 3 · Countable & Uncountable Nouns, Containers & Quantifiers",
        "topic": "Few vs. a few, little vs. a little, containers y sustantivos incontables avanzados",
        "icon": "🛒",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Be careful! In English, «advice», «information», «furniture», and «luggage» are:",
            "options": [
              "Uncountable nouns (singular verb, no plural -s)",
              "Countable plural nouns",
              "Verbs",
              "Adjectives"
            ],
            "answer": "Uncountable nouns (singular verb, no plural -s)",
            "explanation": "En inglés «advice, information, furniture, luggage, news, bread» son SIEMPRE incontables (decimos «a piece of advice», nunca «advices»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "I have ___ close friends here, so I feel happy and never lonely.",
            "options": [
              "a few",
              "a little",
              "little",
              "much"
            ],
            "answer": "a few",
            "explanation": "«A few» (unos cuantos, sentido positivo) se usa con sustantivos contables en plural («friends»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Hurry up! We have very ___ time left before the flight closes.",
            "options": [
              "little",
              "few",
              "many",
              "a few"
            ],
            "answer": "little",
            "explanation": "«Little» (casi nada de, sentido negativo/escaso) se usa con sustantivos incontables como «time»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Can you buy a ___ of bread and two ___ of toothpaste at the supermarket?",
            "options": [
              "loaf / tubes",
              "slice / loaves",
              "bar / cans",
              "jar / cartons"
            ],
            "answer": "loaf / tubes",
            "explanation": "Los envases/medidas exactos son: «a loaf of bread» (una barra/pan entero) y «a tube of toothpaste» (un tubo de pasta dental)."
          },
          {
            "type": "multiple_choice",
            "prompt": "How ___ pieces of luggage did you bring on the trip?",
            "options": [
              "many",
              "much",
              "little",
              "amount"
            ],
            "answer": "many",
            "explanation": "Aunque «luggage» es incontable, la palabra «pieces» es contable plural, por lo que usamos «How many pieces of...»."
          }
        ]
      },
      {
        "code": "L4",
        "title": "Lesson 4 · Conditionals: Zero, First, Second, Third & Mixed",
        "topic": "Los 4 condicionales (0, 1st, 2nd, 3rd) y condicionales mixtos",
        "icon": "🔀",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "First Conditional (Real future possibility): If it ___ tomorrow, we ___ the event indoors.",
            "options": [
              "rains / will hold",
              "will rain / hold",
              "rained / would hold",
              "had rained / would have held"
            ],
            "answer": "rains / will hold",
            "explanation": "En el 1er Condicional, la cláusula con «If» va en Presente Simple (rains) y el resultado va con «will + verbo»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Second Conditional (Hypothetical present): If I ___ you, I ___ accept that job offer immediately.",
            "options": [
              "were / would",
              "was / will",
              "am / would",
              "had been / would"
            ],
            "answer": "were / would",
            "explanation": "En el 2do Condicional (hipotético) usamos «If I were you...» con «would + verbo base»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Third Conditional (Impossible past regret): If you ___ me earlier, I ___ helped you.",
            "options": [
              "had called / would have",
              "called / would have",
              "had called / would",
              "would have called / had"
            ],
            "answer": "had called / would have",
            "explanation": "El 3er Condicional habla del pasado irreal: «If + Past Perfect (had called) → would have + participio (helped)»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Zero Conditional (Scientific truth): If you ___ water to 100°C, it ___.",
            "options": [
              "heat / boils",
              "heated / would boil",
              "will heat / boils",
              "heat / will boiled"
            ],
            "answer": "heat / boils",
            "explanation": "Para leyes científicas y hechos universales (Zero Conditional) usamos Presente Simple en ambas partes."
          },
          {
            "type": "multiple_choice",
            "prompt": "We will go to the beach ___ it rains. («a menos que»)",
            "options": [
              "unless",
              "if",
              "as long as",
              "because"
            ],
            "answer": "unless",
            "explanation": "«Unless» significa «if not» (a menos que / salvo que)."
          }
        ]
      },
      {
        "code": "L5",
        "title": "Lesson 5 · Perfect Continuous Tenses",
        "topic": "Present, Past & Future Perfect Continuous (have/had/will have been + -ing)",
        "icon": "🏃",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Her eyes are red because she ___ for two hours.",
            "options": [
              "has been crying",
              "is crying",
              "cried",
              "had cried"
            ],
            "answer": "has been crying",
            "explanation": "Present Perfect Continuous («has been + -ing») enfatiza la duración de una acción reciente cuya evidencia es visible ahora."
          },
          {
            "type": "multiple_choice",
            "prompt": "We ___ for the bus for 40 minutes when it finally arrived.",
            "options": [
              "had been waiting",
              "have been waiting",
              "were waiting",
              "will have been waiting"
            ],
            "answer": "had been waiting",
            "explanation": "Past Perfect Continuous («had been + -ing») muestra cuánto tiempo llevaba ocurriendo algo antes de otro evento pasado (arrived)."
          },
          {
            "type": "multiple_choice",
            "prompt": "By next June, Professor Molina ___ at our academy for ten years.",
            "options": [
              "will have been teaching",
              "has been teaching",
              "had been teaching",
              "is teaching"
            ],
            "answer": "will have been teaching",
            "explanation": "Future Perfect Continuous («will have been + -ing») proyecta la duración acumulada de una acción hasta un momento del futuro."
          },
          {
            "type": "multiple_choice",
            "prompt": "How long ___ you ___ English?",
            "options": [
              "have / been learning",
              "are / learning",
              "did / learn",
              "had / learning"
            ],
            "answer": "have / been learning",
            "explanation": "Con «How long...?» para una acción que empezó en el pasado y continúa hoy, usamos «have/has been + -ing»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which verb CANNOT be used in the Perfect Continuous form because it is stative?",
            "options": [
              "know (I have known her for years)",
              "work (I have been working)",
              "study (She has been studying)",
              "wait (We have been waiting)"
            ],
            "answer": "know (I have known her for years)",
            "explanation": "Los verbos de estado como «know, believe, own» nunca llevan «-ing», por lo que usan Present Perfect Simple («I have known»)."
          }
        ]
      },
      {
        "code": "L6",
        "title": "Lesson 6 · Causative & Permission: Make, Let & Be Allowed To",
        "topic": "Obligar (make someone do), permitir (let someone do) y tener permiso (be allowed to)",
        "icon": "🚦",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "My parents ___ me clean my room before going out with my friends.",
            "options": [
              "made",
              "let to",
              "allowed",
              "forced"
            ],
            "answer": "made",
            "explanation": "Con «make» y «let» usamos objeto + verbo base SIN «to»: «made me clean» (me obligaron/hicieron limpiar)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Our teacher ___ us use a dictionary during the writing practice.",
            "options": [
              "let",
              "allowed",
              "made to",
              "permitted"
            ],
            "answer": "let",
            "explanation": "«Let + persona + verbo sin to» expresa permiso activo («let us use»). Con «allow» sería «allowed us TO use»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Visitors ___ take flash photographs inside the art museum.",
            "options": [
              "are not allowed to",
              "don't let to",
              "aren't make to",
              "not allowed"
            ],
            "answer": "are not allowed to",
            "explanation": "La estructura pasiva de permiso lleva siempre «to»: «be (not) allowed to + verbo base»."
          },
          {
            "type": "multiple_choice",
            "prompt": "That sad movie ___ everyone in the theater cry.",
            "options": [
              "made",
              "allowed",
              "let to",
              "caused"
            ],
            "answer": "made",
            "explanation": "«Make someone + verbo base» también significa causar una reacción emocional («made everyone cry»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "In passive voice, «The boss made him stay late» becomes: «He was made ___ late.»",
            "options": [
              "to stay",
              "stay",
              "staying",
              "stayed"
            ],
            "answer": "to stay",
            "explanation": "Importante matiz avanzado: cuando «make» pasa a voz pasiva («was made»), SÍ recupera la partícula «to» («was made to stay»)."
          }
        ]
      },
      {
        "code": "L7",
        "title": "Lesson 7 · Reported Speech (Indirect Speech)",
        "topic": "Cambio de tiempos verbales (backshift), say vs. tell y preguntas reportadas",
        "icon": "🗣️",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Direct: «I am working on a project.» → Reported: She said that she ___ on a project.",
            "options": [
              "was working",
              "is working",
              "has been working",
              "will be working"
            ],
            "answer": "was working",
            "explanation": "En Reported Speech los tiempos retroceden un paso al pasado (backshift): Present Progressive (am working) → Past Progressive (was working)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Direct: «I will call you tomorrow.» → He told me that he ___ call me the next day.",
            "options": [
              "would",
              "will",
              "can",
              "shall"
            ],
            "answer": "would",
            "explanation": "Al reportar en pasado, «will» cambia a «would» y «tomorrow» cambia a «the next day / the following day»."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the grammar difference between «say» and «tell» in Reported Speech?",
            "options": [
              "'Tell' requires a personal object (told me); 'say' does not (said that...)",
              "'Say' requires a personal object (said me)",
              "They are used identically",
              "'Tell' is only for questions"
            ],
            "answer": "'Tell' requires a personal object (told me); 'say' does not (said that...)",
            "explanation": "Decimos «She told ME that...» (con receptor) o «She said that...» (nunca «She said me»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Direct question: «Where do you live?» → She asked me where ___.",
            "options": [
              "I lived",
              "did I live",
              "do I live",
              "lived I"
            ],
            "answer": "I lived",
            "explanation": "Las preguntas reportadas usan el orden afirmativo (sujeto + verbo en pasado) y NO usan el auxiliar do/did: «where I lived»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Direct Yes/No question: «Are you ready?» → He asked us ___ we were ready.",
            "options": [
              "if / whether",
              "that",
              "what",
              "who"
            ],
            "answer": "if / whether",
            "explanation": "Cuando reportamos una pregunta cerrada (Yes/No), conectamos con «if» o «whether» («He asked us if we were ready»)."
          }
        ]
      },
      {
        "code": "L8",
        "title": "Lesson 8 · Passive Voice & Modals of Deduction",
        "topic": "Voz pasiva en todos los tiempos y deducción lógica (must/can't/might have + participio)",
        "icon": "⚖️",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Active: «Gabriel García Márquez wrote One Hundred Years of Solitude.» → Passive:",
            "options": [
              "One Hundred Years of Solitude was written by G. G. Márquez.",
              "One Hundred Years of Solitude wrote by G. G. Márquez.",
              "One Hundred Years of Solitude has written by G. G. Márquez.",
              "One Hundred Years of Solitude is wrote by G. G. Márquez."
            ],
            "answer": "One Hundred Years of Solitude was written by G. G. Márquez.",
            "explanation": "La voz pasiva en pasado simple se forma con «was / were + past participle» (was written by...)."
          },
          {
            "type": "multiple_choice",
            "prompt": "The new hospital ___ built right now; it will open next year.",
            "options": [
              "is being",
              "is",
              "has been",
              "was"
            ],
            "answer": "is being",
            "explanation": "En Present Continuous Passive («está siendo construido») usamos «am/is/are + being + participio»."
          },
          {
            "type": "multiple_choice",
            "prompt": "The ground is completely wet this morning. It ___ rained heavily last night!",
            "options": [
              "must have",
              "can't have",
              "should",
              "must to"
            ],
            "answer": "must have",
            "explanation": "Para una deducción casi 100% segura sobre el pasado usamos «must have + participio»."
          },
          {
            "type": "multiple_choice",
            "prompt": "You ___ seen María at the mall yesterday because she is in Spain all month!",
            "options": [
              "can't have",
              "must have",
              "should have",
              "may have"
            ],
            "answer": "can't have",
            "explanation": "Para deducir que algo fue lógicamente imposible en el pasado usamos «can't have / couldn't have + participio»."
          },
          {
            "type": "multiple_choice",
            "prompt": "All safety protocols must ___ respected by the staff.",
            "options": [
              "be",
              "been",
              "being",
              "to be"
            ],
            "answer": "be",
            "explanation": "Con verbos modales en voz pasiva la estructura es «modal + be + past participle» (must be respected)."
          }
        ]
      },
      {
        "code": "L9",
        "title": "Lesson 9 · Phrasal Verbs in Context",
        "topic": "Verbos compuestos separables e inseparables para la vida diaria y el trabajo",
        "icon": "🧩",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "We need to stop at the gas station before we ___ fuel!",
            "options": [
              "run out of",
              "look after",
              "give up",
              "turn off"
            ],
            "answer": "run out of",
            "explanation": "«Run out of» significa quedarse sin algo o agotarse (run out of fuel / time / money)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Never ___ on your dreams! Keep practicing every day.",
            "options": [
              "give up",
              "put off",
              "take off",
              "find out"
            ],
            "answer": "give up",
            "explanation": "«Give up» significa rendirse o abandonar un hábito."
          },
          {
            "type": "multiple_choice",
            "prompt": "Can you ___ my dog this weekend while I am traveling?",
            "options": [
              "look after",
              "look for",
              "look up",
              "look forward to"
            ],
            "answer": "look after",
            "explanation": "«Look after» = cuidar a alguien; «look for» = buscar; «look up» = buscar información en un diccionario/lista."
          },
          {
            "type": "multiple_choice",
            "prompt": "With separable phrasal verbs like «turn off», which sentence is grammatically INCORRECT?",
            "options": [
              "Turn off it.",
              "Turn it off.",
              "Turn the light off.",
              "Turn off the light."
            ],
            "answer": "Turn off it.",
            "explanation": "Cuando el objeto de un phrasal verb separable es un pronombre (it, them), DEBE ir en el medio: «Turn it off» (nunca «Turn off it»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Don't ___ until tomorrow what you can do today!",
            "options": [
              "put off",
              "call off",
              "get along",
              "bring up"
            ],
            "answer": "put off",
            "explanation": "«Put off» significa posponer o postergar; «call off» significa cancelar por completo."
          }
        ]
      },
      {
        "code": "L10",
        "title": "Lesson 10 · Relative Clauses (Who, Which, That, Whose, Where)",
        "topic": "Cláusulas relativas especificativas y explicativas con who, which, whose, where, when",
        "icon": "🔗",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "An architect is a professional ___ designs buildings and bridges.",
            "options": [
              "who",
              "which",
              "whose",
              "where"
            ],
            "answer": "who",
            "explanation": "Usamos «who» (o «that») para referirnos a personas."
          },
          {
            "type": "multiple_choice",
            "prompt": "That is the woman ___ daughter won the national scholarship.",
            "options": [
              "whose",
              "who",
              "which",
              "whom"
            ],
            "answer": "whose",
            "explanation": "«Whose» es el pronombre relativo posesivo («cuyo / cuya»): whose daughter = cuya hija."
          },
          {
            "type": "multiple_choice",
            "prompt": "Mérida is the city ___ my grandparents met fifty years ago.",
            "options": [
              "where",
              "which",
              "who",
              "whose"
            ],
            "answer": "where",
            "explanation": "Para indicar el lugar donde ocurre una acción dentro de la cláusula relativa usamos «where»."
          },
          {
            "type": "multiple_choice",
            "prompt": "My laptop, ___ I bought last year, works extremely fast. (Note the commas!)",
            "options": [
              "which",
              "that",
              "who",
              "where"
            ],
            "answer": "which",
            "explanation": "En cláusulas relativas explicativas entre comas (non-defining), NO se puede usar «that»; para cosas usamos «which»."
          },
          {
            "type": "multiple_choice",
            "prompt": "The book ___ you recommended to me was fascinating.",
            "options": [
              "that / which",
              "who",
              "whose",
              "where"
            ],
            "answer": "that / which",
            "explanation": "Para objetos o cosas en cláusulas sin comas podemos usar tanto «that» como «which»."
          }
        ]
      }
    ]
  },
  "Adultos 1": {
    "title": "Adultos Nivel 1 — Basic Study Guide",
    "badge": "📘 Adultos 1",
    "lessons": [
      {
        "code": "L1",
        "title": "Lesson 1 · The English Alphabet, Spelling & Professions",
        "topic": "Abecedario, deletreo, ocupaciones y frases de clase",
        "icon": "🔤",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "How many letters and vowels are there in the English alphabet?",
            "options": [
              "26 letters and 5 vowels",
              "27 letters and 5 vowels",
              "26 letters and 6 vowels",
              "24 letters and 5 vowels"
            ],
            "answer": "26 letters and 5 vowels",
            "explanation": "El abecedario en inglés tiene 26 letras en total y 5 vocales (A, E, I, O, U)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ do you spell your last name? — B: R - O - J - A - S.",
            "options": [
              "How",
              "What",
              "Where",
              "Who"
            ],
            "answer": "How",
            "explanation": "Para preguntar cómo se deletrea una palabra o nombre usamos siempre: «How do you spell...?»."
          },
          {
            "type": "multiple_choice",
            "prompt": "In emails and usernames, how do we say the symbols «@» and «_» in English?",
            "options": [
              "at / underscore",
              "in / dash",
              "at / point",
              "around / line"
            ],
            "answer": "at / underscore",
            "explanation": "En usuarios y correos electrónicos, «@» se dice «at», «.» se dice «dot» y «_» se dice «underscore»."
          },
          {
            "type": "multiple_choice",
            "prompt": "My sister works in a hospital and helps sick patients. She is a ___.",
            "options": [
              "nurse",
              "lawyer",
              "architect",
              "accountant"
            ],
            "answer": "nurse",
            "explanation": "«Nurse» significa enfermera/o; «lawyer» es abogado/a y «accountant» es contador/a."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which classroom phrase do you use when you don't know a word in English?",
            "options": [
              "How do you say ___ in English?",
              "Where are you from?",
              "Nice to meet you!",
              "See you tomorrow!"
            ],
            "answer": "How do you say ___ in English?",
            "explanation": "«How do you say ___ in English?» es la frase clave del salón para preguntar vocabulario nuevo."
          }
        ]
      },
      {
        "code": "L2",
        "title": "Lesson 2 · Personal Pronouns, Verb To Be, Family & Articles",
        "topic": "Am / is / are, artículos a/an/the, países y familia",
        "icon": "👨‍👩‍👧‍👦",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Carlos and I ___ from Venezuela. We ___ students at Living English.",
            "options": [
              "are / are",
              "am / are",
              "is / are",
              "are / is"
            ],
            "answer": "are / are",
            "explanation": "«Carlos and I» equivale al pronombre «We» (nosotros), que siempre usa la forma «are» del verbo To Be."
          },
          {
            "type": "multiple_choice",
            "prompt": "My uncle is ___ engineer and my aunt is ___ teacher.",
            "options": [
              "an / a",
              "a / an",
              "a / a",
              "an / an"
            ],
            "answer": "an / a",
            "explanation": "Usamos «an» antes de sonido vocálico (an engineer) y «a» antes de sonido consonántico (a teacher)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ your sister a doctor? — B: No, she ___. She is a lawyer.",
            "options": [
              "Is / isn't",
              "Are / aren't",
              "Am / not",
              "Does / doesn't"
            ],
            "answer": "Is / isn't",
            "explanation": "Para tercera persona singular (she/he/it) preguntamos con «Is...?» y negamos con «isn't»."
          },
          {
            "type": "multiple_choice",
            "prompt": "My mother's brother is my ___, and his daughter is my ___.",
            "options": [
              "uncle / cousin",
              "grandfather / niece",
              "nephew / aunt",
              "brother / sister"
            ],
            "answer": "uncle / cousin",
            "explanation": "El hermano de mi mamá es mi tío («uncle») y su hija es mi prima («cousin»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Choose the correct order for physical description in English:",
            "options": [
              "She has long brown hair.",
              "She has hair brown long.",
              "She is long hair brown.",
              "She has brown hair long."
            ],
            "answer": "She has long brown hair.",
            "explanation": "En inglés los adjetivos van ANTES del sustantivo (tamaño + color + sustantivo: long brown hair)."
          }
        ]
      },
      {
        "code": "L3",
        "title": "Lesson 3 · Plural Nouns, Food, Some / Any & Demonstratives",
        "topic": "Plurales regulares e irregulares, some/any, how much/many, this/that/these/those",
        "icon": "🍎",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "What is the correct plural form of: «child», «tooth», and «woman»?",
            "options": [
              "children, teeth, women",
              "childs, tooths, womans",
              "childrens, teeths, women",
              "children, tooths, womens"
            ],
            "answer": "children, teeth, women",
            "explanation": "Son plurales irregulares: child → children, tooth → teeth, woman → women."
          },
          {
            "type": "multiple_choice",
            "prompt": "There isn't ___ milk in the fridge, but there are ___ apples on the table.",
            "options": [
              "any / some",
              "some / any",
              "many / much",
              "a / an"
            ],
            "answer": "any / some",
            "explanation": "Usamos «any» en oraciones negativas e interrogativas, y «some» en oraciones afirmativas."
          },
          {
            "type": "multiple_choice",
            "prompt": "___ sugar do you want in your coffee, and ___ oranges do we need?",
            "options": [
              "How much / how many",
              "How many / how much",
              "How much / how much",
              "Some / any"
            ],
            "answer": "How much / how many",
            "explanation": "«How much» se usa con incontables (sugar, water, money) y «How many» con contables en plural (oranges)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Look at ___ birds up in the sky! And look at ___ book in my hand.",
            "options": [
              "those / this",
              "these / that",
              "this / those",
              "that / these"
            ],
            "answer": "those / this",
            "explanation": "«Those» es para plural lejos (birds in the sky) y «this» es para singular cerca (in my hand)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the plural of «city» and «box»?",
            "options": [
              "cities / boxes",
              "citys / boxs",
              "cities / boxies",
              "cityes / boxes"
            ],
            "answer": "cities / boxes",
            "explanation": "Consonante + y cambia a «-ies» (cities); palabras terminadas en -s, -sh, -ch, -x agregan «-es» (boxes)."
          }
        ]
      },
      {
        "code": "L4",
        "title": "Lesson 4 · Simple Present (Do / Does) & Question Words",
        "topic": "Rutinas en presente simple, tercera persona (-s/-es), do vs. make",
        "icon": "⚡",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Sofía ___ English every afternoon, and her brothers ___ soccer.",
            "options": [
              "studies / play",
              "study / plays",
              "studies / plays",
              "studys / play"
            ],
            "answer": "studies / play",
            "explanation": "En 3ra persona singular (Sofía = she) «study» pasa a «studies». En plural (her brothers = they) el verbo va en forma base «play»."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ your father work on Saturdays? — B: No, he ___.",
            "options": [
              "Does / doesn't",
              "Do / don't",
              "Is / isn't",
              "Does / don't"
            ],
            "answer": "Does / doesn't",
            "explanation": "Con he/she/it usamos el auxiliar «Does» para preguntar y «doesn't» para responder en negativo."
          },
          {
            "type": "multiple_choice",
            "prompt": "Every morning I ___ my bed, and at night I ___ my English homework.",
            "options": [
              "make / do",
              "do / make",
              "make / make",
              "do / do"
            ],
            "answer": "make / do",
            "explanation": "Decimos «make the bed / make breakfast / make a mistake» pero «do homework / do exercises / do housework»."
          },
          {
            "type": "multiple_choice",
            "prompt": "___ do you usually have lunch with? — With my coworkers.",
            "options": [
              "Who",
              "Where",
              "When",
              "Why"
            ],
            "answer": "Who",
            "explanation": "«Who ... with?» pregunta «¿Con quién...?» (preposición al final de la pregunta)."
          },
          {
            "type": "multiple_choice",
            "prompt": "She doesn't ___ coffee at night because she wants to sleep well.",
            "options": [
              "drink",
              "drinks",
              "drinking",
              "to drink"
            ],
            "answer": "drink",
            "explanation": "Después de «doesn't» o «don't», el verbo principal va SIEMPRE en su forma base sin «-s» (drink)."
          }
        ]
      },
      {
        "code": "L4B",
        "title": "Lesson 4B · Present Continuous vs. Simple Present",
        "topic": "Acciones ahora mismo (am/is/are + -ing) vs. hábitos y rutinas",
        "icon": "🎬",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Look! It ___ outside right now. Take your umbrella!",
            "options": [
              "is raining",
              "rains",
              "rain",
              "are raining"
            ],
            "answer": "is raining",
            "explanation": "Para algo que está ocurriendo en este preciso momento («Look! / right now») usamos Present Continuous (is + -ing)."
          },
          {
            "type": "multiple_choice",
            "prompt": "My mom usually ___ dinner, but tonight my dad ___ pizza.",
            "options": [
              "cooks / is making",
              "is cooking / makes",
              "cook / is making",
              "cooks / makes"
            ],
            "answer": "cooks / is making",
            "explanation": "«Usually» indica hábito (Simple Present: cooks) y «tonight / right now» indica acción temporal en progreso (is making)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the correct -ing spelling of «swim», «write», and «run»?",
            "options": [
              "swimming, writing, running",
              "swiming, writeing, runing",
              "swimming, writting, running",
              "swiming, writing, running"
            ],
            "answer": "swimming, writing, running",
            "explanation": "Verbos cortos CVC duplican la última consonante (swimming, running); verbos terminados en -e muda la eliminan (writing)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: What ___ the children doing? — B: They ___ playing in the yard.",
            "options": [
              "are / are",
              "do / are",
              "is / are",
              "are / do"
            ],
            "answer": "are / are",
            "explanation": "«The children» es plural (they), por lo que usa «are» tanto en la pregunta como en la respuesta."
          },
          {
            "type": "multiple_choice",
            "prompt": "I ___ English every week, and right now I ___ a practice exercise.",
            "options": [
              "study / am doing",
              "am studying / do",
              "studies / am doing",
              "study / do"
            ],
            "answer": "study / am doing",
            "explanation": "«Every week» = rutina (study); «right now» = en progreso ahora mismo (am doing)."
          }
        ]
      },
      {
        "code": "L5",
        "title": "Lesson 5 · Numbers, Dates, Years & Telling the Time",
        "topic": "Números ordinales, fechas, años, meses y cómo decir la hora",
        "icon": "⏰",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "How do you write and say the ordinal numbers 1st, 2nd, and 3rd?",
            "options": [
              "first, second, third",
              "oneth, twoth, threeth",
              "first, twosecond, third",
              "one, two, three"
            ],
            "answer": "first, second, third",
            "explanation": "Para fechas y posiciones usamos números ordinales: 1st = first, 2nd = second, 3rd = third, 4th = fourth."
          },
          {
            "type": "multiple_choice",
            "prompt": "It's 7:45. What is another natural way to say this time in English?",
            "options": [
              "It's a quarter to eight.",
              "It's a quarter past seven.",
              "It's half past seven.",
              "It's fifteen to seven."
            ],
            "answer": "It's a quarter to eight.",
            "explanation": "7:45 = faltan 15 minutos (un cuarto) para las ocho: «It's a quarter to eight»."
          },
          {
            "type": "multiple_choice",
            "prompt": "It's 3:30. How do we say this time?",
            "options": [
              "It's half past three.",
              "It's a quarter to three.",
              "It's thirty to four.",
              "It's half to three."
            ],
            "answer": "It's half past three.",
            "explanation": "Las y media se expresan con «half past + hora»: 3:30 = It's half past three (o three thirty)."
          },
          {
            "type": "multiple_choice",
            "prompt": "How do we read the year «1998» and «2027» in English?",
            "options": [
              "nineteen ninety-eight / twenty twenty-seven",
              "one九nine-eight / two twenty-seven",
              "nineteen hundred eight / two thousand seven",
              "ninety-eight / twenty-seven"
            ],
            "answer": "nineteen ninety-eight / twenty twenty-seven",
            "explanation": "Los años de 4 cifras suelen dividirse en dos pares de números: 19-98 (nineteen ninety-eight) y 20-27 (twenty twenty-seven)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What time ___ you wake up on Mondays? — I wake up ___ 6:30 am.",
            "options": [
              "do / at",
              "are / on",
              "does / in",
              "do / in"
            ],
            "answer": "do / at",
            "explanation": "Para horas exactas del reloj usamos siempre la preposición «at» (at 6:30 am)."
          }
        ]
      },
      {
        "code": "L6",
        "title": "Lesson 6 · Prepositions of Time & Place + Directions",
        "topic": "Uso de IN / ON / AT, lugares de la ciudad y cómo dar direcciones",
        "icon": "🗺️",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "My birthday is ___ July, ___ July 15th, and the party starts ___ 8:00 pm.",
            "options": [
              "in / on / at",
              "on / in / at",
              "in / at / on",
              "at / on / in"
            ],
            "answer": "in / on / at",
            "explanation": "Regla de oro: IN para meses y años (in July), ON para días y fechas específicas (on July 15th) y AT para horas (at 8:00 pm)."
          },
          {
            "type": "multiple_choice",
            "prompt": "The pharmacy is ___ the bank and the bakery.",
            "options": [
              "between",
              "among",
              "in",
              "under"
            ],
            "answer": "between",
            "explanation": "«Between» significa «entre dos lugares específicos» (between the bank and the bakery)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Excuse me, how can I get to the museum? — Go ___ ahead for two blocks and ___ left.",
            "options": [
              "straight / turn",
              "direct / go",
              "front / make",
              "up / walk"
            ],
            "answer": "straight / turn",
            "explanation": "Para dar direcciones usamos «Go straight ahead» (sigue derecho) y «turn left / turn right» (cruza a la izquierda/derecha)."
          },
          {
            "type": "multiple_choice",
            "prompt": "The bus stop is right ___ of the hospital, on the other side of the street.",
            "options": [
              "across from",
              "inside",
              "under",
              "between"
            ],
            "answer": "across from",
            "explanation": "«Across from» (o «in front of / opposite») indica que está cruzando la calle, frente al otro lugar."
          },
          {
            "type": "multiple_choice",
            "prompt": "We never have classes ___ Sundays, but we study ___ the morning.",
            "options": [
              "on / in",
              "in / on",
              "at / in",
              "on / at"
            ],
            "answer": "on / in",
            "explanation": "Usamos «on» con los días de la semana (on Sundays) e «in» con las partes del día (in the morning / afternoon / evening)."
          }
        ]
      },
      {
        "code": "L7",
        "title": "Lesson 7 · Past of Verb To Be: Was / Were",
        "topic": "Pasado del verbo To Be (was, were, wasn't, weren't) y expresiones de pasado",
        "icon": "⏳",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Where ___ you yesterday evening? — I ___ at the cinema with my friends.",
            "options": [
              "were / was",
              "was / were",
              "were / were",
              "did / was"
            ],
            "answer": "were / was",
            "explanation": "Con «you/we/they» usamos «were», y con «I/he/she/it» usamos «was»."
          },
          {
            "type": "multiple_choice",
            "prompt": "The weather ___ cold last weekend; it ___ sunny and warm!",
            "options": [
              "wasn't / was",
              "weren't / were",
              "didn't / was",
              "isn't / is"
            ],
            "answer": "wasn't / was",
            "explanation": "«The weather» (it) es singular, por lo que en pasado usa «wasn't» y «was»."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ they tired after the soccer match? — B: Yes, they ___.",
            "options": [
              "Were / were",
              "Was / was",
              "Did / did",
              "Are / are"
            ],
            "answer": "Were / were",
            "explanation": "Con «they» preguntamos «Were they...?» y respondemos «Yes, they were.»"
          },
          {
            "type": "multiple_choice",
            "prompt": "When ___ your brother born? — He ___ born in 2010.",
            "options": [
              "was / was",
              "were / was",
              "did / is",
              "is / was"
            ],
            "answer": "was / was",
            "explanation": "En inglés «nacer» se expresa en pasado pasivo con To Be: «He was born in...»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which time expression is used with the Past Tense (was / were)?",
            "options": [
              "two days ago",
              "next week",
              "tomorrow morning",
              "right now"
            ],
            "answer": "two days ago",
            "explanation": "«Ago» (two days ago = hace dos días), «yesterday» y «last night» indican tiempo pasado."
          }
        ]
      },
      {
        "code": "L8",
        "title": "Lesson 8 · Simple Future: Will & Be Going To",
        "topic": "Futuro con Will / Won't y planes con Am/Is/Are Going To",
        "icon": "🚀",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Look at those dark clouds! It ___ rain in a few minutes.",
            "options": [
              "is going to",
              "will be",
              "going to",
              "wills"
            ],
            "answer": "is going to",
            "explanation": "Usamos «be going to» para planes ya decididos o predicciones con evidencia visible ahora mismo (nubes oscuras)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Don't worry about the heavy bag. I ___ help you carry it!",
            "options": [
              "will",
              "am going",
              "going to",
              "did"
            ],
            "answer": "will",
            "explanation": "Usamos «will» para decisiones espontáneas tomadas en el momento de hablar, promesas y ofrecimientos."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the negative contraction of «will not»?",
            "options": [
              "won't",
              "willn't",
              "don't will",
              "not will"
            ],
            "answer": "won't",
            "explanation": "La forma negativa contraída de «will not» es «won't» (She won't arrive late)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Next year we ___ travel to Madrid to visit our cousins.",
            "options": [
              "are going to",
              "going to",
              "will to",
              "is going to"
            ],
            "answer": "are going to",
            "explanation": "La estructura completa requiere el verbo To Be antes de «going to»: We + are going to + verbo."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ she be at the meeting tomorrow? — B: Yes, she ___.",
            "options": [
              "Will / will",
              "Is / will",
              "Does / will",
              "Will / is"
            ],
            "answer": "Will / will",
            "explanation": "Las preguntas con «Will» se responden de forma corta con «Yes, she will / No, she won't»."
          }
        ]
      }
    ]
  },
  "Adultos 2": {
    "title": "Adultos Nivel 2 — Intermediate Study Guide",
    "badge": "📗 Adultos 2",
    "lessons": [
      {
        "code": "Review",
        "title": "Review · The 4 Simple Tenses & Phrases to Gain Time",
        "topic": "Repaso de To Be, Do/Does, Was/Were, Will y muletillas conversacionales",
        "icon": "🔄",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "___ your mother cook arepas on weekends? — Yes, she ___.",
            "options": [
              "Does / does",
              "Is / is",
              "Do / do",
              "Did / does"
            ],
            "answer": "Does / does",
            "explanation": "Con un verbo de acción («cook») en presente simple y 3ra persona singular usamos el auxiliar «Does»."
          },
          {
            "type": "multiple_choice",
            "prompt": "They ___ at home last night because they went to a concert.",
            "options": [
              "weren't",
              "didn't",
              "don't",
              "wasn't"
            ],
            "answer": "weren't",
            "explanation": "Para estar en un lugar en pasado («at home last night») con «they» usamos «weren't»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which phrase is best to gain time while thinking in a conversation without staying silent?",
            "options": [
              "Well... let me think...",
              "Goodbye, see you!",
              "I don't speak.",
              "Repeat the test."
            ],
            "answer": "Well... let me think...",
            "explanation": "Frases como «Well... let me think...» o «What I mean is...» te dan tiempo para pensar manteniendo la fluidez."
          },
          {
            "type": "multiple_choice",
            "prompt": "We ___ travel next month because we have exams at the university.",
            "options": [
              "won't",
              "weren't",
              "doesn't",
              "aren't"
            ],
            "answer": "won't",
            "explanation": "Para negar una acción futura («next month») con «will» usamos «won't» + verbo base."
          },
          {
            "type": "multiple_choice",
            "prompt": "Transform into a negative sentence: «He lives in Maracay.»",
            "options": [
              "He doesn't live in Maracay.",
              "He don't live in Maracay.",
              "He isn't live in Maracay.",
              "He doesn't lives in Maracay."
            ],
            "answer": "He doesn't live in Maracay.",
            "explanation": "En negativo de 3ra persona usamos «doesn't» y el verbo vuelve a su forma base sin -s («live»)."
          }
        ]
      },
      {
        "code": "L1",
        "title": "Lesson 1 · Pronouns, There + To Be, Both/Either/Neither & Connectors",
        "topic": "Pronombres reflexivos e indefinidos, there was/will be, hogar, cine y recetas",
        "icon": "🏠",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Be careful with that knife! You might cut ___.",
            "options": [
              "yourself",
              "himself",
              "myself",
              "yourselves"
            ],
            "answer": "yourself",
            "explanation": "El pronombre reflexivo para «you» (singular) es «yourself»."
          },
          {
            "type": "multiple_choice",
            "prompt": "In my future house, ___ a big swimming pool and three bedrooms.",
            "options": [
              "there will be",
              "there is",
              "there were",
              "will have"
            ],
            "answer": "there will be",
            "explanation": "«Habrá» en futuro se dice «there will be» (tanto para singular como para plural)."
          },
          {
            "type": "multiple_choice",
            "prompt": "I knocked on the door, but ___ answered. The house was empty.",
            "options": [
              "nobody",
              "anybody",
              "somebody",
              "everybody"
            ],
            "answer": "nobody",
            "explanation": "Con verbo en afirmativo («answered»), «nobody / no one» expresa ausencia total («nadie respondió»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "___ coffee and tea have caffeine, so I don't drink ___ of them at night.",
            "options": [
              "Both / either",
              "Either / neither",
              "Neither / both",
              "Both / neither"
            ],
            "answer": "Both / either",
            "explanation": "«Both A and B» = ambos; después de un verbo negativo («don't drink») usamos «either» (ninguno de los dos)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which sequence of connectors is best to explain a recipe step by step?",
            "options": [
              "First, then, after that, finally",
              "Because, although, however, so",
              "Yesterday, ago, last, never",
              "Who, which, whose, where"
            ],
            "answer": "First, then, after that, finally",
            "explanation": "Para ordenar pasos de una receta o historia usamos conectores de secuencia: First, then, next, after that, finally."
          }
        ]
      },
      {
        "code": "L2",
        "title": "Lesson 2 · Simple Past: Regular & Irregular Verbs + DID",
        "topic": "Verbos regulares (-ed), irregulares y preguntas/negaciones con DID",
        "icon": "✈️",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Last summer we ___ to Mérida and ___ lots of photos in the mountains.",
            "options": [
              "went / took",
              "go / take",
              "went / taked",
              "goed / took"
            ],
            "answer": "went / took",
            "explanation": "Ambos son verbos irregulares en pasado: go → went, take → took."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: Where ___ you go on your last vacation? — B: I ___ to Margarita Island.",
            "options": [
              "did / went",
              "did / go",
              "were / went",
              "do / went"
            ],
            "answer": "did / went",
            "explanation": "En la pregunta con «did» el verbo va en base («did you go»), pero en la respuesta afirmativa va en pasado («I went»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "She ___ the movie last night because she ___ too tired.",
            "options": [
              "didn't watch / was",
              "didn't watched / was",
              "wasn't watch / did",
              "don't watch / were"
            ],
            "answer": "didn't watch / was",
            "explanation": "Con «didn't» el verbo queda en base («didn't watch»); el verbo To Be no usa did sino «was/were»."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the Simple Past of «buy», «see», and «write»?",
            "options": [
              "bought, saw, wrote",
              "buyed, seed, writed",
              "bought, seen, written",
              "brought, saw, wrote"
            ],
            "answer": "bought, saw, wrote",
            "explanation": "Pasado simple irregular: buy → bought, see → saw, write → wrote."
          },
          {
            "type": "multiple_choice",
            "prompt": "How is the -ed ending pronounced in «wanted» and «needed»?",
            "options": [
              "/ɪd/ (extra syllable)",
              "/t/",
              "/d/",
              "silent"
            ],
            "answer": "/ɪd/ (extra syllable)",
            "explanation": "Cuando el verbo termina en sonido /t/ o /d/ (want, need, decide), la terminación «-ed» se pronuncia /ɪd/."
          }
        ]
      },
      {
        "code": "L3",
        "title": "Lesson 3 · Possessive Adjectives & Possessive Pronouns",
        "topic": "My vs. mine, your vs. yours, her vs. hers, their vs. theirs, Whose...?",
        "icon": "🔑",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "This is not ___ umbrella. ___ is blue, and this one is black.",
            "options": [
              "my / Mine",
              "mine / My",
              "my / My",
              "me / Mine"
            ],
            "answer": "my / Mine",
            "explanation": "«My» es adjetivo posesivo (va antes del sustantivo: my umbrella); «Mine» es pronombre posesivo (reemplaza al sustantivo)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: ___ notebook is this on the desk? — B: It's ___ (belonging to María).",
            "options": [
              "Whose / hers",
              "Who's / her",
              "Whose / her",
              "Who / hers"
            ],
            "answer": "Whose / hers",
            "explanation": "«Whose» pregunta «¿De quién?» y «hers» significa «el/la de ella» sin repetir el sustantivo."
          },
          {
            "type": "multiple_choice",
            "prompt": "We love ___ academy, and the students in the other classroom love ___ too.",
            "options": [
              "our / theirs",
              "ours / their",
              "our / their",
              "ours / theirs"
            ],
            "answer": "our / theirs",
            "explanation": "«Our» acompaña a «academy»; «theirs» va solo al final significando «la de ellos»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Is that car ___? — Yes, they bought it last week.",
            "options": [
              "theirs",
              "their",
              "them",
              "they're"
            ],
            "answer": "theirs",
            "explanation": "Como no sigue ningún sustantivo después, usamos el pronombre posesivo «theirs»."
          },
          {
            "type": "multiple_choice",
            "prompt": "The dog wagged ___ tail happily when it saw ___ owner.",
            "options": [
              "its / its",
              "it's / its",
              "its / it's",
              "his / it's"
            ],
            "answer": "its / its",
            "explanation": "«Its» (sin apóstrofo) es el posesivo de cosas o animales; «it's» con apóstrofo significa «it is»."
          }
        ]
      },
      {
        "code": "L4",
        "title": "Lesson 4 · Past Habits: Used To vs. Be Used To",
        "topic": "Hábitos del pasado (used to + verbo) vs. estar acostumbrado a (be used to + -ing)",
        "icon": "🚲",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "When I was a child, I ___ play video games all afternoon, but now I'm busy.",
            "options": [
              "used to",
              "use to",
              "am used to",
              "was used to"
            ],
            "answer": "used to",
            "explanation": "«Used to + verbo base» expresa un hábito o estado en el pasado que ya no ocurre en el presente."
          },
          {
            "type": "multiple_choice",
            "prompt": "She ___ like coffee before, but now she drinks two cups every morning.",
            "options": [
              "didn't use to",
              "didn't used to",
              "wasn't use to",
              "not used to"
            ],
            "answer": "didn't use to",
            "explanation": "En negativo e interrogativo con «did/didn't», «used to» pierde la «d» y se escribe «use to»."
          },
          {
            "type": "multiple_choice",
            "prompt": "I live in a big city now, so I ___ the heavy traffic and noise.",
            "options": [
              "am used to",
              "used to",
              "use to",
              "did use to"
            ],
            "answer": "am used to",
            "explanation": "«Be used to + sustantivo o verbo -ing» significa «estar acostumbrado a algo» en el presente."
          },
          {
            "type": "multiple_choice",
            "prompt": "Doctors are used to ___ long hours at the hospital.",
            "options": [
              "working",
              "work",
              "worked",
              "works"
            ],
            "answer": "working",
            "explanation": "Después de «be used to» o «get used to», el verbo lleva siempre «-ing» porque «to» aquí es preposición."
          },
          {
            "type": "multiple_choice",
            "prompt": "___ you ___ live in Valencia before moving to Caracas?",
            "options": [
              "Did / use to",
              "Did / used to",
              "Were / use to",
              "Are / used to"
            ],
            "answer": "Did / use to",
            "explanation": "Pregunta sobre hábito pasado: «Did + sujeto + use to + verbo base?»."
          }
        ]
      },
      {
        "code": "L5",
        "title": "Lesson 5 · Adjectives -ED vs. -ING & Adjective Order",
        "topic": "Diferencia entre adjetivos con -ed y -ing y orden correcto de los adjetivos",
        "icon": "🎭",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "The lecture was really ___, so many students felt ___ and sleepy.",
            "options": [
              "boring / bored",
              "bored / boring",
              "boring / boring",
              "bored / bored"
            ],
            "answer": "boring / bored",
            "explanation": "Los adjetivos con «-ing» describen lo que causa la emoción (the lecture was boring) y con «-ed» cómo se siente la persona (felt bored)."
          },
          {
            "type": "multiple_choice",
            "prompt": "We are very ___ about our trip to London next month! It will be an ___ experience.",
            "options": [
              "excited / exciting",
              "exciting / excited",
              "excited / excited",
              "exciting / exciting"
            ],
            "answer": "excited / exciting",
            "explanation": "Nosotros nos sentimos «excited» (-ed); la experiencia es «exciting» (-ing)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Choose the correct order of adjectives (OSASCOMP):",
            "options": [
              "a beautiful small old Italian car",
              "an Italian old small beautiful car",
              "a small beautiful Italian old car",
              "an old Italian beautiful small car"
            ],
            "answer": "a beautiful small old Italian car",
            "explanation": "El orden natural en inglés es: Opinion (beautiful) → Size (small) → Age (old) → Origin (Italian) + sustantivo."
          },
          {
            "type": "multiple_choice",
            "prompt": "She bought a ___ jacket at the mall yesterday.",
            "options": [
              "nice new black leather",
              "leather black new nice",
              "black leather nice new",
              "new black nice leather"
            ],
            "answer": "nice new black leather",
            "explanation": "Orden OSASCOMP: Opinion (nice) → Age (new) → Color (black) → Material (leather)."
          },
          {
            "type": "multiple_choice",
            "prompt": "That horror movie was ___! I was ___ the whole time.",
            "options": [
              "terrifying / terrified",
              "terrified / terrifying",
              "terrify / terrifying",
              "terrified / terrified"
            ],
            "answer": "terrifying / terrified",
            "explanation": "La película causa miedo («terrifying») y yo sentí miedo («terrified»)."
          }
        ]
      },
      {
        "code": "L6",
        "title": "Lesson 6 · Comparatives & Superlatives",
        "topic": "Comparativos (-er / more), superlativos (-est / the most), igualdades e irregulares",
        "icon": "🏆",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "A plane ticket is ___ than a bus ticket, but flying is much ___.",
            "options": [
              "more expensive / faster",
              "expensiver / more fast",
              "most expensive / fastest",
              "more expensive / more fast"
            ],
            "answer": "more expensive / faster",
            "explanation": "Adjetivos largos usan «more ... than» (more expensive); adjetivos cortos agregan «-er» (faster)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Angel Falls is ___ waterfall in the world!",
            "options": [
              "the highest",
              "higher than",
              "the most high",
              "highest"
            ],
            "answer": "the highest",
            "explanation": "Para el superlativo de un adjetivo corto usamos «the + adjetivo-est» (the highest)."
          },
          {
            "type": "multiple_choice",
            "prompt": "What are the comparative and superlative forms of «good» and «bad»?",
            "options": [
              "better – the best / worse – the worst",
              "gooder – the goodest / badder – the baddest",
              "more good / more bad",
              "better – the best / badder – the worst"
            ],
            "answer": "better – the best / worse – the worst",
            "explanation": "Son irregulares: good → better → the best; bad → worse → the worst."
          },
          {
            "type": "multiple_choice",
            "prompt": "This laptop is just ___ fast ___ the new model, and it costs less!",
            "options": [
              "as / as",
              "more / than",
              "so / than",
              "as / than"
            ],
            "answer": "as / as",
            "explanation": "Para comparaciones de igualdad usamos «as + adjetivo + as» (tan rápido como)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Yesterday was ___ day of the year so far.",
            "options": [
              "the hottest",
              "the hotter",
              "the most hot",
              "hotter than"
            ],
            "answer": "the hottest",
            "explanation": "«Hot» es CVC (consonante-vocal-consonante), por lo que duplica la «t» en el superlativo: «the hottest»."
          }
        ]
      },
      {
        "code": "L7",
        "title": "Lesson 7 · Adverbs of Manner & Frequency",
        "topic": "Adjetivo vs. adverbio (-ly, well, fast, hard) y posición de adverbios de frecuencia",
        "icon": "🎯",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Sofía is a very ___ pianist; she plays the piano ___.",
            "options": [
              "good / well",
              "well / good",
              "good / goodly",
              "good / good"
            ],
            "answer": "good / well",
            "explanation": "«Good» es adjetivo (describe a pianist) y «well» es su adverbio irregular (describe cómo toca: plays well)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Please drive ___! It is raining ___ tonight.",
            "options": [
              "carefully / heavily",
              "careful / heavy",
              "carefully / heavy",
              "careful / heavily"
            ],
            "answer": "carefully / heavily",
            "explanation": "Para describir cómo se realiza un verbo (drive, raining) usamos adverbios terminados en «-ly»."
          },
          {
            "type": "multiple_choice",
            "prompt": "He works very ___ and runs very ___. (Be careful with irregular adverbs!)",
            "options": [
              "hard / fast",
              "hardly / fastly",
              "hard / fastly",
              "hardly / fast"
            ],
            "answer": "hard / fast",
            "explanation": "«Hard» y «fast» tienen la misma forma como adjetivo y como adverbio («hardly» significa «apenas/casi no» y «fastly» no existe)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Choose the sentence with the correct position of the frequency adverb:",
            "options": [
              "She is never late, and she always arrives early.",
              "She never is late, and she arrives always early.",
              "Never she is late, and always she arrives.",
              "She is late never, and she always arrives early."
            ],
            "answer": "She is never late, and she always arrives early.",
            "explanation": "Los adverbios de frecuencia van DESPUÉS del verbo To Be (is never) y ANTES de los demás verbos (always arrives)."
          },
          {
            "type": "multiple_choice",
            "prompt": "After verbs of perception like «look», «feel», «taste», and «smell», we use:",
            "options": [
              "an adjective (e.g., This soup tastes great!)",
              "an adverb with -ly (e.g., This soup tastes greatly!)",
              "a noun only",
              "an infinitive"
            ],
            "answer": "an adjective (e.g., This soup tastes great!)",
            "explanation": "Los verbos de los sentidos (taste, smell, look, sound, feel) van seguidos de adjetivo: «You look tired / It smells delicious»."
          }
        ]
      },
      {
        "code": "L8",
        "title": "Lesson 8 · Modal Verbs: Ability, Advice & Obligation",
        "topic": "Can, could, should, must, have to, may y might",
        "icon": "💡",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "You look very pale and have a fever. You ___ see a doctor today.",
            "options": [
              "should",
              "can't",
              "may not",
              "could to"
            ],
            "answer": "should",
            "explanation": "Para dar consejos o recomendaciones («deberías») usamos «should / shouldn't» + verbo base."
          },
          {
            "type": "multiple_choice",
            "prompt": "Passengers ___ wear a seatbelt during takeoff. It is mandatory by law.",
            "options": [
              "must",
              "might",
              "could",
              "may"
            ],
            "answer": "must",
            "explanation": "«Must» y «have to» expresan obligación firme o reglas obligatorias."
          },
          {
            "type": "multiple_choice",
            "prompt": "Tomorrow is a holiday, so we ___ wake up early! It's not necessary.",
            "options": [
              "don't have to",
              "mustn't",
              "can't",
              "shouldn't to"
            ],
            "answer": "don't have to",
            "explanation": "«Don't have to» significa «no es necesario»; en cambio «mustn't» significa «está prohibido»."
          },
          {
            "type": "multiple_choice",
            "prompt": "When my grandfather was young, he ___ run a marathon in three hours.",
            "options": [
              "could",
              "can",
              "may",
              "must"
            ],
            "answer": "could",
            "explanation": "«Could» expresa habilidad general en el pasado («podía / sabía»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Take a jacket with you because it ___ get cold later tonight.",
            "options": [
              "might",
              "must",
              "should to",
              "has to"
            ],
            "answer": "might",
            "explanation": "«May» y «might» expresan posibilidad futura no segura («puede que / tal vez»)."
          }
        ]
      }
    ]
  },
  "Adultos 3": {
    "title": "Adultos Nivel 3 — Advanced Study Guide",
    "badge": "📕 Adultos 3",
    "lessons": [
      {
        "code": "L1",
        "title": "Lesson 1 · Progressive Tenses (Present, Past & Future) & Stative Verbs",
        "topic": "Los 3 tiempos continuos, verbos de estado (stative verbs) y acciones interrumpidas",
        "icon": "⚡",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "I ___ her phone number, and I ___ she is telling the truth. (Stative verbs!)",
            "options": [
              "know / believe",
              "am knowing / am believing",
              "knows / believing",
              "knew / am believing"
            ],
            "answer": "know / believe",
            "explanation": "Los verbos de estado mental o posesión (know, believe, own, want, need) NO llevan «-ing»; se usan en forma simple."
          },
          {
            "type": "multiple_choice",
            "prompt": "While the teacher ___ into the classroom, the students ___ loudly.",
            "options": [
              "was walking / were talking",
              "walked / talked",
              "is walking / were talking",
              "will walk / talked"
            ],
            "answer": "was walking / were talking",
            "explanation": "Dos acciones en progreso al mismo tiempo en el pasado usan Past Progressive (was/were + -ing)."
          },
          {
            "type": "multiple_choice",
            "prompt": "I ___ dinner when suddenly the lights ___ out.",
            "options": [
              "was cooking / went",
              "cooked / were going",
              "am cooking / went",
              "was cooking / go"
            ],
            "answer": "was cooking / went",
            "explanation": "La acción larga de fondo va en Past Progressive (was cooking) y la acción corta que interrumpe va en Simple Past (went)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Don't call me at 8:00 pm tomorrow because I ___ in the concert at that time.",
            "options": [
              "will be singing",
              "am singing",
              "sang",
              "will sing"
            ],
            "answer": "will be singing",
            "explanation": "Para una acción que estará en pleno progreso en una hora específica del futuro usamos Future Progressive (will be + -ing)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Why does the sentence «She is always forgetting my birthday!» use Present Progressive?",
            "options": [
              "To express an annoying habit or complaint",
              "Because it is a stative verb",
              "To talk about the past",
              "Because forget is irregular"
            ],
            "answer": "To express an annoying habit or complaint",
            "explanation": "«Always + Present Progressive» se usa en nivel avanzado para expresar una queja sobre un hábito que molesta."
          }
        ]
      },
      {
        "code": "L2",
        "title": "Lesson 2 · Perfect Tenses (Present, Past & Future)",
        "topic": "Have/has + participio, had + participio, will have + participio, already/yet/since/for",
        "icon": "⏳",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "We have lived in this city ___ 2018, so we have been here ___ several years.",
            "options": [
              "since / for",
              "for / since",
              "since / since",
              "already / yet"
            ],
            "answer": "since / for",
            "explanation": "«Since» marca el punto de inicio en el tiempo (since 2018) y «for» marca la duración total (for several years)."
          },
          {
            "type": "multiple_choice",
            "prompt": "By the time we arrived at the station, the train ___ already ___.",
            "options": [
              "had / left",
              "has / left",
              "have / leave",
              "will have / left"
            ],
            "answer": "had / left",
            "explanation": "El Past Perfect («had + participio») expresa una acción que ocurrió ANTES que otra acción pasada (arrived)."
          },
          {
            "type": "multiple_choice",
            "prompt": "A: Have you finished the report ___? — B: Yes, I have ___ sent it to the manager.",
            "options": [
              "yet / already",
              "already / yet",
              "since / for",
              "ever / never"
            ],
            "answer": "yet / already",
            "explanation": "«Yet» va al final de preguntas y negaciones; «already» va en afirmaciones entre have/has y el participio."
          },
          {
            "type": "multiple_choice",
            "prompt": "By December next year, she ___ graduated from university.",
            "options": [
              "will have",
              "has",
              "had",
              "would have"
            ],
            "answer": "will have",
            "explanation": "«By + fecha futura» usa Future Perfect («will have + participio») para algo que ya se habrá completado."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the difference between «She has gone to Madrid» and «She has been to Madrid»?",
            "options": [
              "'Has gone' means she is still in Madrid; 'has been' means she visited and returned",
              "They mean the exact same thing",
              "'Has been' means she is still there now",
              "'Has gone' is past simple"
            ],
            "answer": "'Has gone' means she is still in Madrid; 'has been' means she visited and returned",
            "explanation": "«Has gone to» = se fue y sigue allá; «has been to» = ha ido/visitado alguna vez y ya regresó."
          }
        ]
      },
      {
        "code": "L3",
        "title": "Lesson 3 · Countable & Uncountable Nouns, Containers & Quantifiers",
        "topic": "Few vs. a few, little vs. a little, containers y sustantivos incontables avanzados",
        "icon": "🛒",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Be careful! In English, «advice», «information», «furniture», and «luggage» are:",
            "options": [
              "Uncountable nouns (singular verb, no plural -s)",
              "Countable plural nouns",
              "Verbs",
              "Adjectives"
            ],
            "answer": "Uncountable nouns (singular verb, no plural -s)",
            "explanation": "En inglés «advice, information, furniture, luggage, news, bread» son SIEMPRE incontables (decimos «a piece of advice», nunca «advices»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "I have ___ close friends here, so I feel happy and never lonely.",
            "options": [
              "a few",
              "a little",
              "little",
              "much"
            ],
            "answer": "a few",
            "explanation": "«A few» (unos cuantos, sentido positivo) se usa con sustantivos contables en plural («friends»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Hurry up! We have very ___ time left before the flight closes.",
            "options": [
              "little",
              "few",
              "many",
              "a few"
            ],
            "answer": "little",
            "explanation": "«Little» (casi nada de, sentido negativo/escaso) se usa con sustantivos incontables como «time»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Can you buy a ___ of bread and two ___ of toothpaste at the supermarket?",
            "options": [
              "loaf / tubes",
              "slice / loaves",
              "bar / cans",
              "jar / cartons"
            ],
            "answer": "loaf / tubes",
            "explanation": "Los envases/medidas exactos son: «a loaf of bread» (una barra/pan entero) y «a tube of toothpaste» (un tubo de pasta dental)."
          },
          {
            "type": "multiple_choice",
            "prompt": "How ___ pieces of luggage did you bring on the trip?",
            "options": [
              "many",
              "much",
              "little",
              "amount"
            ],
            "answer": "many",
            "explanation": "Aunque «luggage» es incontable, la palabra «pieces» es contable plural, por lo que usamos «How many pieces of...»."
          }
        ]
      },
      {
        "code": "L4",
        "title": "Lesson 4 · Conditionals: Zero, First, Second, Third & Mixed",
        "topic": "Los 4 condicionales (0, 1st, 2nd, 3rd) y condicionales mixtos",
        "icon": "🔀",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "First Conditional (Real future possibility): If it ___ tomorrow, we ___ the event indoors.",
            "options": [
              "rains / will hold",
              "will rain / hold",
              "rained / would hold",
              "had rained / would have held"
            ],
            "answer": "rains / will hold",
            "explanation": "En el 1er Condicional, la cláusula con «If» va en Presente Simple (rains) y el resultado va con «will + verbo»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Second Conditional (Hypothetical present): If I ___ you, I ___ accept that job offer immediately.",
            "options": [
              "were / would",
              "was / will",
              "am / would",
              "had been / would"
            ],
            "answer": "were / would",
            "explanation": "En el 2do Condicional (hipotético) usamos «If I were you...» con «would + verbo base»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Third Conditional (Impossible past regret): If you ___ me earlier, I ___ helped you.",
            "options": [
              "had called / would have",
              "called / would have",
              "had called / would",
              "would have called / had"
            ],
            "answer": "had called / would have",
            "explanation": "El 3er Condicional habla del pasado irreal: «If + Past Perfect (had called) → would have + participio (helped)»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Zero Conditional (Scientific truth): If you ___ water to 100°C, it ___.",
            "options": [
              "heat / boils",
              "heated / would boil",
              "will heat / boils",
              "heat / will boiled"
            ],
            "answer": "heat / boils",
            "explanation": "Para leyes científicas y hechos universales (Zero Conditional) usamos Presente Simple en ambas partes."
          },
          {
            "type": "multiple_choice",
            "prompt": "We will go to the beach ___ it rains. («a menos que»)",
            "options": [
              "unless",
              "if",
              "as long as",
              "because"
            ],
            "answer": "unless",
            "explanation": "«Unless» significa «if not» (a menos que / salvo que)."
          }
        ]
      },
      {
        "code": "L5",
        "title": "Lesson 5 · Perfect Continuous Tenses",
        "topic": "Present, Past & Future Perfect Continuous (have/had/will have been + -ing)",
        "icon": "🏃",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Her eyes are red because she ___ for two hours.",
            "options": [
              "has been crying",
              "is crying",
              "cried",
              "had cried"
            ],
            "answer": "has been crying",
            "explanation": "Present Perfect Continuous («has been + -ing») enfatiza la duración de una acción reciente cuya evidencia es visible ahora."
          },
          {
            "type": "multiple_choice",
            "prompt": "We ___ for the bus for 40 minutes when it finally arrived.",
            "options": [
              "had been waiting",
              "have been waiting",
              "were waiting",
              "will have been waiting"
            ],
            "answer": "had been waiting",
            "explanation": "Past Perfect Continuous («had been + -ing») muestra cuánto tiempo llevaba ocurriendo algo antes de otro evento pasado (arrived)."
          },
          {
            "type": "multiple_choice",
            "prompt": "By next June, Professor Molina ___ at our academy for ten years.",
            "options": [
              "will have been teaching",
              "has been teaching",
              "had been teaching",
              "is teaching"
            ],
            "answer": "will have been teaching",
            "explanation": "Future Perfect Continuous («will have been + -ing») proyecta la duración acumulada de una acción hasta un momento del futuro."
          },
          {
            "type": "multiple_choice",
            "prompt": "How long ___ you ___ English?",
            "options": [
              "have / been learning",
              "are / learning",
              "did / learn",
              "had / learning"
            ],
            "answer": "have / been learning",
            "explanation": "Con «How long...?» para una acción que empezó en el pasado y continúa hoy, usamos «have/has been + -ing»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Which verb CANNOT be used in the Perfect Continuous form because it is stative?",
            "options": [
              "know (I have known her for years)",
              "work (I have been working)",
              "study (She has been studying)",
              "wait (We have been waiting)"
            ],
            "answer": "know (I have known her for years)",
            "explanation": "Los verbos de estado como «know, believe, own» nunca llevan «-ing», por lo que usan Present Perfect Simple («I have known»)."
          }
        ]
      },
      {
        "code": "L6",
        "title": "Lesson 6 · Causative & Permission: Make, Let & Be Allowed To",
        "topic": "Obligar (make someone do), permitir (let someone do) y tener permiso (be allowed to)",
        "icon": "🚦",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "My parents ___ me clean my room before going out with my friends.",
            "options": [
              "made",
              "let to",
              "allowed",
              "forced"
            ],
            "answer": "made",
            "explanation": "Con «make» y «let» usamos objeto + verbo base SIN «to»: «made me clean» (me obligaron/hicieron limpiar)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Our teacher ___ us use a dictionary during the writing practice.",
            "options": [
              "let",
              "allowed",
              "made to",
              "permitted"
            ],
            "answer": "let",
            "explanation": "«Let + persona + verbo sin to» expresa permiso activo («let us use»). Con «allow» sería «allowed us TO use»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Visitors ___ take flash photographs inside the art museum.",
            "options": [
              "are not allowed to",
              "don't let to",
              "aren't make to",
              "not allowed"
            ],
            "answer": "are not allowed to",
            "explanation": "La estructura pasiva de permiso lleva siempre «to»: «be (not) allowed to + verbo base»."
          },
          {
            "type": "multiple_choice",
            "prompt": "That sad movie ___ everyone in the theater cry.",
            "options": [
              "made",
              "allowed",
              "let to",
              "caused"
            ],
            "answer": "made",
            "explanation": "«Make someone + verbo base» también significa causar una reacción emocional («made everyone cry»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "In passive voice, «The boss made him stay late» becomes: «He was made ___ late.»",
            "options": [
              "to stay",
              "stay",
              "staying",
              "stayed"
            ],
            "answer": "to stay",
            "explanation": "Importante matiz avanzado: cuando «make» pasa a voz pasiva («was made»), SÍ recupera la partícula «to» («was made to stay»)."
          }
        ]
      },
      {
        "code": "L7",
        "title": "Lesson 7 · Reported Speech (Indirect Speech)",
        "topic": "Cambio de tiempos verbales (backshift), say vs. tell y preguntas reportadas",
        "icon": "🗣️",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Direct: «I am working on a project.» → Reported: She said that she ___ on a project.",
            "options": [
              "was working",
              "is working",
              "has been working",
              "will be working"
            ],
            "answer": "was working",
            "explanation": "En Reported Speech los tiempos retroceden un paso al pasado (backshift): Present Progressive (am working) → Past Progressive (was working)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Direct: «I will call you tomorrow.» → He told me that he ___ call me the next day.",
            "options": [
              "would",
              "will",
              "can",
              "shall"
            ],
            "answer": "would",
            "explanation": "Al reportar en pasado, «will» cambia a «would» y «tomorrow» cambia a «the next day / the following day»."
          },
          {
            "type": "multiple_choice",
            "prompt": "What is the grammar difference between «say» and «tell» in Reported Speech?",
            "options": [
              "'Tell' requires a personal object (told me); 'say' does not (said that...)",
              "'Say' requires a personal object (said me)",
              "They are used identically",
              "'Tell' is only for questions"
            ],
            "answer": "'Tell' requires a personal object (told me); 'say' does not (said that...)",
            "explanation": "Decimos «She told ME that...» (con receptor) o «She said that...» (nunca «She said me»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Direct question: «Where do you live?» → She asked me where ___.",
            "options": [
              "I lived",
              "did I live",
              "do I live",
              "lived I"
            ],
            "answer": "I lived",
            "explanation": "Las preguntas reportadas usan el orden afirmativo (sujeto + verbo en pasado) y NO usan el auxiliar do/did: «where I lived»."
          },
          {
            "type": "multiple_choice",
            "prompt": "Direct Yes/No question: «Are you ready?» → He asked us ___ we were ready.",
            "options": [
              "if / whether",
              "that",
              "what",
              "who"
            ],
            "answer": "if / whether",
            "explanation": "Cuando reportamos una pregunta cerrada (Yes/No), conectamos con «if» o «whether» («He asked us if we were ready»)."
          }
        ]
      },
      {
        "code": "L8",
        "title": "Lesson 8 · Passive Voice & Modals of Deduction",
        "topic": "Voz pasiva en todos los tiempos y deducción lógica (must/can't/might have + participio)",
        "icon": "⚖️",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "Active: «Gabriel García Márquez wrote One Hundred Years of Solitude.» → Passive:",
            "options": [
              "One Hundred Years of Solitude was written by G. G. Márquez.",
              "One Hundred Years of Solitude wrote by G. G. Márquez.",
              "One Hundred Years of Solitude has written by G. G. Márquez.",
              "One Hundred Years of Solitude is wrote by G. G. Márquez."
            ],
            "answer": "One Hundred Years of Solitude was written by G. G. Márquez.",
            "explanation": "La voz pasiva en pasado simple se forma con «was / were + past participle» (was written by...)."
          },
          {
            "type": "multiple_choice",
            "prompt": "The new hospital ___ built right now; it will open next year.",
            "options": [
              "is being",
              "is",
              "has been",
              "was"
            ],
            "answer": "is being",
            "explanation": "En Present Continuous Passive («está siendo construido») usamos «am/is/are + being + participio»."
          },
          {
            "type": "multiple_choice",
            "prompt": "The ground is completely wet this morning. It ___ rained heavily last night!",
            "options": [
              "must have",
              "can't have",
              "should",
              "must to"
            ],
            "answer": "must have",
            "explanation": "Para una deducción casi 100% segura sobre el pasado usamos «must have + participio»."
          },
          {
            "type": "multiple_choice",
            "prompt": "You ___ seen María at the mall yesterday because she is in Spain all month!",
            "options": [
              "can't have",
              "must have",
              "should have",
              "may have"
            ],
            "answer": "can't have",
            "explanation": "Para deducir que algo fue lógicamente imposible en el pasado usamos «can't have / couldn't have + participio»."
          },
          {
            "type": "multiple_choice",
            "prompt": "All safety protocols must ___ respected by the staff.",
            "options": [
              "be",
              "been",
              "being",
              "to be"
            ],
            "answer": "be",
            "explanation": "Con verbos modales en voz pasiva la estructura es «modal + be + past participle» (must be respected)."
          }
        ]
      },
      {
        "code": "L9",
        "title": "Lesson 9 · Phrasal Verbs in Context",
        "topic": "Verbos compuestos separables e inseparables para la vida diaria y el trabajo",
        "icon": "🧩",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "We need to stop at the gas station before we ___ fuel!",
            "options": [
              "run out of",
              "look after",
              "give up",
              "turn off"
            ],
            "answer": "run out of",
            "explanation": "«Run out of» significa quedarse sin algo o agotarse (run out of fuel / time / money)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Never ___ on your dreams! Keep practicing every day.",
            "options": [
              "give up",
              "put off",
              "take off",
              "find out"
            ],
            "answer": "give up",
            "explanation": "«Give up» significa rendirse o abandonar un hábito."
          },
          {
            "type": "multiple_choice",
            "prompt": "Can you ___ my dog this weekend while I am traveling?",
            "options": [
              "look after",
              "look for",
              "look up",
              "look forward to"
            ],
            "answer": "look after",
            "explanation": "«Look after» = cuidar a alguien; «look for» = buscar; «look up» = buscar información en un diccionario/lista."
          },
          {
            "type": "multiple_choice",
            "prompt": "With separable phrasal verbs like «turn off», which sentence is grammatically INCORRECT?",
            "options": [
              "Turn off it.",
              "Turn it off.",
              "Turn the light off.",
              "Turn off the light."
            ],
            "answer": "Turn off it.",
            "explanation": "Cuando el objeto de un phrasal verb separable es un pronombre (it, them), DEBE ir en el medio: «Turn it off» (nunca «Turn off it»)."
          },
          {
            "type": "multiple_choice",
            "prompt": "Don't ___ until tomorrow what you can do today!",
            "options": [
              "put off",
              "call off",
              "get along",
              "bring up"
            ],
            "answer": "put off",
            "explanation": "«Put off» significa posponer o postergar; «call off» significa cancelar por completo."
          }
        ]
      },
      {
        "code": "L10",
        "title": "Lesson 10 · Relative Clauses (Who, Which, That, Whose, Where)",
        "topic": "Cláusulas relativas especificativas y explicativas con who, which, whose, where, when",
        "icon": "🔗",
        "questions": [
          {
            "type": "multiple_choice",
            "prompt": "An architect is a professional ___ designs buildings and bridges.",
            "options": [
              "who",
              "which",
              "whose",
              "where"
            ],
            "answer": "who",
            "explanation": "Usamos «who» (o «that») para referirnos a personas."
          },
          {
            "type": "multiple_choice",
            "prompt": "That is the woman ___ daughter won the national scholarship.",
            "options": [
              "whose",
              "who",
              "which",
              "whom"
            ],
            "answer": "whose",
            "explanation": "«Whose» es el pronombre relativo posesivo («cuyo / cuya»): whose daughter = cuya hija."
          },
          {
            "type": "multiple_choice",
            "prompt": "Mérida is the city ___ my grandparents met fifty years ago.",
            "options": [
              "where",
              "which",
              "who",
              "whose"
            ],
            "answer": "where",
            "explanation": "Para indicar el lugar donde ocurre una acción dentro de la cláusula relativa usamos «where»."
          },
          {
            "type": "multiple_choice",
            "prompt": "My laptop, ___ I bought last year, works extremely fast. (Note the commas!)",
            "options": [
              "which",
              "that",
              "who",
              "where"
            ],
            "answer": "which",
            "explanation": "En cláusulas relativas explicativas entre comas (non-defining), NO se puede usar «that»; para cosas usamos «which»."
          },
          {
            "type": "multiple_choice",
            "prompt": "The book ___ you recommended to me was fascinating.",
            "options": [
              "that / which",
              "who",
              "whose",
              "where"
            ],
            "answer": "that / which",
            "explanation": "Para objetos o cosas en cláusulas sin comas podemos usar tanto «that» como «which»."
          }
        ]
      }
    ]
  }
};

  const supabaseBookCache = {};
  let currentBookKey = 'Adultos 1';
  let activeLessonObj = null;
  let currentQuestionIdx = 0;
  let currentSessionCorrect = 0;
  let hasAnsweredCurrent = false;

  function getProgressStorageKey(book, lessonCode) {
    const uid = (window.currentUserProfile && window.currentUserProfile.id) ? window.currentUserProfile.id : 'guest';
    return `le_lx_prog_${uid}_${book}_${lessonCode}`;
  }

  function getLessonSavedScore(book, lessonCode) {
    try {
      const raw = localStorage.getItem(getProgressStorageKey(book, lessonCode));
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveLessonScore(book, lessonCode, correct, total) {
    try {
      const prev = getLessonSavedScore(book, lessonCode);
      const bestCorrect = prev ? Math.max(prev.correct || 0, correct) : correct;
      localStorage.setItem(
        getProgressStorageKey(book, lessonCode),
        JSON.stringify({ correct: bestCorrect, total, updatedAt: Date.now() })
      );
    } catch (e) {}
  }

  function speakExerciseText(text) {
    if (!('speechSynthesis' in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const cleaned = String(text)
        .replace(/[_]{2,}/g, ' blank ')
        .replace(/[🐱🐶🍎🍌🐸🍇🍊🖐️👀👂👏🦶👃😀🥱🍕👩👨👵👴👶🐷🦁🐘🐵⚽🪁🧸🍦🥛😋⭐❤️🎈✏️📖🎒]/g, '');
      const u = new SpeechSynthesisUtterance(cleaned);
      u.lang = 'en-US';
      u.rate = currentBookKey.startsWith('Kids') || currentBookKey.startsWith('Junior') ? 0.84 : 0.92;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  async function fetchBookLessonsFromSupabase(bookKey) {
    const targetBook = DEFAULT_BOOK_CATALOG[bookKey] ? bookKey : 'Adultos 1';
    if (supabaseBookCache[targetBook]) {
      return supabaseBookCache[targetBook];
    }

    const client = typeof window.getSupabaseClient === 'function' ? window.getSupabaseClient() : window.supabaseClient;
    if (!client) {
      return DEFAULT_BOOK_CATALOG[targetBook].lessons;
    }

    try {
      const { data, error } = await client
        .from('lesson_exercises')
        .select('*')
        .eq('book_level', targetBook)
        .eq('active', true)
        .order('id', { ascending: true });

      if (!error && Array.isArray(data) && data.length > 0) {
        const lessonsMap = new Map();
        data.forEach(row => {
          const code = String(row.lesson_code || 'L1').trim();
          if (!lessonsMap.has(code)) {
            lessonsMap.set(code, {
              code,
              title: row.lesson_title || `Lesson ${code}`,
              topic: row.lesson_topic || '',
              icon: row.lesson_icon || '📖',
              questions: []
            });
          }
          let parsedOpts = [];
          if (Array.isArray(row.options)) {
            parsedOpts = row.options;
          } else if (typeof row.options === 'string') {
            try { parsedOpts = JSON.parse(row.options); } catch (e) { parsedOpts = []; }
          }
          lessonsMap.get(code).questions.push({
            type: row.question_type || 'multiple_choice',
            prompt: row.prompt,
            options: parsedOpts,
            answer: row.correct_answer,
            explanation: row.explanation || ''
          });
        });

        const grouped = Array.from(lessonsMap.values());
        if (grouped.length > 0) {
          supabaseBookCache[targetBook] = grouped;
          return grouped;
        }
      }
    } catch (err) {
      console.warn('⚠️ Usando banco curricular local para lesson_exercises:', err);
    }

    return DEFAULT_BOOK_CATALOG[targetBook].lessons;
  }

  async function onExercisesTabOpened() {
    const profile = window.currentUserProfile || {};
    const studentLevel = profile.course_level || 'Adultos 1';
    if (!hasInitializedSelector) {
      hasInitializedSelector = true;
      currentBookKey = DEFAULT_BOOK_CATALOG[studentLevel] ? studentLevel : 'Adultos 1';
      populateBookSelector();
    }
    await selectBook(currentBookKey);
  }

  let hasInitializedSelector = false;

  function populateBookSelector() {
    const selectEl = document.getElementById('lxBookSelect');
    if (!selectEl) return;
    selectEl.innerHTML = '';
    Object.keys(DEFAULT_BOOK_CATALOG).forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = `${DEFAULT_BOOK_CATALOG[key].badge} — ${DEFAULT_BOOK_CATALOG[key].title}`;
      opt.selected = (key === currentBookKey);
      selectEl.appendChild(opt);
    });
  }

  async function selectBook(bookKey) {
    currentBookKey = DEFAULT_BOOK_CATALOG[bookKey] ? bookKey : 'Adultos 1';
    const selectEl = document.getElementById('lxBookSelect');
    if (selectEl && selectEl.value !== currentBookKey) {
      selectEl.value = currentBookKey;
    }

    const bookMeta = DEFAULT_BOOK_CATALOG[currentBookKey];
    const titleEl = document.getElementById('lxCurrentBookTitle');
    if (titleEl && bookMeta) {
      titleEl.innerText = bookMeta.title;
    }

    showLessonsGridView();
    const lessons = await fetchBookLessonsFromSupabase(currentBookKey);
    renderLessonsGrid(lessons);
  }

  function showLessonsGridView() {
    const gridView = document.getElementById('lxLessonGridView');
    const runnerView = document.getElementById('lxPracticeRunnerView');
    const summaryView = document.getElementById('lxSummaryView');
    if (gridView) gridView.classList.remove('hidden');
    if (runnerView) runnerView.classList.add('hidden');
    if (summaryView) summaryView.classList.add('hidden');
  }

  function renderLessonsGrid(lessons) {
    const container = document.getElementById('lxLessonsGrid');
    if (!container) return;
    container.innerHTML = '';

    let completedCount = 0;

    lessons.forEach(lesson => {
      const saved = getLessonSavedScore(currentBookKey, lesson.code);
      const totalQ = lesson.questions.length;
      const isCompleted = saved && saved.correct >= Math.ceil(totalQ * 0.6);
      if (isCompleted) completedCount++;

      const card = document.createElement('div');
      card.className = `lx-lesson-card ${isCompleted ? 'lx-lesson-completed' : ''}`;

      const statusBadge = saved
        ? `<span class="lx-lesson-score-pill ${isCompleted ? 'lx-pill-done' : 'lx-pill-progress'}">
             ${isCompleted ? '✅' : '⭐'} Mejor puntaje: ${saved.correct}/${totalQ}
           </span>`
        : `<span class="lx-lesson-score-pill lx-pill-new">${totalQ} ejercicios</span>`;

      card.innerHTML = `
        <div class="lx-lesson-card-top">
          <div class="lx-lesson-icon-box">${lesson.icon || '📖'}</div>
          ${statusBadge}
        </div>
        <h3 class="lx-lesson-card-title">${lesson.title}</h3>
        <p class="lx-lesson-card-topic">${lesson.topic || ''}</p>
        <button type="button" class="lq-btn-3d ${isCompleted ? 'lq-btn-blue' : 'lq-btn-green'} lx-start-lesson-btn">
          ▶ Practicar ${lesson.code}
        </button>
      `;

      card.querySelector('button').onclick = () => startLessonPractice(lesson);
      container.appendChild(card);
    });

    const progressEl = document.getElementById('lxBookProgressSummary');
    if (progressEl) {
      progressEl.innerText = `${completedCount} de ${lessons.length} lecciones completadas`;
    }
  }

  function startLessonPractice(lesson) {
    activeLessonObj = lesson;
    currentQuestionIdx = 0;
    currentSessionCorrect = 0;

    const gridView = document.getElementById('lxLessonGridView');
    const runnerView = document.getElementById('lxPracticeRunnerView');
    const summaryView = document.getElementById('lxSummaryView');

    if (gridView) gridView.classList.add('hidden');
    if (summaryView) summaryView.classList.add('hidden');
    if (runnerView) runnerView.classList.remove('hidden');

    renderCurrentQuestion();
  }

  function renderCurrentQuestion() {
    if (!activeLessonObj) return;
    hasAnsweredCurrent = false;

    const questions = activeLessonObj.questions;
    const q = questions[currentQuestionIdx];
    const total = questions.length;

    const titleEl = document.getElementById('lxRunnerLessonTitle');
    const stepEl = document.getElementById('lxRunnerStepText');
    const barEl = document.getElementById('lxRunnerProgressBar');
    const promptEl = document.getElementById('lxQuestionPrompt');
    const optionsEl = document.getElementById('lxQuestionOptions');
    const explainBox = document.getElementById('lxExplanationBox');
    const nextBtn = document.getElementById('lxNextQuestionBtn');

    if (titleEl) titleEl.innerText = `${currentBookKey} · ${activeLessonObj.title}`;
    if (stepEl) stepEl.innerText = `Ejercicio ${currentQuestionIdx + 1} de ${total}`;
    if (barEl) {
      const pct = Math.round(((currentQuestionIdx) / total) * 100);
      barEl.style.width = `${pct}%`;
    }

    if (promptEl) {
      const formatted = String(q.prompt || '').replace(
        /___+/g,
        '<span class="lq-blank-slot" id="lxPromptBlankSlot">_____</span>'
      );
      promptEl.innerHTML = formatted;
    }

    if (explainBox) explainBox.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');

    if (!optionsEl) return;
    optionsEl.innerHTML = '';

    const shuffledOptions = [...(q.options || [])].sort(() => 0.5 - Math.random());
    shuffledOptions.forEach(optText => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lq-btn-3d lq-btn-neutral lx-option-btn';
      btn.innerText = optText;
      btn.onclick = () => handleSelectOption(btn, optText, q);
      optionsEl.appendChild(btn);
    });
  }

  function handleSelectOption(selectedBtn, chosenValue, questionObj) {
    if (hasAnsweredCurrent) return;
    hasAnsweredCurrent = true;

    const isCorrect = chosenValue.trim().toLowerCase() === String(questionObj.answer || '').trim().toLowerCase();
    const allBtns = document.querySelectorAll('#lxQuestionOptions .lx-option-btn');

    allBtns.forEach(btn => {
      btn.disabled = true;
      if (btn.innerText.trim().toLowerCase() === String(questionObj.answer || '').trim().toLowerCase()) {
        btn.className = 'lq-btn-3d lq-btn-green lx-option-btn';
      }
    });

    if (isCorrect) {
      currentSessionCorrect++;
      const slot = document.getElementById('lxPromptBlankSlot');
      if (slot) {
        slot.innerText = questionObj.answer;
        slot.classList.add('filled-ok');
      }
      if (typeof window.confetti === 'function') {
        window.confetti({ particleCount: 22, spread: 50, origin: { y: 0.82 } });
      }
    } else {
      selectedBtn.className = 'lq-btn-3d lq-btn-red lx-option-btn lq-shake';
    }

    const explainBox = document.getElementById('lxExplanationBox');
    const explainTitle = document.getElementById('lxExplainStatus');
    const explainText = document.getElementById('lxExplainText');
    const nextBtn = document.getElementById('lxNextQuestionBtn');

    if (explainBox) {
      explainBox.className = `lx-explanation-card ${isCorrect ? 'lx-explain-ok' : 'lx-explain-err'}`;
      explainBox.classList.remove('hidden');
    }
    if (explainTitle) {
      explainTitle.innerText = isCorrect
        ? '✅ ¡Respuesta Correcta!'
        : `❌ Respuesta correcta: "${questionObj.answer}"`;
    }
    if (explainText) {
      explainText.innerText = questionObj.explanation || '';
    }
    if (nextBtn) {
      const total = activeLessonObj.questions.length;
      nextBtn.innerText = (currentQuestionIdx + 1 < total)
        ? 'Siguiente Ejercicio →'
        : '🏆 Ver Resultado de la Lección';
      nextBtn.classList.remove('hidden');
    }
  }

  function nextQuestion() {
    if (!activeLessonObj) return;
    const total = activeLessonObj.questions.length;
    if (currentQuestionIdx + 1 < total) {
      currentQuestionIdx++;
      renderCurrentQuestion();
    } else {
      showLessonSummary();
    }
  }

  function showLessonSummary() {
    const total = activeLessonObj.questions.length;
    saveLessonScore(currentBookKey, activeLessonObj.code, currentSessionCorrect, total);

    const runnerView = document.getElementById('lxPracticeRunnerView');
    const summaryView = document.getElementById('lxSummaryView');
    const barEl = document.getElementById('lxRunnerProgressBar');
    if (barEl) barEl.style.width = '100%';

    if (runnerView) runnerView.classList.add('hidden');
    if (summaryView) summaryView.classList.remove('hidden');

    const pct = Math.round((currentSessionCorrect / total) * 100);
    const titleEl = document.getElementById('lxSummaryTitle');
    const subEl = document.getElementById('lxSummarySubtitle');
    const scoreEl = document.getElementById('lxSummaryScoreBig');

    if (scoreEl) scoreEl.innerText = `${currentSessionCorrect} / ${total} (${pct}%)`;
    if (titleEl) {
      titleEl.innerText = pct >= 80
        ? '🎉 ¡Lección Dominada!'
        : (pct >= 60 ? '👍 ¡Buen Trabajo!' : '💪 ¡Sigue Practicando!');
    }
    if (subEl) {
      subEl.innerText = `Completaste la práctica de ${activeLessonObj.title} del libro ${currentBookKey}.`;
    }
  }

  function retryCurrentLesson() {
    if (activeLessonObj) {
      startLessonPractice(activeLessonObj);
    }
  }

  function speakCurrentPrompt() {
    if (!activeLessonObj) return;
    const q = activeLessonObj.questions[currentQuestionIdx];
    if (q) speakExerciseText(q.prompt);
  }

  window.LessonExercises = {
    onExercisesTabOpened,
    selectBook,
    showLessonsGridView: () => selectBook(currentBookKey),
    nextQuestion,
    retryCurrentLesson,
    speakCurrentPrompt
  };
})();
