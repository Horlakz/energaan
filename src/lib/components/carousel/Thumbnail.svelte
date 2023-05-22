<script lang="ts">
  export let src: string = "";
  export let alt: string = "";
  export let titleLink: string = "";
  export let id: number;
  export let thumbWidth: number;
  export let selected: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<img
  class="opacity-40 rounded-lg cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out"
  class:active={selected}
  id={id.toString()}
  {src}
  {alt}
  title="Image from {titleLink}"
  on:click
  width="{thumbWidth}%"
/>

<style>
  .active {
    opacity: 1;
  }
</style>
