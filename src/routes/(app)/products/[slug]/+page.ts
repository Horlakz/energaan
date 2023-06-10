import type { PageLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load = (async ({ fetch, params }) => {
  const res = await fetch(`${PUBLIC_API_URL}/products/${params.slug}`);
  const product = await res.json();

  return {
    product: product.data.product,
    category: product.data.category,
  };
}) satisfies PageLoad;
