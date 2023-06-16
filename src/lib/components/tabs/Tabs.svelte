<script context="module" lang="ts">
  import { writable, type Writable } from "svelte/store";

  export interface TabCtxType {
    activeClasses: string;
    inactiveClasses: string;
    selected: Writable<HTMLElement>;
  }
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import { twMerge } from "tailwind-merge";

  const activeClasses: string =
    "p-4 text-primary font-semibold border-b-2 border-primary-600";
  const inactiveClasses: string =
    "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 text-gray-500";
  const contentClass: string = "p-4 bg-gray-50 rounded-lg mt-4";

  const ctx: TabCtxType = {
    activeClasses,
    inactiveClasses,
    selected: writable<HTMLElement>(),
  };

  setContext("ctx", ctx);

  function init(node: HTMLElement) {
    const destroy = ctx.selected.subscribe((x: HTMLElement) => {
      if (x) node.replaceChildren(x);
    });

    return { destroy };
  }

  $: ulClass = twMerge("w-full flex justify-center", $$props.class);
</script>

<ul class={ulClass}>
  <slot />
</ul>

<slot name="divider">
  <div class="h-px bg-primary bg-opacity-30" />
</slot>

<div class={contentClass} role="tabpanel" aria-labelledby="id-tab" use:init />

<style>
  :global(.debug) {
    @apply border-2 border-red-600;
  }
</style>
