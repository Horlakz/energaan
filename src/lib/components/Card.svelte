<script lang="ts">
  import { PUBLIC_API_URL } from "$env/static/public";

  import Button from "./Button.svelte";

  export let title: string,
    img: string,
    description: string,
    href: string,
    linkText = "Read More",
    buttonText = "Get a Quote",
    buttonVariant = "primary";
</script>

<div
  class="flex flex-col gap-2 bg-gray-100 border shadow-lg relative h-96 rounded-3xl hover:border-[#27ceb2] hover:shadow-[#75d1c1] default-transition"
>
  <img
    src={`${PUBLIC_API_URL}/media/${img}`}
    alt={title}
    class="w-full h-48 object-cover rounded-t-3xl"
    loading="lazy"
  />
  <h5 class="text-lg px-2 font-medium">{title}</h5>
  <p class="line-clamp-4 text-sm text-gray-700 px-2 mb-2">
    {description}
  </p>
  <div class="p-3 w-full flex justify-between items-center absolute bottom-0">
    <a {href}>
      <span class="text-sm font-semibold text-primary cursor-pointer">
        {linkText}
      </span>
    </a>
    <Button on:click variant={buttonVariant}>{buttonText}</Button>
  </div>
</div>
