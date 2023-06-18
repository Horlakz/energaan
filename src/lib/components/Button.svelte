<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import { twMerge } from "tailwind-merge";
  import Spinner from "./svg/Spinner.svelte";

  export let href: string | undefined = undefined,
    isLoading: boolean = false,
    variant: "primary" | "danger" | "blue" | "orange" = "primary",
    iconPosition: "left" | "right" = "left",
    icon: SvelteComponent | undefined = undefined;

  const variants = {
    primary: "bg-primary text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-600 text-white",
    blue: "bg-blue-600 text-white",
    orange: "bg-orange-600 text-white",
    gray: "bg-gray-600 text-white",
  };
</script>

<svelte:element
  this={href ? "a" : "button"}
  {href}
  disabled={isLoading}
  class={twMerge(
    variants[variant],
    "hover:bg-opacity-80 disabled:bg-opacity-80 flex center gap-2 px-3.5 py-1.5 text-md rounded-lg cursor-pointer default-transition",
    $$props.class
  )}
  on:click
>
  {#if isLoading && iconPosition === "left"}
    <Spinner />
  {:else if icon && iconPosition === "left"}
    <svelte:component this={icon} />
  {/if}

  <slot />

  {#if isLoading && iconPosition === "right"}
    <Spinner />
  {:else if icon && iconPosition === "right"}
    <svelte:component this={icon} />
  {/if}
</svelte:element>
