import type { PageLoad } from "./$types";

export const load = (async ({ params, url }) => {
  return {
    id: params.id,
    // ref: url.searchParams.get("ref"),
  };
}) satisfies PageLoad;
