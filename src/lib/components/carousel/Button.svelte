<script lang="ts">
  import ChevronLeft from "../svg/ChevronLeft.svelte";
  import ChevronRight from "../svg/ChevronRight.svelte";

  export let direction: "next" | "prev" = "next"; // default to next
</script>

<button
  on:click
  type="button"
  class={`flex absolute top-0 ${
    direction === "next" ? "right-0" : "left-0"
  } z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none`}
>
  <span
    class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
  >
    {#if direction === "next"}
      <ChevronRight />
    {:else}
      <ChevronLeft />
    {/if}
    <span class="hidden">{direction == "next" ? "Next" : "Previous"}</span>
  </span>
</button>
