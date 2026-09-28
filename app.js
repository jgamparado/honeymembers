/* =============================================================================
   HONEY TRICK PROTOCOL — Área de Miembros
   El elixir de miel · programa de 21 días
   -----------------------------------------------------------------------------
   Todo lo que se cambia en el día a día está en CONFIG, VIDEOS,
   LESSONS, SEVEN, PREPS y RESOURCES. El resto no se toca.
   ============================================================================= */

const CONFIG = {
  /* Página de compra independiente del Acelerador del Caballo 7x.
     No uses la URL del upsell one-click del funnel: solo vale una vez,
     justo después de la compra. */
  acceleratorUrl: "#",

  /* Código que se envía al cliente en el e-mail de confirmación del 7x. */
  acceleratorCode: "CABALLO7X",

  supportEmail: "soporte@honeytrickprotocol.com",
  totalDays: 21
};

/* IDs de YouTube, módulo por módulo.
   Deja null mientras el video no esté listo: el módulo muestra
   su contenido escrito, que funciona por sí solo. */
const VIDEOS = {
  bienvenida: null,
  bloqueo: null,
  dosis: null,
  "elixir-manana": null,
  horario: null,
  hidratacion: null,
  semanas: null,
  mantener: null,
  rutina7x: null,
  matinal: null,
  control: null,
  nutricion: null,
  errores: null,
  "mantenimiento-7x": null
};

/* -------------------------------------------------------------------------- */
/* Programa principal                                                         */
/* -------------------------------------------------------------------------- */

const MODULES = ["Fundamentos", "La práctica diaria", "Los 21 días"];

const LESSONS = [
  {
    id: "bienvenida", mod: 0, dur: "06 min", type: "Inicio",
    title: "Bienvenido al Honey Trick Protocol",
    desc: "Cómo funciona tu área, dónde encontrar tu dosis y las tres reglas que deciden el resultado en 21 días.",
    steps: [
      "Empieza por la pestaña Mi dosis: cuatro preguntas y obtienes tus cantidades exactas.",
      "Toma tu elixir por la mañana, en ayunas, antes del café y del desayuno.",
      "Marca tu día en Progreso. Lo que da el resultado es la constancia, no la intensidad.",
      "No te saltes más de dos días seguidos: es el único error que te hace empezar de cero.",
      "Date tres semanas. Nada útil se puede juzgar antes del décimo día."
    ]
  },
  {
    id: "bloqueo", mod: 0, dur: "11 min", type: "Entender",
    title: "Por qué se bloqueó después de los 40",
    desc: "No es la edad ni es la cabeza. Es un problema de circulación, y la circulación se puede trabajar.",
    steps: [
      "La erección es un fenómeno mecánico: la sangre tiene que llenar los cuerpos cavernosos y quedarse ahí.",
      "Con los años, la pared interna de los vasos pierde elasticidad y el flujo baja.",
      "Se nota siempre en el mismo orden: tarda más en llegar, es menos firme y no se sostiene.",
      "Eso activa el círculo de la ansiedad: miedo a fallar, más tensión, menos flujo. No es debilidad, es un efecto físico.",
      "Los antioxidantes de la miel cruda, la canela y el jengibre apoyan la salud de esos vasos. Esa es la palanca del protocolo.",
      "No es un estimulante. Nada pasa en diez minutos: se construye día tras día."
    ]
  },
  {
    id: "dosis", mod: 0, dur: "09 min", type: "Método",
    title: "Tu dosis personalizada",
    desc: "Por qué dos hombres no toman la misma cantidad, y cómo encontrar la tuya en cuatro preguntas.",
    steps: [
      "Tu peso define el volumen base: agua, jengibre y limón.",
      "Tu nivel de azúcar en sangre define la cantidad de miel. Es el único punto que nunca se fuerza.",
      "Los tres primeros días siempre se hacen con media dosis, para que el estómago se adapte al jengibre.",
      "Abre la pestaña Mi dosis y guarda el resultado: no cambia durante todo el ciclo.",
      "Si tu peso cambia de forma clara, vuelve a hacer el cálculo. Si no, no lo toques."
    ]
  },
  {
    id: "elixir-manana", mod: 1, dur: "12 min", type: "Práctica",
    title: "El elixir de la mañana, paso a paso",
    desc: "Cinco minutos, cinco ingredientes. La preparación exacta, en el orden correcto.",
    steps: [
      "Calienta el agua hasta que esté tibia, no caliente. Si quema al tocarla, espera: el agua hirviendo destruye las enzimas de la miel.",
      "Ralla el jengibre fresco directamente en el vaso.",
      "Agrega la canela de Ceilán y revuelve bien para que no quede flotando.",
      "Agrega la miel al final, con el agua ya tibia, y revuelve hasta que se disuelva.",
      "Exprime el limón encima: equilibra el sabor y aporta vitamina C.",
      "Tómalo en los siguientes diez minutos y enjuaga el vaso enseguida. Ese pequeño detalle es lo que evita que abandones a la semana."
    ]
  },
  {
    id: "horario", mod: 1, dur: "08 min", type: "Práctica",
    title: "El horario: en ayunas, y por qué importa",
    desc: "La misma dosis tomada a la hora equivocada pierde la mitad de su valor.",
    steps: [
      "En ayunas, la absorción es rápida y completa. Con el estómago lleno se pierde buena parte.",
      "Espera 20 a 30 minutos antes de desayunar.",
      "El café no es problema una vez que pasa ese tiempo.",
      "Un horario fijo vale más que un horario perfecto: amarra el elixir a un hábito que ya tienes.",
      "Si sales temprano, deja el jengibre rallado y el limón exprimido listos la noche anterior en el refrigerador."
    ]
  },
  {
    id: "hidratacion", mod: 1, dur: "07 min", type: "Práctica",
    title: "Circulación e hidratación",
    desc: "Lo que sostiene el protocolo en segundo plano, sin pedirte nada extra.",
    steps: [
      "Apunta a 1,5 litros de agua repartidos en el día, no de golpe.",
      "Un vaso al despertar, uno antes de cada comida y uno a media tarde. Con eso ya cumples.",
      "El alcohol en la noche es lo que más frena el avance de la mañana siguiente.",
      "Diez minutos de caminata al día bastan para apoyar el trabajo del protocolo.",
      "El cigarro actúa exactamente al revés del protocolo, sobre los mismos vasos."
    ]
  },
  {
    id: "semanas", mod: 2, dur: "14 min", type: "Referencias",
    title: "Lo que cambia semana a semana",
    desc: "Cómo se ve un avance normal, y lo que debe alertarte.",
    steps: [
      "Semana 1: pocos cambios visibles. Es normal. La digestión se ajusta al jengibre.",
      "Semana 2: la primera señal casi siempre es cómo despiertas por la mañana, no el desempeño.",
      "Semana 3: la constancia se asienta. También es la semana en que muchos aflojan, porque el cuerpo se acostumbra a la dosis.",
      "Anota tu energía de la mañana cada día en Progreso: es el indicador más confiable, mucho antes que las sensaciones.",
      "Lo que debe alertarte: acidez persistente, alergia (picazón, hinchazón) o cambios fuertes en tu glucosa. En ese caso, suspende y habla con tu médico."
    ]
  },
  {
    id: "mantener", mod: 2, dur: "10 min", type: "Referencias",
    title: "Mantener el resultado",
    desc: "Qué hacer después del día 21 para no volver al punto de partida.",
    steps: [
      "Después de 21 días, pasa a cuatro elixires por semana en lugar de siete.",
      "Mantén el mismo horario: lo que sostiene el hábito es el horario, no la motivación.",
      "Retoma un ciclo completo de 21 días si sientes que vuelve a bajar.",
      "Lo que se pierde más rápido no es el resultado: es el hábito.",
      "Guarda tu seguimiento: releer tus propias notas del día 3 es lo que te hace retomar."
    ]
  }
];

