<script lang="ts">
  import type { PageData } from "./$types";

  import bg from "$lib/assets/solar-panels-house.jpg";
  import logo from "$lib/assets/logo.png";
  import FormGroup from "$lib/components/FormGroup.svelte";
  import Button from "$lib/components/Button.svelte";

  export let data: PageData;
</script>

<main class="w-full h-screen flex relative">
  <section class="w-4/6 px-14 flex center">
    <div>
      <a href="/" class="flex items-center gap-2 py-6 absolute top-0">
        <img src={logo} alt="energaan" class="w-14" />
        <h1 class="capitalize text-xl font-semibold">energaan</h1>
      </a>

      <div class="px-16 space-y-4">
        <h2 class="text-3xl font-semibold">Login</h2>
        <p class="text-sm text-gray-600">
          Can't wait to get back to your admin dashboard? enter your login
          credentials
        </p>

        <form class="space-y-4">
          <FormGroup
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <FormGroup
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <Button variant="orange">Login</Button>
        </form>
      </div>
    </div>
  </section>

  <img src={bg} alt="page background" class="w-full h-screen" />
</main>
