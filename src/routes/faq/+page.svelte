<script lang="ts">
  import type { PageData } from "./$types";

  import Accordion from "$lib/components/Accordion.svelte";

  export let data: PageData;
</script>

<main class="w-full p-6 grid center">
  <h2 class="mb-2 text-center text-3xl font-semibold">{data.title}</h2>

  <p class="my-6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolores.
    Provident iusto dolores culpa ab.
    <span>
      Can't find the help you're looking for? Ask us directly
      <a href="/contact" class="text-gold-1 hover:underline">here</a>
    </span>
  </p>

  <section class="grid md:grid-cols-2 w-[95vw] gap-6 md:px-10 px-2">
    {#each data.faqs as faq}
      <div class="w-full">
        <Accordion>
          <span slot="header" class="text-md font-bold">{faq.title}</span>
          <p class="">{faq.description}</p>
        </Accordion>
      </div>
    {/each}
  </section>
</main>
