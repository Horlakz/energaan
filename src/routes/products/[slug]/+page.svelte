<script lang="ts">
  import type { PageData } from "./$types";

  import Button from "$lib/components/Button.svelte";
  import GetQuoteForm from "$lib/components/GetQuoteForm.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import Carousel from "$lib/components/carousel/index.svelte";

  export let data: PageData;

  let open: boolean = false;
</script>

<main class="py-10 md:px-20 px-12 space-y-6">
  <section class="w-full flex md:flex-row flex-col gap-10">
    <div class="w-full">
      <Carousel images={data.product.images} />
    </div>

    <div class="w-full">
      <h2 class="text-4xl font-semibold">{data.product.title}</h2>
      <span class="text-primary">{data.category.name}</span>
      <ul class="mt-8">
        <h3 class="font-semibold text-lg underline">Key Features</h3>
        {#each data.product.features.slice(0, 4) as item}
          <li class="list-disc my-4">{item}</li>
        {/each}
      </ul>
      <div class="w-full flex justify-end mt-4">
        <Button on:click={() => (open = true)}>Get Quote</Button>
      </div>
    </div>
  </section>

  <section class="space-y-6">
    <div class="space-y-2">
      <h4 class="text-xl font-semibold underline">Product Description</h4>
      <p>
        {data.product.description}
      </p>
    </div>

    <ul class="mt-10">
      <h3 class="font-semibold text-xl underline">More Features</h3>
      {#each data.product.features.slice(4) as item}
        <li class="list-disc my-4">{item}</li>
      {/each}
    </ul>
  </section>
</main>

<Modal bind:open>
  <GetQuoteForm serviceId={data.product.uuid} serviceType="product" />
</Modal>
