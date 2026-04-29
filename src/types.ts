
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

export interface ProgramTier {
  id: string;
  name: string;
  price: string;
  description: string;
  benefits: string[];
  target: string;
  cta: string;
}

export interface SectionContent {
  headline: string;
  subheadline: string;
  keyMessage: string;
  cta: string;
  visualDirection: string;
}
