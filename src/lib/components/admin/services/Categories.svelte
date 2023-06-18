<script lang="ts">
  import { createMutation } from "@tanstack/svelte-query";
  import { invalidateAll } from "$app/navigation";

  import Table from "$lib/components/Table.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import FormGroup from "$lib/components/FormGroup.svelte";
  import Button from "$lib/components/Button.svelte";
  import Category from "$lib/services/services/category";

  export let data = [];

  const category = new Category();
  let update = false,
    remove = false;

  let value = "",
    slug = "";

  const updateCategory = createMutation(
    async () => await category.update(slug, value),
    {
      onSuccess: () => {
        update = false;
        invalidateAll();
      },
    }
  );

  const removeCategory = createMutation(
    async () => await category.delete(slug),
    {
      onSuccess: () => {
        remove = false;
        invalidateAll();
      },
    }
  );
</script>

<Table
  tableHeaders={[
    { title: "Title" },
    { title: "Short Name" },
    { title: "Created By" },
  ]}
  tableKeys={["name", "shortname", "created_by"]}
  tableData={data}
  tableBodyUppercase={false}
  tableActions={[
    {
      title: "Update",
      buttonVariant: "warning",
      action: (data) => {
        update = true;
        slug = data.shortname;
        console.log(data);
      },
    },
    {
      title: "Delete",
      buttonVariant: "danger",
      action: (data) => {
        remove = true;
        slug = data.shortname;
      },
    },
  ]}
/>

<Modal bind:open={update}>
  <div class="bg-white p-4 grid center rounded-xl">
    <h4 class="text-xl font-semibold">Create New Category</h4>
    <form class="space-y-3" on:submit|preventDefault>
      <FormGroup label="Title" bind:value />
      <Button
        isLoading={$updateCategory.isLoading}
        on:click={() => $updateCategory.mutate()}
      >
        Update Category
      </Button>
    </form>
  </div>
</Modal>

<Modal bind:open={remove}>
  <div class="bg-white p-8 gap-6 grid center rounded-xl">
    <h4 class="text-xl font-semibold">
      Are you sure you want to delete this Category?
    </h4>
    <p class="text-lg text-center text-gray-600">
      Please not that all products linked to this category will be deleted
    </p>
    <Button
      variant="danger"
      isLoading={$removeCategory.isLoading}
      on:click={() => $removeCategory.mutate()}
    >
      Delete
    </Button>
  </div>
</Modal>
