
import { BrandFoundation, ProgramTier, SectionContent } from './types';

export const BRAND: BrandFoundation = {
  name: "Velora Lipedema Lifestyle",
  mission: "To transform the Lipedema journey from a path of frustration to a lifestyle of vitality, providing science-backed nutrition and movement strategies that actually work.",
  vision: "To become the global gold standard for non-surgical Lipedema management, empowering 1 million women to thrive in their bodies.",
  values: ["Science-Backed", "Radical Support", "Sustainable Action", "Empowered Autonomy"],
  audience: "Women aged 25-55 with Stage 1-3 Lipedema who are tired of generic weight loss advice and seek a specialized, holistic approach.",
  emotionalDrivers: {
    painPoints: ["Leg heaviness & pain", "Generic diets failing", "Medical gaslighting", "Clothing frustration"],
    fears: ["Progression to Stage 4", "Loss of mobility", "Being judged for 'lifestyle choices'"],
    desires: ["Lightness in limbs", "Clear, actionable guidance", "A community that 'gets it'"]
  }
};

export const PROGRAMS: ProgramTier[] = [
  {
    id: "starter",
    name: "The Lipo-Flow Starter Plan",
    price: "Free",
    description: "Your first 7 days of anti-inflammatory living.",
    benefits: ["7-Day Meal Prep Guide", "Daily Lymph-Flow Routine", "Grocery List"],
    target: "Women just starting their discovery journey.",
    cta: "Download Free Guide"
  },
  {
    id: "essentials",
    name: "Lifestyle Essentials",
    price: "$49",
    description: "The definitive library for Lipedema-friendly living.",
    benefits: ["Master Food List", "Sustainable Movement Handbook", "Supplements Guide"],
    target: "The self-starter ready for immediate change.",
    cta: "Get the Essentials"
  },
  {
    id: "core",
    name: "The Velora Transformation",
    price: "$197",
    description: "Our signature 12-week intensive program.",
    benefits: ["12 Weeks of Meal Plans", "Progressive Workout Video Library", "Weekly Group Q&A"],
    target: "Women looking for a complete life overhaul.",
    cta: "Join the Transformation"
  },
  {
    id: "premium",
    name: "Inner Circle Coaching",
    price: "$499/mo",
    description: "High-touch support for rapid results and deep community.",
    benefits: ["1-on-1 Strategy Calls", "Private Support Group", "Personalized Protocol Adjustments"],
    target: "Women who want expert guidance at every step.",
    cta: "Apply for Coaching"
  }
];

export const HOMEPAGE_STRATEGY: Record<string, SectionContent> = {
  hero: {
    headline: "Reclaim Your Lightness.",
    subheadline: "The Holistic Lifestyle Brand for Women with Lipedema.",
    keyMessage: "Stop fighting your body and start flowing with it. Specialized nutrition and movement designed for your unique condition.",
    cta: "Start Your Journey",
    visualDirection: "Real, authentic woman in sunlight, soft movement, feeling light and empowered."
  },
  problem: {
    headline: "Tired of advice that doesn't fit?",
    subheadline: "Lipedema isn't about 'eating less and moving more.'",
    keyMessage: "Validate the frustration of generic medical advice. We know why those 'traditional' diets haven't worked for you.",
    cta: "Watch the Masterclass",
    visualDirection: "Subtle, emotive imagery of heavy legs or 'normal' weight loss results that don't apply."
  }
};

export const NUTRITION_PHILOSOPHY = {
  title: "Eat for Inflammation Control",
  intro: "Our approach focuses on reducing lymphatic load, supporting hormonal balance, and calming systemic inflammation through an intentional, protein-rich foundation.",
  principles: [
    "Anti-inflammatory approach",
    "Supports hormonal balance & lymphatic health",
    "Focus on whole, unprocessed foods",
    "Structured and intentional, not restrictive"
  ],
  allowedFoods: [
    { 
      category: "Meats (High-Quality Protein)", 
      subcategories: [
        { name: "Red Meat (Grass-fed)", items: ["Beef", "Lamb", "Lean Pork"] },
        { name: "Poultry", items: ["Chicken Breast", "Chicken Thighs", "Turkey"] },
        { name: "Organ Meats", items: ["Liver (Beef/Chicken)", "Heart"] }
      ],
      benefits: "Supports muscle mass, metabolism, and satiety while stabilizing blood sugar.",
      guidelines: "Prefer minimally processed. Avoid sausages or deli meats with additives. Grill, bake, or slow-cook."
    },
    { 
      category: "Fish & Seafood (The Priority)", 
      subcategories: [
        { name: "Fatty Fish (Priority)", items: ["Salmon", "Sardines", "Mackerel", "Anchovies"] },
        { name: "Lean Fish", items: ["Cod", "Hake", "Perch", "Tilapia"] },
        { name: "Seafood", items: ["Shrimp", "Mussels", "Clams", "Squid"] }
      ],
      benefits: "Rich in Omega-3 to actively reduce inflammation and support the lymphatic system.",
      guidelines: "Aim for 3–5 servings per week. Fresh or frozen is preferred over processed versions."
    },
    { 
      category: "Healthy Fats", 
      items: ["Extra Virgin Olive Oil", "Avocado", "Almonds & Walnuts", "Chia & Flax Seeds"], 
      benefits: "Essential for hormone health and promoting lymphatic flow." 
    },
    { 
      category: "Anti-Inflammatory Veg", 
      items: ["Leafy Greens (Spinach, Kale)", "Cruciferous (Broccoli, Cabbage)", "Zucchini", "Asparagus"], 
      benefits: "The micronutrient base that fights oxidative stress." 
    }
  ],
  avoidFoods: [
    "Ultra-processed foods", 
    "Refined sugar & syrups", 
    "Industrial seed oils (Soy, Corn)", 
    "Refined carbohydrates", 
    "Excess dairy (if inflammatory)"
  ],
  sampleMeals: [
    { time: "Breakfast", options: ["Eggs with spinach + avocado", "High-fat yogurt with nuts & seeds"] },
    { time: "Lunch", options: ["Grilled chicken + olive oil salad", "Salmon + roasted seasonal vegetables"] },
    { time: "Dinner", options: ["Beef/Pork with sautéed greens", "White fish (Cod/Perch) + asparagus"] },
    { time: "Snacks", options: ["Boiled eggs", "Handful of walnuts", "Tinned sardines"] }
  ]
};

export const MOVEMENT_PRINCIPLES = {
  title: "Movement as Medicine",
  intro: "We don't train for punishment. We move for lymphatic flow, fascia health, and joy.",
  activities: [
    { name: "Daily Walking", frequency: "Daily", purpose: "Low-impact calf muscle pump activation." },
    { name: "Water Sports", frequency: "2-3x / week", purpose: "Natural hydrostatic pressure for lymph drainage." },
    { name: "Rebounding", frequency: "10 mins Daily", purpose: "The ultimate trampoline-based lymph flush." },
    { name: "Light Strength", frequency: "2x / week", purpose: "Supporting joints and maintaining metabolic health." }
  ]
};
