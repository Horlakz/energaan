<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { slide } from "svelte/transition";
  import { PUBLIC_API_URL } from "$env/static/public";

  import Button from "./Button.svelte";
  import Indicator from "./Indicator.svelte";
  import Thumbnail from "./Thumbnail.svelte";

  export let images: string[] = [];

  let currentSlideItem: number = 0;

  const nextImage = () => {
    currentSlideItem = (currentSlideItem + 1) % images.length;
  };

  const prevImage = () => {
    if (currentSlideItem != 0) {
      currentSlideItem = (currentSlideItem - 1) % images.length;
    } else {
      currentSlideItem = images.length - 1;
    }
  };

  const goToSlide = (index: number) => (currentSlideItem = index);
  let thumbWidth = 100 / images.length;
</script>

<div class="relative">
  <div
    class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96"
  >
    {#each [images[currentSlideItem]] as item (currentSlideItem)}
      <img
        transition:slide={{
          delay: 250,
          duration: 500,
          easing: sineIn,
          axis: "x",
        }}
        class="absolute inset-0 w-full h-full object-cover object-center"
        src={`${PUBLIC_API_URL}/media/${item}`}
        alt={`Slide ${currentSlideItem + 1}`}
        width={400}
        height={300}
      />
    {/each}
  </div>

  <!-- carousel indicators -->
  <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
    {#each images as name, i}
      <Indicator
        {name}
        selected={currentSlideItem === i}
        on:click={() => goToSlide(i)}
      />
    {/each}
  </div>

  <!-- slide controls -->
  <Button on:click={prevImage} direction="prev" />
  <Button on:click={nextImage} />
</div>

<!-- thumbnails -->
<div class="flex flex-row justify-center gap-2 m-2 bg-gray-100">
  {#each images as image, id}
    <Thumbnail
      {thumbWidth}
      src={`${PUBLIC_API_URL}/media/${image}`}
      alt={`Slide ${id + 1}`}
      titleLink={`Slide ${id + 1}`}
      {id}
      selected={currentSlideItem === id}
      on:click={() => goToSlide(id)}
    />
  {/each}
</div>
