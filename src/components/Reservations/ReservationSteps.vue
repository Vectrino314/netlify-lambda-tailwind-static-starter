<template>
  <!-- This example requires Tailwind CSS v2.0+ -->

  <!-- This is for larger screens -->
  <div class="p-5 rounded-lg border-2 border-yellow-600">
    <nav class="invisible lg:visible" aria-label="Progress">
      <ol class="overflow-hidden">
        <!-- <div x-text="item"></div> -->
        <li v-for="(step, index) in steps" :key="step" class="relative pb-10">
          <!-- Complete Step -->
          <div
            v-show="index < steps.length - 1"
            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full"
            :class="{
              'bg-indigo-600': step.finished,
              'bg-gray-300': !step.finished,
            }"
            aria-hidden="true"
          ></div>
          <a href="#" class="relative flex items-start group">
            <span class="h-9 flex items-center">
              <span
                class="relative z-10 w-8 h-8 flex items-center justify-center rounded-full"
                :class="{
                  'bg-indigo-600': step.finished,
                  'group-hover:bg-indigo-800': step.finished,
                  'bg-white border-2':
                    step.visiting || (!step.finished && !step.visiting),
                  'border-indigo-600': step.visiting,
                  'group:border-indigo-600': !step.finished && !step.visiting,
                  'border-gray-300': !step.finished && !step.visitingg,
                  'group-hover:border-gray-400':
                    !step.finished && !step.visiting,
                }"
              >
                <span
                  v-show="!step.finished && step.visiting"
                  class="h-2.5 w-2.5 bg-indigo-600 rounded-full"
                ></span>

                <span
                  v-show="!step.finished && !step.visiting"
                  class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                ></span>

                <!-- Heroicon name: solid/check -->
                <div v-show="step.finished && !step.visiting">
                  <svg
                    class="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </span>
            </span>
            <span class="ml-4 min-w-0 flex flex-col">
              <span class="text-xs font-semibold tracking-wide uppercase">
                {{ step.title }}
              </span>
              <span class="text-sm text-gray-500">
                {{ step.visiting.toString() }}
              </span>
            </span>
          </a>
        </li>
      </ol>
    </nav>

    <!-- Need to add a conditional to display none -->
    <nav class="flex items-center justify-center visible lg:invisible" aria-label="Progress">
      <p class="text-sm font-medium">Step 2 of 4</p>
      <ol class="ml-8 flex items-center space-x-5">
        <li>
          <!-- Completed Step -->
          <a
            href="#"
            class="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900"
          >
            <span class="sr-only">Step 1</span>
          </a>
        </li>

        <li>
          <!-- Current Step -->
          <a
            href="#"
            class="relative flex items-center justify-center"
            aria-current="step"
          >
            <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
              <span class="w-full h-full rounded-full bg-indigo-200"></span>
            </span>
            <span
              class="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Step 2</span>
          </a>
        </li>

        <li>
          <!-- Upcoming Step -->
          <a
            href="#"
            class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
          >
            <span class="sr-only">Step 3</span>
          </a>
        </li>

        <li>
          <!-- Upcoming Step -->
          <a
            href="#"
            class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
          >
            <span class="sr-only">Step 4</span>
          </a>
        </li>
      </ol>
    </nav>
  </div>
  <!-- <div class="visible lg:invisible">
    This example requires Tailwind CSS v2.0+
    <nav class="flex items-center justify-center" aria-label="Progress">
      <p class="text-sm font-medium">Step 2 of 4</p>
      <ol class="ml-8 flex items-center space-x-5">
        <li>
          Completed Step
          <a
            href="#"
            class="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900"
          >
            <span class="sr-only">Step 1</span>
          </a>
        </li>

        <li>
          Current Step
          <a
            href="#"
            class="relative flex items-center justify-center"
            aria-current="step"
          >
            <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
              <span class="w-full h-full rounded-full bg-indigo-200"></span>
            </span>
            <span
              class="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Step 2</span>
          </a>
        </li>

        <li>
          Upcoming Step
          <a
            href="#"
            class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
          >
            <span class="sr-only">Step 3</span>
          </a>
        </li>

        <li>
          Upcoming Step
          <a
            href="#"
            class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
          >
            <span class="sr-only">Step 4</span>
          </a>
        </li>
      </ol>
    </nav>
  </div> -->
</template>

<script>
// import '../../services/Reservations';
export default {
  data() {
    return {
      steps: [
        {
          title: "Creating 1",
          finished: true,
          visiting: false,
        },
        {
          title: "Creating 2",
          finished: false,
          visiting: true,
        },
        {
          title: "Creating 3",
          finished: false,
          visiting: false,
        },
        {
          title: "Creating 4",
          finished: false,
          visiting: false,
        },
        {
          title: "Creating 5",
          finished: false,
          visiting: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>