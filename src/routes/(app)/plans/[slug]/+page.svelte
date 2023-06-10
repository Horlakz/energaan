<script lang="ts">
  import { PUBLIC_API_URL } from "$env/static/public";
  import type { PageData } from "./$types";

  import Button from "$lib/components/Button.svelte";
  import GetQuoteForm from "$lib/components/GetQuoteForm.svelte";
  import Modal from "$lib/components/Modal.svelte";

  export let data: PageData;

  let open = false;
</script>

<main class="sm:px-20 p-10">
  <section class="text-center mb-8 grid gap-2">
    <img
      src={`${PUBLIC_API_URL}/media/${data.plan.image}`}
      alt={data.plan.title}
      class="w-full h-48 object-cover"
    />
    <h3 class="text-3xl">{data.plan.title}</h3>
  </section>

  <section class="flex flex-col center gap-6">
    <p class="md:px-10">
      {data.plan.description}
    </p>

    {#if data.plan.features.length !== 0}
      <ul class="w-full grid justify-start">
        <h3 class="font-semibold text-lg underline">Key Features</h3>
        {#each data.plan.features as item}
          <li class="list-disc m-2">{item}</li>
        {/each}
      </ul>
    {/if}

    <Button on:click={() => (open = true)}>Get Quote</Button>
  </section>
</main>

<Modal bind:open>
  <GetQuoteForm serviceId={data.plan.uuid} serviceType="plan" />
</Modal>
