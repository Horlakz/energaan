<script lang="ts">
  import { page } from "$app/stores";

  import Button from "$lib/components/Button.svelte";
</script>

<main class="flex flex-col justify-center items-center p-10">
  {#if $page.status !== 404}
    <p>
      Status: {$page.status}
    </p>
    <p>
      Message: {$page.error?.message}
    </p>
  {:else}
    <p class="text-2xl">This page cannot be found on this website</p>
    <Button href="/">Click to go Back Home</Button>
  {/if}
</main>
