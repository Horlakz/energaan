<script lang="ts">
  import { createMutation } from "@tanstack/svelte-query";

  import Button from "./Button.svelte";
  import FormGroup from "./FormGroup.svelte";
  import Quote from "$lib/services/quote";

  export let serviceId: string, serviceType: string;

  let fullName = "",
    email = "",
    phone = "",
    country = "";

  $: formData = {
    fullName,
    email,
    phone,
    country,
    serviceId,
    serviceType,
  };
  const quote = new Quote();

  const mutation = createMutation(async () => await quote.create(formData), {
    onSuccess: () => {
      console.log("success");

      // clear form
      fullName = "";
      email = "";
      phone = "";
      country = "";
    },
  });

  function handleSubmit(e: Event) {
    e.preventDefault();
    $mutation.mutate();
  }
</script>

<div class="w-full bg-white shadow-md p-4 border-2 rounded-md">
  <p class="text-sm text-gray-800 text-center py-4">
    Contact the buyer to get a quote of this product
  </p>
  <form class="w-full grid md:grid-cols-2 gap-4">
    <FormGroup label="Full Name" bind:value={fullName} />
    <FormGroup label="Email" type="email" bind:value={email} />
    <FormGroup label="Phone" bind:value={phone} />
    <FormGroup label="Country" bind:value={country} />

    <div class="md:col-span-2 items-center grid">
      <Button isLoading={$mutation.isLoading} on:click={handleSubmit}>
        Submit Details
      </Button>
    </div>
  </form>
</div>
