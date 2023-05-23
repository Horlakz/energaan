import type { PageLoad } from "./$types";

export const load = (async ({ params, url }) => {
  return {
    id: params.id,
    // ref: url.searchParams.get("ref"),
    name: "Solar Street Lights Solutions",
    image: "https://dummyimage.com/200x150/09f/fff.png",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere non magnam velit tempora perspiciatis obcaecati delectus suscipit animi sit, voluptate, ipsum, laboriosam vitae illum blanditiis asperiores rerum quis! Provident amet harum qui magnam eius consequuntur necessitatibus ratione in voluptates illum, ea, distinctio eaque reiciendis unde quo animi doloribus eum enim quisquam hic, quidem nam illo? Eius minima deleniti dolor asperiores quidem amet esse enim harum. Natus exercitationem facere obcaecati distinctio voluptas culpa minima, fugit similique voluptatem libero, quam ab, dolore vero neque? Adipisci fugiat nesciunt similique pariatur consequuntur officiis numquam eius, ullam vitae beatae tempora amet? Culpa adipisci accusamus excepturi.",
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
