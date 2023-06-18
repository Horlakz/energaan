import type { PageLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load = (async ({ fetch }) => {
  const categoryRes = await fetch(`${PUBLIC_API_URL}/categories`);
  const productRes = await fetch(`${PUBLIC_API_URL}/products`);
  const planRes = await fetch(`${PUBLIC_API_URL}/plans`);
  const categoryData = await categoryRes.json();
  const productData = await productRes.json();
  const planData = await planRes.json();

  return {
    total: 3,
    categories: categoryData?.data?.result ? categoryData?.data?.result : [],
    products: productData?.data?.result ? productData?.data?.result : [],
    plans: planData?.data?.plans ? planData?.data?.plans : [],
  };
}) satisfies PageLoad;
