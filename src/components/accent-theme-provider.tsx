import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react"

import {
  AccentThemeProviderContext,
} from "@/components/accent-theme-context"
import {
  ACCENT_STORAGE_KEY,
  DEFAULT_ACCENT_COLOR,
  type AccentColor,
  isAccentColor,
} from "@/lib/accent-themes"
import {
  applyAccentTheme,
  getResolvedColorScheme,
} from "@/lib/apply-accent-theme"

type AccentThemeProviderProps = {
  children: ReactNode
  defaultAccent?: AccentColor
  storageKey?: string
}

export function AccentThemeProvider({
  children,
  defaultAccent = DEFAULT_ACCENT_COLOR,
  storageKey = ACCENT_STORAGE_KEY,
}: AccentThemeProviderProps) {
  const [accent, setAccentState] = useState<AccentColor>(() => {
    const stored = localStorage.getItem(storageKey)
    return isAccentColor(stored) ? stored : defaultAccent
  })

  const applyCurrentAccent = useCallback(
    (nextAccent: AccentColor) => {
      applyAccentTheme(nextAccent, getResolvedColorScheme())
    },
    [],
  )

  useEffect(() => {
    applyCurrentAccent(accent)
  }, [accent, applyCurrentAccent])

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      applyCurrentAccent(accent)
    })

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [accent, applyCurrentAccent])

  const setAccent = useCallback(
    (nextAccent: AccentColor) => {
      localStorage.setItem(storageKey, nextAccent)
      setAccentState(nextAccent)
    },
    [storageKey],
  )

  return (
    <AccentThemeProviderContext.Provider
      value={{ accent, setAccent }}
    >
      {children}
    </AccentThemeProviderContext.Provider>
  )
}
