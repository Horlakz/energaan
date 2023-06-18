<script lang="ts">
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";

  import Table from "$lib/components/Table.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import Pagination from "$lib/components/Pagination.svelte";
  import Button from "$lib/components/Button.svelte";

  export let data: PageData;
  let title = "",
    description = "",
    slug = "",
    serviceType = "",
    open = false,
    notAvailable = false;

  const serviceLink = {
    plan: "/plans/",
    product: "/products/",
  };
</script>

<main class="px-1">
  <h1 class="text-2xl font-semibold p-6">Quote Requests({data.total})</h1>

  <Table
    tableHeaders={[
      { title: "Full Name" },
      { title: "Email" },
      { title: "Phone" },
      { title: "Country" },
      { title: "Service Type" },
    ]}
    tableKeys={["fullname", "email", "phone", "country", "serviceType"]}
    tableData={data.quotes.map((quote) => ({
      fullname: quote.quote.fullname,
      email: quote.quote.email,
      phone: quote.quote.phone,
      country: quote.quote.country,
      serviceType: quote.quote.serviceType,
      ...quote,
    }))}
    tableActions={[
      {
        title: "Service Details",
        action: (data) => {
          if (data.serviceDetails) {
            title = data.serviceDetails.title;
            description = data.serviceDetails.description;
            slug = data.serviceDetails.slug;
            serviceType = data.serviceType;
            open = true;
          } else {
            notAvailable = true;
          }
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
  <div class="bg-white p-4 gap-2 text-center grid center rounded-xl">
    <h1 class="text-2xl font-semibold">{title}</h1>
    <p>{description}</p>
    <Button href={serviceLink[serviceType] + slug}>Go To Service</Button>
  </div>
</Modal>

<Modal bind:notAvailable>
  <div class="bg-white p-4 gap-2 text-center grid center rounded-xl">
    <h1 class="text-2xl font-semibold">Not Available</h1>
    <p>Service is not available or has been deleted</p>
  </div>
</Modal>
