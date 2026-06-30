import { createContext } from 'react'

import type { AccentColor } from '@/lib/accent-themes'

export type AccentThemeProviderState = {
  accent: AccentColor
  setAccent: (accent: AccentColor) => void
}

export const AccentThemeProviderContext = createContext<AccentThemeProviderState | undefined>(
  undefined,
)
