<script lang="ts">
  import type { LayoutData } from "./$types";

  import "styles/global.scss";
  import Header from "$lib/components/baselayout/Header.svelte";
  import Footer from "$lib/components/baselayout/Footer.svelte";

  export let data: LayoutData;
</script>

<svelte:head>
  <meta name="description" content="a website for properties and hosting" />
  <meta
    name="keywords"
    content="properties, housing, property and hosting, airbnb, book an apartment"
  />
  <!-- <link rel="shortcut icon" href={logo} /> -->
  <title>{data.title}</title>
</svelte:head>

<Header logo={data.logo} title={data.title} />
<slot />
<Footer />
