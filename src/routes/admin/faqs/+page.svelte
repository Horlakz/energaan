<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { createMutation } from "@tanstack/svelte-query";
  import { Plus } from "svelte-heros-v2";
  import type { PageData } from "./$types";

  import Button from "$lib/components/Button.svelte";
  import FormGroup from "$lib/components/FormGroup.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import Table from "$lib/components/Table.svelte";
  import FAQ from "$lib/services/faq";

  export let data: PageData;
  let add = false,
    update = false,
    remove = false,
    id = "",
    title = "",
    description = "";

  const faq = new FAQ();
  $: FAQData = { title, description };

  const addFAQ = createMutation(async () => await faq.add(FAQData), {
    onSuccess: () => {
      invalidateAll();
      title = "";
      description = "";
      add = false;
    },
  });

  const updateFAQ = createMutation(async () => await faq.update(FAQData, id), {
    onSuccess: () => {
      invalidateAll();
      title = "";
      description = "";
      update = false;
    },
  });

  const deleteFAQ = createMutation(async () => await faq.delete(id), {
    onSuccess: () => {
      invalidateAll();
      remove = false;
    },
  });
</script>

<main class="px-4">
  <div>
    <div class="w-full flex justify-between items-center py-8 px-10">
      <h1 class="text-2xl font-semibold">FAQs({data.total})</h1>
      <Button
        icon={Plus}
        iconPosition="left"
        variant="primary"
        on:click={() => {
          add = true;
          title = "";
          description = "";
        }}
      >
        Add New FAQ
      </Button>
    </div>

    <Table
      tableHeaders={[{ title: "Title" }, { title: "Description" }]}
      tableKeys={["title", "description"]}
      tableData={data.faqs}
      tableBodyUppercase={false}
      tableActions={[
        {
          title: "Update",
          buttonVariant: "warning",
          action: (data) => {
            id = data.uuid;
            title = data.title;
            description = data.description;
            update = true;
          },
        },
        {
          title: "Delete",
          buttonVariant: "danger",
          action: (data) => {
            id = data.uuid;
            remove = true;
          },
        },
      ]}
    />
  </div>
</main>

<Modal bind:open={add}>
  <div class="bg-white p-4 grid center rounded-xl">
    <h4 class="text-xl font-semibold">Add New FAQ</h4>
    <form class="space-y-3" on:submit|preventDefault>
      <FormGroup label="Title" bind:value={title} />
      <FormGroup
        label="Description"
        formType="textarea"
        bind:value={description}
      />
      <Button isLoading={$addFAQ.isLoading} on:click={() => $addFAQ.mutate()}>
        Submit
      </Button>
    </form>
  </div>
</Modal>

<Modal bind:open={update}>
  <div class="bg-white p-4 grid center rounded-xl">
    <h4 class="text-xl font-semibold">Update FAQ</h4>
    <form class="space-y-3" on:submit|preventDefault>
      <FormGroup label="Title" bind:value={title} />
      <FormGroup
        label="Description"
        formType="textarea"
        bind:value={description}
      />
      <Button
        isLoading={$updateFAQ.isLoading}
        on:click={() => $updateFAQ.mutate()}
      >
        Update
      </Button>
    </form>
  </div>
</Modal>

<Modal bind:open={remove}>
  <div class="bg-white p-8 gap-6 grid center rounded-xl">
    <h4 class="text-xl font-semibold">
      Are you sure you want to delete this FAQ?
    </h4>
    <Button
      variant="danger"
      isLoading={$deleteFAQ.isLoading}
      on:click={() => $deleteFAQ.mutate()}
    >
      Delete
    </Button>
  </div>
</Modal>
