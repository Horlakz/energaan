<script lang="ts">
  import Button from "./Button.svelte";

  export let tableHeaders: TableHeadersT[],
    tableData: any[] = [],
    tableKeys: string[] = [],
    tableActions: TableActionsT[] = [],
    tableBodyUppercase = true;

  interface TableHeadersT {
    title: string;
    class?: string;
    colSpan?: number;
  }

  interface TableActionsT {
    title: string;
    action: (data: any) => any;
  }
</script>

<div class="relative overflow-x-auto rounded-lg">
  <table class="w-full text-sm text-left text-gray-500">
    <thead class="text-primary font-extrabold capitalize">
      <tr>
        {#each tableHeaders as header}
          <th
            scope="col"
            class={`px-4 py-2 font-medium ${header?.class || ""}`}
            colSpan={header?.colSpan || 1}
          >
            {header.title}
          </th>
        {/each}
      </tr>
    </thead>

    <tbody>
      {#each tableData as data}
        <tr class="border-b">
          {#each tableKeys as key}
            <th
              scope="row"
              class={`px-6 py-4 font-medium whitespace-nowrap ${
                tableBodyUppercase ? "uppercase" : ""
              }`}
            >
              {data[key]}
            </th>
          {/each}

          <th
            scope="row"
            class="flex center px-6 py-4 font-medium text-gray-800 space-x-2 whitespace-nowrap"
          >
            {#if tableActions}
              {#each tableActions as action}
                <Button on:click={() => action.action(data)}>
                  {action.title}
                </Button>
              {/each}
            {/if}
          </th>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<!-- <span>{action(data)}</span> -->
