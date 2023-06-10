import type { PageLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load = (async ({ params }) => {
  const res = await fetch(`${PUBLIC_API_URL}/plans/${params.slug}`);
  const plan = await res.json();

  return {
    plan: plan.data.plan,
  };
}) satisfies PageLoad;
