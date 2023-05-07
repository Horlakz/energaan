<script lang="ts">
  import { goto } from "$app/navigation";

  import Button from "../Button.svelte";

  export let title: string,
    img: string,
    description: string,
    id: string | number;
</script>

<div class="flex flex-col gap-2 bg-gray-100 shadow-lg">
  <img src={img} alt={title} class="w-full h-48 object-cover" />
  <h5 class="text-xl pl-2">{title}</h5>
  <p class="line-clamp-4 text-sm text-gray-700 pl-2 mb-2">
    {description}
  </p>
  <div class="px-2 py-2 w-full flex justify-between items-center">
    <span class="text-sm font-semibold text-primary cursor-pointer">
      Read More
    </span>
    <Button on:click={() => goto(`/plans/${id}`)}>Get a Quote</Button>
  </div>
</div>
