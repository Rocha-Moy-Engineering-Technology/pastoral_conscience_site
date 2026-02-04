<script lang="ts">
  import Hero from './components/Hero.svelte';
  import Rationale from './components/Rationale.svelte';
  import Results from './components/Results.svelte';
  import Stack from './components/Stack.svelte';
  import Architecture from './components/Architecture.svelte';
  import Contact from './components/Contact.svelte';
</script>

<nav
  class="fixed top-0 z-50 w-full border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-sm"
>
  <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
    <a href="#hero" class="text-lg font-bold text-slate-100">
      Pastoral Conscience
    </a>
    <div class="hidden gap-6 text-sm md:flex">
      <a href="#rationale" class="text-slate-400 hover:text-slate-100"
        >Rationale</a
      >
      <a href="#results" class="text-slate-400 hover:text-slate-100">Results</a>
      <a href="#stack" class="text-slate-400 hover:text-slate-100">Stack</a>
      <a href="#architecture" class="text-slate-400 hover:text-slate-100"
        >Architecture</a
      >
      <a href="#contact" class="text-slate-400 hover:text-slate-100">Contact</a>
    </div>
  </div>
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