/* -------------------------------------------------------------------------- */
/* Acelerador del Caballo 7x (contenido bloqueado)                            */
/* -------------------------------------------------------------------------- */

const SEVEN = [
  {
    id: "rutina7x", dur: "13 min", type: "Rutina",
    title: "Rutina Aceleradora 7X",
    desc: "Siete minutos de ejercicios en casa que trabajan el piso pélvico y la circulación de la zona.",
    steps: [
      "Contracciones del piso pélvico: aprieta como si cortaras la orina, sostén 5 segundos, suelta 5 segundos. 10 repeticiones.",
      "Contracciones rápidas: aprieta y suelta en un segundo. 15 repeticiones.",
      "Puente de glúteos: acostado boca arriba, sube la cadera y aprieta 3 segundos arriba. 12 repeticiones.",
      "Sentadillas lentas, sin peso: 3 segundos bajando, 1 subiendo. 12 repeticiones.",
      "Hazla una vez al día, a cualquier hora. En 3 o 4 semanas la diferencia en control y firmeza se nota.",
      "No hagas las contracciones mientras orinas: eso solo sirve para identificar el músculo la primera vez."
    ]
  },
  {
    id: "matinal", dur: "09 min", type: "Protocolo",
    title: "Protocolo Matinal de Activación",
    desc: "Los primeros 20 minutos del día, ordenados para despertar la circulación.",
    steps: [
      "Al despertar: un vaso de agua antes que nada.",
      "Cinco minutos de luz natural, en la ventana o afuera. Ayuda a regular tu reloj interno y tu energía.",
      "Tu elixir de miel, en ayunas, como siempre.",
      "Termina la ducha con 30 segundos de agua fresca: activa la circulación sin castigar al cuerpo.",
      "Cinco minutos de caminata o de la Rutina Aceleradora antes del desayuno.",
      "El indicador a vigilar es cómo despiertas por la mañana, entre el día 8 y el día 12."
    ]
  },
  {
    id: "control", dur: "11 min", type: "Control",
    title: "Módulo de Estabilidad y Control",
    desc: "Cómo romper el círculo de la ansiedad para que la cabeza no sabotee al cuerpo.",
    steps: [
      "El miedo a fallar libera adrenalina, y la adrenalina contrae los vasos. Por eso pensar \"y si fallo\" ya es la mitad del problema.",
      "Respiración 4-6: inhala 4 segundos por la nariz, exhala 6 por la boca. Cinco rondas bajan la tensión en un minuto.",
      "Cambia el foco del resultado a las sensaciones: lo que tocas, lo que sientes. La presión baja cuando dejas de vigilarte.",
      "Si pierdes firmeza, no te detengas a mirarte: sigue en contacto, respira, y deja que vuelva.",
      "Dormir menos de 6 horas eleva el estrés y baja la testosterona. El sueño es parte del protocolo.",
      "Hablarlo con tu pareja quita más presión que cualquier técnica."
    ]
  },
  {
    id: "nutricion", dur: "10 min", type: "Guía",
    title: "Guía Nutricional de Apoyo Circulatorio",
    desc: "Lo que suma al efecto del elixir, y lo que lo frena.",
    steps: [
      "Suman: betabel (remolacha), espinaca y arúgula, ricos en nitratos naturales que el cuerpo usa para dilatar los vasos.",
      "Suman: sandía, nueces, pescado, aguacate y cacao puro (70% o más), unas porciones a la semana.",
      "Frenan: alcohol en exceso, refrescos azucarados y ultraprocesados. Suben el azúcar y castigan los vasos.",
      "Frenan: cenas pesadas y tarde. La digestión compite con la circulación.",
      "La regla de los 20 minutos: nada de comida justo después del elixir; después, todo vuelve a la normalidad.",
      "Toma una foto de esta lista y guárdala en el teléfono. Es la única forma de usarla de verdad."
    ]
  },
  {
    id: "errores", dur: "07 min", type: "Checklist",
    title: "Blueprint de Eliminación de Errores",
    desc: "Los siete errores que hacen que el protocolo no funcione, y cómo evitarlos.",
    steps: [
      "Usar miel procesada o \"jarabe sabor miel\". Busca miel cruda o pura, de preferencia de un productor local.",
      "Mezclar la miel con agua hirviendo. Siempre tibia.",
      "Usar canela cassia en cantidad. La de Ceilán es la indicada; la cassia en exceso no es buena para el hígado.",
      "Saltarse días. Dos seguidos te regresan al inicio.",
      "Esperar resultados en tres días y abandonar al quinto.",
      "Tomar el elixir y compensarlo con alcohol en la noche.",
      "Dormir cinco horas y esperar que el cuerpo responda como si durmiera siete."
    ]
  },
  {
    id: "mantenimiento-7x", dur: "09 min", type: "Protocolo",
    title: "Protocolo de Mantenimiento",
    desc: "Qué hacer una vez que el avance se asienta, para que no se pierda.",
    steps: [
      "Ritmo de crucero: cuatro elixires por semana y la Rutina Aceleradora tres veces por semana.",
      "El Protocolo Matinal se mantiene los días de trabajo; los fines de semana es libre.",
      "Las tres señales para retomar un ciclo completo: despertar sin energía, menos firmeza, más ansiedad antes del momento.",
      "Lo que puedes dejar sin consecuencias, y lo que te conviene conservar de por vida: agua, sueño y caminata.",
      "El control de los 90 días: la única fecha que tienes que anotar en tu agenda."
    ]
  }
];

/* -------------------------------------------------------------------------- */
/* Preparaciones                                                              */
/* -------------------------------------------------------------------------- */

const PREPS = [
  {
    art: "a", badge: "Base", badgeClass: "",
    title: "El elixir de la mañana",
    desc: "La preparación de referencia. La que harás 21 mañanas seguidas.",
    time: "5 minutos",
    ing: [
      "Tu cantidad de miel cruda (ver Mi dosis)",
      "Tu volumen de agua tibia",
      "Tu cantidad de canela de Ceilán",
      "Tu cantidad de jengibre fresco rallado",
      "El jugo de limón indicado"
    ],
    steps: [
      "Calienta el agua hasta que esté tibia, sin llegar a hervir.",
      "Ralla el jengibre en el vaso y agrega la canela.",
      "Agrega la miel y revuelve hasta que se disuelva por completo.",
      "Exprime el limón, revuelve una última vez y tómalo en los siguientes diez minutos."
    ]
  },
  {
    art: "b", badge: "2 minutos", badgeClass: "gold",
    title: "La versión exprés",
    desc: "Para las mañanas en que sales temprano. Sin rallador, sin excusas.",
    time: "2 minutos",
    ing: [
      "Tu cantidad de jengibre, rallado la noche anterior",
      "El jugo de limón indicado, exprimido la noche anterior",
      "Tu cantidad de canela de Ceilán",
      "Tu cantidad de miel cruda",
      "Tu volumen de agua tibia"
    ],
    steps: [
      "La noche anterior: ralla el jengibre y exprime el limón en un frasco pequeño con tapa, y guárdalo en el refrigerador.",
      "Por la mañana: vacía el frasco en el vaso con el agua tibia.",
      "Agrega la canela y la miel, y revuelve.",
      "Tómalo sin colar. El jengibre es parte de la dosis."
    ]
  },
  {
    art: "c", badge: "Glucosa alta", badgeClass: "crimson",
    title: "La versión baja en azúcar",
    desc: "Si tienes el azúcar alto o prediabetes, esta es la que tienes que hacer.",
    time: "5 minutos",
    ing: [
      "½ cucharadita de miel cruda, no más",
      "Tu volumen de agua tibia",
      "Tu cantidad de canela de Ceilán",
      "Tu cantidad de jengibre fresco rallado",
      "El jugo de limón indicado"
    ],
    steps: [
      "Prepara el elixir igual que la versión base, con el agua tibia, el jengibre y la canela.",
      "Agrega solo media cucharadita de miel: da el sabor y el efecto sin cargar de azúcar.",
      "Tómalo siempre en ayunas y nunca junto con dulces o refrescos.",
      "Si tomas medicamento para la diabetes, confirma con tu médico antes de empezar."
    ]
  }
];

