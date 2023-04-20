import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    benefits: [
      {
        title: "A Responsible Corporate",
        descr:
          "Save on your electricity bills, reduce your carbon footprint and increase the value of your home.",
      },
      {
        title: "Utility-Scane Solution",
        descr:
          "Own a solar power plant, procuse solar contracts or offer solar directly to your customers with a solid business partner.",
      },
      {
        title: "Commercial Solution",
        descr:
          "Make the smart investment and choose solar for your business. Lock in energy rates, demonstrate corporate social.",
      },
    ],

    cost: [
      { cost: "24,8", title: "Total Utilization Rate" },
      { cost: "14,4", title: "Maintanance Costs" },
      { cost: "12,3", title: "Electricity Bills" },
      { cost: "8,8", title: "Carbon Reduction" },
    ],

    statistics: [
      { number: "1.2k", title: "Installations" },
      { number: "26", title: "Countries" },
      { number: "$5,8m", title: "Cost-Effective" },
      { number: "4.8/5", title: "From Client" },
    ],
  };
}) satisfies PageLoad;
