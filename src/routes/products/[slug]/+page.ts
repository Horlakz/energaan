import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    title: "Lorem Ipsum Dolor Sit",
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
    features: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
  };
}) satisfies PageLoad;
