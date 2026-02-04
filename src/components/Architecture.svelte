<script lang="ts">
  import { onMount } from 'svelte';
  import mermaid from 'mermaid';

  let isExpanded = $state(false);

  const diagramDefinition = `
flowchart TB
    subgraph Frontend["Web UI (Next.js)"]
        A[User Input Form]
    end

    subgraph Core["Core Backend (Go)"]
        B[POST /api/prompt]
        C[Gemini File Search<br/>RAG Retrieval]
        G{All Checks<br/>Pass?}
        H[Revision Loop<br/>Gemini Flash]
        I[Response Extraction]
        J[Integrity Verification]
    end

    subgraph DSPy["DSPy Service (Python)"]
        D[Relevance Filter]
        E[Draft Generation<br/>Gemini Pro]
        F1[Helpfulness Check]
        F2[Psalm Grounding Check]
        F3[Citation Integrity Check]
    end

    subgraph Output["Response"]
        K[Final Response<br/>with Citations]
    end

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F1 & F2 & F3
    F1 & F2 & F3 --> G
    G -->|No| H
    H --> E
    G -->|Yes| I
    I --> J
    J --> K
    K --> A
  `;

  function toggleExpand() {
    isExpanded = !isExpanded;
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isExpanded) {
      toggleExpand();
    }
  }

  onMount(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#3b82f6',
        primaryTextColor: '#f8fafc',
        primaryBorderColor: '#60a5fa',
        lineColor: '#94a3b8',
        secondaryColor: '#1e293b',
        tertiaryColor: '#334155',
      },
    });

    const element = document.querySelector('#mermaid-diagram');
    if (element) {
      mermaid.render('mermaid-svg', diagramDefinition).then(({ svg }) => {
        element.innerHTML = svg;
      });
    }

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  });
</script>

<section id="architecture" class="section">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-4 text-center text-4xl font-bold">System Architecture</h2>
    <p class="mx-auto mb-12 max-w-2xl text-center text-slate-400">
      The complete pipeline from user input to verified, citation-backed response.
    </p>

    <div class="relative">
      <div
        id="mermaid-diagram"
        data-testid="mermaid-diagram"
        class="flex items-center justify-center overflow-x-auto"
      >
        <p class="text-slate-500">Loading architecture diagram...</p>
      </div>
      <button
        onclick={toggleExpand}
        class="mt-4 mx-auto flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
        Expand Diagram
      </button>
    </div>

    {#if isExpanded}
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 p-4"
        onclick={toggleExpand}
        onkeydown={(e) => e.key === 'Enter' && toggleExpand()}
        role="button"
        tabindex="0"
      >
        <button
          onclick={toggleExpand}
          class="absolute top-4 right-4 rounded-lg bg-slate-700 p-2 text-slate-300 transition-colors hover:bg-slate-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="max-h-full max-w-full overflow-auto diagram-expanded">
          {@html document.querySelector('#mermaid-diagram')?.innerHTML || ''}
        </div>
      </div>
    {/if}

    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <div class="card">
        <h3 class="mb-3 text-lg font-semibold text-blue-400">
          Conscience Layer
        </h3>
        <ul class="space-y-2 text-sm text-slate-400">
          <li>
            <strong>Helpfulness:</strong> Does the response meaningfully guide the
            user?
          </li>
          <li>
            <strong>Psalm Grounding:</strong> Is content grounded solely in Psalms?
          </li>
          <li>
            <strong>Citation Integrity:</strong> Are all references accurate and
            complete?
          </li>
        </ul>
      </div>

      <div class="card">
        <h3 class="mb-3 text-lg font-semibold text-blue-400">
          Key Guarantees
        </h3>
        <ul class="space-y-2 text-sm text-slate-400">
          <li>
            <strong>No intermediate drafts</strong> reach the user
          </li>
          <li>
            <strong>Every claim</strong> traces to a Psalm citation
          </li>
          <li>
            <strong>Failed checks</strong> trigger automatic revision
          </li>
          <li>
            <strong>Graceful fallback</strong> if max iterations reached
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .diagram-expanded :global(svg) {
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
  }
</style>
