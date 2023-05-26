import type { PageLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load = (async ({ fetch, params }) => {
  const res = await fetch(`${PUBLIC_API_URL}/products/${params.slug}`);
  const product = await res.json();

  return {
    title: product.data.product.title,
    images: product.data.product.images,
    features: product.data.product.features,
    description: product.data.product.description,
  };
}) satisfies PageLoad;
