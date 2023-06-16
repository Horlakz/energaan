<script lang="ts">
  import { getContext, createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import { twMerge } from "tailwind-merge";
  import type { TabCtxType } from "./Tabs.svelte";

  export let open: boolean = false,
    title: string = "Tab Title";

  const dispatch = createEventDispatcher();
  const ctx = getContext<TabCtxType>("ctx") ?? {};
  const selected = ctx.selected ?? writable<HTMLElement>();

  function init(node: HTMLElement) {
    selected.set(node);
    dispatch("currentTab", node.title);
    const destroy = selected.subscribe((x) => {
      if (x !== node) open = false;
    });

    return { destroy };
  }

  let buttonClass: string;
  $: buttonClass = twMerge(
    "text-sm text-center w-full flex center",
    open ? ctx.activeClasses : ctx.inactiveClasses,
    open && "active"
  );
</script>

<li class={twMerge("group", $$props.class)} role="presentation">
  <button
    type="button"
    on:click={() => (open = true)}
    role="tab"
    class={buttonClass}
  >
    <slot name="title">{title}</slot>
  </button>

  {#if open}
    <div class="hidden tab_content_placeholder">
      <div use:init {title}><slot /></div>
    </div>
  {/if}
</li>
