<script lang="ts">
  const capabilities = [
    {
      title: 'Non-deviation from doctrinal sources',
      description: 'Responses derive solely from the Book of Psalms (1-150)',
    },
    {
      title: 'Enforced belief alignment',
      description:
        'Three conscience checkers validate every output before delivery',
    },
    {
      title: 'Confidence verification',
      description: 'Each response is scored for alignment and correctness',
    },
    {
      title: 'Multi-stage moderation',
      description:
        'Revision loop corrects violations until all checks pass',
    },
    {
      title: 'Human-interpretable auditability',
      description:
        'Every claim traces back to a specific Psalm verse citation',
    },
  ];
</script>

<section id="rationale" class="section bg-slate-800/50">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-4 text-center text-4xl font-bold">Why This Matters</h2>
    <p class="mx-auto mb-12 max-w-3xl text-center text-lg text-slate-400">
      This is not a chatbot. It is a <strong class="text-blue-400"
        >governed reasoning pipeline</strong
      > designed to prove that AI outputs can be constrained, verified, scored,
      and corrected before reaching end users.
    </p>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each capabilities as cap (cap.title)}
        <div class="card">
          <h3 class="mb-2 text-lg font-semibold text-blue-400">{cap.title}</h3>
          <p class="text-sm text-slate-400">{cap.description}</p>
        </div>
      {/each}
    </div>

    <blockquote
      class="mx-auto mt-12 max-w-2xl border-l-4 border-amber-500 py-4 pl-6 text-center text-xl italic text-slate-300"
    >
      "Generate, verify, score, correct, and then speak."
    </blockquote>

    <p class="mt-8 text-center text-slate-500">
      The Psalms-only constraint is a <em>demonstration vehicle</em>, not a
      limitation. It provides a finite, closed corpus (150 chapters) with zero
      doctrinal ambiguity - ideal for proving strict non-deviation guarantees.
    </p>
  </div>
</section>
