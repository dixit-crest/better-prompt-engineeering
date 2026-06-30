import { useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { SparklesIcon, RefreshCwIcon, XIcon, AlertCircleIcon } from 'lucide-react'

interface OllamaAutoFillSectionProps {
  prompt: string
  onTrigger: () => void
  isConnected: boolean | null
  checkConnection: () => Promise<boolean>
  isLoading: boolean
  error: string | null
  clearError: () => void
  baseUrl: string
}

export const OllamaAutoFillSection = ({
  prompt,
  onTrigger,
  isConnected,
  checkConnection,
  isLoading,
  error,
  clearError,
  baseUrl,
}: OllamaAutoFillSectionProps) => {
  const handleAutoFill = useCallback(async () => {
    if (!prompt.trim()) {
      return
    }
    const connected = await checkConnection()
    if (!connected) {
      alert(`Could not connect to Ollama. Make sure Ollama is running at ${baseUrl}.`)
      return
    }
    onTrigger()
  }, [prompt, checkConnection, onTrigger, baseUrl])

  const handleCheckConnection = useCallback(async () => {
    const connected = await checkConnection()
    if (connected) {
      alert('Connected to Ollama successfully!')
    } else {
      alert(`Could not connect to Ollama. Make sure Ollama is running at ${baseUrl}.`)
    }
  }, [checkConnection, baseUrl])

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Ollama Status:</span>
            {isConnected ? (
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Connected
              </Badge>
            ) : (
              <Badge
                variant="destructive"
                className="bg-destructive/10 text-destructive border-destructive/20"
              >
                Disconnected
              </Badge>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCheckConnection} className="h-8">
              <RefreshCwIcon className="mr-2 size-3" />
              Test
            </Button>
            <Button
              onClick={handleAutoFill}
              disabled={isLoading || !prompt.trim()}
              size="sm"
              className="h-8"
            >
              {isLoading ? (
                <RefreshCwIcon className="mr-2 size-3 animate-spin" />
              ) : (
                <SparklesIcon className="mr-2 size-3" />
              )}
              {isLoading ? 'Analyzing...' : 'Auto-fill'}
            </Button>
          </div>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircleIcon className="size-4" />
            <AlertDescription className="flex items-center justify-between w-full">
              {error}
              <Button
                variant="ghost"
                size="icon"
                onClick={clearError}
                className="size-6 ml-2 hover:bg-transparent"
              >
                <XIcon className="size-4" />
              </Button>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
