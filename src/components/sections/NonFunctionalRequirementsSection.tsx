import { useCallback, useState } from 'react'
import type { NonFunctionalRequirements } from '../../types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { TypewriterHint } from '../common/TypewriterHint'
import { HINT_DATA } from '../../utils/hintData'

interface NonFunctionalRequirementsProps {
  requirements: NonFunctionalRequirements
  onChange: (value: string) => void
}

export const NonFunctionalRequirementsSection = ({
  requirements,
  onChange,
}: NonFunctionalRequirementsProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const hint = HINT_DATA.nonFunctionalRequirements

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value)
    },
    [onChange],
  )

  return (
    <Card className="border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          Non-Functional Requirements
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          id="non-functional-requirements"
          placeholder={hint.placeholder}
          value={requirements.value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={5}
          className="font-mono text-sm resize-none focus-visible:ring-ring/30"
        />
        <TypewriterHint
          description={hint.description}
          examples={hint.examples}
          visible={isFocused || !!requirements.value}
        />
      </CardContent>
    </Card>
  )
}
