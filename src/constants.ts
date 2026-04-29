
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
  intro: "Our approach focuses on reducing lymphatic load and systemic inflammation through high-quality proteins and anti-inflammatory fats.",
  allowedFoods: [
    { category: "Meats", items: ["Grass-fed Beef", "Pasture-raised Poultry", "Organic Pork"], benefits: "High satiety, essential amino acids for tissue repair." },
    { category: "Fish", items: ["Wild-caught Salmon", "Sardines", "Mackerel"], benefits: "Rich in Omega-3 to actively reduce inflammation." },
    { category: "Healthy Fats", items: ["Avocados", "Extra Virgin Olive Oil", "Ghee"], benefits: "Promotes lymph flow and hormone health." },
    { category: "Anti-Inflammatory Veg", items: ["Leafy Greens", "Cruciferous Veg", "Berries"], benefits: "Rich in phytonutrients and low glycemic impact." }
  ],
  avoidFoods: ["Refined Sugars", "Seed Oils (Soy, Corn)", "Processed Carbs", "Excessive Alcohol"]
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
