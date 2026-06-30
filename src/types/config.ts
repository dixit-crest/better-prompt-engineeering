import type { PromptSection, FullPrompt, OllamaConfig } from './index'

// Central source of truth for prompt sections
// Defines order, labels, and whether sections are optional
export const PROMPT_SECTIONS: PromptSection[] = [
  {
    id: 'mainPrompt',
    label: 'Main Prompt',
    description: 'The primary task description',
    isOptional: false,
    order: 1,
  },
  {
    id: 'technologies',
    label: 'Technologies',
    description: 'Libraries, frameworks, and tools to use',
    isOptional: true,
    order: 2,
  },
  {
    id: 'subtasks',
    label: 'Subtasks',
    description: 'Implementation steps',
    isOptional: true,
    order: 3,
  },
  {
    id: 'successGoals',
    label: 'Success Goals',
    description: 'What success looks like (acceptance criteria)',
    isOptional: true,
    order: 4,
  },
  {
    id: 'context',
    label: 'Context',
    description: 'File references and project context',
    isOptional: true,
    order: 5,
  },
  {
    id: 'dataExamples',
    label: 'Data Examples',
    description: 'Sample inputs and expected outputs',
    isOptional: true,
    order: 6,
  },
  {
    id: 'functionalRequirements',
    label: 'Functional Requirements',
    description: 'What the feature must do',
    isOptional: true,
    order: 7,
  },
  {
    id: 'userStories',
    label: 'User Stories',
    description: 'User-focused feature descriptions',
    isOptional: true,
    order: 8,
  },
  {
    id: 'businessRules',
    label: 'Business Rules',
    description: 'Rules the implementation must follow',
    isOptional: true,
    order: 9,
  },
  {
    id: 'technicalArchitecture',
    label: 'Technical Architecture',
    description: 'Implementation structure and decisions',
    isOptional: true,
    order: 10,
  },
  {
    id: 'apiSpecifications',
    label: 'API Specifications',
    description: 'Endpoints, methods, and response formats',
    isOptional: true,
    order: 11,
  },
  {
    id: 'behaviorSpecifications',
    label: 'Behavior Specifications',
    description: 'Detailed behavior including edge cases',
    isOptional: true,
    order: 12,
  },
  {
    id: 'nonFunctionalRequirements',
    label: 'Non-Functional Requirements',
    description: 'Performance, security, accessibility',
    isOptional: true,
    order: 13,
  },
  {
    id: 'testingStrategy',
    label: 'Testing Strategy',
    description: 'How the feature should be validated',
    isOptional: true,
    order: 14,
  },
  {
    id: 'successCriteria',
    label: 'Definition of Done',
    description: 'Stricter completion criteria',
    isOptional: true,
    order: 15,
  },
  {
    id: 'constraints',
    label: 'Constraints / Guardrails',
    description: 'Hard limits and boundaries',
    isOptional: true,
    order: 16,
  },
  {
    id: 'specStructure',
    label: 'Spec Structure',
    description: 'Preconditions, inputs, actions, outputs, postconditions',
    isOptional: true,
    order: 17,
  },
  {
    id: 'behaviorSections',
    label: 'Behavior Focus',
    description: 'Happy path, edge cases, failure states',
    isOptional: true,
    order: 18,
  },
]

// Default empty prompt state
export const getDefaultFullPrompt = (): FullPrompt => ({
  mainPrompt: { enabled: true, value: '' },
  technologies: { enabled: true, value: [] },
  subtasks: { enabled: true, items: [] },
  successGoals: { enabled: true, items: [] },
  successCriteria: { enabled: true, value: '' },
  context: { enabled: true, value: '' },
  dataExamples: { enabled: true, items: [] },
  functionalRequirements: { enabled: true, value: '' },
  userStories: { enabled: true, value: '' },
  businessRules: { enabled: true, value: '' },
  technicalArchitecture: { enabled: true, value: '' },
  apiSpecifications: { enabled: true, value: '' },
  behaviorSpecifications: { enabled: true, value: '' },
  nonFunctionalRequirements: { enabled: true, value: '' },
  testingStrategy: { enabled: true, value: '' },
  constraints: { enabled: true, value: '' },
  specStructure: {
    enabled: true,
    preconditions: '',
    inputs: '',
    actions: '',
    outputs: '',
    postconditions: '',
  },
  behaviorSections: {
    enabled: true,
    happyPath: '',
    edgeCases: '',
    failureStates: '',
  },
})

// Default Ollama configuration
export const DEFAULT_OLLAMA_CONFIG: OllamaConfig = {
  baseUrl: 'http://localhost:11434',
  model: 'llama3.2',
}
