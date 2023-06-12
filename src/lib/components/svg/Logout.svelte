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
    d="M21 12L13 12"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
