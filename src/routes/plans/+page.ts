import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    plans: [
      {
        title: "Solar Streetlights Solution",
        img: "https://dummyimage.com/200x150/09f/fff.png",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, necessitatibus, minus, quam perferendis iure perspiciatis quisquam iusto odit pariatur soluta voluptatibus facere laudantium velit nulla id quidem rerum. Iste, excepturi.",
      },
      {
        title: "Solar Water Pumping Solution",
        img: "https://dummyimage.com/200x150/09f/fff.png",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, necessitatibus, minus, quam perferendis iure perspiciatis quisquam iusto odit pariatur soluta voluptatibus facere laudantium velit nulla id quidem rerum. Iste, excepturi.",
      },
      {
        title: "Solar Water Heating Solution",
        img: "https://dummyimage.com/200x150/09f/fff.png",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, necessitatibus, minus, quam perferendis iure perspiciatis quisquam iusto odit pariatur soluta voluptatibus facere laudantium velit nulla id quidem rerum. Iste, excepturi.",
      },
      {
        title: "Solar Home Lighting Solution",
        img: "https://dummyimage.com/200x150/09f/fff.png",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, necessitatibus, minus, quam perferendis iure perspiciatis quisquam iusto odit pariatur soluta voluptatibus facere laudantium velit nulla id quidem rerum. Iste, excepturi.",
      },
    ],
  };
}) satisfies PageLoad;
