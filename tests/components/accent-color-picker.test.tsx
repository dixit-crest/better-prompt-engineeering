import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AccentColorPicker } from '@/components/accent-color-picker'
import { AccentThemeProvider } from '@/components/accent-theme-provider'
import { ThemeProvider } from '@/components/theme-provider'

function renderAccentPicker() {
  return render(
    <ThemeProvider defaultTheme="light" storageKey="test-ui-theme">
      <AccentThemeProvider storageKey="test-accent-color">
        <AccentColorPicker />
      </AccentThemeProvider>
    </ThemeProvider>,
  )
}

describe('AccentColorPicker', () => {
  afterEach(() => {
    cleanup()
    localStorage.clear()
  })

  it('renders the accent color trigger', () => {
    renderAccentPicker()

    expect(screen.getByRole('button', { name: 'Choose accent color' })).toBeInTheDocument()
  })

  it('shows accent swatches and updates the selected accent', async () => {
    const user = userEvent.setup()
    renderAccentPicker()

    await user.click(screen.getByRole('button', { name: 'Choose accent color' }))

    const roseSwatch = await screen.findByRole('radio', { name: 'Rose' })
    expect(roseSwatch).toHaveAttribute('aria-checked', 'false')

    await user.click(roseSwatch)

    expect(roseSwatch).toHaveAttribute('aria-checked', 'true')
    expect(localStorage.getItem('test-accent-color')).toBe('rose')
  })
})
