<script lang="ts">
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";

  import Table from "$lib/components/Table.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import Pagination from "$lib/components/Pagination.svelte";

  export let data: PageData;
  let message = "",
    open = false;
</script>

<main class="px-4">
  <h1 class="text-2xl font-semibold p-6">Messages({data.total})</h1>

  <Table
    tableHeaders={[
      { title: "Full Name" },
      { title: "Email" },
      { title: "Phone" },
      { title: "Country" },
    ]}
    tableKeys={["fullname", "email", "phone", "country"]}
    tableData={data.contacts}
    tableActions={[
      {
        title: "View Message",
        action: (data) => {
          message = data.message;
          open = true;
        },
      },
    ]}
  />

  <div class="w-full flex center py-4">
    <Pagination
      page={data.page}
      totalPages={data.totalPages}
      setPage={(page) => {
        goto(`/admin/messages?page=${page}`);
      }}
    />
  </div>
</main>

<Modal bind:open>
  <div class="bg-white p-4 rounded-xl">
    {message}
  </div>
</Modal>
