import { useState, useCallback, useEffect } from 'react'
import { usePromptState } from './hooks/usePromptState'
import { useOllamaAutoFill } from './hooks/useOllamaAutoFill'
import { MainPromptSection } from './components/sections/MainPromptSection'
import { TechnologiesSection } from './components/sections/TechnologiesSection'
import { SubtasksSection } from './components/sections/SubtasksSection'
import { SuccessGoalsSection } from './components/sections/SuccessGoalsSection'
import { SuccessCriteriaSection } from './components/sections/SuccessCriteriaSection'
import { ContextSection } from './components/sections/ContextSection'
import { DataExamplesSection } from './components/sections/DataExamplesSection'
import { FunctionalRequirementsSection } from './components/sections/FunctionalRequirementsSection'
import { UserStoriesSection } from './components/sections/UserStoriesSection'
import { BusinessRulesSection } from './components/sections/BusinessRulesSection'
import { TechnicalArchitectureSection } from './components/sections/TechnicalArchitectureSection'
import { ApiSpecificationsSection } from './components/sections/ApiSpecificationsSection'
import { BehaviorSpecificationsSection } from './components/sections/BehaviorSpecificationsSection'
import { NonFunctionalRequirementsSection } from './components/sections/NonFunctionalRequirementsSection'
import { TestingStrategySection } from './components/sections/TestingStrategySection'
import { ConstraintsSection } from './components/sections/ConstraintsSection'
import { SpecStructureSection } from './components/sections/SpecStructureSection'
import { BehaviorSectionsSection } from './components/sections/BehaviorSectionsSection'
import { OllamaAutoFillSection } from './components/sections/OllamaAutoFillSection'
import { ModelConfigSection } from './components/sections/ModelConfigSection'
import { FinalPromptView } from './components/assembly/FinalPromptView'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TooltipProvider } from '@/components/ui/tooltip'
import { RotateCcwIcon } from 'lucide-react'
import { AccentColorPicker } from '@/components/accent-color-picker'
import { AccentThemeProvider } from '@/components/accent-theme-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

