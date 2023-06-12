<script lang="ts">
  import { page } from "$app/stores";

  import logo from "$lib/assets/logo.png";
  import Grid from "$lib/components/svg/Grid.svelte";
  import Photo from "$lib/components/svg/Photo.svelte";
  import Question from "$lib/components/svg/Question.svelte";
  import Users from "$lib/components/svg/Users.svelte";
  import MessageSquareLine from "../svg/MessageSquareLine.svelte";

  const links = [
    {
      name: "Dashboard",
      icon: Grid,
      href: "/admin",
    },
    {
      name: "Services",
      icon: Users,
      href: "/admin/services",
    },
    {
      name: "Messages",
      icon: MessageSquareLine,
      href: "/admin/messages",
    },
    {
      name: "Gallery",
      icon: Photo,
      href: "/admin/gallery",
    },
    {
      name: "FAQs",
      icon: Question,
      href: "/admin/faqs",
    },
  ];
</script>

<nav
  class="bg-black bg-opacity-90 h-screen py-6 px-4 flex flex-col justify-between"
>
  <div class="flex items-center gap-2 pb-4 border-b border-gray-700">
    <img src={logo} alt="energaan" class="w-14" />
    <h1 class="capitalize text-2xl text-white font-semibold">energaan</h1>
  </div>

  <ul>
    {#each links as link}
      <li
        class={`${
          $page.url.pathname === link.href ? "bg-gray-300 bg-opacity-10" : ""
        }
          px-8 rounded-xl my-2`}
      >
        <a
          href={link.href}
          class={`${
            $page.url.pathname === link.href ? "text-gray-300" : "text-gray-500"
          } flex items-center gap-2 py-2 cursor-pointer`}
        >
          <svelte:component
            this={link.icon}
            customColor={$page.url.pathname === link.href
              ? "text-gray-300"
              : "text-gray-500"}
          /><span>{link.name}</span>
        </a>
      </li>
    {/each}
  </ul>

  <div class="flex items-center gap-2 mt-40 pt-4 border-t border-gray-700">
    <img
      src="https://ui-avatars.com/api/?background=random&name=john+doe"
      alt="john doe"
      class="w-12 h-full rounded-full"
    />
    <div>
      <span class="text-white">John Doe</span>
      <span class="text-gray-400 text-xs">johndoe@gmail.com</span>
    </div>
  </div>
</nav>
