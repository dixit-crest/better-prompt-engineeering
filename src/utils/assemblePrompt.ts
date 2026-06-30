import type { FullPrompt } from '../types';

export function assemblePrompt(prompt: FullPrompt): string {
  const parts: string[] = [];

  const addTextareaSection = (label: string, content: string) => {
    if (!content.trim()) return;
    parts.push(`## ${label}`);
    parts.push(content);
  };

  if (prompt.mainPrompt.enabled && prompt.mainPrompt.value.trim()) {
    parts.push(prompt.mainPrompt.value);
    parts.push('');
  }

  if (prompt.technologies.enabled && prompt.technologies.value.length > 0) {
    parts.push(`**Technologies:** ${prompt.technologies.value.join(', ')}`);
    parts.push('');
  }

  if (prompt.subtasks.enabled && prompt.subtasks.items.length > 0) {
    parts.push('## Subtasks / To-Do List');
    prompt.subtasks.items.forEach((item) => parts.push(`- ${item.value}`));
    parts.push('');
  }

  if (prompt.successGoals.enabled && prompt.successGoals.items.length > 0) {
    parts.push('## Success Goals / Acceptance Criteria');
    prompt.successGoals.items.forEach((item) => parts.push(`- ${item.value}`));
    parts.push('');
  }

  if (prompt.context.enabled && prompt.context.value.trim()) {
    parts.push(`**Context / File References:** ${prompt.context.value}`);
    parts.push('');
  }

  if (prompt.dataExamples.enabled && prompt.dataExamples.items.length > 0) {
    parts.push('## Data Examples');
    prompt.dataExamples.items.forEach((ex) => {
      parts.push(`Input: ${ex.input}`);
      parts.push(`Output: ${ex.output}`);
      parts.push('');
    });
  }

  if (prompt.functionalRequirements.enabled && prompt.functionalRequirements.value.trim()) {
    addTextareaSection('Functional Requirements', prompt.functionalRequirements.value);
  }

  if (prompt.userStories.enabled && prompt.userStories.value.trim()) {
    addTextareaSection('User Stories', prompt.userStories.value);
  }

  if (prompt.businessRules.enabled && prompt.businessRules.value.trim()) {
    addTextareaSection('Business Rules', prompt.businessRules.value);
  }

  if (prompt.technicalArchitecture.enabled && prompt.technicalArchitecture.value.trim()) {
    addTextareaSection('Technical Architecture & Design', prompt.technicalArchitecture.value);
  }

  if (prompt.apiSpecifications.enabled && prompt.apiSpecifications.value.trim()) {
    addTextareaSection('API Specifications', prompt.apiSpecifications.value);
  }

  if (prompt.behaviorSpecifications.enabled && prompt.behaviorSpecifications.value.trim()) {
    addTextareaSection('Behavior Specifications', prompt.behaviorSpecifications.value);
  }

  if (prompt.nonFunctionalRequirements.enabled && prompt.nonFunctionalRequirements.value.trim()) {
    addTextareaSection('Non-Functional Requirements', prompt.nonFunctionalRequirements.value);
  }

  if (prompt.testingStrategy.enabled && prompt.testingStrategy.value.trim()) {
    addTextareaSection('Testing Strategy', prompt.testingStrategy.value);
  }

  if (prompt.successCriteria.enabled && prompt.successCriteria.value.trim()) {
    addTextareaSection('Definition of Done', prompt.successCriteria.value);
  }

  if (prompt.constraints.enabled && prompt.constraints.value.trim()) {
    addTextareaSection('Constraints / Guardrails', prompt.constraints.value);
  }

  if (prompt.specStructure.enabled) {
    const specParts: string[] = [];
    if (prompt.specStructure.preconditions.trim()) specParts.push(`**Preconditions:** ${prompt.specStructure.preconditions}`);
    if (prompt.specStructure.inputs.trim()) specParts.push(`**Inputs:** ${prompt.specStructure.inputs}`);
    if (prompt.specStructure.actions.trim()) specParts.push(`**Actions:** ${prompt.specStructure.actions}`);
    if (prompt.specStructure.outputs.trim()) specParts.push(`**Outputs:** ${prompt.specStructure.outputs}`);
    if (prompt.specStructure.postconditions.trim()) specParts.push(`**Postconditions:** ${prompt.specStructure.postconditions}`);
    if (specParts.length > 0) {
      parts.push('## Spec Structure');
      parts.push(...specParts);
      parts.push('');
    }
  }

  if (prompt.behaviorSections.enabled) {
    const behaviorParts: string[] = [];
    if (prompt.behaviorSections.happyPath.trim()) behaviorParts.push(`**Happy Path:** ${prompt.behaviorSections.happyPath}`);
    if (prompt.behaviorSections.edgeCases.trim()) behaviorParts.push(`**Edge Cases:** ${prompt.behaviorSections.edgeCases}`);
    if (prompt.behaviorSections.failureStates.trim()) behaviorParts.push(`**Failure States:** ${prompt.behaviorSections.failureStates}`);
    if (behaviorParts.length > 0) {
      parts.push('## Behavior Focus');
      parts.push(...behaviorParts);
      parts.push('');
    }
  }

  return parts.join('\n\n').trim();
}