function App() {
  const [baseUrl, setBaseUrl] = useState(() => {
    return localStorage.getItem('ollama-base-url') || 'http://localhost:11434'
  })

  const handleBaseUrlChange = (url: string) => {
    setBaseUrl(url)
    localStorage.setItem('ollama-base-url', url)
  }

  const {
    prompt,
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
    updateSection,
    resetPrompt,
  } = usePromptState()

  const { isLoading, error, isConnected, checkConnection, autoFill, clearError } =
    useOllamaAutoFill(baseUrl)

  useEffect(() => {
    checkConnection()
  }, [checkConnection])

  const handleAutoFill = useCallback(async () => {
    if (!prompt.mainPrompt.value.trim()) {
      alert('Please enter a task description first.')
      return
    }

    const suggestions = await autoFill(prompt.mainPrompt.value)
    if (suggestions) {
      if (suggestions.suggestedTechnologies) {
        updateTechnologies(suggestions.suggestedTechnologies)
      }
      if (suggestions.suggestedSubtasks) {
        suggestions.suggestedSubtasks.forEach((task) => addSubtask(task))
      }
      if (suggestions.suggestedSuccessGoals) {
        suggestions.suggestedSuccessGoals.forEach((goal) => addSuccessGoal(goal))
      }
      if (suggestions.suggestedSuccessCriteria) {
        updateSection('successCriteria', {
          ...prompt.successCriteria,
          value: suggestions.suggestedSuccessCriteria,
        })
      }
      if (suggestions.suggestedContext) {
        updateSection('context', {
          ...prompt.context,
          value: suggestions.suggestedContext,
        })
      }
      if (suggestions.suggestedDataExamples) {
        suggestions.suggestedDataExamples.forEach((ex) => addDataExample(ex.input, ex.output))
      }
      if (suggestions.suggestedFunctionalRequirements) {
        updateSection('functionalRequirements', {
          ...prompt.functionalRequirements,
          value: suggestions.suggestedFunctionalRequirements.join('\n'),
        })
      }
      if (suggestions.suggestedUserStories) {
        updateSection('userStories', {
          ...prompt.userStories,
          value: suggestions.suggestedUserStories.join('\n'),
        })
      }
      if (suggestions.suggestedBusinessRules) {
        updateSection('businessRules', {
          ...prompt.businessRules,
          value: suggestions.suggestedBusinessRules.join('\n'),
        })
      }
      if (suggestions.suggestedArchitecture) {
        updateSection('technicalArchitecture', {
          ...prompt.technicalArchitecture,
          value: suggestions.suggestedArchitecture,
        })
      }
      if (suggestions.suggestedApiSpecs) {
        updateSection('apiSpecifications', {
          ...prompt.apiSpecifications,
          value: suggestions.suggestedApiSpecs,
        })
      }
      if (suggestions.suggestedBehaviorSpecs) {
        updateSection('behaviorSpecifications', {
          ...prompt.behaviorSpecifications,
          value: suggestions.suggestedBehaviorSpecs,
        })
      }
      if (suggestions.suggestedNonFunctionalRequirements) {
        updateSection('nonFunctionalRequirements', {
          ...prompt.nonFunctionalRequirements,
          value: suggestions.suggestedNonFunctionalRequirements.join('\n'),
        })
      }
      if (suggestions.suggestedTesting) {
        updateSection('testingStrategy', {
          ...prompt.testingStrategy,
          value: suggestions.suggestedTesting.join('\n'),
        })
      }
      if (suggestions.suggestedConstraints) {
        updateSection('constraints', {
          ...prompt.constraints,
          value: suggestions.suggestedConstraints.join('\n'),
        })
      }
      if (suggestions.specStructure) {
        updateSection('specStructure', {
          ...prompt.specStructure,
          preconditions: suggestions.specStructure.preconditions || '',
          inputs: suggestions.specStructure.inputs || '',
          actions: suggestions.specStructure.actions || '',
          outputs: suggestions.specStructure.outputs || '',
          postconditions: suggestions.specStructure.postconditions || '',
        })
      }
      if (suggestions.behaviorSections) {
        updateSection('behaviorSections', {
          ...prompt.behaviorSections,
          happyPath: suggestions.behaviorSections.happyPath || '',
          edgeCases: suggestions.behaviorSections.edgeCases || '',
          failureStates: suggestions.behaviorSections.failureStates || '',
        })
      }
    }
  }, [
    prompt.mainPrompt.value,
    autoFill,
    updateTechnologies,
    addSubtask,
    addSuccessGoal,
    updateSection,
    prompt,
    addDataExample,
  ])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AccentThemeProvider>
        <TooltipProvider>
          <div className="flex flex-col h-screen w-full overflow-hidden bg-background">
            <header className="px-6 py-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Prompt Engineer
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <AccentColorPicker />
                <ModeToggle />
                <Button variant="outline" size="sm" onClick={resetPrompt} className="gap-2">
                  <RotateCcwIcon className="size-4" />
                  Reset All
                </Button>
              </div>
            </header>

            <main className="flex flex-1 overflow-hidden">
              {/* Editor Side */}
              <ScrollArea className="flex-1 h-full border-r">
                <div className="p-8 max-w-5xl mx-auto space-y-8">
                  <section className="space-y-4">
                    <ModelConfigSection
                      baseUrl={baseUrl}
                      onBaseUrlChange={handleBaseUrlChange}
                      onTestConnection={async () => {
                        await checkConnection()
                      }}
                      isConnected={isConnected}
                    />
                    <OllamaAutoFillSection
                      prompt={prompt.mainPrompt.value}
                      onTrigger={handleAutoFill}
                      isConnected={isConnected}
                      checkConnection={checkConnection}
                      isLoading={isLoading}
                      error={error}
                      clearError={clearError}
                      baseUrl={baseUrl}
                    />
                  </section>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
                    <div className="lg:col-span-2">
                      <MainPromptSection prompt={prompt.mainPrompt} onChange={updateMainPrompt} />
                    </div>

                    <TechnologiesSection
                      technologies={prompt.technologies}
                      onChange={updateTechnologies}
                    />

                    <SubtasksSection
                      subtasks={prompt.subtasks}
                      onAdd={addSubtask}
                      onRemove={removeSubtask}
                      onUpdate={updateSubtask}
                    />

                    <SuccessGoalsSection
                      successGoals={prompt.successGoals}
                      onAdd={addSuccessGoal}
                      onRemove={removeSuccessGoal}
                      onUpdate={updateSuccessGoal}
                    />

                    <SuccessCriteriaSection
                      criteria={prompt.successCriteria}
                      onChange={(val) =>
                        updateSection('successCriteria', {
                          ...prompt.successCriteria,
                          value: val,
                        })
                      }
                    />

                    <ContextSection
                      context={prompt.context}
                      onChange={(val) =>
                        updateSection('context', {
                          ...prompt.context,
                          value: val,
                        })
                      }
                    />

                    <div className="lg:col-span-2">
                      <DataExamplesSection
                        dataExamples={prompt.dataExamples}
                        onAdd={addDataExample}
                        onRemove={removeDataExample}
                        onUpdate={updateDataExample}
                      />
                    </div>

                    <FunctionalRequirementsSection
                      requirements={prompt.functionalRequirements}
                      onChange={(val) =>
                        updateSection('functionalRequirements', {
                          ...prompt.functionalRequirements,
                          value: val,
                        })
                      }
                    />

                    <UserStoriesSection
                      userStories={prompt.userStories}
                      onChange={(val) =>
                        updateSection('userStories', {
                          ...prompt.userStories,
                          value: val,
                        })
                      }
                    />

                    <BusinessRulesSection
                      rules={prompt.businessRules}
                      onChange={(val) =>
                        updateSection('businessRules', {
                          ...prompt.businessRules,
                          value: val,
                        })
                      }
                    />

                    <TechnicalArchitectureSection
                      architecture={prompt.technicalArchitecture}
                      onChange={(val) =>
                        updateSection('technicalArchitecture', {
                          ...prompt.technicalArchitecture,
                          value: val,
                        })
                      }
                    />

                    <ApiSpecificationsSection
                      specifications={prompt.apiSpecifications}
                      onChange={(val) =>
                        updateSection('apiSpecifications', {
                          ...prompt.apiSpecifications,
                          value: val,
                        })
                      }
                    />

                    <BehaviorSpecificationsSection
                      specifications={prompt.behaviorSpecifications}
                      onChange={(val) =>
                        updateSection('behaviorSpecifications', {
                          ...prompt.behaviorSpecifications,
                          value: val,
                        })
                      }
                    />

                    <NonFunctionalRequirementsSection
                      requirements={prompt.nonFunctionalRequirements}
                      onChange={(val) =>
                        updateSection('nonFunctionalRequirements', {
                          ...prompt.nonFunctionalRequirements,
                          value: val,
                        })
                      }
                    />

                    <TestingStrategySection
                      strategy={prompt.testingStrategy}
                      onChange={(val) =>
                        updateSection('testingStrategy', {
                          ...prompt.testingStrategy,
                          value: val,
                        })
                      }
                    />

                    <ConstraintsSection
                      constraints={prompt.constraints}
                      onChange={(val) =>
                        updateSection('constraints', {
                          ...prompt.constraints,
                          value: val,
                        })
                      }
                    />

                    <SpecStructureSection
                      structure={prompt.specStructure}
                      onChange={(field, val) =>
                        updateSection('specStructure', {
                          ...prompt.specStructure,
                          [field]: val,
                        })
                      }
                    />

                    <BehaviorSectionsSection
                      sections={prompt.behaviorSections}
                      onChange={(field, val) =>
                        updateSection('behaviorSections', {
                          ...prompt.behaviorSections,
                          [field]: val,
                        })
                      }
                    />
                  </div>
                </div>
              </ScrollArea>

              {/* Preview Side */}
              <aside className="hidden xl:block w-[450px] bg-muted/30 h-full">
                <div className="h-full p-6">
                  <FinalPromptView prompt={prompt} onCopy={() => { }} />
                </div>
              </aside>
            </main>
          </div>
        </TooltipProvider>
      </AccentThemeProvider>
    </ThemeProvider>
  )
}

export default App
