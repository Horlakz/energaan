<script lang="ts">
  import type { PageData } from "./$types";
  import Carousel from "$lib/components/carousel/index.svelte";

  export let data: PageData;
</script>

<main>
  <section class="w-full flex md:flex-row flex-col px-10">
    <div>
      <Carousel images={data.images} />
    </div>
    <p class="w-full">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
      excepturi nihil. Repudiandae exercitationem est veritatis quae nihil sint
      dignissimos laborum, architecto impedit. Incidunt dolores dignissimos
      repudiandae nihil corrupti deleniti, dolorum aut? Laudantium nobis
      molestias perferendis nulla, minima eligendi id natus alias, tempora
      dignissimos facere, dolores nihil vitae pariatur incidunt architecto
      recusandae nesciunt sapiente eius? Voluptatibus eum possimus perferendis
      tempora, dolorum facere illum voluptas iste dolorem pariatur repellendus
      similique unde delectus molestias velit ut, quia culpa dolores, minus
      labore neque rem earum nemo qui. Sint eligendi earum ex itaque voluptatem
      ea inventore? Cumque consequatur nam rerum dolore ex sunt natus numquam.
    </p>
  </section>
  <section />
</main>
