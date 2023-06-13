import Grid from "$lib/components/svg/Grid.svelte";
import Photo from "$lib/components/svg/Photo.svelte";
import Question from "$lib/components/svg/Question.svelte";
import Users from "$lib/components/svg/Users.svelte";
import MessageSquareLine from "../svg/MessageSquareLine.svelte";
import NewRequest from "../svg/NewRequest.svelte";

export const links = [
  { name: "Dashboard", icon: Grid, href: "/admin" },
  { name: "Services", icon: Users, href: "/admin/services" },
  { name: "Quote Requests", icon: NewRequest, href: "/admin/quote-requests" },
  { name: "Messages", icon: MessageSquareLine, href: "/admin/messages" },
  { name: "Gallery", icon: Photo, href: "/admin/gallery" },
  { name: "FAQs", icon: Question, href: "/admin/faqs" },
];
