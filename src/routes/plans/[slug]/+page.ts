import type { PageLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load = (async ({ params, url }) => {
  const res = await fetch(`${PUBLIC_API_URL}/plans/${params.slug}`);
  const plan = await res.json();

  return {
    name: plan.data.plan.title,
    image: plan.data.plan.image,
    about: plan.data.plan.description,
    features: plan.data.plan.features,
  };
}) satisfies PageLoad;
