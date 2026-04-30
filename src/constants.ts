
import { BrandFoundation, SectionContent, DailyPlan } from './types';

export const BRAND: BrandFoundation = {
  name: "Velora Estilo de Vida Lipedema",
  mission: "Transformar el viaje del Lipedema de un camino de frustración a un estilo de vida de vitalidad, proporcionando estrategias de nutrición y movimiento basadas en la ciencia que realmente funcionen.",
  vision: "Convertirse en el estándar de oro global para el manejo del Lipedema no quirúrgico, empoderando a 1 millón de mujeres para prosperar en sus cuerpos.",
  values: ["Basado en la Ciencia", "Apoyo Radical", "Acción Sostenible", "Autonomía Empoderada"],
  audience: "Mujeres de 25 a 55 años en las Etapas 1-3 de Lipedema que están cansadas de los consejos genéricos de pérdida de peso y buscan un enfoque especializado y holístico.",
  emotionalDrivers: {
    painPoints: ["Pesadez y dolor en las piernas", "Fallo de dietas genéricas", "Desconocimiento médico", "Frustración con la ropa"],
    fears: ["Progresión a la Etapa 4", "Pérdida de movilidad", "Ser juzgada por 'elecciones de estilo de vida'"],
    desires: ["Ligereza en las extremidades", "Guía clara y accionable", "Una comunidad que 'lo entienda'"]
  }
};

export const DAILY_PLANS: DailyPlan[] = [
  {
    day: 1,
    focus: "Antiinflamatorio",
    breakfast: "Huevos con espinaca + aguacate",
    lunch: "Salmón con espárragos",
    dinner: "Pollo a la plancha con ensalada verde",
    snack: "Nueces",
    movement: "30 min caminata + 10 min rebounding",
    benefit: "Reduce inflamación y mejora energía",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80"
  },
  {
    day: 2,
    focus: "Ligero y Digestivo",
    breakfast: "Yogur natural (si tolerado) + semillas",
    lunch: "Merluza con verduras al vapor",
    dinner: "Pavo con calabacín",
    snack: "Pepino + aceite de oliva",
    movement: "20 min caminata + movilidad",
    benefit: "Ligereza y menor retención",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80"
  },
  {
    day: 3,
    focus: "Saciedad",
    breakfast: "Huevos + aguacate",
    lunch: "Ternera con brócoli",
    dinner: "Sardinas con tomate",
    snack: "Almendras",
    movement: "Fuerza (piernas) + 20 min caminata",
    benefit: "Mayor saciedad y control del hambre",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80"
  },
  {
    day: 4,
    focus: "Circulación",
    breakfast: "Huevos + espinaca",
    lunch: "Perca con verduras",
    dinner: "Pollo con ensalada",
    snack: "Semillas",
    movement: "Natación o bicicleta (30 min)",
    benefit: "Mejora circulación",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
  },
  {
    day: 5,
    focus: "Simple",
    breakfast: "Huevos",
    lunch: "Pollo + verduras",
    dinner: "Pescado blanco + ensalada",
    snack: "Nueces",
    movement: "30–45 min caminata",
    benefit: "Fácil de seguir",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80"
  },
  {
    day: 6,
    focus: "Energía",
    breakfast: "Yogur + semillas",
    lunch: "Salmón + verduras",
    dinner: "Pavo + ensalada",
    snack: "Huevo cocido",
    movement: "Fuerza + caminata",
    benefit: "Más energía sostenida",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80"
  },
  {
    day: 7,
    focus: "Descarga",
    breakfast: "Huevos + aguacate",
    lunch: "Pescado blanco + verduras",
    dinner: "Pollo ligero",
    snack: "Pepino",
    movement: "Caminata suave + estiramientos",
    benefit: "Reduce pesadez",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80"
  },
  {
    day: 8,
    focus: "Variedad",
    breakfast: "Huevos",
    lunch: "Cerdo magro + verduras",
    dinner: "Sardinas",
    snack: "Nueces",
    movement: "Rebounding + caminata",
    benefit: "Evita monotonía",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80"
  },
  {
    day: 9,
    focus: "Fuerza",
    breakfast: "Huevos + aguacate",
    lunch: "Ternera + verduras",
    dinner: "Pollo",
    snack: "Semillas",
    movement: "Entrenamiento de fuerza completo",
    benefit: "Apoyo muscular",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80"
  },
  {
    day: 10,
    focus: "Equilibrio",
    breakfast: "Yogur + frutos secos",
    lunch: "Salmón + ensalada",
    dinner: "Pavo + verduras",
    snack: "Almendras",
    movement: "Caminata + movilidad",
    benefit: "Balance general",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80"
  }
];

