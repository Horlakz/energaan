<script lang="ts">
  import { ArrowRight, ArrowRightCircle } from "svelte-heros-v2";
  import type { PageData } from "./$types";

  import graphImg from "$lib/assets/graph.png";

  export let data: PageData;
</script>

<section class="w-full flex center sm:px-20 px-6">
  <div class="flex flex-col justify-start items-start my-10 w-full">
    <!-- <div class="w-full flex items-start justify-start pl-32"> -->
    <div
      class="bg-primary bg-opacity-10 py-1 px-4 w-fit flex center gap-2 rounded-md"
    >
      <div class="bg-primary h-1.5 w-1.5 rounded-full" />
      <span class="text-primary text-opacity-80 uppercase text-xs font-medium">
        utility prices have steadily increased
      </span>
    </div>
    <!-- </div> -->

    <h2 class="text-5xl font-light pl-6 pt-4">
      Solar energy. <br />the smartest way
    </h2>

    <img src={graphImg} alt="graph" class="pt-28 w-[30rem]" />
  </div>

  <div class="solar-house">
    <span class="text-3xl font-medium mt-28">132, 696</span>
    <p class="font-medium mb-64">installations</p>
    <button
      class="flex w-11/12 h-20 m-3 justify-center place-items-center bg-orange-600 rounded-2xl"
    >
      <span>Explore More</span>
      <ArrowRight />
    </button>
  </div>
</section>

<section class="sm:p-10 p-4 rounded-[3rem] bg-slate-900">
  <div class="text-white sm:px-10 px-4 py-8 space-y-14">
    <div class="flex justify-between items-end gap-4">
      <p class="md:text-4xl text-2xl">
        A Responsible <br /> Corporate Customers
      </p>
      <button class="rounded-3xl bg-primary text-white text-sm px-4 py-2">
        Get Started
      </button>
    </div>

    <div class="flex center md:flex-row flex-col gap-4">
      {#each data.benefits as item}
        <div
          class="p-8 space-y-4 hover:bg-slate-700 rounded-3xl cursor-pointer transition-all duration-300"
        >
          <h5 class="text-xl font-medium">{item.title}</h5>
          <p class="text-gray-400 text-sm font-medium">
            {item.descr}
          </p>
          <ArrowRightCircle />
        </div>
      {/each}
    </div>
  </div>

  <div class="sm:p-12 p-6 rounded-[2rem] bg-white">
    <div class="flex flex-col md:flex-row gap-20 w-full">
      <h4 class="w-full text-5xl font-light">
        Electricity production in Australia
      </h4>

      <div class="w-full space-y-4">
        <div class="flex justify-start items-center gap-2">
          <div class="bg-primary h-2 w-2 rounded-full" />
          <span class="text-primary uppercase text-xs font-medium"
            >solar panel energy</span
          >
        </div>
        <p class="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          perferendis esse nemo sit qui possimus quos autem officia repellat
          laudantium?
        </p>
      </div>
    </div>

    <div
      class="flex flex-wrap justify-center items-center gap-2 sm:gap-4 border-t-2 mt-10 pt-10"
    >
      {#each data.cost as item}
        <div
          class="grid center border-2 p-4 hover:cursor-pointer hover:bg-slate-800 hover:text-white peer rounded-2xl transition-all duration-300"
        >
          <span class="text-2xl font-medium">${item.cost}k</span>
          <p class="text-slate-700 text-sm peer-hover:text-slate-200">
            {item.title}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section
  class="flex flex-wrap justify-center gap-4 border-t-2 mt-10 py-10 px-16 md:px-36"
>
  {#each data.statistics as item}
    <div
      class="grid center text-center gap-4 border-2 p-16 hover:cursor-pointer hover:bg-slate-800 hover:text-slate-200 peer rounded-2xl transition-all duration-300"
    >
      <span class="text-2xl font-medium">{item.number}</span>
      <p class="text-sm">{item.title}</p>
    </div>
  {/each}
</section>

<section class="p-10 rounded-[3rem] bg-primary">
  <div class="text-white sm:px-10 px-4 py-8 space-y-14">
    <div class="flex justify-between items-end">
      <p class="md:text-4xl text-2xl">What Customers <br /> Says?</p>
      <button class="rounded-3xl bg-slate-800 text-white text-xs px-6 py-3">
        Get Started
      </button>
    </div>
  </div>

  <div class="flex flex-wrap center sm:px-10 px-4 gap-6">
    {#each [...Array(4)] as _}
      <div class="bg-green-200 bg-opacity-10 rounded-lg w-64 space-y-4 p-4">
        <h6 class="font-semibold text-white">Really Happy With Energaan!</h6>

        <p class="text-gray-200 sm:text-base text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut esse
          harum, iste commodi quasi error recusandae quam, eaque nostrum
          possimus sunt!
        </p>

        <span class="font-semibold text-white underline">Roberto</span>
      </div>
    {/each}
  </div>
</section>

<section class="sm:px-36 px-10 my-10">
  <h3 class="sm:text-5xl text-3xl">
    Top End Solar is Energaan's <br /> leading residential solar
  </h3>
</section>

<style lang="scss">
  .solar-house {
    background: url("$lib/assets/solar-panels-house.jpg") no-repeat center
      center/cover;
    width: 50%;
    // height: 100%;
    margin: 0 3rem;
    color: white;
    display: none;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    border-radius: 1.5rem;
  }

  @media (min-width: 768px) {
    .solar-house {
      display: flex;
    }
  }
</style>
