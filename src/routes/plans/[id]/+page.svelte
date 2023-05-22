<script lang="ts">
  import type { PageData } from "./$types";

  import Button from "$lib/components/Button.svelte";
  import FormGroup from "$lib/components/FormGroup.svelte";

  // export let data: PageData;
</script>

<main class="sm:px-20 p-10">
  <section class="text-center mb-8 grid gap-2">
    <img
      src="https://dummyimage.com/200x150/09f/fff.png"
      alt="Solar Streetlights Solution"
      class="w-full h-48 object-cover"
    />
    <h3 class="text-3xl">Solar Streetlights Solution</h3>
    <p>Contact the Seller for this plan quote</p>
  </section>

  <section
    class="w-full flex md:flex-row flex-col justify-between items-center gap-10"
  >
    <form
      class="w-full bg-primary bg-opacity-10 shadow-md p-4 border-2 rounded-md grid md:grid-cols-2 gap-4"
    >
      <FormGroup label="Full Name" />
      <FormGroup label="Email" type="email" />
      <FormGroup label="Phone" />
      <FormGroup label="Country" />

      <div class="md:col-span-2 items-center grid">
        <Button>Submit Details</Button>
      </div>
    </form>
  </section>
</main>
