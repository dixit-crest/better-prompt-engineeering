import type {
  OllamaChatRequest,
  OllamaChatResponse,
  OllamaAutoFillResponse,
  OllamaConfig,
} from '../types'

const DEFAULT_CONFIG: OllamaConfig = {
  baseUrl: 'http://localhost:11434',
  model: 'llama3.2:3b',
}

export class OllamaService {
  private config: OllamaConfig

  constructor(config: Partial<OllamaConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config }
  }

  updateConfig(config: Partial<OllamaConfig>) {
    this.config = { ...this.config, ...config }
  }

  getConfig(): OllamaConfig {
    return this.config
  }

  private buildUrl(path: string): string {
    return `${this.config.baseUrl}${path}`
  }

  async checkConnection(): Promise<boolean> {
    try {
      const response = await fetch(this.buildUrl('/api/tags'))
      return response.ok
    } catch {
      return false
    }
  }

  async chat(request: OllamaChatRequest): Promise<string> {
    const response = await fetch(this.buildUrl('/api/chat'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`)
    }

    const data: OllamaChatResponse = await response.json()
    return data.message.content
  }

  async autoFill(prompt: string): Promise<OllamaAutoFillResponse> {
    const systemPrompt = `You are an expert prompt engineer assistant. Your job is to analyze a rough user prompt and suggest structured values for creating a comprehensive prompt template.

Return your response as VALID JSON ONLY with this structure:
{
  "taskIntent": "string - concise task summary",
  "suggestedTechnologies": ["string", ...] - relevant libraries/frameworks,
  "suggestedSubtasks": ["string", ...] - implementation steps,
  "suggestedSuccessGoals": ["string", ...] - acceptance criteria,
  "suggestedSuccessCriteria": "string - definition of done",
  "needsContext": boolean - whether file context is needed,
  "suggestedContext": "string - placeholder for file references if needed",
  "suggestedDataExamples": [{"input": "string", "output": "string"}, ...] - sample data,
  "suggestedFunctionalRequirements": ["string", ...],
  "suggestedUserStories": ["string", ...],
  "suggestedBusinessRules": ["string", ...],
  "suggestedArchitecture": "string - technical approach",
  "suggestedApiSpecs": "string - API requirements if any",
  "suggestedBehaviorSpecs": "string - behavior details",
  "suggestedNonFunctionalRequirements": ["string", ...],
  "suggestedTesting": ["string", ...],
  "suggestedConstraints": ["string", ...],
  "specStructure": {
    "preconditions": "string",
    "inputs": "string",
    "actions": "string",
    "outputs": "string",
    "postconditions": "string"
  },
  "behaviorSections": {
    "happyPath": "string",
    "edgeCases": "string",
    "failureStates": "string"
  }
}

Only include fields where you have confident suggestions. Leave fields as null or omit them when uncertain.
Focus on being helpful and specific without overpromising.`

    const userPrompt = `Here is my rough prompt:
"${prompt}"

Please analyze this prompt and suggest values for the structured fields above.`

    const request: OllamaChatRequest = {
      model: this.config.model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      stream: false,
    }

    const responseText = await this.chat(request)

    try {
      const json = JSON.parse(responseText)
      return json as OllamaAutoFillResponse
    } catch {
      console.error('Failed to parse Ollama response as JSON:', responseText)
      return {}
    }
  }
}

export const ollamaService = new OllamaService()
