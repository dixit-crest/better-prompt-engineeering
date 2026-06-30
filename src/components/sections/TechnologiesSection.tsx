import { useCallback, useState } from 'react'
import type { Technologies } from '../../types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { XIcon } from 'lucide-react'
import { TypewriterHint } from '../common/TypewriterHint'
import { HINT_DATA } from '../../utils/hintData'

interface TechnologiesProps {
  technologies: Technologies
  onChange: (values: string[]) => void
}

const COMMON_TECHNOLOGIES = [
  'React',
  'Vue.js',
  'Angular',
  'Next.js',
  'Node.js',
  'Express',
  'Django',
  'Flask',
  'Laravel',
  'Spring Boot',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'AWS',
  'Docker',
  'Kubernetes',
  'TypeScript',
  'Tailwind CSS',
  'Styled Components',
  'Jest',
  'Cypress',
  'Python',
  'SQLAlchemy',
  'FastAPI',
  ' Alembic',
  'SQLite',
  'Uvicorn',
  'Pydantic',
  'PostgreSQL',
  'Redis',
  'gunicorn',
  'OpenAPI',
  'Swagger',
  'shadcn',
  'axios',
]

export const TechnologiesSection = ({ technologies, onChange }: TechnologiesProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const hint = HINT_DATA.technologies

  const handleAddTechnology = useCallback(
    (tech: string) => {
      if (!technologies.value.includes(tech)) {
        onChange([...technologies.value, tech])
      }
    },
    [technologies.value, onChange],
  )

  const handleRemoveTechnology = useCallback(
    (tech: string) => {
      onChange(technologies.value.filter((t) => t !== tech))
    },
    [technologies.value, onChange],
  )

  const filteredTechnologies = COMMON_TECHNOLOGIES.filter((tech) =>
    tech.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-2 transition-all duration-300 focus-within:border-primary/50 shadow-sm hover:shadow-md"
    >
      <CardHeader>
        <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          Technologies & Libraries
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.value.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="gap-1 pr-1 py-1 animate-in zoom-in-50 duration-300"
            >
              {tech}
              <Button
                variant="ghost"
                size="icon"
                className="size-4 hover:bg-transparent"
                onClick={() => handleRemoveTechnology(tech)}
                aria-label={`Remove ${tech}`}
              >
                <XIcon className="size-3" />
              </Button>
            </Badge>
          ))}
          {technologies.value.length === 0 && (
            <p className="text-sm text-muted-foreground italic">No technologies selected.</p>
          )}
        </div>
        <div className="space-y-2">
          <Input
            type="text"
            placeholder={hint.placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="focus-visible:ring-ring/30"
          />
          <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto p-2 border rounded-md bg-muted/50 scrollbar-thin scrollbar-thumb-muted-foreground/20">
            {filteredTechnologies.map((tech) => (
              <Button
                key={tech}
                variant="ghost"
                size="sm"
                className="h-7 text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handleAddTechnology(tech)}
                disabled={technologies.value.includes(tech)}
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>
        <TypewriterHint
          description={hint.description}
          examples={hint.examples}
          visible={isFocused || isHovered}
        />
      </CardContent>
    </Card>
  )
}
