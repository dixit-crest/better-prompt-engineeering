import { Palette } from 'lucide-react'

import { useAccentTheme } from '@/hooks/useAccentTheme'
import { buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ACCENT_THEMES, type AccentColor } from '@/lib/accent-themes'
import { cn } from '@/lib/utils'

export function AccentColorPicker() {
  const { accent, setAccent } = useAccentTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
        aria-label="Choose accent color"
      >
        <Palette />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72 p-3">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Accent color</DropdownMenuLabel>
          <div
            role="radiogroup"
            aria-label="Accent color"
            className="grid grid-cols-6 gap-2 px-1.5 pb-1.5"
          >
            {ACCENT_THEMES.map((theme) => (
              <AccentSwatch
                key={theme.id}
                themeId={theme.id}
                label={theme.label}
                preview={theme.preview}
                selected={accent === theme.id}
                onSelect={setAccent}
              />
            ))}
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type AccentSwatchProps = {
  themeId: AccentColor
  label: string
  preview: string
  selected: boolean
  onSelect: (accent: AccentColor) => void
}

function AccentSwatch({ themeId, label, preview, selected, onSelect }: AccentSwatchProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      aria-label={label}
      title={label}
      onClick={() => onSelect(themeId)}
      className={cn(
        'size-8 rounded-full border transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        selected && 'ring-2 ring-ring ring-offset-2 ring-offset-background',
      )}
      style={{ backgroundColor: preview }}
    />
  )
}