/* -------------------------------------------------------------------------- */
/* Mi dosis — cuestionario y cálculo                                          */
/* -------------------------------------------------------------------------- */

const DOSE_QUESTIONS = [
  {
    id: "peso",
    q: "¿Cuál es tu peso aproximado?",
    hint: "Define el volumen base de tu elixir.",
    options: ["Menos de 70 kg", "70 a 85 kg", "85 a 100 kg", "Más de 100 kg"]
  },
  {
    id: "edad",
    q: "¿En qué rango de edad estás?",
    hint: "Ajusta la duración del ciclo, no las cantidades.",
    options: ["40 a 49 años", "50 a 59 años", "60 a 69 años", "70 años o más"]
  },
  {
    id: "azucar",
    q: "¿Cómo está tu azúcar en sangre?",
    hint: "Este punto, y solo este, define la cantidad de miel. Nunca lo fuerces.",
    options: ["Normal", "Un poco alta o prediabetes", "Tengo diabetes o tomo medicamento"]
  },
  {
    id: "antiguedad",
    q: "¿Hace cuánto notas una baja?",
    hint: "Indica cuántos ciclos conviene hacer.",
    options: ["Menos de un año", "Entre 1 y 3 años", "Más de 3 años"]
  }
];

const AGUA = ["200 ml de agua tibia", "250 ml de agua tibia", "300 ml de agua tibia", "350 ml de agua tibia"];
const JENGIBRE = ["½ cucharadita rallada", "½ cucharadita rallada", "1 cucharadita rallada", "1 cucharadita rallada"];
const LIMON = ["El jugo de medio limón", "El jugo de medio limón", "El jugo de un limón", "El jugo de un limón"];
const CANELA = ["1 pizca (⅛ de cucharadita)", "¼ de cucharadita", "¼ de cucharadita", "¼ de cucharadita"];
const MIEL_PESO = ["1 cucharadita", "1 cucharadita", "1 ½ cucharaditas", "2 cucharaditas"];
const MIEL_AZUCAR = [
  null,
  { v: "½ cucharadita", note: "No la aumentes. Tómala siempre en ayunas." },
  { v: "½ cucharadita, solo con el visto bueno de tu médico", note: "Consulta antes de empezar. Si no te lo autoriza, haz el elixir sin miel." }
];
const CYCLE_DAYS = [21, 21, 28, 28];
const CYCLES = [
  "Un ciclo completo es suficiente en tu caso.",
  "Un ciclo completo, y luego una semana de mantenimiento con 4 elixires.",
  "Dos ciclos seguidos, con 5 días de pausa entre uno y otro."
];

function computeDose(a) {
  const p = a.peso, ed = a.edad, az = a.azucar, an = a.antiguedad;
  const miel = MIEL_AZUCAR[az] || { v: MIEL_PESO[p], note: "Una sola vez al día. No pases de esta cantidad." };
  return {
    miel: miel.v,
    mielNote: miel.note,
    agua: AGUA[p],
    canela: CANELA[p],
    jengibre: JENGIBRE[p],
    limon: LIMON[p],
    horario: "Por la mañana, en ayunas",
    horarioNote: "20 a 30 minutos antes del desayuno",
    arranque: "Media dosis del día 1 al día 3",
    arranqueNote: "Dosis completa a partir del día 4",
    ciclo: CYCLE_DAYS[ed] + " días",
    cicloNote: CYCLES[an],
    soft: az > 0
  };
}

/* -------------------------------------------------------------------------- */
/* Progreso                                                                   */
/* -------------------------------------------------------------------------- */

const DAILY_CHECKS = [
  { key: "elixir", label: "Elixir de la mañana tomado en ayunas" },
  { key: "agua", label: "1,5 litros de agua en el día" },
  { key: "ayuno", label: "Nada de comida en los 20 minutos siguientes" },
  { key: "caminata", label: "10 minutos de caminata" }
];

const ENERGY_SCALE = ["Nada", "Baja", "Regular", "Buena", "Fuerte"];

/* -------------------------------------------------------------------------- */
/* Recursos                                                                   */
/* -------------------------------------------------------------------------- */

const RESOURCES = [
  {
    title: "Lista de compras de la semana",
    desc: "Lo necesario para siete días sin volver a pensarlo. Una sola vuelta al súper.",
    copy: "1 frasco de miel cruda (250 g), canela de Ceilán en polvo, 1 raíz de jengibre fresco, 7 limones"
  },
  {
    title: "Tu recordatorio diario",
    desc: "Copia este texto en una alarma del teléfono, a la hora de tu elixir. Es lo que te sostiene la segunda semana.",
    copy: "Honey Trick: preparar mi elixir, tomarlo en ayunas, marcar mi día."
  },
  {
    title: "Soporte",
    desc: "¿Una pregunta sobre el protocolo, tu dosis o tu acceso? Escríbenos y te respondemos en menos de 24 horas hábiles.",
    copy: CONFIG.supportEmail
  }
];

/* -------------------------------------------------------------------------- */
/* Íconos                                                                     */
/* -------------------------------------------------------------------------- */

const ICON_PLAY_SM = '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M8 6 L18 12 L8 18 Z"></path></svg>';
const ICON_PLAY_MD = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 6 L18 12 L8 18 Z"></path></svg>';
const ICON_PLAY_LG = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 6 L18 12 L8 18 Z"></path></svg>';
const ICON_CHEVRON = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6 L15 12 L9 18"></path></svg>';
const ICON_BACK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 6 L9 12 L15 18"></path></svg>';
const ICON_CHECK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12 L10 17 L19 7"></path></svg>';
const ICON_LOCK = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="5" y="10.5" width="14" height="10" rx="2.5"></rect><path d="M8.5 10.5 V7.5 a3.5 3.5 0 0 1 7 0 v3"></path></svg>';
const ICON_WARN = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 L21 19 H3 Z"></path><line x1="12" y1="10" x2="12" y2="14"></line><circle cx="12" cy="16.6" r="1" fill="currentColor" stroke="none"></circle></svg>';
const ICON_BOLT = '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 L4 14 H11 L10 22 L20 9 H12 Z"></path></svg>';
const ICON_DROP = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-ink)" stroke-width="1.8" stroke-linejoin="round"><path d="M12 3 C7.5 9 6 12.2 6 14.6 A6 6 0 0 0 18 14.6 C18 12.2 16.5 9 12 3 Z"></path></svg>';
const ICON_CAL = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-ink)" stroke-width="1.8"><rect x="4" y="5" width="16" height="15" rx="3"></rect><line x1="4" y1="9" x2="20" y2="9"></line><line x1="9" y1="3" x2="9" y2="6"></line><line x1="15" y1="3" x2="15" y2="6"></line></svg>';
const ICON_BOOK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--crimson-ink)" stroke-width="1.8" stroke-linejoin="round"><path d="M4 5 h6 a2 2 0 0 1 2 2 v12 a2 2 0 0 0 -2 -2 H4 Z"></path><path d="M20 5 h-6 a2 2 0 0 0 -2 2 v12 a2 2 0 0 1 2 -2 h6 Z"></path></svg>';
const ART_HONEY = '<svg width="58" height="58" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,.9)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 14 H42"></path><path d="M24 14 V20 C16 22 14 28 14 36 C14 48 20 54 32 54 C44 54 50 48 50 36 C50 28 48 22 40 20 V14"></path><path d="M16 34 C22 38 26 30 32 34 C38 38 42 30 48 34"></path></svg>';
const ART_CLOCK = '<svg width="58" height="58" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,.9)" stroke-width="2.4" stroke-linecap="round"><circle cx="32" cy="34" r="20"></circle><path d="M32 24 V34 l7 5"></path><path d="M24 8 L40 8"></path><path d="M32 8 V14"></path></svg>';
const ART_LEAF = '<svg width="58" height="58" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,.9)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 50 C14 28 30 14 50 14 C50 34 36 50 14 50 Z"></path><path d="M20 44 L44 20"></path></svg>';
const PREP_ART = { a: ART_HONEY, b: ART_CLOCK, c: ART_LEAF };

