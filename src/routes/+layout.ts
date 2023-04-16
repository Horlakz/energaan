import type { LayoutLoad } from "./$types";

import logo from "../../static/favicon.png";

export const load = (async () => {
  return { title: "Energaan", logo: logo };
}) satisfies LayoutLoad;
