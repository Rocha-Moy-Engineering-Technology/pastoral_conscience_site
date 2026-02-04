<script lang="ts">
  type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

  let name = $state('');
  let message = $state('');
  let status = $state<FormStatus>('idle');
  let errorMessage = $state('');

  const WEB3FORMS_ACCESS_KEY = '45d44fa8-2f5a-4cad-8177-cf0529bf607a';

  async function handleSubmit(event: Event): Promise<void> {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      return;
    }

    status = 'submitting';
    errorMessage = '';

    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('name', name);
    formData.append('message', message);
    formData.append('subject', 'Pastoral Conscience Demo Request');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      status = 'success';
      name = '';
      message = '';
    } else {
      status = 'error';
      errorMessage = result.message || 'Something went wrong. Please try again.';
    }
  }
</script>

<section id="contact" class="section bg-slate-800/50">
  <div class="mx-auto max-w-3xl text-center">
    <h2 class="mb-4 text-4xl font-bold">Get in Touch</h2>
    <p class="mb-8 text-slate-400">
      Interested in building AI systems with governance, verification, and
      auditability? Let's discuss how these patterns can apply to your domain.
    </p>

    <div class="card mx-auto mb-12 max-w-md text-left">
      {#if status === 'success'}
        <div class="rounded-lg bg-green-900/50 p-4 text-center">
          <p class="font-medium text-green-300">Message sent successfully!</p>
          <p class="mt-1 text-sm text-green-400">
            Thanks for reaching out. I'll get back to you soon.
          </p>
          <button
            type="button"
            class="btn-secondary mt-4"
            onclick={() => (status = 'idle')}
          >
            Send Another Message
          </button>
        </div>
      {:else}
        <form onsubmit={handleSubmit} class="space-y-4">
          <div>
            <label for="name" class="mb-1 block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              bind:value={name}
              required
              class="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your name"
              disabled={status === 'submitting'}
            />
          </div>

          <div>
            <label for="message" class="mb-1 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              bind:value={message}
              required
              rows={4}
              class="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Tell me about your project or ask about the demo..."
              disabled={status === 'submitting'}
            ></textarea>
          </div>

          {#if status === 'error'}
            <div class="rounded-lg bg-red-900/50 p-3 text-sm text-red-300">
              {errorMessage}
            </div>
          {/if}

          <button
            type="submit"
            class="btn-primary w-full"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      {/if}
    </div>

    <div class="card mx-auto max-w-md text-left">
      <h3 class="mb-2 text-lg font-semibold text-slate-200">About the Developer</h3>
      <p class="mb-4 text-sm text-slate-400">
        Pedro Moy is a software engineer specializing in agentic AI systems,
        LLM-driven applications, and robust backend architectures. Available for
        contracting work on governance-aware AI solutions.
      </p>
      <p class="text-sm text-slate-500">
        Email: <span class="text-blue-400">phrmoy@gmail.com</span>
      </p>
    </div>

    <p class="mt-12 text-sm text-slate-600">
      All project repositories are private. Demo available upon request.
    </p>
  </div>
</section>
