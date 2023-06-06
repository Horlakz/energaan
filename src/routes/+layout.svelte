<script lang="ts">
  import type { LayoutData } from "./$types";
  import { browser } from "$app/environment";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

  import "styles/global.scss";
  import Header from "$lib/components/baselayout/Header.svelte";
  import Footer from "$lib/components/baselayout/Footer.svelte";
  import logo from "$lib/assets/logo.png";

  export let data: LayoutData;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
</script>

<svelte:head>
  <meta name="description" content="a website for properties and hosting" />
  <meta
    name="keywords"
    content="properties, housing, property and hosting, airbnb, book an apartment"
  />
  <link rel="shortcut icon" href={logo} />
  <title>{data.title}</title>
</svelte:head>

<QueryClientProvider client={queryClient}>
  <Header title={data.title} />
  <slot />
  <Footer />
</QueryClientProvider>
