import type { PageLoad } from "./$types";
import { goto } from "$app/navigation";
import { PUBLIC_API_URL } from "$env/static/public";

export const ssr = false;

export const load = (async ({ fetch, url }) => {
  const quotesReq = await fetch(
    `${PUBLIC_API_URL}/quotes?page=${
      url.searchParams.get("page") ? url.searchParams.get("page") : 1
    }`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (quotesReq.status == 401 || quotesReq.status == 403) {
    goto("/login");
    return;
  }

  const quotes = await quotesReq.json();

  return {
    quotes: quotes?.data?.result ? quotes.data.result : [],
    total: quotes?.data?.totalItems || 0,
    page: quotes?.data?.currentPage || 1,
    totalPages: quotes?.data?.totalPages || 1,
  };
}) satisfies PageLoad;
