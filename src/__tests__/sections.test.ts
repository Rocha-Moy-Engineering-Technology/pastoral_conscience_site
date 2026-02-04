import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Hero from '../components/Hero.svelte';
import Rationale from '../components/Rationale.svelte';
import Results from '../components/Results.svelte';
import Stack from '../components/Stack.svelte';
import Architecture from '../components/Architecture.svelte';
import Contact from '../components/Contact.svelte';

describe('Hero Section', () => {
  it('renders title', () => {
    render(Hero);
    expect(screen.getByText('Pastoral Conscience')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    render(Hero);
    expect(
      screen.getByText('AI with an Artificial Conscience Layer')
    ).toBeInTheDocument();
  });

  it('renders tagline', () => {
    render(Hero);
    expect(
      screen.getByText(
        'Scripture-grounded spiritual reflections with enforced belief alignment'
      )
    ).toBeInTheDocument();
  });

  it('renders Request Demo CTA', () => {
    render(Hero);
    const demoLink = screen.getByRole('link', { name: /request demo/i });
    expect(demoLink).toBeInTheDocument();
    expect(demoLink).toHaveAttribute(
      'href',
      'mailto:phrmoy@gmail.com?subject=Pastoral%20Conscience%20Demo%20Request'
    );
  });

  it('renders View Architecture CTA', () => {
    render(Hero);
    const archLink = screen.getByRole('link', { name: /view architecture/i });
    expect(archLink).toBeInTheDocument();
    expect(archLink).toHaveAttribute('href', '#architecture');
  });
});

describe('Rationale Section', () => {
  it('renders section heading', () => {
    render(Rationale);
    expect(screen.getByText('Why This Matters')).toBeInTheDocument();
  });

  it('renders governed reasoning pipeline concept', () => {
    render(Rationale);
    expect(
      screen.getByText(/governed reasoning pipeline/i)
    ).toBeInTheDocument();
  });

  it('renders key capabilities', () => {
    render(Rationale);
    expect(
      screen.getByText(/non-deviation from doctrinal sources/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/enforced belief alignment/i)).toBeInTheDocument();
    expect(screen.getByText(/confidence verification/i)).toBeInTheDocument();
    expect(screen.getByText(/multi-stage moderation/i)).toBeInTheDocument();
    expect(
      screen.getByText(/human-interpretable auditability/i)
    ).toBeInTheDocument();
  });

  it('renders quote', () => {
    render(Rationale);
    expect(
      screen.getByText('"Generate, verify, score, correct, and then speak."')
    ).toBeInTheDocument();
  });
});

describe('Results Section', () => {
  it('renders section heading', () => {
    render(Results);
    expect(screen.getByText('Real Results')).toBeInTheDocument();
  });

  it('renders three sample images', () => {
    render(Results);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3);
  });

  it('renders image captions', () => {
    render(Results);
    expect(screen.getByText(/i am afraid of the dark/i)).toBeInTheDocument();
    expect(screen.getByText(/i am anxious/i)).toBeInTheDocument();
    expect(
      screen.getByText(/i feel exhausted and drained/i)
    ).toBeInTheDocument();
  });
});

describe('Stack Section', () => {
  it('renders section heading', () => {
    render(Stack);
    expect(screen.getByText('Technology Stack')).toBeInTheDocument();
  });

  it('renders 5 stack components', () => {
    render(Stack);
    expect(screen.getByText('Agent Framework')).toBeInTheDocument();
    expect(screen.getByText('Core Backend')).toBeInTheDocument();
    expect(screen.getByText('DSPy Service')).toBeInTheDocument();
    expect(screen.getByText('Web Frontend')).toBeInTheDocument();
    expect(screen.getByText('Portfolio Site')).toBeInTheDocument();
  });

  it('renders technology badges', () => {
    render(Stack);
    expect(screen.getByText('Go 1.25')).toBeInTheDocument();
    expect(screen.getByText('Python 3.12+')).toBeInTheDocument();
    expect(screen.getByText('Next.js 16')).toBeInTheDocument();
  });
});

describe('Architecture Section', () => {
  it('renders section heading', () => {
    render(Architecture);
    expect(screen.getByText('System Architecture')).toBeInTheDocument();
  });

  it('renders mermaid diagram container', () => {
    render(Architecture);
    expect(
      document.querySelector('[data-testid="mermaid-diagram"]')
    ).toBeInTheDocument();
  });
});

describe('Contact Section', () => {
  it('renders section heading', () => {
    render(Contact);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('renders email link', () => {
    render(Contact);
    const emailLink = screen.getByRole('link', { name: /request demo/i });
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:phrmoy@gmail.com?subject=Pastoral%20Conscience%20Demo%20Request'
    );
  });

  it('renders developer bio', () => {
    render(Contact);
    expect(screen.getByText(/pedro/i)).toBeInTheDocument();
  });
});
