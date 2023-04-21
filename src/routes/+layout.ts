import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return { title: "Energaan", logo: "" };
}) satisfies LayoutLoad;
