<script lang="ts">
  export let href: string | undefined = undefined;
</script>

<svelte:element
  this={href ? "a" : "button"}
  {href}
  class="bg-primary text-white px-3.5 py-2 text-md rounded-lg cursor-pointer"
  on:click
>
  <slot />
</svelte:element>
