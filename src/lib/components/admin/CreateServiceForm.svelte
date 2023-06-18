<script lang="ts">
  import { createMutation } from "@tanstack/svelte-query";
  import { createEventDispatcher } from "svelte";
  import { Plus, XMark } from "svelte-heros-v2";
  import { writable } from "svelte/store";

  import Button from "$lib/components/Button.svelte";
  import FormGroup from "$lib/components/FormGroup.svelte";
  import Plan from "$lib/services/services/plan";
  import Product from "$lib/services/services/product";

  export let tabTitle = "",
    categories = [];

  const dispatch = createEventDispatcher();
  const planSvc = new Plan();
  const productSvc = new Product();
  let title = "",
    description = "",
    categoryId = categories?.length > 1 ? categories[0].uuid : "",
    images = null,
    isLoading = false,
    featureValue = "",
    service: "plan" | "product" = "plan";
  const features = writable<string[]>([]);

  if (tabTitle == "Plans") service = "plan";
  else service = "product";

  $: planData = {
    title,
    description,
    features: $features,
    image: images ? images[0] : null,
  };

  $: productData = {
    title,
    description,
    features: $features,
    image: images ? images : [],
    categoryId,
  };

  function mutationSuccess() {
    title = "";
    description = "";
    features.set([]);
    images = null;
    dispatch("success");
  }

  const createPlan = createMutation(
    async () => await planSvc.create(planData),
    {
      onSuccess: mutationSuccess(),
    }
  );

  const createProduct = createMutation(
    async () => await productSvc.create(productData),
    {
      onSuccess: mutationSuccess(),
    }
  );
</script>

<div class="bg-white p-4 grid center rounded-xl">
  <h4 class="text-xl font-semibold">Add New {tabTitle.replace(/s$/, "")}</h4>

  <form class="space-y-2 p-4" on:submit|preventDefault>
    <div class={service == "product" ? "flex gap-2 w-full" : ""}>
      <FormGroup label="Title" bind:value={title} />

      {#if service == "product"}
        <FormGroup
          label="Category"
          formType="select"
          options={categories.map((cat) => ({
            label: cat.category.name,
            value: cat.category.uuid,
          }))}
          bind:value={categoryId}
        />
      {/if}
    </div>

    <FormGroup
      label="Description"
      formType="textarea"
      bind:value={description}
    />

    <div class="w-full col-span-2 flex center">
      <FormGroup
        label="{tabTitle} Image{service == 'product' ? 's' : ''}"
        formType="file"
        bind:files={images}
        multiple={service == "product"}
      />
    </div>

    <div class="flex items-end gap-2">
      <FormGroup label="Features" bind:value={featureValue} />
      <Button
        icon={Plus}
        on:click={(e) => {
          features.update((val) => [...val, featureValue]);
          featureValue = "";
        }}
      />
    </div>

    <div class="grid grid-cols-2 gap-4">
      {#each $features as feat}
        <div
          class="flex w-full justify-between bg-gray-200 text-gray-600 text-sm py-1 px-2 rounded-lg cursor-pointer"
          on:click={() => {
            featureValue = feat;
            features.update((val) => val.filter((v) => v !== feat));
          }}
          on:keydown
        >
          <span class="line-clamp-1">{feat}</span>
          <Button
            class="p-0.5 rounded-full"
            icon={XMark}
            variant="danger"
            on:click={() => {
              features.update((val) => val.filter((v) => v !== feat));
            }}
          />
        </div>
      {/each}
    </div>

    <div class="col-span-2 my-8 flex center">
      <Button
        isLoading={$createPlan.isLoading || $createProduct.isLoading}
        on:click={() => {
          if (service == "plan") $createPlan.mutate();
          else $createProduct.mutate();
        }}
      >
        Create {tabTitle.replace(/s$/, "")}
      </Button>
    </div>
  </form>
</div>