export const DAILY_PLANS_STRATEGY: SectionContent = {
  headline: "Tu Plan Diario para Lipedema: Comida + Movimiento",
  subheadline: "Sigue estos días como guía o inspírate para crear tu rutina.",
  keyMessage: "Elige un día y síguelo completo. Puedes repetir tus favoritos. No busques perfección, busca consistencia.",
  cta: "Descargar el Plan Completo",
  visualDirection: "Combinación de platos reales + mujer caminando o haciendo ejercicio suave. Estética azul clara, limpia y calmante."
};

export const HOMEPAGE_STRATEGY: Record<string, SectionContent> = {
  hero: {
    headline: "Recupera tu Ligereza.",
    subheadline: "La marca de estilo de vida holístico para mujeres con Lipedema.",
    keyMessage: "Deja de luchar contra tu cuerpo y empieza a fluir con él. Nutrición y movimiento especializados diseñados para tu condición única.",
    cta: "Comienza tu Viaje",
    visualDirection: "Mujer real y auténtica bajo la luz del sol, movimiento suave, sintiéndose ligera y empoderada."
  },
  problem: {
    headline: "¿Cansada de consejos que no encajan?",
    subheadline: "El Lipedema no se trata de 'comer menos y moverse más'.",
    keyMessage: "Validar la frustración de los consejos médicos genéricos. Sabemos por qué esas dietas 'tradicionales' no han funcionado para ti.",
    cta: "Ver la Masterclass",
    visualDirection: "Imágenes sutiles y emotivas de piernas pesadas o resultados de pérdida de peso 'normales' que no se aplican."
  }
};

export const NUTRITION_PHILOSOPHY = {
  title: "Comer para el Control de la Inflamación",
  intro: "Nuestro enfoque se centra en reducir la carga linfática, apoyar el equilibrio hormonal y calmar la inflamación sistémica a través de una base intencional y rica en proteínas.",
  principles: [
    "Enfoque antiinflamatorio",
    "Apoya el equilibrio hormonal y la salud linfática",
    "Enfoque en alimentos integrales y no procesados",
    "Estructurado e intencional, no restrictivo"
  ],
  allowedFoods: [
    { 
      category: "Carnes (Proteína de Alta Calidad)", 
      subcategories: [
        { name: "Carne Roja (Alimentada con pasto)", items: ["Ternera", "Cordero", "Cerdo Magro"] },
        { name: "Aves", items: ["Pechuga de Pollo", "Muslos de Pollo", "Pavo"] },
        { name: "Vísceras", items: ["Hígado (Ternera/Pollo)", "Corazón"] }
      ],
      benefits: "Apoya la masa muscular, el metabolismo y la saciedad mientras estabiliza el azúcar en la sangre.",
      guidelines: "Preferir mínimamente procesado. Evitar embutidos con aditivos. Cocinar a la parrilla, al horno o a fuego lento."
    },
    { 
      category: "Pescados y Mariscos (La Prioridad)", 
      subcategories: [
        { name: "Pescado Azul (Prioridad)", items: ["Salmón", "Sardinas", "Caballa", "Anchoas"] },
        { name: "Pescado Blanco", items: ["Bacalao", "Merluza", "Perca", "Tilapia"] },
        { name: "Mariscos", items: ["Camarones", "Mejillones", "Almejas", "Calamar"] }
      ],
      benefits: "Rico en Omega-3 para reducir activamente la inflamación y apoyar el sistema linfático.",
      guidelines: "Apuntar a 3–5 porciones por semana. Se prefiere fresco o congelado sobre versiones procesadas."
    },
    { 
      category: "Grasas Saludables", 
      items: ["Aceite de Oliva Virgen Extra", "Aguacate", "Almendras y Nueces", "Semillas de Chía y Lino"], 
      benefits: "Esencial para la salud hormonal y la promoción del flujo linfático." 
    },
    { 
      category: "Vegetales Antiinflamatorios", 
      items: ["Verduras de Hoja Verde (Espinacas, Kale)", "Crucíferas (Brócoli, Col)", "Calabacín", "Espárragos"], 
      benefits: "La base de micronutrientes que combate el estrés oxidativo." 
    }
  ],
  avoidFoods: [
    "Alimentos ultraprocesados", 
    "Azúcar refinado y jarabes", 
    "Aceites vegetales industriales (Soja, Maíz)", 
    "Carbohidratos refinados", 
    "Exceso de lácteos (si son inflamatorios)"
  ],
  sampleMeals: [
    { time: "Desayuno", options: ["Huevos con espinacas + aguacate", "Yogur alto en grasa con nueces y semillas"] },
    { time: "Almuerzo", options: ["Pollo a la parrilla + ensalada de aceite de oliva", "Salmón + vegetales de temporada asados"] },
    { time: "Cena", options: ["Ternera/Cerdo con verduras salteadas", "Pescado blanco (Bacalao/Perca) + espárragos"] },
    { time: "Snacks", options: ["Huevos cocidos", "Puñado de nueces", "Sardinas en conserva"] }
  ]
};

