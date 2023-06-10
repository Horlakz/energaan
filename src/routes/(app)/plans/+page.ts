import type { PageLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load = (async ({ fetch }) => {
  const res = await fetch(`${PUBLIC_API_URL}/plans`);
  const plans = await res.json();

  return {
    plans: plans.data.plans,
  };
}) satisfies PageLoad;
