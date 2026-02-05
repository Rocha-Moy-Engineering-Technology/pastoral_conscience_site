# Pastoral Conscience

> AI with an Artificial Conscience Layer — scripture-grounded spiritual reflections with enforced belief alignment.

**[View Live Site](https://rocha-moy-engineering-technology.github.io/pastoral_conscience_site/)**

## Overview

A portfolio site demonstrating a **governed AI reasoning pipeline** that generates, verifies, scores, corrects, and validates outputs before delivery. Uses the Psalms (1-150) as a closed corpus to prove strict non-deviation guarantees.

## Key Capabilities

- **Non-deviation** from doctrinal sources (Psalms only)
- **Enforced belief alignment** with automatic revision loops
- **Confidence verification** via multi-stage moderation
- **Human-interpretable auditability**

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | Svelte 5, Vite, Tailwind CSS, TypeScript |
| Backend | Go 1.25, Gemini API, RAG retrieval |
| AI Pipeline | Python 3.12+, DSPy conscience checkers |
| Production | Next.js, PostgreSQL |

## Architecture

```
Next.js UI → Go Backend (RAG) → DSPy Service
                                    ↓
                    Conscience Checkers (Helpfulness,
                    Psalm Grounding, Citation Integrity)
                                    ↓
                    Pass → Response | Fail → Revise
```

## License

MIT