export const MOVEMENT_PRINCIPLES = {
  title: "Movimiento para la Ligereza",
  intro: "El movimiento es para apoyar al cuerpo, no para castigarlo. Enfócate en el flujo linfático, la circulación y la reducción de la sensación de 'pesadez' a través de acciones sostenibles y de bajo impacto.",
  philosophy: [
    "De apoyo, no castigo",
    "Enfoque en el flujo linfático y la circulación",
    "Reducir pesadez y dolor",
    "Consistencia > intensidad",
    "Base de bajo impacto",
    "Fuerza sin inflamación"
  ],
  dailyRules: [
    { title: "Muévete Diariamente", text: "Incluso el movimiento ligero cuenta. Nunca te saltes un día de flujo." },
    { title: "Evita el Sedentarismo", text: "Rompe los largos periodos de inactividad cada 60 minutos." },
    { title: "La Santísima Trinidad", text: "Combina cardio ligero, fuerza funcional y movilidad." },
    { title: "Escucha la Señal", text: "Escucha las señales del cuerpo. El dolor es una señal de stop, no un desafío." }
  ],
  categories: [
    {
      name: "Caminar",
      why: "Mejora la circulación y la activación de la bomba de la pantorrilla. Suave con las articulaciones.",
      how: "20–60 minutos diarios. Se prefiere terreno plano o ligera inclinación.",
      implementation: "Dividir en 2 sesiones de 20 min si es necesario."
    },
    {
      name: "Entrenamiento Acuático",
      why: "La presión hidrostática actúa como un traje de compresión natural para todo el cuerpo.",
      how: "Nadar largos, aeróbic acuático o aqua jogging.",
      implementation: "2-3 veces por semana para un drenaje máximo."
    },
    {
      name: "Fuerza Funcional",
      why: "Construye la 'bomba muscular' que mueve el fluido linfático contra la gravedad.",
      how: "Bandas de resistencia, sentadillas con peso corporal, puentes de glúteo.",
      implementation: "2–4 veces por semana. Enfoque en core y parte inferior del cuerpo."
    },
    {
      name: "Rebounding (Rebote)",
      why: "El rebote vertical abre y cierra las válvulas linfáticas rápidamente.",
      how: "Salto de salud suave (los pies ni siquiera necesitan dejar la alfombra).",
      implementation: "5\u201315 minutos diarios. A primera hora de la mañana."
    },
    {
      name: "Cardio de Bajo Impacto",
      why: "Aumenta el ritmo cardíaco sin el impacto articular de correr.",
      how: "Ciclismo (bicicleta al aire libre o estática) o elíptica.",
      implementation: "Perfecto para días de recuperación activa."
    }
  ],
  toAvoid: [
    "Correr de alto impacto",
    "Entrenamientos HIIT con muchos saltos",
    "Sesiones de resistencia extrema",
    "Levantamiento de pesas hasta el fallo total"
  ],
  routines: {
    beginner: [
      { day: "Lun", activity: "30 min caminata + fuerza ligera" },
      { day: "Mar", activity: "20 min caminata + movilidad" },
      { day: "Mié", activity: "Natación o ciclismo" },
      { day: "Jue", activity: "Entrenamiento de fuerza" },
      { day: "Vie", activity: "30\u201345 min caminata" },
      { day: "Sáb", activity: "10 min Rebounding" },
      { day: "Dom", activity: "Descanso / Paseo suave" }
    ],
    intermediate: [
      { day: "Diario", activity: "Caminata y 10m Rebounding" },
      { day: "4x/sem", activity: "Entrenamiento de Fuerza Dirigido" },
      { day: "2x/sem", activity: "Entrenamiento Acuático" }
    ]
  },
  microHabits: [
    "Caminata de 10 minutos después de cada comida principal",
    "5 minutos de rebote antes del café",
    "Subir las escaleras por un piso diariamente",
    "Estiramiento linfático de 5 minutos antes de dormir"
  ],
  expectations: [
    "Reducción de la pesadez diaria en las piernas",
    "Mejora de los niveles de energía matutinos",
    "Mejor sueño a través de la activación parasimpática",
    "Tonificación gradual sin inflamación"
  ]
};

