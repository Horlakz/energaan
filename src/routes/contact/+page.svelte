<script lang="ts">
  import type { PageData } from "./$types";

  import FormGroup from "$lib/components/FormGroup.svelte";
  import Button from "$lib/components/Button.svelte";

  let fullName = "",
    email = "",
    phone = "",
    country = "",
    message = "";

  export let data: PageData;

  function handleSubmit(e: Event) {
    e.preventDefault();

    console.log({
      fullName,
      email,
      phone,
      country,
      message,
    });
  }
</script>

<main class="px-6 md:px-20 py-10">
  <section class="text-center md:mb-6">
    <h2 class="text-gold-2 font-semibold">Contact Us</h2>
    <h5 class="text-3xl font-semibold capitalize">get in touch with us</h5>
    <p class="text-gray-600 font-medium">
      {data.descr}
    </p>
  </section>

  <section
    class="w-full flex md:flex-row flex-col justify-between items-center gap-10"
  >
    <form
      class="w-full bg-primary bg-opacity-10 shadow-md p-4 border-2 rounded-md grid md:grid-cols-2 gap-4"
    >
      <FormGroup label="Full Name" bind:value={fullName} />
      <FormGroup label="Email" type="email" bind:value={email} />
      <FormGroup label="Phone" bind:value={phone} />
      <FormGroup label="Country" bind:value={country} />
      <div class="md:col-span-2">
        <FormGroup formType="textarea" bind:value={message} />
      </div>

      <div class="md:col-span-2 items-center grid">
        <Button on:click={handleSubmit}>Submit</Button>
      </div>
    </form>

    <section
      class="w-full bg-primary bg-opacity-10 grid justify-start gap-4 pl-10 py-4"
    >
      {#each data.contact as item}
        <div class="flex gap-2">
          <div class="bg-gold-2 text-primary rounded-md p-4">
            <svelte:component this={item.icon} />
          </div>
          <div>
            <span class="text-lg font-semibold capitalize">{item.heading}</span>
            <p class="text-sm text-primary">{item.content}</p>
          </div>
        </div>
      {/each}
    </section>
  </section>
</main>
