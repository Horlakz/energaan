<script lang="ts">
  import classNames from "classnames";
  import Spinner from "./svg/Spinner.svelte";

  export let href: string | undefined = undefined,
    isLoading: boolean = false;

  const variants = {
    primary: "bg-primary text-white",
    danger: "bg-red-600 text-white",
    blue: "bg-blue-600 text-white",
  };
</script>

<svelte:element
  this={href ? "a" : "button"}
  {href}
  disabled={isLoading}
  class={classNames(
    variants["primary"],
    "hover:bg-opacity-80 disabled:bg-opacity-80 flex center gap-4 px-3.5 py-1.5 text-md rounded-lg cursor-pointer default-transition"
  )}
  on:click
>
  {#if isLoading}
    <Spinner />
  {/if}
  <slot />
</svelte:element>
