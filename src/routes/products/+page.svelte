<script lang="ts">
  import type { PageData } from "./$types";

  import Button from "$lib/components/Button.svelte";
  import Card from "$lib/components/Card.svelte";

  export let data: PageData;
</script>

<main>
  <section
    class="bg-[url('$lib/assets/product-page-cover.jpeg')] bg-primary bg-center bg-cover bg-no-repeat h-64 grid center"
  >
    <div class="relative">
      <input
        type="text"
        class="w-full h-full py-3.5 pl-4 pr-28 focus:outline-none rounded-xl"
        placeholder="Search for products"
      />
      <div class="absolute top-1/2 -translate-y-1/2 right-2">
        <Button>Search</Button>
      </div>
    </div>
  </section>

  <div
    class="flex flex-col md:flex-row gap-4 w-full md:px-20 px-10 md:py-16 py-6"
  >
    <section
      class="flex flex-col md:items-start items-center gap-4 md:w-1/6 mb-10"
    >
      <h3 class="uppercase text-primary text-lg font-semibold my-4 underline">
        Categories
      </h3>

      <div class="md:flex hidden flex-col">
        {#each data.categories as item}
          <div class="flex items-center mb-4">
            <input
              id={item.id}
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
            />
            <label for={item.id} class="ml-2 text-sm font-medium text-gray-900">
              {item.name}
            </label>
          </div>
        {/each}
      </div>

      <div class="md:hidden flex flex-wrap center gap-10">
        {#each data.categories as item}
          <span>
            <input
              id={item.slug}
              type="checkbox"
              value=""
              class="peer hidden"
            />
            <label
              for={item.slug}
              class="shadow-md bg-primary bg-opacity-10 p-3 text-lg text-gray-800 font-medium peer-checked:border-2 border-primary rounded-xl cursor-pointer"
            >
              {item.name}
            </label>
          </span>
        {/each}
      </div>
    </section>
    <section
      class="sm:px-20 px-6 w-full grid sm:grid-cols-3 gap-3 md:gap-6 h-full"
    >
      {#each data.products as product, i}
        <Card
          img={product.img}
          title={product.title}
          description={product.description}
          href={`/products/${i}`}
        />
      {/each}
    </section>
  </div>
</main>
