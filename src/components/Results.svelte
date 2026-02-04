<script lang="ts">
  const samples = [
    {
      image: '/images/sample1.png',
      query: '"I am afraid of the dark"',
      psalms: 'Psalm 23:4, 4:8, 3:5, 121:7',
    },
    {
      image: '/images/sample2.png',
      query: '"I am anxious"',
      psalms: 'Psalm 56:3, 23:4, 23:2, 84:10',
    },
    {
      image: '/images/sample3.png',
      query: '"I feel exhausted and drained"',
      psalms: 'Psalm 119:28, 62:1, 23:2-3',
    },
  ];
</script>

<section id="results" class="section">
  <div class="mx-auto max-w-6xl">
    <h2 class="mb-4 text-center text-4xl font-bold">Real Results</h2>
    <p class="mx-auto mb-12 max-w-2xl text-center text-slate-400">
      Sample responses showing how the system generates scripture-grounded
      pastoral reflections with proper citations.
    </p>

    <div class="grid gap-8 md:grid-cols-3">
      {#each samples as sample (sample.image)}
        <div class="card overflow-hidden p-0">
          <img
            src={sample.image}
            alt={`Response to: ${sample.query}`}
            class="h-auto w-full"
          />
          <div class="p-4">
            <p class="mb-2 font-medium text-slate-200">{sample.query}</p>
            <p class="text-sm text-slate-500">Cites: {sample.psalms}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
