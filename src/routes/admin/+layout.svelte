<script lang="ts">
  import Nav from "$lib/components/admin/Nav.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<div class="w-full flex">
  <div class="w-1/6">
    <Nav />
  </div>
  <div class="w-5/6">
    <slot />
  </div>
</div>
