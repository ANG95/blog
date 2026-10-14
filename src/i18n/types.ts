export type Locale = "es" | "en";

export interface EducationItem {
  title: string;
  institution: string;
  date: string;
}

export interface ExperienceProject {
  name: string;
  bullets: string[];
  stack: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  link: string;
  period: string;
  bullets?: string[];
  stack?: string[];
  projects?: ExperienceProject[];
}

export interface Translations {
  ui: {
    backToPortfolio: string;
    skills: string;
    education: string;
    experience: string;
    visit: string;
    privacyPolicy: string;
    privacyPolicyGeoFoto: string;
    copyright: string;
  };
  profile: {
    title: string;
    summary: string;
  };
  education: EducationItem[];
  experience: ExperienceItem[];
}
