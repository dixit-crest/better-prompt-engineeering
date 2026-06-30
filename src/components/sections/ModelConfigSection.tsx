import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Settings2Icon, ChevronDownIcon, ChevronUpIcon, GlobeIcon } from 'lucide-react'

interface ModelConfigSectionProps {
  baseUrl: string
  onBaseUrlChange: (url: string) => void
  onTestConnection: () => Promise<void>
  isConnected: boolean | null
}

export const ModelConfigSection = ({
  baseUrl,
  onBaseUrlChange,
  onTestConnection,
}: ModelConfigSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [localUrl, setLocalUrl] = useState(baseUrl)
  const [urlError, setUrlError] = useState<string | null>(null)

  const validateUrl = (url: string) => {
    if (!url) return true // Fallback to default
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const handleSave = () => {
    if (validateUrl(localUrl)) {
      onBaseUrlChange(localUrl)
      setUrlError(null)
    } else {
      setUrlError('Please enter a valid URL (e.g., http://localhost:11434)')
    }
  }

  const handleTest = async () => {
    if (validateUrl(localUrl)) {
      if (localUrl !== baseUrl) {
        onBaseUrlChange(localUrl)
      }
      await onTestConnection()
    } else {
      setUrlError('Please enter a valid URL before testing')
    }
  }

  return (
    <Card className="border-muted/40 shadow-sm overflow-hidden">
      <CardHeader
        className="py-3 px-4 cursor-pointer hover:bg-muted/50 transition-colors flex flex-row items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Settings2Icon className="size-4 text-primary" />
          <CardTitle className="text-sm font-medium">Model Configuration</CardTitle>
          {baseUrl !== 'http://localhost:11434' && (
            <div className="flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-semibold text-primary uppercase tracking-wider border border-primary/20">
              <GlobeIcon className="size-2.5" />
              Custom API
            </div>
          )}
        </div>
        <Button variant="ghost" size="icon" className="size-8">
          {isExpanded ? (
            <ChevronUpIcon className="size-4" />
          ) : (
            <ChevronDownIcon className="size-4" />
          )}
        </Button>
      </CardHeader>

      {isExpanded && (
        <CardContent className="px-4 pb-4 pt-0 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="api-url" className="text-xs font-medium text-muted-foreground">
                Model API Endpoint
              </label>
              <span className="text-[10px] text-muted-foreground italic">
                Default: http://localhost:11434
              </span>
            </div>
            <div className="flex gap-2">
              <Input
                id="api-url"
                value={localUrl}
                onChange={(e) => setLocalUrl(e.target.value)}
                placeholder="http://localhost:11434"
                className={`h-9 text-sm ${urlError ? 'border-destructive' : ''}`}
              />
              <Button
                variant="outline"
                size="sm"
                onClick={handleTest}
                className="whitespace-nowrap h-9"
              >
                Test Connection
              </Button>
              <Button
                size="sm"
                onClick={handleSave}
                disabled={localUrl === baseUrl}
                className="whitespace-nowrap h-9"
              >
                Save
              </Button>
            </div>
            {urlError && <p className="text-[10px] text-destructive font-medium">{urlError}</p>}
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Configure where your Ollama model is running. If you are using ngrok or a remote
              server, enter the full URL here.
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
