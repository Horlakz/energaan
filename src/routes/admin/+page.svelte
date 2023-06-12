<script lang="ts">
  import type { PageData } from "./$types";
  import { Line } from "svelte-chartjs";

  import Table from "$lib/components/Table.svelte";
  import Button from "$lib/components/Button.svelte";
  import Logout from "$lib/components/svg/Logout.svelte";

  export let data: PageData;
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from "chart.js";

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );
</script>

<main>
  <nav class="flex w-full items-center justify-between px-10 py-4">
    <h2 class="text-3xl font-semibold">Dashboard</h2>

    <div class="relative">
      <input
        type="text"
        class="w-full h-full py-3.5 pl-4 pr-28 border-b border-gray-400 focus:outline-none rounded-xl"
        placeholder="Search for products"
      />
      <div class="absolute top-1/2 -translate-y-1/2 right-2">
        <Button>Search</Button>
      </div>
    </div>

    <button><Logout size="lg" color="red" /></button>
  </nav>

  <section class="flex items-center w-full px-20 py-10 gap-6">
    <div class="w-full h-80">
      <h3 class="font-semibold">Quote Requests</h3>
      <Line data={data.graph} options={{ responsive: true }} />
    </div>

    <div class="w-3/12 space-y-2.5">
      {#each [1, 2, 3] as _}
        <div class="grid center bg-gray-100 border shadow-md py-4">
          <span class="text-gray-600">Products</span>
          <span class="text-2xl font-bold">12</span>
        </div>
      {/each}
    </div>
  </section>

  <section class="px-10">
    <h3 class="text-lg font-semibold my-4">Recent Contacts</h3>
    <Table
      tableHeaders={[
        { title: "Full Name" },
        { title: "Email" },
        { title: "Phone" },
        { title: "Country" },
      ]}
      tableKeys={["fullName", "email", "phone", "country"]}
      tableData={data.contacts}
      tableActions={[
        {
          title: "View",
          action: (data) => {
            console.log(data);
          },
        },
      ]}
    />
  </section>
</main>
