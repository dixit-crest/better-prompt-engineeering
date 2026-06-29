import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';

describe('App smoke test', () => {
  it('renders the app header', () => {
    render(<App />);
    expect(screen.getByText('Prompt Engineer')).toBeInTheDocument();
  });

  it('renders the final prompt panel', () => {
    render(<App />);
    expect(screen.getByText('Final Prompt')).toBeInTheDocument();
  });
});