/* -------------------------------------------------------------------------- */
/* Estado                                                                     */
/* -------------------------------------------------------------------------- */

const STORAGE_KEY = "honeyTrickMiembro";

const defaultState = {
  route: "home",
  activeLessonId: null,
  activeSevenId: null,
  activePrepIndex: null,
  theme: "dark",
  trackerView: "calendar",
  settingsOpen: false,
  completedLessons: [],
  completedSeven: [],
  completedDays: [],
  daily: {},
  energy: {},
  notes: "",
  doseAnswers: {},
  hasSeven: false,
  copiedKey: null,
  codeMsg: null
};

const state = loadState();

const els = {
  appScroll: document.getElementById("appScroll"),
  streakCount: document.getElementById("streakCount"),
  brandLink: document.getElementById("brandLink"),
  settingsBtn: document.getElementById("settingsBtn"),
  bottomNav: document.getElementById("bottomNav"),
  sheetOverlay: document.getElementById("sheetOverlay"),
  settingsSheet: document.getElementById("settingsSheet"),
  themeValue: document.getElementById("themeValue"),
  themeToggle: document.getElementById("themeToggle"),
  sevenStatus: document.getElementById("sevenStatus"),
  sheetSevenBtn: document.getElementById("sheetSevenBtn"),
  resetAllBtn: document.getElementById("resetAllBtn"),
  sheetDoneBtn: document.getElementById("sheetDoneBtn")
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      ...defaultState,
      theme: saved.theme === "light" ? "light" : "dark",
      trackerView: ["calendar", "streak", "timeline"].includes(saved.trackerView) ? saved.trackerView : "calendar",
      completedLessons: Array.isArray(saved.completedLessons) ? saved.completedLessons : [],
      completedSeven: Array.isArray(saved.completedSeven) ? saved.completedSeven : [],
      completedDays: Array.isArray(saved.completedDays) ? saved.completedDays : [],
      daily: saved.daily && typeof saved.daily === "object" ? saved.daily : {},
      energy: saved.energy && typeof saved.energy === "object" ? saved.energy : {},
      notes: typeof saved.notes === "string" ? saved.notes : "",
      doseAnswers: saved.doseAnswers && typeof saved.doseAnswers === "object" ? saved.doseAnswers : {},
      hasSeven: saved.hasSeven === true
    };
  } catch {
    return { ...defaultState };
  }
}

function persist() {
  const { theme, trackerView, completedLessons, completedSeven, completedDays, daily, energy, notes, doseAnswers, hasSeven } = state;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      theme, trackerView, completedLessons, completedSeven, completedDays, daily, energy, notes, doseAnswers, hasSeven
    }));
  } catch {}
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function doseReady() {
  return DOSE_QUESTIONS.every((q) => typeof state.doseAnswers[q.id] === "number");
}

function currentDose() {
  return doseReady() ? computeDose(state.doseAnswers) : null;
}

function firstUnansweredIndex() {
  return DOSE_QUESTIONS.findIndex((q) => typeof state.doseAnswers[q.id] !== "number");
}

function computeProgress() {
  const total = LESSONS.length + CONFIG.totalDays;
  const done = state.completedLessons.length + state.completedDays.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const ringOffset = (251.3 * (1 - percent / 100)).toFixed(1);
  const label = done === 1 ? "1 paso completado" : done + " pasos completados";
  return { percent, ringOffset, label, done };
}

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Buenos días" : h < 19 ? "Buenas tardes" : "Buenas noches";
}

function nextLesson() {
  return LESSONS.find((l) => !state.completedLessons.includes(l.id)) || LESSONS[LESSONS.length - 1];
}

function todayNumber() {
  for (let n = 1; n <= CONFIG.totalDays; n++) if (!state.completedDays.includes(n)) return n;
  return CONFIG.totalDays;
}

function videoBlock(id, title) {
  const vid = VIDEOS[id];
  if (vid) {
    return '<div class="video-box"><iframe src="https://www.youtube-nocookie.com/embed/' + vid +
      '?rel=0" title="' + esc(title) + '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';
  }
  return '<div class="video-box"><div class="video-placeholder"><span class="play-dot">' + ICON_PLAY_LG +
    '</span><span>Video próximamente</span></div></div>';
}

function stepList(steps) {
  return '<ol class="step-list">' + steps.map((s, i) =>
    '<li><span class="n">' + (i + 1) + '</span><span class="txt">' + esc(s) + '</span></li>'
  ).join("") + '</ol>';
}

/* -------------------------------------------------------------------------- */
/* Navegación                                                                 */
/* -------------------------------------------------------------------------- */

function go(route) {
  state.route = route;
  state.activeLessonId = null;
  state.activeSevenId = null;
  state.activePrepIndex = null;
  state.settingsOpen = false;
  state.codeMsg = null;
  render();
  els.appScroll.scrollTop = 0;
}

function openLesson(id) {
  state.route = "program";
  state.activeLessonId = id;
  render();
  els.appScroll.scrollTop = 0;
}

function openSeven(id) {
  if (!state.hasSeven) return;
  state.route = "seven";
  state.activeSevenId = id;
  render();
  els.appScroll.scrollTop = 0;
}

function openPrep(i) {
  state.route = "dose";
  state.activePrepIndex = i;
  render();
  els.appScroll.scrollTop = 0;
}

/* -------------------------------------------------------------------------- */
/* Vista: Inicio                                                              */
/* -------------------------------------------------------------------------- */

