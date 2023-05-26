import type { PageLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public";

export const load = (async ({ fetch }) => {
  const res = await fetch(`${PUBLIC_API_URL}/gallery`);
  const data = await res.json();

  return {
    images: data.data.result,
  };
}) satisfies PageLoad;
