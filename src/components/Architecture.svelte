<script lang="ts">
  import { onMount } from 'svelte';
  import mermaid from 'mermaid';

  const diagramDefinition = `
flowchart TB
    subgraph Frontend["Web UI (Next.js)"]
        A[User Input Form]
    end

    subgraph Core["Core Backend (Go)"]
        B[POST /api/prompt]
        C[Gemini File Search<br/>RAG Retrieval]
        D[DSPy Relevance Filter]
        E[Draft Generation<br/>Gemini Pro]
        F[Conscience Checkers]
        G{All Checks<br/>Pass?}
        H[Revision Loop<br/>Gemini Flash]
        I[Response Extraction]
        J[Integrity Verification]
    end

    subgraph DSPy["DSPy Service (Python)"]
        F1[Helpfulness Check]
        F2[Psalm Exclusivity Check]
        F3[Citation Integrity Check]
        F4[Overreach Detection]
    end

    subgraph Output["Response"]
        K[Final Response<br/>with Citations]
    end

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> F1 & F2 & F3 & F4
    F1 & F2 & F3 & F4 --> G
    G -->|No| H
    H --> F
    G -->|Yes| I
    I --> J
    J --> K
    K --> A
  `;

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
  });
</script>

<section id="architecture" class="section">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-4 text-center text-4xl font-bold">System Architecture</h2>
    <p class="mx-auto mb-12 max-w-2xl text-center text-slate-400">
      The complete pipeline from user input to verified, citation-backed response.
    </p>

    <div class="card overflow-x-auto">
      <div
        id="mermaid-diagram"
        data-testid="mermaid-diagram"
        class="flex min-h-[500px] items-center justify-center"
      >
        <p class="text-slate-500">Loading architecture diagram...</p>
      </div>
    </div>

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
            <strong>Psalm Exclusivity:</strong> Is content grounded solely in Psalms?
          </li>
          <li>
            <strong>Citation Integrity:</strong> Are all references accurate and
            complete?
          </li>
          <li>
            <strong>Overreach Detection:</strong> Does it claim authority beyond
            Psalms?
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
