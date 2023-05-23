<script lang="ts">
  import { page } from "$app/stores";
  import { Bars3 } from "svelte-heros-v2";
  import { quintOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  import logo from "$lib/assets/logo.png";

  export let title: string;

  let navActive: boolean = false;
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Plans", href: "/plans" },
    { name: "Product & Services", href: "/products" },
    { name: "FAQs", href: "/faq" },
    { name: "Gallery", href: "/gallery" },
  ];

  const closeModal = (e: any) => {
    if (navActive && !e.target.closest("nav")) {
      navActive = false;
    }
  };
</script>

<svelte:window on:click={closeModal} />

<header>
  <nav class="flex justify-between items-center w-full px-14 lg:px-20 py-4">
    <a href="/">
      <img src={logo} alt={title} class="w-20" />
    </a>

    {#key navActive}
      <ul
        class:ul-mobile={navActive}
        class:ul={!navActive}
        transition:slide={{ delay: 250, duration: 500, easing: quintOut }}
      >
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class:nav-active={$page.url.pathname === link.href}
            >
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    {/key}

    <a href="/contact" class="font-medium hidden md:block">Contact Us</a>

    <Bars3
      class="h-8 w-8 sm:hidden cursor-pointer"
      on:click={() => (navActive = !navActive)}
    />
  </nav>
</header>

<style lang="scss">
  .ul {
    @apply hidden sm:flex sm:gap-4 lg:gap-10;
  }

  .ul-mobile {
    @apply bg-gray-100 p-4 gap-4 flex flex-col items-center justify-center absolute top-12 right-10 w-2/4 z-50;
  }

  .nav-active {
    @apply md:font-semibold;
  }
</style>
