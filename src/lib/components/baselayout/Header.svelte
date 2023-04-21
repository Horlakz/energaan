<script lang="ts">
  import { page } from "$app/stores";
  import { Bars3 } from "svelte-heros-v2";
  import { quintOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  export let logo: string, title: string;
  let navActive: boolean = false;

  function activeNav(pathname: string): boolean {
    return $page.url.pathname === pathname;
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Plans", href: "/plans" },
    { name: "Product & Services", href: "/products" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
  ];
</script>

<header>
  <nav
    class="flex justify-between items-center w-full px-14 lg:px-20 py-6 md:py-8"
  >
    <h1>
      <!-- <img src={logo} alt="logo" /> -->
      <a href="/">
        <span class="text-xl">
          {title}
        </span>
      </a>
    </h1>

    {#key navActive}
      <ul
        class:ul-mobile={navActive}
        class:ul={!navActive}
        transition:slide={{ delay: 250, duration: 500, easing: quintOut }}
      >
        {#each navLinks as link}
          <li>
            <a href={link.href} class:nav-active={activeNav(link.href)}>
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    {/key}

    <a href="/about" class="font-medium hidden md:block">Get Started</a>

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
    @apply bg-gray-100 p-4 gap-4 flex flex-col items-center justify-center absolute top-12 right-10 w-2/4;
  }

  .nav-active {
    @apply md:font-semibold;
  }

  // .nav-mobile-active {
  //   @apply text-white bg-primary px-4 py-2 rounded-lg;
  // }
</style>