function renderHome() {
  const { percent, ringOffset, label } = computeProgress();
  const next = nextLesson();
  const dose = currentDose();
  const day = todayNumber();
  const dailyDone = DAILY_CHECKS.filter((c) => state.daily[c.key]).length;

  const doseCard = dose
    ? '<button class="continue-card" type="button" data-action="go" data-route="dose">' +
        '<div class="continue-thumb">' + ICON_BOLT + '</div>' +
        '<div class="continue-info">' +
          '<p class="eyebrow">Tu elixir de la mañana</p>' +
          '<h4>Miel: ' + esc(dose.miel.split(",")[0]) + ' · canela, jengibre y limón</h4>' +
          '<p>' + esc(dose.agua) + ' · ' + esc(dose.horario.toLowerCase()) + '</p>' +
        '</div><span class="continue-chev">' + ICON_CHEVRON + '</span></button>'
    : '<div class="unlock-panel">' +
        '<h3>Tu dosis todavía no está calculada</h3>' +
        '<p>Cuatro preguntas, menos de un minuto. Obtienes tus cantidades exactas de miel, canela, jengibre y agua: es el punto de partida del protocolo.</p>' +
        '<button class="cta-btn" type="button" data-action="go" data-route="dose">Calcular mi dosis personalizada</button>' +
      '</div>';

  const sevenBlock = state.hasSeven
    ? '<button class="continue-card" type="button" data-action="go" data-route="seven">' +
        '<div class="continue-thumb">' + ICON_BOLT + '</div>' +
        '<div class="continue-info"><p class="eyebrow gold">Acelerador 7X</p>' +
        '<h4>Tus seis protocolos avanzados</h4><p>' + state.completedSeven.length + ' / ' + SEVEN.length + ' completados</p></div>' +
        '<span class="continue-chev">' + ICON_CHEVRON + '</span></button>'
    : '<button class="locked-row is-locked" type="button" data-action="go" data-route="seven">' +
        '<span class="locked-icon">' + ICON_LOCK + '</span>' +
        '<span class="info"><h4>Acelerador del Caballo 7x</h4>' +
        '<p>La rutina aceleradora, el protocolo matinal y el módulo de control. Bloqueado.</p></span>' +
        '<span class="continue-chev">' + ICON_CHEVRON + '</span></button>';

  return '<div class="view">' +
    '<div class="section-head">' +
      '<p class="eyebrow">' + greeting() + ' · día ' + day + ' de ' + CONFIG.totalDays + '</p>' +
      '<h1 class="serif-h1">Tu protocolo</h1>' +
      '<p class="muted-sub">Toma tu elixir, marca tu día. Tres semanas, un solo gesto al día.</p>' +
    '</div>' +

    doseCard +

    '<div class="journey-card">' +
      '<div class="journey-top"><div>' +
        '<p class="journey-eyebrow">Tu recorrido</p>' +
        '<h3 class="journey-title">21 días para reactivar la máquina</h3>' +
        '<p class="journey-sub">' + label + '</p>' +
      '</div><div class="ring-wrap">' +
        '<svg width="92" height="92" viewBox="0 0 96 96">' +
          '<circle cx="48" cy="48" r="40" fill="none" stroke="' + 'rgba(255,255,255,.24)' + '" stroke-width="9"></circle>' +
          '<circle cx="48" cy="48" r="40" fill="none" stroke="#ffffff" stroke-width="9" stroke-linecap="round" stroke-dasharray="251.3" stroke-dashoffset="' + ringOffset + '" transform="rotate(-90 48 48)"></circle>' +
        '</svg><div class="ring-percent">' + percent + '%</div>' +
      '</div></div>' +
      '<button class="journey-btn" type="button" data-action="continue">' + ICON_PLAY_SM + 'Continuar el programa</button>' +
    '</div>' +

    '<button class="continue-card" type="button" data-action="continue">' +
      '<div class="continue-thumb">' + ICON_PLAY_MD + '</div>' +
      '<div class="continue-info"><p class="eyebrow">Sigue donde te quedaste</p>' +
      '<h4>' + esc(next.title) + '</h4><p>' + next.dur + ' · ' + next.type + '</p></div>' +
      '<span class="continue-chev">' + ICON_CHEVRON + '</span></button>' +

    '<div class="card">' +
      '<div class="card-head"><h4>Tu día</h4><span>' + dailyDone + '/' + DAILY_CHECKS.length + '</span></div>' +
      '<div class="daily-list">' + DAILY_CHECKS.map((c) =>
        '<button class="daily-item" type="button" data-action="toggle-daily" data-key="' + c.key + '" aria-pressed="' + (!!state.daily[c.key]) + '">' +
        '<span class="daily-box ' + (state.daily[c.key] ? "is-checked" : "") + '">' + ICON_CHECK + '</span>' +
        '<span class="label">' + esc(c.label) + '</span></button>'
      ).join("") + '</div>' +
    '</div>' +

    '<div class="quick-grid">' +
      '<button class="quick-tile" type="button" data-action="go" data-route="tracker">' + ICON_CAL +
        '<h4>Progreso de 21 días</h4><p>Marca el día y anota tu energía</p></button>' +
      '<button class="quick-tile" type="button" data-action="go" data-route="resources">' + ICON_BOOK +
        '<h4>Recursos</h4><p>Lista de compras, recordatorios, precauciones</p></button>' +
    '</div>' +

    sevenBlock +
  '</div>';
}

/* -------------------------------------------------------------------------- */
/* Vista: Protocolo                                                           */
/* -------------------------------------------------------------------------- */

function renderProgram() {
  const done = state.completedLessons.length;
  const pct = Math.round((done / LESSONS.length) * 100);

  const blocks = MODULES.map((title, mIdx) => {
    const rows = LESSONS.filter((l) => l.mod === mIdx).map((lesson) => {
      const idx = LESSONS.indexOf(lesson);
      const complete = state.completedLessons.includes(lesson.id);
      return '<button class="lesson-row" type="button" data-action="open-lesson" data-id="' + lesson.id + '">' +
        '<span class="lesson-num">' + String(idx + 1).padStart(2, "0") + '</span>' +
        '<span class="lesson-info"><h4>' + esc(lesson.title) + '</h4><p>' + lesson.dur + ' · ' + lesson.type + '</p></span>' +
        '<span class="lesson-check ' + (complete ? "is-complete" : "") + '">' + ICON_CHECK + '</span></button>';
    }).join("");
    return '<div class="module-block"><div class="module-head"><span>' + String(mIdx + 1).padStart(2, "0") +
      '</span><h3>' + esc(title) + '</h3></div>' + rows + '</div>';
  }).join("");

  return '<div class="view">' +
    '<div class="section-head"><p class="eyebrow">Recorrido principal</p>' +
    '<h2 class="serif-h2">El Truco de la Miel</h2>' +
    '<p class="muted-sub">Ocho módulos cortos. Mira uno por día o todos de una vez, pero empieza por el primero.</p></div>' +
    '<div class="progress-bar-row"><div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
    '<span class="progress-count">' + done + '/' + LESSONS.length + '</span></div>' +
    blocks +
  '</div>';
}

function renderLessonDetail(id) {
  const lesson = LESSONS.find((l) => l.id === id);
  const idx = LESSONS.indexOf(lesson);
  const complete = state.completedLessons.includes(lesson.id);
  const next = LESSONS[idx + 1];

  const nextBlock = next
    ? '<button class="next-lesson-btn" type="button" data-action="open-lesson" data-id="' + next.id + '">' +
      '<span class="info"><p class="eyebrow">Módulo siguiente</p><h4>' + esc(next.title) + '</h4></span>' + ICON_CHEVRON + '</button>'
    : '';

  return '<div class="view">' +
    '<button class="back-btn" type="button" data-action="close-lesson">' + ICON_BACK + 'Volver al protocolo</button>' +
    videoBlock(lesson.id, lesson.title) +
    '<div><p class="eyebrow">' + lesson.type + ' · ' + lesson.dur + '</p>' +
    '<h2 class="detail-title">' + esc(lesson.title) + '</h2>' +
    '<p class="detail-desc">' + esc(lesson.desc) + '</p></div>' +
    '<div class="card"><h4 class="card-title">Lo que tienes que recordar</h4>' + stepList(lesson.steps) + '</div>' +
    '<button class="mark-btn ' + (complete ? "is-complete" : "") + '" type="button" data-action="toggle-lesson" data-id="' + lesson.id + '">' +
    ICON_CHECK + (complete ? "Módulo completado" : "Marcar como completado") + '</button>' +
    nextBlock +
  '</div>';
}

/* -------------------------------------------------------------------------- */
/* Vista: Mi dosis                                                            */
/* -------------------------------------------------------------------------- */

const PRECAUTIONS =
  '<div class="warn-card"><h4>' + ICON_WARN + 'Lee esto antes de empezar</h4>' +
  '<p>La miel es azúcar natural. Si tienes diabetes, prediabetes o tomas medicamento para la glucosa, habla con tu médico antes de empezar y usa la versión baja en azúcar.</p>' +
  '<p>El jengibre y la canela pueden interactuar con anticoagulantes (como la warfarina o la aspirina diaria) y con medicamentos para la presión o el corazón. Si tomas alguno, consulta antes. Si eres alérgico a la miel, al polen o a productos de abeja, no hagas el protocolo.</p>' +
  '<p>No pases de las cantidades indicadas. Este programa es informativo y educativo: no reemplaza la opinión de un médico ni sustituye ningún tratamiento en curso.</p></div>';

