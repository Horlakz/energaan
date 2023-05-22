import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    images: [
      {
        image: "https://dummyimage.com/200x150/09f/fff.png",
        name: "Solar Streetlights Solution",
      },
      {
        image: "https://dummyimage.com/200x150/000/fff.png",
        name: "Solar Water Pumping Solution",
      },
      {
        image: "https://dummyimage.com/200x150/0fd/fff.png",
        name: "Solar Water Heating Solution",
      },
      {
        image: "https://dummyimage.com/200x150/8fd/fff.png",
        name: "Solar Home Lighting Solution",
      },
    ],
  };
}) satisfies PageLoad;
