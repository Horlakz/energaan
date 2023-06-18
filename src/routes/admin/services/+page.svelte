<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { createMutation } from "@tanstack/svelte-query";
  import { Plus } from "svelte-heros-v2";
  import { writable } from "svelte/store";
  import type { PageData } from "./$types";

  import Button from "$lib/components/Button.svelte";
  import Card from "$lib/components/Card.svelte";
  import FormGroup from "$lib/components/FormGroup.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import CreateServiceForm from "$lib/components/admin/CreateServiceForm.svelte";
  import Categories from "$lib/components/admin/services/Categories.svelte";
  import TabItem from "$lib/components/tabs/TabItem.svelte";
  import Tabs from "$lib/components/tabs/Tabs.svelte";
  import Category from "$lib/services/services/category";
  import Plan from "$lib/services/services/plan";
  import Product from "$lib/services/services/product";

  export let data: PageData;

  const categorySvc = new Category();
  const productSvc = new Product();
  const planSvc = new Plan();
  let tabTitle = "",
    plan = false,
    product = false,
    category = false,
    removePlan = false,
    removeProduct = false;

  let title = "",
    slug = "";

  $: categoryData = { name: title };

  function success() {
    title = "";
    slug = "";
    category = false;
    removeProduct = false;
    removePlan = false;
    plan = false;
    product = false;
    return;
  }

  const createCategory = createMutation(
    async () => await categorySvc.create(categoryData.name),
    { onSuccess: success() }
  );

  const deleteProduct = createMutation(
    async () => await productSvc.delete(slug),
    { onSuccess: success() }
  );

  const deletePlan = createMutation(async () => await planSvc.delete(slug), {
    onSuccess: () => {
      success();
      invalidateAll();
    },
  });
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
        {#each data.plans as plan}
          <Card
            title={plan.title}
            img={plan.image}
            description={plan.description}
            href="/plans/{plan.slug}"
            linkText="Go to plan"
            buttonText="Delete Plan"
            buttonVariant="danger"
            on:click={() => {
              removePlan = true;
              title = plan.title;
              slug = plan.slug;
            }}
          />
        {/each}
      </div>
    </TabItem>
    <TabItem title="Products" on:currentTab={(e) => (tabTitle = e.detail)}>
      <div class="grid grid-cols-4 gap-4">
        {#each data.products as product}
          <Card
            title={product.title}
            img={product.images[0]}
            description={product.description}
            href="/products/{product.slug}"
            linkText="Go to product"
            buttonText="Delete product"
            buttonVariant="danger"
            on:click={() => {
              removeProduct = true;
              title = product.title;
              slug = product.slug;
            }}
          />
        {/each}
      </div>
    </TabItem>
    <TabItem title="Categories" on:currentTab={(e) => (tabTitle = e.detail)}>
      <Categories
        data={data.categories.map((cat) => {
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
  <CreateServiceForm {tabTitle} on:success={success} />
</Modal>

<Modal bind:open={product}>
  <CreateServiceForm
    {tabTitle}
    categories={data.categories}
    on:success={success}
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

<Modal bind:open={removePlan}>
  <div class="bg-white p-8 gap-6 grid center rounded-xl">
    <h4 class="text-xl font-semibold">
      Are you sure you want to delete {title}?
    </h4>
    <Button
      variant="danger"
      isLoading={$deletePlan.isLoading}
      on:click={() => $deletePlan.mutate()}
    >
      Delete
    </Button>
  </div>
</Modal>

<Modal bind:open={removeProduct}>
  <div class="bg-white p-8 gap-6 grid center rounded-xl">
    <h4 class="text-xl font-semibold">
      Are you sure you want to delete {title}?
    </h4>
    <Button
      variant="danger"
      isLoading={$deleteProduct.isLoading}
      on:click={() => $deleteProduct.mutate()}
    >
      Delete
    </Button>
  </div>
</Modal>
