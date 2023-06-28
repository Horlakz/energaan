<script lang="ts">
  import { createMutation } from "@tanstack/svelte-query";
  import { createEventDispatcher } from "svelte/internal";

  import Button from "./Button.svelte";
  import FormGroup from "./FormGroup.svelte";
  import Quote from "$lib/services/quote";
  import { toastStore } from "./toast/stores";

  export let serviceId: string, serviceType: string;

  const dispatch = createEventDispatcher();
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
  const message = {
    message: "Quote sent Sucessfully",
  };

  const mutation = createMutation(async () => await quote.create(formData), {
    onSuccess: () => {
      toastStore.trigger(message);
      dispatch("close");

      // clear form
      fullName = "";
      email = "";
      phone = "";
      country = "";
    },
    onError: (err: any) => {
      const t = {
        message: err?.response?.data?.message || "Something went wrong",
        background: "bg-error",
      };

      toastStore.trigger(t);
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
