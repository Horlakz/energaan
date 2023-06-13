import { PUBLIC_API_URL } from "$env/static/public";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const faqsReq = await fetch(`${PUBLIC_API_URL}/faqs`);

  const faqs = await faqsReq.json();

  return {
    faqs: faqs?.data?.result ? faqs.data.result : [],
    total: faqs?.data?.result.length || 0,
  };
}) satisfies PageLoad;
