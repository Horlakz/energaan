<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { PUBLIC_API_URL } from "$env/static/public";
  import { createMutation } from "@tanstack/svelte-query";
  import { Plus } from "svelte-heros-v2";
  import type { PageData } from "./$types";

  import Button from "$lib/components/Button.svelte";
  import FormGroup from "$lib/components/FormGroup.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import Gallery from "$lib/services/gallery";

  export let data: PageData;

  const gallery = new Gallery();
  let add = false,
    remove = false,
    id = "",
    title = "",
    files = null;

  $: formData = { title, image: files ? files[0] : null };

  const addImage = createMutation(async () => await gallery.add(formData), {
    onSuccess: () => {
      invalidateAll();
      add = false;
      title = "";
      files = null;
    },
  });

  const removeImage = createMutation(async () => await gallery.delete(id), {
    onSuccess: () => {
      invalidateAll();
      remove = false;
    },
  });
</script>

<main class="px-4">
  <div>
    <div class="w-full flex justify-between items-center py-8 px-10">
      <h1 class="text-2xl font-semibold">Gallery({data.total})</h1>
      <Button
        icon={Plus}
        iconPosition="left"
        variant="primary"
        on:click={() => {
          add = true;
          title = "";
        }}
      >
        Add New Image
      </Button>
    </div>

    <section
      class="sm:px-20 px-8 sm:py-10 w-full grid sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-6 h-full"
    >
      {#each data.images as item}
        <div
          class="border-2 border-primary shadow-md rounded-3xl overflow-hidden"
        >
          <img
            src={`${PUBLIC_API_URL}/media/${item.image}`}
            alt={item.title}
            class="w-full h-52"
          />
          <span
            class="text-lg font-medium px-4 w-full flex center bg-primary bg-opacity-20"
          >
            {item.title}
          </span>

          <div class="w-full flex center py-2">
            <Button
              variant="danger"
              on:click={() => {
                id = item.uuid;
                remove = true;
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      {/each}
    </section>
  </div>
</main>

<!-- add new image modal -->
<Modal bind:open={add}>
  <div class="bg-white p-4 grid center rounded-xl">
    <h4 class="text-xl font-semibold">Add New Image</h4>

    <form class="space-y-3" on:submit|preventDefault>
      <FormGroup label="Title" bind:value={title} />
      <FormGroup label="Description" formType="file" bind:files />
      <Button
        isLoading={$addImage.isLoading}
        on:click={() => {
          $addImage.mutate();
        }}
      >
        Update
      </Button>
    </form>
  </div>
</Modal>

<!-- remove image confirmation modal -->
<Modal bind:open={remove}>
  <div class="bg-white p-8 gap-6 grid center rounded-xl">
    <h4 class="text-xl font-semibold">
      Are you sure you want to delete this Image?
    </h4>
    <Button
      variant="danger"
      isLoading={$removeImage.isLoading}
      on:click={() => $removeImage.mutate()}
    >
      Delete
    </Button>
  </div>
</Modal>
