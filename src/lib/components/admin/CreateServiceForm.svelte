<script lang="ts">
  import { Plus, XMark } from "svelte-heros-v2";
  import { writable } from "svelte/store";

  import Button from "$lib/components/Button.svelte";
  import FormGroup from "$lib/components/FormGroup.svelte";

  export let tabTitle = "",
    title = "",
    description = "",
    categoryId = "",
    categories,
    images = null,
    multiple = false,
    isLoading = false;

  const features = writable<string[]>([]);
  let featureValue = "";
</script>

<div class="bg-white p-4 grid center rounded-xl">
  <h4 class="text-xl font-semibold">Add New {tabTitle.replace(/s$/, "")}</h4>

  <form class="space-y-2 p-4" on:submit|preventDefault>
    <div class={categories ? "flex gap-2 w-full" : ""}>
      <FormGroup label="Title" bind:value={title} />

      {#if categories}
        <FormGroup
          label="Category"
          formType="select"
          options={categories.map((cat) => ({
            label: cat.name,
            value: cat.uuid,
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
        label="{tabTitle} Image{multiple ? 's' : ''}"
        formType="file"
        bind:files={images}
        {multiple}
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
      <Button {isLoading} on:click>Create {tabTitle.replace(/s$/, "")}</Button>
    </div>
  </form>
</div>
