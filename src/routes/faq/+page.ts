import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    title: "FAQ (Frequently Asked Questions)",
    faqs: [
      {
        question: "Why Us?",
        answer:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex cum nihil fuga quod minus doloremque sequi, mollitia fugit quisquam quos unde, error dolore eveniet, facilis commodi accusamus. Obcaecati, assumenda vel.",
      },
      {
        question: "What we do?",
        answer:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex cum nihil fuga quod minus doloremque sequi, mollitia fugit quisquam quos unde, error dolore eveniet, facilis commodi accusamus. Obcaecati, assumenda vel.",
      },
    ],
  };
}) satisfies PageLoad;