export const LIPEDEMA_INFO = {
  hero: {
    headline: "Todo lo que necesitas saber sobre el Lipedema",
    subheadline: "Una guía clara para entender tu cuerpo y tomar mejores decisiones.",
    visual: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
  },
  definitions: {
    title: "¿Qué es el Lipedema?",
    description: "El lipedema es una enfermedad crónica que afecta principalmente a mujeres y se caracteriza por una acumulación anormal de grasa, generalmente en piernas y, en algunos casos, brazos.",
    keyPoints: [
      { title: "Distribución desproporcionada", content: "Afecta principalmente la parte inferior del cuerpo vs la superior." },
      { title: "Resistencia a la dieta", content: "No responde fácilmente a la dieta convencional o al ejercicio intenso." },
      { title: "Sensibilidad", content: "Puede generar dolor, pesadez o una gran sensibilidad al tacto." }
    ],
    importantNote: "No es lo mismo que obesidad ni retención de líquidos común."
  },
  gradesAndTypes: {
    title: "Grados y Tipos",
    grades: [
      { title: "Grado 1", features: ["Piel lisa", "Tejido blando", "Apariencia leve"] },
      { title: "Grado 2", features: ["Irregularidades en la piel (celulitis)", "Nódulos palpables bajo la piel"] },
      { title: "Grado 3", features: ["Grandes acumulaciones de tejido", "Deformación visible de la extremidad"] }
    ],
    types: [
      { id: "Tipo I", description: "Caderas y glúteos" },
      { id: "Tipo II", description: "Desde caderas hasta las rodillas" },
      { id: "Tipo III", description: "Desde caderas hasta los tobillos" },
      { id: "Tipo IV", description: "Brazos (puede acompañar a otros tipos)" },
      { id: "Tipo V", description: "Solo la parte inferior de las piernas" }
    ]
  },
  symptoms: [
    "Sensación de pesadez constante en piernas",
    "Dolor al tacto o presión (incluso leve)",
    "Hinchazón desproporcionada",
    "Aparición muy fácil de hematomas",
    "Fatiga muscular rápida en las piernas",
    "Sensación de frío constante en extremidades"
  ],
  treatments: {
    title: "Tratamientos y Manejo",
    intro: "No existe una “cura única”, pero sí estrategias de manejo que mejoran drásticamente la calidad de vida.",
    conservative: {
      title: "Enfoque Conservador",
      items: [
        "Alimentación antiinflamatoria (baja en procesados)",
        "Movimiento regular de bajo impacto",
        "Compresión linfática (medias de tejido plano)",
        "Drenaje linfático manual"
      ]
    },
    medical: {
      title: "Opciones Médicas",
      items: [
        "Seguimiento profesional especializado",
        "Liposucción especializada (WAL/Tumescente) en casos seleccionados"
      ]
    },
    goal: "El objetivo es mejorar la calidad de vida y reducir los síntomas dolorosos."
  },
  associated: [
    "Linfedema (puede evolucionar a lipolinfedema)",
    "Problemas circulatorios y venosos",
    "Dolor crónico y sensibilidad",
    "Fatiga crónica y pesadez"
  ],
  origin: {
    title: "Origen y Causas",
    points: [
      "Fuerte componente hormonal (suele aparecer en pubertad, embarazo o menopausia)",
      "Predisposición genética (ocurre frecuentemente en varias mujeres de la misma familia)",
      "Factores inflamatorios y metabólicos"
    ]
  },
  evolution: [
    "Suele aparecer o empeorar durante cambios hormonales significativos.",
    "Es una condición progresiva si no se gestiona adecuadamente.",
    "Sin embargo, puede estabilizarse y mejorar los síntomas con hábitos adecuados."
  ],
  childhood: {
    title: "Lipedema en la Juventud",
    content: "Suele manifestarse durante la adolescencia. A menudo se confunde con 'sobrepeso infantil' o 'desarrollo normal', por lo que la detección temprana es crucial para evitar la progresión emocional y física."
  },
  differential: {
    title: "Diagnóstico Diferencial",
    intro: "Es fundamental diferenciar el Lipedema de otras condiciones para recibir el tratamiento correcto.",
    comparisons: [
      { condition: "Obesidad", difference: "Distribución armónica vs desproporcionada. Responde a dieta vs resistencia." },
      { condition: "Linfedema", difference: "Asimétrico vs simétrico (el lipedema afecta ambas piernas). Afecta el pie vs el pie suele estar libre." },
      { condition: "Retención de líquidos", difference: "Transitorio vs tejido adiposo persistente y doloroso." }
    ],
    keys: ["Dolor al tacto", "Distribución específica", "Resistencia a dieta convencional"]
  },
  studies: {
    title: "Estudios e Investigación",
    points: [
      "El lipedema está siendo cada vez más investigado a nivel internacional.",
      "Existe un mayor reconocimiento médico en los últimos años, aunque aún queda camino.",
      "La falta de diagnóstico temprano sigue siendo el mayor obstáculo para las pacientes."
    ],
    message: "La educación es fundamental para mejorar el abordaje y la visibilidad de esta condición."
  },
  cta: {
    headline: "Empieza a entender cómo apoyar tu cuerpo",
    buttonText: "Descubre el enfoque de alimentación y movimiento",
    link: "/nutrition"
  }
};
