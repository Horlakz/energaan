<script lang="ts">
  import classNames from "classnames";

  export let customColor: string = "";
</script>

<span
  class={classNames(
    customColor ? customColor : "text-gray-300",
    "font-extrabold text-lg mx-1"
  )}>?</span
>
