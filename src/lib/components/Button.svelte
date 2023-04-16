<script lang="ts">
  export let href: string;
</script>

<button
  class="bg-primary text-white px-3.5 py-2 text-md rounded-lg cursor-pointer"
>
  {#if href}
    <a {href}><slot /></a>
  {:else}
    <slot />
  {/if}
</button>
