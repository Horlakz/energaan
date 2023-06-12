import { goto } from "$app/navigation";
import { PUBLIC_API_URL } from "$env/static/public";
import type { PageLoad } from "./$types";

export const ssr = false;

export const load = (async ({ fetch }) => {
  const contactsReq = await fetch(`${PUBLIC_API_URL}/contacts`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const productsReq = await fetch(`${PUBLIC_API_URL}/products`);
  const plansReq = await fetch(`${PUBLIC_API_URL}/plans`);

  if (contactsReq.status == 401 || contactsReq.status == 403) {
    goto("/login");
    return;
  }

  const contacts = await contactsReq.json();
  const products = await productsReq.json();
  const plans = await plansReq.json();

  return {
    contacts: contacts?.data?.results ? contacts.data.results : [],

    sums: [
      { title: "Total Products", value: products?.data?.totalItems || 0 },
      { title: "Total Plans", value: plans?.data?.totalItems || 0 },
      { title: "Messages", value: contacts?.data?.totalItems || 0 },
    ],

    graph: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Plans",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(0 109 91)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 0, 0, 0, 0, 12],
        },
        {
          label: "Products",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(224, 189, 15)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 0, 0, 0, 0, 10],
        },
      ],
    },
  };
}) satisfies PageLoad;
