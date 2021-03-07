<template>
  <div
    class="h-full flex flex-col justify-between lg:justify-start"
    x-show="$store.reserveSrv.started === false"
  >
    <div class="text-center">
      <h2
        class="text-base font-semibold text-indigo-600 tracking-wide uppercase"
      >
        Reservations
      </h2>
      <p
        class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
      >
        Get your Hopper and enjoy the party
      </p>
      <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
        Start building your package and we'll do our best to get you lit.
      </p>
    </div>
    <div
      class="mt-10 sm:mt-24 md:mt-36 lg:mt-54 sm:flex sm:justify-center lg:justify-center"
    >
      <div class="rounded-md shadow">
        <a
          href="#"
          class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg sm:px-20 md:px-24"
          x-on:click="$store.reserveSrv.getStarted(true)"
        >
          Get started
        </a>
      </div>
      <!-- <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Live demo
            </a>
          </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>