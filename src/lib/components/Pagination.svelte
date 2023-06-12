<script lang="ts">
  type SetPageArgs = (prev: number) => number;

  export let page: number,
    totalPages: number,
    setPage: (page: number | SetPageArgs) => void;
</script>

<div class="flex-center gap-3">
  <button
    class="text-primary font-semibold cursor-pointer disabled:text-opacity-60 disabled:cursor-not-allowed"
    on:click={() => setPage((prev) => prev - 1)}
    disabled={page === 1}
  >
    Previous
  </button>

  <!-- show the first page link  -->
  {#if page > 2}
    <button on:click={() => setPage(1)} disabled={page === 1}> 1 </button>
  {/if}

  <!-- show the dots if the current page is greater than 3 -->
  {#if page > 3} <span class="text-gray-500">...</span> {/if}

  <!-- show the previous page link -->
  {#if page > 1}
    <button on:click={() => setPage((prev) => prev - 1)}>{page - 1}</button>
  {/if}

  <!-- show the current page -->
  <span class="bg-primary text-white font-semibold py-1.5 px-2 rounded-xl">
    {page}
  </span>

  <!-- show the next page link -->
  {#if page < totalPages}
    <button on:click={() => setPage((prev) => prev + 1)}>{page + 1}</button>
  {/if}

  <!-- show the dots if the current page is less than the total pages minus 2 -->
  {#if page < totalPages - 2} <span class="text-gray-500">...</span> {/if}

  <!-- show the last page link -->
  {#if page < totalPages - 1}
    <button on:click={() => setPage(totalPages)}>{totalPages}</button>
  {/if}

  <button
    class="text-primary font-semibold cursor-pointer disabled:text-opacity-60 disabled:cursor-not-allowed"
    on:click={() => setPage((prev) => prev + 1)}
    disabled={totalPages === page}
  >
    Next
  </button>
</div>
