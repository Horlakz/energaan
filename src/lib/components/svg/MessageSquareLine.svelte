<script lang="ts">
  import classNames from "classnames";

  export let size: "xs" | "sm" | "md" | "lg" = "md",
    color: "white" | "gray" | "red" = "gray",
    customColor: string = "";

  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const svgColors = {
    white: "text-white",
    gray: "text-gray-300",
    red: "text-red-500",
  };
</script>

<svg
  class={classNames(
    svgSizes[size],
    customColor !== "" ? customColor : svgColors[color]
  )}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
