import type { PageLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load = (async ({ fetch }) => {
  const categoryRes = await fetch(`${PUBLIC_API_URL}/categories`);
  const categoryData = await categoryRes.json();

  return {
    total: 3,
    categories: categoryData?.data?.result ? categoryData?.data?.result : [],
  };
}) satisfies PageLoad;