function renderDoseQuiz() {
  const step = firstUnansweredIndex();
  const q = DOSE_QUESTIONS[step];
  const answered = DOSE_QUESTIONS.filter((x) => typeof state.doseAnswers[x.id] === "number").length;

  return '<div class="view">' +
    '<div class="section-head"><p class="eyebrow">Paso ' + (step + 1) + ' de ' + DOSE_QUESTIONS.length + '</p>' +
    '<h2 class="serif-h2">Tu dosis personalizada</h2>' +
    '<p class="muted-sub">Tus respuestas se quedan en este dispositivo. Puedes rehacer el cálculo cuando quieras.</p></div>' +
    '<div class="quiz-progress">' + DOSE_QUESTIONS.map((_, i) =>
      '<span class="' + (i < answered ? "is-done" : "") + '"></span>').join("") + '</div>' +
    '<div class="quiz-step">' +
      '<h3 class="quiz-q">' + esc(q.q) + '</h3>' +
      '<p class="quiz-hint">' + esc(q.hint) + '</p>' +
      '<div class="opt-list">' + q.options.map((opt, i) =>
        '<button class="opt-btn" type="button" data-action="answer" data-q="' + q.id + '" data-v="' + i + '">' +
        '<span>' + esc(opt) + '</span><span class="tick">' + ICON_CHECK + '</span></button>').join("") +
      '</div>' +
    '</div>' +
    (step > 0 ? '<button class="ghost-btn" type="button" data-action="dose-back">Volver a la pregunta anterior</button>' : '') +
  '</div>';
}

function renderDoseResult() {
  const d = currentDose();

  const line = (k, v, note) =>
    '<div class="dose-item"><span class="k">' + k + '</span><span class="v">' + esc(v) +
    (note ? '<em>' + esc(note) + '</em>' : '') + '</span></div>';

  const softNote = d.soft
    ? '<p class="muted-sub">Como tu azúcar en sangre necesita cuidado, empieza con la <strong>versión baja en azúcar</strong> de abajo en lugar de la preparación base.</p>'
    : '';

  return '<div class="view">' +
    '<div class="dose-hero">' +
      '<p class="eyebrow">Dosis personalizada</p>' +
      '<h2>Tu elixir de la mañana</h2>' +
      '<p>Estas cantidades no cambian durante todo el ciclo. Rehaz el cálculo solo si tu peso cambia de forma clara.</p>' +
    '</div>' +

    '<div class="dose-grid">' +
      line("Miel cruda", d.miel, d.mielNote) +
      line("Agua", d.agua, "Tibia, nunca hirviendo") +
      line("Canela", d.canela, "De Ceilán, no cassia") +
      line("Jengibre", d.jengibre, "Fresco") +
      line("Limón", d.limon) +
      line("Momento", d.horario, d.horarioNote) +
      line("Arranque", d.arranque, d.arranqueNote) +
      line("Duración del ciclo", d.ciclo, d.cicloNote) +
    '</div>' +

    softNote +
    PRECAUTIONS +

    '<button class="ghost-btn" type="button" data-action="dose-reset">Rehacer el cálculo</button>' +

    '<div class="section-head" style="margin-top:8px"><p class="eyebrow">Preparaciones</p>' +
    '<h2 class="serif-h2">Tres formas de prepararlo</h2>' +
    '<p class="muted-sub">La misma dosis, en tres formatos según el tiempo que tengas por la mañana.</p></div>' +

    PREPS.map((p, i) =>
      '<button class="prep-card" type="button" data-action="open-prep" data-index="' + i + '">' +
      '<span class="prep-art ' + p.art + '">' + PREP_ART[p.art] + '</span>' +
      '<span class="prep-body"><span class="badge ' + p.badgeClass + '">' + esc(p.badge) + '</span>' +
      '<h3>' + esc(p.title) + '</h3><p>' + esc(p.desc) + '</p></span></button>'
    ).join("") +
  '</div>';
}

function renderPrepDetail(i) {
  const p = PREPS[i];
  const d = currentDose();

  const doseRecall = d
    ? '<div class="dose-grid">' +
        '<div class="dose-item"><span class="k">Miel cruda</span><span class="v">' + esc(p.art === "c" ? "½ cucharadita" : d.miel) + '</span></div>' +
        '<div class="dose-item"><span class="k">Agua</span><span class="v">' + esc(d.agua) + '</span></div>' +
        '<div class="dose-item"><span class="k">Canela</span><span class="v">' + esc(d.canela) + '</span></div>' +
        '<div class="dose-item"><span class="k">Jengibre</span><span class="v">' + esc(d.jengibre) + '</span></div>' +
        '<div class="dose-item"><span class="k">Limón</span><span class="v">' + esc(d.limon) + '</span></div>' +
      '</div>'
    : '';

  return '<div class="view">' +
    '<button class="back-btn" type="button" data-action="close-prep">' + ICON_BACK + 'Volver a mi dosis</button>' +
    '<div class="prep-card"><span class="prep-art ' + p.art + '">' + PREP_ART[p.art] + '</span></div>' +
    '<div><span class="badge ' + p.badgeClass + '">' + esc(p.badge) + '</span>' +
    '<h2 class="detail-title">' + esc(p.title) + '</h2>' +
    '<p class="detail-desc">' + esc(p.desc) + ' · ' + esc(p.time) + '</p></div>' +
    (doseRecall ? '<div><p class="eyebrow">Tus cantidades</p></div>' + doseRecall : '') +
    '<div class="card"><h4 class="card-title">Lo que necesitas</h4>' +
    '<ul class="ing-list">' + p.ing.map((it) => '<li><span class="dot"></span><span>' + esc(it) + '</span></li>').join("") + '</ul></div>' +
    '<div class="card"><h4 class="card-title">La preparación</h4>' + stepList(p.steps) + '</div>' +
  '</div>';
}

function renderDose() {
  if (state.activePrepIndex != null) return renderPrepDetail(state.activePrepIndex);
  return doseReady() ? renderDoseResult() : renderDoseQuiz();
}

/* -------------------------------------------------------------------------- */
/* Vista: Progreso                                                            */
/* -------------------------------------------------------------------------- */

