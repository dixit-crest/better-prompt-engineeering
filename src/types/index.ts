// Core prompt section types
export interface PromptSection {
  id: string;
  label: string;
  description?: string;
  isOptional: boolean;
  order: number;
}

// Main prompt / task statement
export interface MainPrompt {
  enabled: boolean;
  value: string;
}

// Technologies / Packages / Libraries
export interface Technologies {
  enabled: boolean;
  value: string[];
}

// Subtasks / To-Do List
export interface Subtask {
  id: string;
  value: string;
}
export interface Subtasks {
  enabled: boolean;
  items: Subtask[];
}

// Success Goals / Acceptance Criteria
export interface SuccessGoal {
  id: string;
  value: string;
}
export interface SuccessGoals {
  enabled: boolean;
  items: SuccessGoal[];
}

// Success Criteria / Definition of Done
export interface SuccessCriteria {
  enabled: boolean;
  value: string;
}

// Context / File References
export interface Context {
  enabled: boolean;
  value: string;
}

// Data Examples
export interface DataExample {
  id: string;
  input: string;
  output: string;
}
export interface DataExamples {
  enabled: boolean;
  items: DataExample[];
}

// Functional Requirements
export interface FunctionalRequirements {
  enabled: boolean;
  value: string;
}

// User Stories
export interface UserStories {
  enabled: boolean;
  value: string;
}

// Business Rules
export interface BusinessRules {
  enabled: boolean;
  value: string;
}

// Technical Architecture and Design
export interface TechnicalArchitecture {
  enabled: boolean;
  value: string;
}

// API Specifications
export interface ApiSpecifications {
  enabled: boolean;
  value: string;
}

// Behavior Specifications
export interface BehaviorSpecifications {
  enabled: boolean;
  value: string;
}

// Non-Functional Requirements
export interface NonFunctionalRequirements {
  enabled: boolean;
  value: string;
}

// Testing Strategy
export interface TestingStrategy {
  enabled: boolean;
  value: string;
}

// Constraints / Guardrails
export interface Constraints {
  enabled: boolean;
  value: string;
}

// Spec-driven development structure
export interface SpecStructure {
  enabled: boolean;
  preconditions: string;
  inputs: string;
  actions: string;
  outputs: string;
  postconditions: string;
}

// Behavior-focused sections
export interface BehaviorSections {
  enabled: boolean;
  happyPath: string;
  edgeCases: string;
  failureStates: string;
}

// Full prompt structure
export interface FullPrompt {
  mainPrompt: MainPrompt;
  technologies: Technologies;
  subtasks: Subtasks;
  successGoals: SuccessGoals;
  successCriteria: SuccessCriteria;
  context: Context;
  dataExamples: DataExamples;
  functionalRequirements: FunctionalRequirements;
  userStories: UserStories;
  businessRules: BusinessRules;
  technicalArchitecture: TechnicalArchitecture;
  apiSpecifications: ApiSpecifications;
  behaviorSpecifications: BehaviorSpecifications;
  nonFunctionalRequirements: NonFunctionalRequirements;
  testingStrategy: TestingStrategy;
  constraints: Constraints;
  specStructure: SpecStructure;
  behaviorSections: BehaviorSections;
}

// Auto-fill configuration
export interface OllamaConfig {
  baseUrl: string;
  model: string;
}

// Ollama request/response models
export interface OllamaChatRequest {
  model: string;
  messages: { role: 'user' | 'system'; content: string }[];
  stream?: boolean;
}

export interface OllamaChatResponse {
  model: string;
  created_at: string;
  message: { role: 'user' | 'system'; content: string };
  done: boolean;
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  eval_count?: number;
}

export interface OllamaAutoFillResponse {
  taskIntent?: string;
  suggestedTechnologies?: string[];
  suggestedSubtasks?: string[];
  suggestedSuccessGoals?: string[];
  suggestedSuccessCriteria?: string;
  needsContext?: boolean;
  suggestedContext?: string;
  suggestedDataExamples?: { input: string; output: string }[];
  suggestedFunctionalRequirements?: string[];
  suggestedUserStories?: string[];
  suggestedBusinessRules?: string[];
  suggestedArchitecture?: string;
  suggestedApiSpecs?: string;
  suggestedBehaviorSpecs?: string;
  suggestedNonFunctionalRequirements?: string[];
  suggestedTesting?: string[];
  suggestedConstraints?: string[];
  specStructure?: {
    preconditions?: string;
    inputs?: string;
    actions?: string;
    outputs?: string;
    postconditions?: string;
  };
  behaviorSections?: {
    happyPath?: string;
    edgeCases?: string;
    failureStates?: string;
  };
}
