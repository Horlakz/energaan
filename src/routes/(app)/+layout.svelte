<script lang="ts">
  import type { LayoutData } from "./$types";

  import Footer from "$lib/components/baselayout/Footer.svelte";
  import Header from "$lib/components/baselayout/Header.svelte";

  export let data: LayoutData;
</script>

<Header title={data.title} />
<slot />
<Footer />
