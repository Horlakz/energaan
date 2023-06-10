<script lang="ts">
  import type { PageData } from "./$types";
  import { PUBLIC_API_URL } from "$env/static/public";

  export let data: PageData;
</script>

<main class="mb-10">
  <h3 class="text-2xl mb-4 text-center font-semibold underline">Gallery</h3>

  <section
    class="sm:px-20 px-8 sm:py-10 w-full grid sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-6 h-full"
  >
    {#each data.images as item}
      <div
        class="border-2 border-primary shadow-md rounded-3xl overflow-hidden"
      >
        <img
          src={`${PUBLIC_API_URL}/media/${item.image}`}
          alt={item.title}
          class="w-full h-80"
        />
        <span
          class="text-lg font-medium px-4 w-full flex center bg-primary bg-opacity-20"
        >
          {item.title}
        </span>
      </div>
    {/each}
  </section>
</main>
