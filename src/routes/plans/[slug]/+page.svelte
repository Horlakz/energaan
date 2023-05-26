<script lang="ts">
  import type { PageData } from "./$types";

  import Button from "$lib/components/Button.svelte";
  import GetQuoteForm from "$lib/components/GetQuoteForm.svelte";
  import Modal from "$lib/components/Modal.svelte";

  export let data: PageData;

  let open = false;
</script>

<main class="sm:px-20 p-10">
  <section class="text-center mb-8 grid gap-2">
    <img src={data.image} alt={data.name} class="w-full h-48 object-cover" />
    <h3 class="text-3xl">{data.name}</h3>
  </section>

  <section class="flex flex-col center gap-6">
    <p class="md:px-10">
      {data.about}
    </p>

    {#if data.features.length !== 0}
      <ul class="w-full grid justify-start">
        <h3 class="font-semibold text-lg underline">Key Features</h3>
        {#each data.features as item}
          <li class="list-disc m-2">{item}</li>
        {/each}
      </ul>
    {/if}

    <Button on:click={() => (open = true)}>Get Quote</Button>
  </section>
</main>

<Modal bind:open>
  <GetQuoteForm />
</Modal>
