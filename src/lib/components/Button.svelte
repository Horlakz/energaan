<script lang="ts">
  import classNames from "classnames";
  import Spinner from "./svg/Spinner.svelte";
  import type { SvelteComponent } from "svelte";

  export let href: string | undefined = undefined,
    isLoading: boolean = false,
    variant: "primary" | "danger" | "blue" | "orange" = "primary",
    iconPosition: "left" | "right" = "left",
    icon: SvelteComponent | undefined = undefined;

  const variants = {
    primary: "bg-primary text-white",
    danger: "bg-red-600 text-white",
    warning: "bg-yellow-600 text-white",
    blue: "bg-blue-600 text-white",
    orange: "bg-orange-600 text-white",
  };
</script>

<svelte:element
  this={href ? "a" : "button"}
  {href}
  disabled={isLoading}
  class={classNames(
    variants[variant],
    "hover:bg-opacity-80 disabled:bg-opacity-80 flex center gap-2 px-3.5 py-1.5 text-md rounded-lg cursor-pointer default-transition"
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
