import { PUBLIC_API_URL } from "$env/static/public";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch, url }) => {
  const products = await fetch(`${PUBLIC_API_URL}/products?categoryId=${""}}`);
  const categories = await fetch(`${PUBLIC_API_URL}/categories`);

  const productsData = await products.json();
  const categoriesData = await categories.json();

  return {
    products: productsData.data.result,
    categories: categoriesData.data.result,
  };
}) satisfies PageLoad;
