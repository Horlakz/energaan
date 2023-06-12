import type { PageLoad } from "./$types";
import { goto } from "$app/navigation";
import { PUBLIC_API_URL } from "$env/static/public";

export const ssr = false;

export const load = (async ({ fetch, url }) => {
  const contactsReq = await fetch(
    `${PUBLIC_API_URL}/contacts?page=${
      url.searchParams.get("page") ? url.searchParams.get("page") : 1
    }`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (contactsReq.status == 401 || contactsReq.status == 403) {
    goto("/login");
    return;
  }

  const contacts = await contactsReq.json();

  return {
    contacts: contacts?.data?.results ? contacts.data.results : [],
    total: contacts?.data?.totalItems || 0,
    page: contacts?.data?.currentPage || 1,
    totalPages: contacts?.data?.totalPages || 1,
  };
}) satisfies PageLoad;
