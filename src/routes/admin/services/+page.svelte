<script lang="ts">
  import { Plus } from "svelte-heros-v2";
  import { writable } from "svelte/store";
  import type { PageData } from "./$types";

  import Button from "$lib/components/Button.svelte";
  import FormGroup from "$lib/components/FormGroup.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import CreateServiceForm from "$lib/components/admin/CreateServiceForm.svelte";
  import TabItem from "$lib/components/tabs/TabItem.svelte";
  import Tabs from "$lib/components/tabs/Tabs.svelte";

  export let data: PageData;

  let tabTitle = "",
    plan = false,
    product = false;

  let title = "",
    description = "",
    categoryId = data.categories.length > 1 ? data.categories[0].uuid : "",
    images = null;
  const features = writable<string[]>([]);
  let featureValue = "";
</script>

<main>
  <div class="w-full flex justify-between items-center pt-6 px-10">
    <h1 class="text-2xl font-semibold">Services({data.total})</h1>
    <Button
      icon={Plus}
      iconPosition="left"
      variant="primary"
      on:click={() => {
        if (tabTitle === "Plans") plan = true;
        else product = true;
      }}
    >
      Add New {tabTitle.replace(/s$/, "")}
    </Button>
  </div>

  <Tabs>
    <TabItem open title="Plans" on:currentTab={(e) => (tabTitle = e.detail)}>
      <p class="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </TabItem>
    <TabItem open title="Products" on:currentTab={(e) => (tabTitle = e.detail)}>
      <p class="text-lg">
        Lorem ipsum dolor veniam esse tempore, debitis molestiae consequatur
        magnam quod repellat sapiente.
      </p>
    </TabItem>
  </Tabs>
</main>

<Modal bind:open={plan}>
  <CreateServiceForm {tabTitle} {title} {description} {images} />
</Modal>

<Modal bind:open={product}>
  <CreateServiceForm
    {tabTitle}
    multiple
    {title}
    {description}
    categories={data.categories}
    {categoryId}
    {images}
  />
</Modal>
