<script lang="ts">
  export let href: string | undefined = undefined;

  const variants = {
    primary: "bg-primary text-white",
    danger: "bg-red-600 text-white",
    blue: "bg-blue-600 text-white",
  };
</script>

<svelte:element
  this={href ? "a" : "button"}
  {href}
  class={`${variants["primary"]} hover:bg-opacity-80 px-3.5 py-1.5 text-md rounded-lg cursor-pointer default-transition`}
  on:click
>
  <slot />
</svelte:element>
