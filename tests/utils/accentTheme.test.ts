import { describe, it, expect, beforeEach } from 'vitest'

import {
  ACCENT_CSS_VARIABLES,
  applyAccentTheme,
  getResolvedColorScheme,
} from '@/lib/apply-accent-theme'
import {
  ACCENT_THEMES,
  DEFAULT_ACCENT_COLOR,
  getAccentTheme,
  isAccentColor,
} from '@/lib/accent-themes'

describe('accent themes', () => {
  it('includes all ticket accent colors', () => {
    const expected = [
      'neutral',
      'slate',
      'zinc',
      'stone',
      'gray',
      'red',
      'rose',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'sky',
      'blue',
      'indigo',
      'violet',
      'purple',
      'fuchsia',
      'pink',
    ]

    expect(ACCENT_THEMES.map((theme) => theme.id)).toEqual(expected)
  })

  it('validates stored accent values', () => {
    expect(isAccentColor('blue')).toBe(true)
    expect(isAccentColor('invalid')).toBe(false)
    expect(isAccentColor(null)).toBe(false)
  })

  it('falls back to the first theme for unknown ids', () => {
    expect(getAccentTheme('blue').id).toBe('blue')
    expect(getAccentTheme(DEFAULT_ACCENT_COLOR).preview).toBeTruthy()
  })
})

describe('applyAccentTheme', () => {
  beforeEach(() => {
    document.documentElement.className = 'light'
    for (const cssVar of ACCENT_CSS_VARIABLES) {
      document.documentElement.style.removeProperty(`--${cssVar}`)
    }
  })

  it('applies semantic primary variables for the selected accent', () => {
    applyAccentTheme('blue', 'light')

    expect(getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()).toBe(
      getAccentTheme('blue').vars.light.primary,
    )
    expect(getComputedStyle(document.documentElement).getPropertyValue('--ring').trim()).toBe(
      getAccentTheme('blue').vars.light.ring,
    )
  })

  it('uses dark palette variables when dark mode is active', () => {
    document.documentElement.classList.add('dark')

    expect(getResolvedColorScheme()).toBe('dark')

    applyAccentTheme('emerald', 'dark')

    expect(getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()).toBe(
      getAccentTheme('emerald').vars.dark.primary,
    )
  })

  it('updates ring token when accent changes so ring shadows follow the theme', () => {
    applyAccentTheme('rose', 'light')
    const roseRing = getAccentTheme('rose').vars.light.ring

    expect(getComputedStyle(document.documentElement).getPropertyValue('--ring').trim()).toBe(
      roseRing,
    )

    applyAccentTheme('emerald', 'light')

    expect(getComputedStyle(document.documentElement).getPropertyValue('--ring').trim()).toBe(
      getAccentTheme('emerald').vars.light.ring,
    )
    expect(getComputedStyle(document.documentElement).getPropertyValue('--ring').trim()).not.toBe(
      roseRing,
    )
  })
})
