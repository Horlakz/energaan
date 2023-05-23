<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { quintOut } from "svelte/easing";
  import { scale } from "svelte/transition";

  import focusTrap from "$lib/utils/focusTrap";
  import CloseIcon from "./svg/Close.svelte";

  export let open: boolean = false;

  const dispatch = createEventDispatcher();
  $: dispatch(open ? "open" : "hide");

  function prepareFocus(node: HTMLElement) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
    let n: Node | null;
    while ((n = walker.nextNode())) {
      if (n instanceof HTMLElement) {
        const el = n as HTMLElement;
        const [x, y] = isScrollable(el);
        if (x || y) el.tabIndex = 0;
      }
    }
    node.focus();
  }

  const isScrollable = (e: HTMLElement): boolean[] => [
    e.scrollWidth > e.clientWidth &&
      ["scroll", "auto"].indexOf(getComputedStyle(e).overflowX) >= 0,
    e.scrollHeight > e.clientHeight &&
      ["scroll", "auto"].indexOf(getComputedStyle(e).overflowY) >= 0,
  ];

  function preventWheelDefault(e: Event) {
    // @ts-ignore
    const [x, y] = isScrollable(this);
    return x || y || e.preventDefault();
  }

  const hide = (e: Event) => {
    e.preventDefault();
    open = false;
  };
</script>

{#if open}
  <!-- backdrop -->
  <div
    class="fixed inset-0 z-40 bg-gray-900 bg-opacity-20"
    transition:scale={{ delay: 250, duration: 500, easing: quintOut }}
  >
    <!-- dialog -->
    <div
      on:wheel|preventDefault
      use:prepareFocus
      use:focusTrap
      aria-modal="true"
      role="dialog"
      class="fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex"
    >
      <div
        class="bg-dark max-w-xl w-full max-h-full p-4 flex flex-col mx-auto center rounded-xl"
      >
        <button
          on:click={hide}
          type="button"
          class="ml-auto bg-white p-4 rounded-full focus:outline-none whitespace-normal"
          aria-label="Close"
        >
          <slot name="close-icon">
            <span class="sr-only">{name}</span>
            <CloseIcon size="md" />
          </slot>
        </button>
        <div
          class="p-2 overflow-y-auto overflow-contain"
          on:wheel|stopPropagation={preventWheelDefault}
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
{/if}
