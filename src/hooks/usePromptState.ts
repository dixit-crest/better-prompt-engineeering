import { useState, useCallback } from 'react'
import type { FullPrompt } from '../types'
import { getDefaultFullPrompt } from '../types/config'

export const usePromptState = () => {
  const [prompt, setPrompt] = useState<FullPrompt>(getDefaultFullPrompt())

  const updateSection = useCallback(
    <T>(sectionId: keyof FullPrompt, updater: T | ((prev: T) => T)) => {
      setPrompt((prev) => {
        const section = prev[sectionId] as unknown as T
        const newValue =
          typeof updater === 'function' ? (updater as (prev: T) => T)(section) : updater
        return { ...prev, [sectionId]: newValue }
      })
    },
    [],
  )

  const updateMainPrompt = useCallback((value: string) => {
    setPrompt((prev) => ({ ...prev, mainPrompt: { ...prev.mainPrompt, value } }))
  }, [])

  const updateTechnologies = useCallback((values: string[]) => {
    setPrompt((prev) => ({ ...prev, technologies: { ...prev.technologies, value: values } }))
  }, [])

  const addSubtask = useCallback((value: string) => {
    setPrompt((prev) => ({
      ...prev,
      subtasks: {
        ...prev.subtasks,
        items: [...prev.subtasks.items, { id: crypto.randomUUID(), value }],
      },
    }))
  }, [])

  const removeSubtask = useCallback((id: string) => {
    setPrompt((prev) => ({
      ...prev,
      subtasks: {
        ...prev.subtasks,
        items: prev.subtasks.items.filter((item) => item.id !== id),
      },
    }))
  }, [])

  const updateSubtask = useCallback((id: string, value: string) => {
    setPrompt((prev) => ({
      ...prev,
      subtasks: {
        ...prev.subtasks,
        items: prev.subtasks.items.map((item) => (item.id === id ? { ...item, value } : item)),
      },
    }))
  }, [])

  const addSuccessGoal = useCallback((value: string) => {
    setPrompt((prev) => ({
      ...prev,
      successGoals: {
        ...prev.successGoals,
        items: [...prev.successGoals.items, { id: crypto.randomUUID(), value }],
      },
    }))
  }, [])

  const removeSuccessGoal = useCallback((id: string) => {
    setPrompt((prev) => ({
      ...prev,
      successGoals: {
        ...prev.successGoals,
        items: prev.successGoals.items.filter((item) => item.id !== id),
      },
    }))
  }, [])

  const updateSuccessGoal = useCallback((id: string, value: string) => {
    setPrompt((prev) => ({
      ...prev,
      successGoals: {
        ...prev.successGoals,
        items: prev.successGoals.items.map((item) => (item.id === id ? { ...item, value } : item)),
      },
    }))
  }, [])

  const addDataExample = useCallback((input: string, output: string) => {
    setPrompt((prev) => ({
      ...prev,
      dataExamples: {
        ...prev.dataExamples,
        items: [...prev.dataExamples.items, { id: crypto.randomUUID(), input, output }],
      },
    }))
  }, [])

  const removeDataExample = useCallback((id: string) => {
    setPrompt((prev) => ({
      ...prev,
      dataExamples: {
        ...prev.dataExamples,
        items: prev.dataExamples.items.filter((item) => item.id !== id),
      },
    }))
  }, [])

  const updateDataExample = useCallback((id: string, input: string, output: string) => {
    setPrompt((prev) => ({
      ...prev,
      dataExamples: {
        ...prev.dataExamples,
        items: prev.dataExamples.items.map((item) =>
          item.id === id ? { ...item, input, output } : item,
        ),
      },
    }))
  }, [])

  const toggleSectionEnabled = useCallback((sectionId: keyof FullPrompt) => {
    setPrompt((prev) => ({
      ...prev,
      [sectionId]: {
        ...(prev[sectionId] as object),
        enabled: !(prev[sectionId] as { enabled?: boolean }).enabled,
      },
    }))
  }, [])

  const resetPrompt = useCallback(() => {
    setPrompt(getDefaultFullPrompt())
  }, [])

  const loadPrompt = useCallback((newPrompt: FullPrompt) => {
    setPrompt(newPrompt)
  }, [])

  return {
    prompt,
    updateSection,
    updateMainPrompt,
    updateTechnologies,
    addSubtask,
    removeSubtask,
    updateSubtask,
    addSuccessGoal,
    removeSuccessGoal,
    updateSuccessGoal,
    addDataExample,
    removeDataExample,
    updateDataExample,
    toggleSectionEnabled,
    resetPrompt,
    loadPrompt,
  }
}
