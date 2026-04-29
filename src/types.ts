
export interface BrandFoundation {
  name: string;
  mission: string;
  vision: string;
  values: string[];
  audience: string;
  emotionalDrivers: {
    painPoints: string[];
    fears: string[];
    desires: string[];
  };
}

export interface SectionContent {
  headline: string;
  subheadline: string;
  keyMessage: string;
  cta: string;
  visualDirection: string;
}

export interface DailyPlan {
  day: number;
  focus: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snack?: string;
  movement: string;
  benefit: string;
  image: string;
}
