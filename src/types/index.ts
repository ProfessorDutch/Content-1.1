export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'free' | 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration: string;
  creditCost: number;
  image: string;
  icon: string;
  learningPath: string;
  participants: number;
  avgScore: number;
  content?: ModuleContent;
}

export interface ModuleContent {
  overview: string;
  analogy?: {
    scenario?: string;
    explanation: string;
  };
  components: ModuleSection[];
}

export interface ModuleSection {
  type: 'text' | 'list' | 'interactive';
  title?: string;
  data: string | string[] | Record<string, string>;
  image?: string;
  isKey?: boolean;
  isExercise?: boolean;
  question?: string;
  options?: string[];
  correct?: number;
}