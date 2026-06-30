import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from '../../src/App'

describe('App smoke test', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the app header', () => {
    render(<App />)
    expect(screen.getByText('Prompt Engineer')).toBeInTheDocument()
  })

  it('renders the final prompt panel', () => {
    render(<App />)
    expect(screen.getAllByText('Final Prompt').length).toBeGreaterThan(0)
  })
})
