<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import { PlusCircle, MinusCircle } from "svelte-heros-v2";

  let open = false;
</script>

<div
  class="border border-primary bg-primary bg-opacity-5 p-2 rounded-xl shadow-md shadow-[#8eb2ac]"
>
  <h2>
    <button
      on:click={() => (open = !open)}
      type="button"
      class="w-full flex justify-between items-center text-primary focus:outline-none focus:ring-0"
    >
      <slot name="header" />
      {#if open}
        <slot name="arrowup"><MinusCircle size="40" /></slot>
      {:else}
        <slot name="arrowdown"><PlusCircle size="40" /></slot>
      {/if}
    </button>
  </h2>
  {#if open}
    <div
      transition:slide={{ delay: 250, duration: 500, easing: quintOut }}
      class="p-3 bg-primary bg-opacity-10 text-gray-500 rounded-lg m-2"
    >
      <slot />
    </div>
  {/if}
</div>
