<script lang="ts">
  import { ArrowRight } from "svelte-heros-v2";
  import { page } from "$app/stores";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solar Panels", href: "/solar-panels" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
  ];
</script>

<footer class="divide-y divide-black px-8 md:px-28 space-y-6">
  <section class="flex justify-between items-start">
    <ul class="flex center sm:gap-6 gap-2">
      {#each navLinks as link}
        <li
          class="text-gray-600"
          class:text-black={$page.url.pathname == link.href}
        >
          {link.name}
        </li>
      {/each}
    </ul>
    <button class="hidden md:flex center gap-1">
      <span>Sign In</span>
      <ArrowRight size="18" />
    </button>
  </section>

  <section
    class="flex justify-between items-center uppercase text-sm font-semibold text-gray-400 pt-6"
  >
    <div
      class="space-x-8 flex sm:flex-row flex-col justify-center items-center"
    >
      <a href="/privacy-policy">privacy policy</a>
      <a href="/privacy-policy">terms &amp; conditions</a>
    </div>

    <div
      class="space-x-8 flex sm:flex-row flex-col justify-center items-center"
    >
      <a href="https://instagram.com/energaan_solar?igshid=MzRlODBiNWFlZA==">instagram</a>
      <a href="https://www.facebook.com/EarlySunsolar?mibextid=LQQJ4d">facebook</a>
    </div>
  </section>
</footer>
