import type { PageLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load = (async ({ fetch }) => {
  const res = await fetch(`${PUBLIC_API_URL}/faqs`);
  const data = await res.json();

  return {
    title: "FAQ (Frequently Asked Questions)",
    faqs: data.data.result,
  };
}) satisfies PageLoad;
