import { useCallback, useState } from 'react'
import type { ApiSpecifications } from '../../types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { TypewriterHint } from '../common/TypewriterHint'
import { HINT_DATA } from '../../utils/hintData'

interface ApiSpecificationsProps {
  specifications: ApiSpecifications
  onChange: (value: string) => void
}

export const ApiSpecificationsSection = ({ specifications, onChange }: ApiSpecificationsProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const hint = HINT_DATA.apiSpecifications

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value)
    },
    [onChange],
  )

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md"
    >
      <CardHeader>
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          API Specifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          id="api-specifications"
          placeholder={hint.placeholder}
          value={specifications.value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={5}
          className="font-mono text-sm resize-none focus-visible:ring-ring/30"
        />
        <TypewriterHint
          description={hint.description}
          examples={hint.examples}
          visible={isFocused || isHovered}
        />
      </CardContent>
    </Card>
  )
}
