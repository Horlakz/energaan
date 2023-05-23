<script>
  import Button from "./Button.svelte";
  import FormGroup from "./FormGroup.svelte";
</script>

<div class="w-full bg-white shadow-md p-4 border-2 rounded-md">
  <p class="text-sm text-gray-800 text-center py-4">
    Contact the buyer to get a quote of this product
  </p>
  <form class="w-full grid md:grid-cols-2 gap-4">
    <FormGroup label="Full Name" />
    <FormGroup label="Email" type="email" />
    <FormGroup label="Phone" />
    <FormGroup label="Country" />

    <div class="md:col-span-2 items-center grid">
      <Button>Submit Details</Button>
    </div>
  </form>
</div>
