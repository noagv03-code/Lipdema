
import { BrandFoundation, SectionContent } from './types';

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
