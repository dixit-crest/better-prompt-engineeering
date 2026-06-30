import {
  type AccentColor,
  type AccentCssVars,
  getAccentTheme,
} from "@/lib/accent-themes"

export const ACCENT_CSS_VARIABLES = [
  "primary",
  "primary-foreground",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-ring",
] as const

export type ResolvedColorScheme = "light" | "dark"

export function getResolvedColorScheme(
  root: HTMLElement = document.documentElement,
): ResolvedColorScheme {
  return root.classList.contains("dark") ? "dark" : "light"
}

export function applyAccentCssVars(
  vars: AccentCssVars,
  root: HTMLElement = document.documentElement,
): void {
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(`--${key}`, value)
  }
}

export function applyAccentTheme(
  accent: AccentColor,
  colorScheme: ResolvedColorScheme,
  root: HTMLElement = document.documentElement,
): void {
  const theme = getAccentTheme(accent)
  applyAccentCssVars(theme.vars[colorScheme], root)
}
