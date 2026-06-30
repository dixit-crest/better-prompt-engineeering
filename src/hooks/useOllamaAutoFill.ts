import { useState, useCallback } from 'react'
import type { OllamaAutoFillResponse } from '../types'
import { ollamaService } from '../services/ollamaService'

export const useOllamaAutoFill = (baseUrl?: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState<boolean | null>(null)

  const checkConnection = useCallback(async () => {
    if (baseUrl) {
      ollamaService.updateConfig({ baseUrl })
    }
    try {
      const connected = await ollamaService.checkConnection()
      setIsConnected(connected)
      return connected
    } catch {
      setIsConnected(false)
      return false
    }
  }, [baseUrl])

  const autoFill = useCallback(
    async (prompt: string): Promise<OllamaAutoFillResponse | null> => {
      if (baseUrl) {
        ollamaService.updateConfig({ baseUrl })
      }
      if (!prompt.trim()) {
        setError('Please enter a prompt first')
        return null
      }

      setIsLoading(true)
      setError(null)

      try {
        const suggestions = await ollamaService.autoFill(prompt)
        return suggestions
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to connect to Ollama'
        setError(errorMessage)
        return null
      } finally {
        setIsLoading(false)
      }
    },
    [baseUrl],
  )

  return {
    isLoading,
    error,
    isConnected,
    checkConnection,
    autoFill,
    clearError: () => setError(null),
  }
}
