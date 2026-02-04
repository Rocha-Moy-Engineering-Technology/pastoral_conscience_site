<script lang="ts">
  import Hero from './components/Hero.svelte';
  import Rationale from './components/Rationale.svelte';
  import Results from './components/Results.svelte';
  import Stack from './components/Stack.svelte';
  import Architecture from './components/Architecture.svelte';
  import Contact from './components/Contact.svelte';

  let mobileMenuOpen = $state(false);

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }
</script>

<nav
  class="fixed top-0 z-50 w-full border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-sm"
>
  <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
    <a href="#hero" class="text-lg font-bold text-slate-100">
      Pastoral Conscience
    </a>

    <!-- Desktop menu -->
    <div class="hidden gap-6 text-sm md:flex">
      <a href="#rationale" class="text-slate-400 hover:text-slate-100">Rationale</a>
      <a href="#results" class="text-slate-400 hover:text-slate-100">Results</a>
      <a href="#stack" class="text-slate-400 hover:text-slate-100">Stack</a>
      <a href="#architecture" class="text-slate-400 hover:text-slate-100">Architecture</a>
      <a href="#contact" class="text-slate-400 hover:text-slate-100">Contact</a>
    </div>

    <!-- Mobile hamburger button -->
    <button
      class="flex flex-col justify-center gap-1.5 p-2 md:hidden"
      onclick={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={mobileMenuOpen}
    >
      <span
        class="block h-0.5 w-6 bg-slate-300 transition-transform duration-300"
        class:translate-y-2={mobileMenuOpen}
        class:rotate-45={mobileMenuOpen}
      ></span>
      <span
        class="block h-0.5 w-6 bg-slate-300 transition-opacity duration-300"
        class:opacity-0={mobileMenuOpen}
      ></span>
      <span
        class="block h-0.5 w-6 bg-slate-300 transition-transform duration-300"
        class:-translate-y-2={mobileMenuOpen}
        class:-rotate-45={mobileMenuOpen}
      ></span>
    </button>
  </div>

  <!-- Mobile menu dropdown -->
  {#if mobileMenuOpen}
    <div class="border-t border-slate-700/50 bg-slate-900/95 md:hidden">
      <div class="flex flex-col gap-1 px-4 py-3">
        <a
          href="#rationale"
          class="rounded px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          onclick={closeMenu}
        >Rationale</a>
        <a
          href="#results"
          class="rounded px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          onclick={closeMenu}
        >Results</a>
        <a
          href="#stack"
          class="rounded px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          onclick={closeMenu}
        >Stack</a>
        <a
          href="#architecture"
          class="rounded px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          onclick={closeMenu}
        >Architecture</a>
        <a
          href="#contact"
          class="rounded px-3 py-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
          onclick={closeMenu}
        >Contact</a>
      </div>
    </div>
  {/if}
</nav>

<main class="pt-14">
  <Hero />
  <Rationale />
  <Results />
  <Stack />
  <Architecture />
  <Contact />
</main>

<footer class="border-t border-slate-700/50 py-8 text-center text-sm text-slate-600">
  <p>
    Pastoral Conscience - An AI Governance Demo
  </p>
</footer>
