<script lang="ts">
  import { browser } from "$app/environment";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

  import "styles/global.scss";

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { enabled: browser },
    },
  });
</script>

<svelte:head>
  <meta name="description" content="a website for properties and hosting" />
  <meta
    name="keywords"
    content="solar, panels, solar panels, inverter, battery"
  />
  <link rel="shortcut icon" href="/favicon.png" />
  <title>Energaan</title>
</svelte:head>

<QueryClientProvider client={queryClient}>
  <slot />
</QueryClientProvider>
