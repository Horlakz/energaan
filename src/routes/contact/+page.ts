import type { PageLoad } from "./$types";

import { Home, Phone, Envelope } from "svelte-heros-v2";

export const load = (async () => {
  return {
    descr:
      "Ask us any questions via the “contact us form”. Kindly state your full name, email and request. Our property manager will respond within 48 hours.",
    contact: [
      {
        icon: Home,
        heading: "location",
        content: "23, Horlakz Street, Boston, USA",
      },
      {
        icon: Phone,
        heading: "phone number",
        content: "(+49)32 232 232",
      },
      {
        icon: Envelope,
        heading: "email address",
        content: "horlakz@proton.me",
      },
    ],
  };
}) satisfies PageLoad;
