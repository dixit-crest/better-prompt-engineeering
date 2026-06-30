import { describe, it, expect } from 'vitest'
import { assemblePrompt } from '../../src/utils/assemblePrompt'
import { getDefaultFullPrompt } from '../../src/types/config'

describe('assemblePrompt', () => {
  it('returns empty string for default empty prompt', () => {
    expect(assemblePrompt(getDefaultFullPrompt())).toBe('')
  })

  it('includes main prompt when enabled', () => {
    const prompt = getDefaultFullPrompt()
    prompt.mainPrompt = { enabled: true, value: 'Build a login form' }
    expect(assemblePrompt(prompt)).toBe('Build a login form')
  })

  it('skips disabled sections', () => {
    const prompt = getDefaultFullPrompt()
    prompt.mainPrompt = { enabled: true, value: 'Main task' }
    prompt.technologies = { enabled: false, value: ['React', 'TypeScript'] }
    expect(assemblePrompt(prompt)).toBe('Main task')
  })

  it('includes technologies when enabled', () => {
    const prompt = getDefaultFullPrompt()
    prompt.mainPrompt = { enabled: true, value: 'Main task' }
    prompt.technologies = { enabled: true, value: ['React', 'TypeScript'] }
    const result = assemblePrompt(prompt)
    expect(result).toContain('**Technologies:** React, TypeScript')
  })

  it('preserves business rules wording verbatim', () => {
    const prompt = getDefaultFullPrompt()
    prompt.mainPrompt = { enabled: true, value: 'Implement checkout' }
    prompt.businessRules = {
      enabled: true,
      value: 'Users MUST NOT bypass payment validation.',
    }
    const result = assemblePrompt(prompt)
    expect(result).toContain('Users MUST NOT bypass payment validation.')
  })

  it('includes subtasks as a bullet list', () => {
    const prompt = getDefaultFullPrompt()
    prompt.mainPrompt = { enabled: true, value: 'Task' }
    prompt.subtasks = {
      enabled: true,
      items: [
        { id: '1', value: 'Step one' },
        { id: '2', value: 'Step two' },
      ],
    }
    const result = assemblePrompt(prompt)
    expect(result).toContain('## Subtasks / To-Do List')
    expect(result).toContain('- Step one')
    expect(result).toContain('- Step two')
  })
})