function renderTracker() {
  const { percent, ringOffset, label } = computeProgress();
  const view = state.trackerView;
  const today = todayNumber();
  const days = Array.from({ length: CONFIG.totalDays }, (_, i) => {
    const n = i + 1;
    return { n, complete: state.completedDays.includes(n), isToday: n === today };
  });

  let body = "";
  if (view === "calendar") {
    body = '<div class="card"><div class="calendar-grid">' + days.map((d) =>
      '<button class="day-cell ' + (d.complete ? "is-complete" : "") + ' ' + (d.isToday ? "is-today" : "") +
      '" type="button" data-action="toggle-day" data-day="' + d.n + '">' + d.n + '</button>').join("") +
      '</div></div>';
  } else if (view === "streak") {
    body = '<div class="card streak-view"><div class="streak-ring-wrap">' +
      '<svg width="148" height="148" viewBox="0 0 96 96">' +
      '<circle cx="48" cy="48" r="40" fill="none" stroke="var(--surface2)" stroke-width="9"></circle>' +
      '<circle cx="48" cy="48" r="40" fill="none" stroke="var(--crimson)" stroke-width="9" stroke-linecap="round" stroke-dasharray="251.3" stroke-dashoffset="' + ringOffset + '" transform="rotate(-90 48 48)"></circle>' +
      '</svg><div class="streak-percent">' + percent + '%</div></div>' +
      '<p class="streak-sub">' + label + '<br>' + state.completedDays.length + ' de ' + CONFIG.totalDays + ' días completados</p>' +
      '<div class="streak-dots">' + days.map((d) => '<span class="streak-dot ' + (d.complete ? "is-complete" : "") + '"></span>').join("") + '</div></div>';
  } else {
    body = '<div class="card timeline-list">' + days.map((d) => {
      const score = state.energy[d.n];
      return '<button class="timeline-row" type="button" data-action="toggle-day" data-day="' + d.n + '">' +
        '<span class="timeline-dot ' + (d.complete ? "is-complete" : "") + '">' + ICON_CHECK + '</span>' +
        '<span class="label">Día ' + d.n + '</span>' +
        '<span class="score">' + (score ? "Energía " + score + "/5" : "") + '</span></button>';
    }).join("") + '</div>';
  }

  const energyToday = state.energy[today] || 0;
  const dailyDone = DAILY_CHECKS.filter((c) => state.daily[c.key]).length;

  return '<div class="view">' +
    '<div class="section-head"><p class="eyebrow">Diario personal</p>' +
    '<h2 class="serif-h2">Progreso de ' + CONFIG.totalDays + ' días</h2>' +
    '<p class="muted-sub">Marca cada día. La columna de días marcados es lo que te va a sostener en la tercera semana.</p></div>' +

    '<div class="segment">' +
      '<button type="button" data-action="tracker-view" data-view="calendar" class="' + (view === "calendar" ? "is-active" : "") + '">Calendario</button>' +
      '<button type="button" data-action="tracker-view" data-view="streak" class="' + (view === "streak" ? "is-active" : "") + '">Avance</button>' +
      '<button type="button" data-action="tracker-view" data-view="timeline" class="' + (view === "timeline" ? "is-active" : "") + '">Detalle</button>' +
    '</div>' +

    body +

    '<div class="card"><h4 class="card-title">Tu energía al despertar — día ' + today + '</h4>' +
      '<div class="rating-row">' + [1, 2, 3, 4, 5].map((n) =>
        '<button class="rating-btn ' + (energyToday === n ? "is-active" : "") + '" type="button" data-action="set-energy" data-n="' + n + '">' + n + '</button>').join("") +
      '</div>' +
      '<div class="rating-scale"><span>' + ENERGY_SCALE[0] + '</span><span>' + ENERGY_SCALE[4] + '</span></div>' +
      '<p class="notes-hint">Es el indicador más confiable del protocolo, y el primero en moverse, muchas veces antes que todo lo demás.</p>' +
    '</div>' +

    '<div class="card"><div class="card-head"><h4>Rutina del día</h4><span>' + dailyDone + '/' + DAILY_CHECKS.length + '</span></div>' +
      '<div class="daily-list">' + DAILY_CHECKS.map((c) =>
        '<button class="daily-item" type="button" data-action="toggle-daily" data-key="' + c.key + '" aria-pressed="' + (!!state.daily[c.key]) + '">' +
        '<span class="daily-box ' + (state.daily[c.key] ? "is-checked" : "") + '">' + ICON_CHECK + '</span>' +
        '<span class="label">' + esc(c.label) + '</span></button>').join("") + '</div>' +
      '<button class="reset-btn" type="button" data-action="reset-daily">Reiniciar el día</button>' +
    '</div>' +

    '<div class="card"><h4 class="card-title">Tus notas</h4>' +
      '<textarea id="notesInput" class="notes-textarea" rows="5" placeholder="Energía, sueño, digestión, cómo despertaste, lo que comiste..."></textarea>' +
      '<p class="notes-hint">Tus notas se quedan solo en este navegador. Releer tus notas del día 3 muchas veces es lo que te hace seguir el día 15.</p>' +
    '</div>' +
  '</div>';
}

/* -------------------------------------------------------------------------- */
/* Vista: Acelerador 7X                                                       */
/* -------------------------------------------------------------------------- */

function renderSeven() {
  if (state.activeSevenId && state.hasSeven) return renderSevenDetail(state.activeSevenId);

  const rows = SEVEN.map((item) => {
    const complete = state.completedSeven.includes(item.id);
    const icon = state.hasSeven ? (complete ? ICON_CHECK : ICON_BOLT) : ICON_LOCK;
    return '<button class="locked-row ' + (state.hasSeven ? "" : "is-locked") + '" type="button" data-action="open-seven" data-id="' + item.id + '">' +
      '<span class="locked-icon">' + icon + '</span>' +
      '<span class="info"><h4>' + esc(item.title) + '</h4><p>' + esc(item.desc) + '</p></span>' +
      '<span class="continue-chev">' + (state.hasSeven ? ICON_CHEVRON : "") + '</span></button>';
  }).join("");

  const gate = state.hasSeven
    ? ''
    : '<div class="unlock-panel">' +
        '<h3>Desbloquea el Acelerador 7X</h3>' +
        '<p>El elixir de la mañana prepara el cuerpo día tras día. El acelerador suma la rutina de piso pélvico, el protocolo matinal y el módulo de control de la ansiedad, para que respondas en el momento en que lo necesitas.</p>' +
        '<button class="cta-btn" type="button" data-action="buy-seven">' + ICON_BOLT + 'Obtener el Acelerador 7X</button>' +
        '<div class="code-row">' +
          '<input class="code-input" id="codeInput" type="text" placeholder="¿Ya tienes un código?" autocomplete="off" spellcheck="false">' +
          '<button class="code-btn" type="button" data-action="submit-code">Validar</button>' +
        '</div>' +
        (state.codeMsg ? '<p class="code-msg ' + state.codeMsg.type + '">' + esc(state.codeMsg.text) + '</p>' : '') +
      '</div>';

  const header = state.hasSeven
    ? '<div class="seven-hero"><p class="kicker">Acceso desbloqueado</p>' +
      '<h2>Acelerador del Caballo 7x</h2>' +
      '<p>Seis protocolos para usar junto con tu elixir de la mañana. Nunca lo reemplazan: se suman.</p></div>'
    : '<div class="seven-hero"><p class="kicker">Contenido bloqueado</p>' +
      '<h2>Acelerador del Caballo 7x</h2>' +
      '<p>Seis protocolos avanzados para acelerar y sostener el resultado del Honey Trick.</p></div>';

  return '<div class="view">' + header + gate + rows + '</div>';
}

function renderSevenDetail(id) {
  const item = SEVEN.find((s) => s.id === id);
  const idx = SEVEN.indexOf(item);
  const complete = state.completedSeven.includes(item.id);
  const next = SEVEN[idx + 1];

  return '<div class="view">' +
    '<button class="back-btn" type="button" data-action="close-seven">' + ICON_BACK + 'Volver al 7X</button>' +
    videoBlock(item.id, item.title) +
    '<div><p class="eyebrow gold">' + item.type + ' · ' + item.dur + '</p>' +
    '<h2 class="detail-title">' + esc(item.title) + '</h2>' +
    '<p class="detail-desc">' + esc(item.desc) + '</p></div>' +
    '<div class="card"><h4 class="card-title">Lo que tienes que recordar</h4>' + stepList(item.steps) + '</div>' +
    '<button class="mark-btn ' + (complete ? "is-complete" : "") + '" type="button" data-action="toggle-seven" data-id="' + item.id + '">' +
    ICON_CHECK + (complete ? "Protocolo completado" : "Marcar como completado") + '</button>' +
    (next ? '<button class="next-lesson-btn" type="button" data-action="open-seven" data-id="' + next.id + '">' +
      '<span class="info"><p class="eyebrow gold">Protocolo siguiente</p><h4>' + esc(next.title) + '</h4></span>' + ICON_CHEVRON + '</button>' : '') +
  '</div>';
}

/* -------------------------------------------------------------------------- */
/* Vista: Recursos                                                            */
/* -------------------------------------------------------------------------- */

