<script lang="ts">
  const stackItems = [
    {
      name: 'Agent Framework',
      subtitle: 'This Repository',
      description:
        'Multi-repo orchestration with ADOC/SDOC documentation system and Honcho process management.',
      technologies: ['Multi-Repo', 'ADOC/SDOC', 'Honcho'],
    },
    {
      name: 'Core Backend',
      subtitle: 'Go Service',
      description:
        'Hexagonal architecture with Gemini File Search API for RAG retrieval and SSE streaming.',
      technologies: ['Go 1.25', 'PostgreSQL', 'Gemini Pro', 'SSE'],
    },
    {
      name: 'DSPy Service',
      subtitle: 'Python Service',
      description:
        'Four conscience checkers (Helpfulness, Exclusivity, Citation Integrity, Overreach) with model fallback.',
      technologies: ['Python 3.12+', 'DSPy 3.x', 'FastAPI'],
    },
    {
      name: 'Web Frontend',
      subtitle: 'React Application',
      description:
        'User-facing form with real-time progress indicators and client-side validation.',
      technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind'],
    },
    {
      name: 'Portfolio Site',
      subtitle: 'This Site',
      description:
        'Static site with Mermaid architecture diagrams deployed to GitHub Pages.',
      technologies: ['Svelte 5', 'Vite', 'Mermaid', 'Tailwind'],
    },
  ];
</script>

<section id="stack" class="section bg-slate-800/50">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-4 text-center text-4xl font-bold">Technology Stack</h2>
    <p class="mx-auto mb-12 max-w-2xl text-center text-slate-400">
      Five private repositories working together to deliver governed AI responses.
    </p>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each stackItems as item (item.name)}
        <div class="card flex flex-col">
          <div class="mb-4">
            <h3 class="text-xl font-semibold text-slate-100">{item.name}</h3>
            <p class="text-sm text-blue-400">{item.subtitle}</p>
          </div>
          <p class="mb-4 flex-grow text-sm text-slate-400">{item.description}</p>
          <div class="flex flex-wrap gap-2">
            {#each item.technologies as tech (tech)}
              <span class="tech-badge">{tech}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
