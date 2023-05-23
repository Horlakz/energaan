<script lang="ts">
  import type { PageData } from "./$types";

  import Card from "$lib/components/Card.svelte";
  import GetQuoteForm from "$lib/components/GetQuoteForm.svelte";
  import Modal from "$lib/components/Modal.svelte";

  export let data: PageData;

  let open = false;
</script>

<main class="mb-10">
  <h3 class="text-2xl mb-4 text-center font-semibold underline">Our Plans</h3>

  <section
    class="sm:px-20 px-8 sm:py-10 w-full grid sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 h-full"
  >
    {#each data.plans as plan, i}
      <Card
        img={plan.img}
        title={plan.title}
        description={plan.description}
        href={`/plans/${i}`}
        on:click={() => (open = true)}
      />
    {/each}
  </section>
</main>

<Modal bind:open><GetQuoteForm /></Modal>