function renderResources() {
  return '<div class="view">' +
    '<div class="section-head"><p class="eyebrow">Recursos</p>' +
    '<h2 class="serif-h2">Tus materiales</h2>' +
    '<p class="muted-sub">Lo justo para no tener que memorizar nada.</p></div>' +

    RESOURCES.map((r, i) =>
      '<div class="resource-card"><h3>' + esc(r.title) + '</h3><p>' + esc(r.desc) + '</p>' +
      '<button class="copy-btn" type="button" data-action="copy" data-index="' + i + '">' +
      (state.copiedKey === i ? "Copiado" : "Copiar") + '</button></div>').join("") +

    PRECAUTIONS +

    '<p class="footer-note">Los contenidos de esta área son informativos y educativos. No reemplazan la opinión de un profesional de la salud, no constituyen un diagnóstico y no sustituyen ningún tratamiento en curso. Los resultados varían de persona a persona.</p>' +
  '</div>';
}

/* -------------------------------------------------------------------------- */
/* Chrome: encabezado, navegación, panel de ajustes                           */
/* -------------------------------------------------------------------------- */

function renderChrome() {
  document.documentElement.dataset.theme = state.theme;
  els.streakCount.textContent = state.completedDays.length;

  els.bottomNav.querySelectorAll("[data-nav]").forEach((btn) => {
    const active = state.route === btn.dataset.nav;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-current", active ? "page" : "false");
  });

  els.sheetOverlay.hidden = !state.settingsOpen;
  els.settingsSheet.hidden = !state.settingsOpen;
  els.themeValue.textContent = state.theme === "dark" ? "Oscuro" : "Claro";
  els.themeToggle.classList.toggle("is-dark", state.theme === "dark");
  els.themeToggle.setAttribute("aria-checked", state.theme === "dark" ? "true" : "false");
  els.sevenStatus.textContent = state.hasSeven ? "Desbloqueado" : "No desbloqueado";
  els.sheetSevenBtn.textContent = state.hasSeven ? "Abrir la sección 7X" : "Ver lo que incluye el 7X";
}

function renderView() {
  let html;
  if (state.route === "program") html = state.activeLessonId ? renderLessonDetail(state.activeLessonId) : renderProgram();
  else if (state.route === "dose") html = renderDose();
  else if (state.route === "tracker") html = renderTracker();
  else if (state.route === "seven") html = renderSeven();
  else if (state.route === "resources") html = renderResources();
  else html = renderHome();

  els.appScroll.innerHTML = html;

  const notes = document.getElementById("notesInput");
  if (notes) {
    notes.value = state.notes;
    notes.addEventListener("input", () => {
      state.notes = notes.value;
      persist();
    });
  }
}

function render() {
  renderChrome();
  renderView();
}

/* -------------------------------------------------------------------------- */
/* Acciones                                                                   */
/* -------------------------------------------------------------------------- */

function toggleIn(list, value) {
  return list.includes(value) ? list.filter((x) => x !== value) : [...list, value];
}

function answerDose(qId, value) {
  state.doseAnswers = { ...state.doseAnswers, [qId]: value };
  persist();
  render();
  els.appScroll.scrollTop = 0;
}

function doseBack() {
  const answered = DOSE_QUESTIONS.filter((q) => typeof state.doseAnswers[q.id] === "number");
  const last = answered[answered.length - 1];
  if (!last) return;
  const next = { ...state.doseAnswers };
  delete next[last.id];
  state.doseAnswers = next;
  persist();
  render();
}

function doseReset() {
  state.doseAnswers = {};
  state.activePrepIndex = null;
  persist();
  render();
  els.appScroll.scrollTop = 0;
}

function unlockSeven(raw) {
  const clean = String(raw || "").replace(/[\s-]/g, "").toUpperCase();
  const expected = CONFIG.acceleratorCode.replace(/[\s-]/g, "").toUpperCase();
  if (clean && clean === expected) {
    state.hasSeven = true;
    state.codeMsg = { type: "ok", text: "Acceso desbloqueado. ¡A acelerar!" };
    persist();
  } else {
    state.codeMsg = { type: "err", text: "Este código no es válido. Revisa el e-mail de confirmación de tu compra." };
  }
  render();
}

function buySeven() {
  if (!CONFIG.acceleratorUrl || CONFIG.acceleratorUrl === "#") {
    state.codeMsg = { type: "err", text: "El enlace de compra todavía no está configurado." };
    render();
    return;
  }
  window.open(CONFIG.acceleratorUrl, "_blank", "noopener");
}

function fallbackCopy(text) {
  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  document.execCommand("copy");
  document.body.removeChild(helper);
}

async function copyResource(index) {
  const text = RESOURCES[index].copy;
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else fallbackCopy(text);
  } catch {
    try { fallbackCopy(text); } catch { return; }
  }
  state.copiedKey = index;
  renderView();
  setTimeout(() => {
    if (state.copiedKey === index) {
      state.copiedKey = null;
      renderView();
    }
  }, 1500);
}

function resetAll() {
  if (!window.confirm("¿Borrar tu dosis, tu progreso y tus notas? Esta acción no se puede deshacer.")) return;
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
  Object.assign(state, { ...defaultState });
  render();
}

/* -------------------------------------------------------------------------- */
/* Listeners                                                                  */
/* -------------------------------------------------------------------------- */

els.appScroll.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const a = target.dataset.action;

  if (a === "go") go(target.dataset.route);
  else if (a === "continue") openLesson(nextLesson().id);
  else if (a === "open-lesson") openLesson(target.dataset.id);
  else if (a === "close-lesson") { state.activeLessonId = null; render(); els.appScroll.scrollTop = 0; }
  else if (a === "toggle-lesson") {
    state.completedLessons = toggleIn(state.completedLessons, target.dataset.id);
    persist(); render();
  }
  else if (a === "open-seven") {
    if (state.hasSeven) openSeven(target.dataset.id);
    else go("seven");
  }
  else if (a === "close-seven") { state.activeSevenId = null; render(); els.appScroll.scrollTop = 0; }
  else if (a === "toggle-seven") {
    state.completedSeven = toggleIn(state.completedSeven, target.dataset.id);
    persist(); render();
  }
  else if (a === "buy-seven") buySeven();
  else if (a === "submit-code") unlockSeven(document.getElementById("codeInput")?.value);
  else if (a === "answer") answerDose(target.dataset.q, Number(target.dataset.v));
  else if (a === "dose-back") doseBack();
  else if (a === "dose-reset") doseReset();
  else if (a === "open-prep") openPrep(Number(target.dataset.index));
  else if (a === "close-prep") { state.activePrepIndex = null; render(); els.appScroll.scrollTop = 0; }
  else if (a === "toggle-daily") {
    state.daily = { ...state.daily, [target.dataset.key]: !state.daily[target.dataset.key] };
    persist(); render();
  }
  else if (a === "reset-daily") { state.daily = {}; persist(); render(); }
  else if (a === "toggle-day") {
    state.completedDays = toggleIn(state.completedDays, Number(target.dataset.day));
    persist(); render();
  }
  else if (a === "set-energy") {
    const day = todayNumber();
    const n = Number(target.dataset.n);
    state.energy = { ...state.energy, [day]: state.energy[day] === n ? 0 : n };
    persist(); render();
  }
  else if (a === "tracker-view") { state.trackerView = target.dataset.view; persist(); render(); }
  else if (a === "copy") copyResource(Number(target.dataset.index));
});

els.appScroll.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.id === "codeInput") {
    event.preventDefault();
    unlockSeven(event.target.value);
  }
});

els.bottomNav.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-nav]");
  if (btn) go(btn.dataset.nav);
});

els.brandLink.addEventListener("click", (event) => {
  event.preventDefault();
  go("home");
});

els.settingsBtn.addEventListener("click", () => {
  state.settingsOpen = true;
  renderChrome();
});

function closeSheet() {
  state.settingsOpen = false;
  renderChrome();
}

els.sheetOverlay.addEventListener("click", closeSheet);
els.sheetDoneBtn.addEventListener("click", closeSheet);
els.themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  persist();
  renderChrome();
});
els.sheetSevenBtn.addEventListener("click", () => go("seven"));
els.resetAllBtn.addEventListener("click", resetAll);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.settingsOpen) closeSheet();
});

render();
