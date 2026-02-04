<script lang="ts">
  let selectedImage = $state<string | null>(null);
  let selectedAlt = $state<string>('');

  const base = import.meta.env.BASE_URL;

  const samples = [
    {
      image: `${base}images/sample1.png`,
      query: '"I am afraid of the dark"',
      psalms: 'Psalm 23:4, 4:8, 3:5, 121:7',
    },
    {
      image: `${base}images/sample2.png`,
      query: '"I am anxious"',
      psalms: 'Psalm 56:3, 23:4, 23:2, 84:10',
    },
    {
      image: `${base}images/sample3.png`,
      query: '"I feel exhausted and drained"',
      psalms: 'Psalm 119:28, 62:1, 23:2-3',
    },
  ];

  function openModal(image: string, query: string): void {
    selectedImage = image;
    selectedAlt = `Response to: ${query}`;
  }

  function closeModal(): void {
    selectedImage = null;
    selectedAlt = '';
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && selectedImage) {
      closeModal();
    }
  }

  function handleBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      closeModal();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

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
          <button
            type="button"
            class="group relative w-full cursor-pointer border-0 bg-transparent p-0"
            onclick={() => openModal(sample.image, sample.query)}
          >
            <img
              src={sample.image}
              alt={`Response to: ${sample.query}`}
              class="h-auto w-full transition-opacity group-hover:opacity-80"
            />
            <span
              class="absolute inset-0 flex items-center justify-center bg-black/50 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100"
            >
              Click to expand
            </span>
          </button>
          <div class="p-4">
            <p class="mb-2 font-medium text-slate-200">{sample.query}</p>
            <p class="text-sm text-slate-500">Cites: {sample.psalms}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

{#if selectedImage}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div
    class="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    onclick={handleBackdropClick}
    role="dialog"
    aria-modal="true"
    aria-label="Expanded image view"
    tabindex="-1"
  >
    <div class="relative max-h-[90vh] max-w-[90vw]">
      <button
        type="button"
        class="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-600"
        onclick={closeModal}
        aria-label="Close modal"
      >
        ✕
      </button>
      <img
        src={selectedImage}
        alt={selectedAlt}
        class="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
      />
    </div>
  </div>
{/if}
