import { useContext } from "react"

import { AccentThemeProviderContext } from "@/components/accent-theme-context"

export function useAccentTheme() {
  const context = useContext(AccentThemeProviderContext)

  if (context === undefined) {
    throw new Error("useAccentTheme must be used within an AccentThemeProvider")
  }

  return context
}
