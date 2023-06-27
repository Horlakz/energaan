<script lang="ts">
  import { quintOut } from "svelte/easing";
  import { slide } from "svelte/transition";
  import { twMerge } from "tailwind-merge";

  export let type: "success" | "info" | "warning" | "error" = "info";
  export let content: string = "";

  const defaultClasses =
    "fixed z-50 top-4 right-4 px-4 py-2 w-80 bg-white rounded-lg shadow-lg border border-b-4 border-primary";
  const typeClasses = {
    success: "border-green-500",
    info: "border-blue-500",
    warning: "border-yellow-500",
    error: "border-red-500",
  };

  const classes = twMerge(defaultClasses, typeClasses[type]);

  function remove(node: HTMLElement) {
    setTimeout(() => {
      node.remove();
    }, 5000);

    const destroy = () => node.remove();
    return { destroy };
  }
</script>

<div
  class={classes}
  use:remove
  in:slide={{
    delay: 250,
    duration: 300,
    easing: quintOut,
    axis: "x",
  }}
>
  {content}
</div>
