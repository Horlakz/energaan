<script lang="ts">
  import { Plus } from "svelte-heros-v2";
  import { writable } from "svelte/store";
  import type { PageData } from "./$types";
  import { invalidateAll } from "$app/navigation";
  import { createMutation, createQuery } from "@tanstack/svelte-query";

  import Button from "$lib/components/Button.svelte";
  import FormGroup from "$lib/components/FormGroup.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import CreateServiceForm from "$lib/components/admin/CreateServiceForm.svelte";
  import TabItem from "$lib/components/tabs/TabItem.svelte";
  import Tabs from "$lib/components/tabs/Tabs.svelte";
  import Categories from "$lib/components/admin/services/Categories.svelte";
  import Category from "$lib/services/services/category";
  import Product from "$lib/services/services/product";
  import Card from "$lib/components/Card.svelte";

  export let data: PageData,
    currentCategoryID = "";

  const categorySvc = new Category();
  const productSvc = new Product();
  let tabTitle = "",
    plan = false,
    product = false,
    category = false;

  let title = "",
    description = "",
    categoryId = data.categories.length > 1 ? data.categories[0].uuid : "",
    images = null;
  const features = writable<string[]>([]);
  let featureValue = "";

  $: categoryData = { name: title };

  const createCategory = createMutation(
    async () => await categorySvc.create(categoryData.name),
    {
      onSuccess: () => {
        title = "";
        category = false;
        invalidateAll();
      },
    }
  );
</script>

<main>
  <div class="w-full flex justify-between items-center pt-6 px-10">
    <h1 class="text-2xl font-semibold">Services({data.total})</h1>
    <Button
      icon={Plus}
      iconPosition="left"
      variant="primary"
      on:click={() => {
        switch (tabTitle) {
          case "Plans":
            plan = true;
            break;
          case "Products":
            product = true;
            break;
          case "Categories":
            category = true;
            break;
          default:
            plan = true;
        }
      }}
    >
      Add New {tabTitle != "Categories" ? tabTitle.replace(/s$/, "") : tabTitle}
    </Button>
  </div>

  <Tabs>
    <TabItem open title="Plans" on:currentTab={(e) => (tabTitle = e.detail)}>
      <div class="grid grid-cols-4 gap-4">
        {#each [1, 2, 3, 4, 5, 6, 3, 4] as plan}
          <Card
            linkText="Go to plan"
            buttonText="Delete Plan"
            buttonVariant="danger"
          />
        {/each}
      </div>
    </TabItem>
    <TabItem title="Products" on:currentTab={(e) => (tabTitle = e.detail)}>
      <div class="grid grid-cols-4 gap-4">
        {#each [1, 2, 3, 4, 5, 6, 3] as product}
          <Card
            linkText="Go to product"
            buttonText="Delete product"
            buttonVariant="danger"
          />
        {/each}
      </div>
    </TabItem>
    <TabItem title="Categories" on:currentTab={(e) => (tabTitle = e.detail)}>
      <Categories
        data={data.categories.map((cat) => {
          currentCategoryID = cat.uuid;
          return {
            name: cat.category.name,
            shortname: cat.category.slug,
            created_by: cat.createdByDetails,
          };
        })}
      />
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

<Modal bind:open={category}>
  <div class="bg-white p-4 grid center rounded-xl">
    <h4 class="text-xl font-semibold">Create New Category</h4>
    <form class="space-y-3" on:submit|preventDefault>
      <FormGroup label="Title" bind:value={title} />
      <Button
        isLoading={$createCategory.isLoading}
        on:click={() => $createCategory.mutate()}
      >
        Create
      </Button>
    </form>
  </div>
</Modal>
