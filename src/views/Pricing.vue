<template>
  <main>
    <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
    <div class="bg-gray-800">
      <div
        class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between"
      >
        <div class="max-w-xl">
          <h2
            class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Pricing Plans
          </h2>
          <p class="mt-5 text-xl text-gray-400">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
        <div class="mt-10 w-full max-w-xs">
          <label
            for="currency"
            class="block text-base font-medium text-gray-300"
            >Currency</label
          >
          <div class="mt-1.5 relative">
            <select
              id="currency"
              name="currency"
              class="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm"
            >
              <option>Argentina (ARS)</option>
              <option>Australia (AUD)</option>
              <option selected>United States (USD)</option>
              <option>Canada (CAD)</option>
              <option>France (EUR)</option>
              <option>Japan (JPY)</option>
              <option>Nigeria (NGN)</option>
              <option>Switzerland (CHF)</option>
              <option>United Kingdom (GBP)</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center"
            >
              <!-- Heroicon name: solid/chevron-down -->
              <svg
                class="h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-gray-100">
      <div class="pt-12 sm:pt-16 lg:pt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2
              class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Simple no-tricks pricing
            </h2>
            <p class="mt-4 text-xl text-gray-600">
              If you're not satisfied, contact us within the first 14 days and
              we'll send you a full refund.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-gray-100"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              class="max-w-lg mt-12 mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex"
              v-for="item in pricing"
                :key="item"
            >
              <div
                class="flex-1 bg-white px-6 py-8 lg:p-12"

              >
                <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {{ item.title }}
                  <!-- Lifetime Membership -->
                </h3>
                <p class="mt-6 text-base text-gray-500">

                  <!-- Lorem ipsum dolor sit amet consect etur adipisicing elit.
                  Itaque amet indis perferendis blanditiis repellendus etur
                  quidem assumenda. -->
                </p>
                <div class="mt-8">
                  <div class="flex items-center">
                    <h4
                      class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600"
                    >
                      What's included
                    </h4>
                    <div class="flex-1 border-t-2 border-gray-200"></div>
                  </div>
                  <ul
                    class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                  >
                    <li class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: solid/check-circle -->
                        <svg
                          class="h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-sm text-gray-700">
                        Private forum access
                      </p>
                    </li>

                    <li class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: solid/check-circle -->
                        <svg
                          class="h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-sm text-gray-700">Member resources</p>
                    </li>

                    <li class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: solid/check-circle -->
                        <svg
                          class="h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-sm text-gray-700">
                        Entry to annual conference
                      </p>
                    </li>

                    <li class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: solid/check-circle -->
                        <svg
                          class="h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-sm text-gray-700">
                        Official member t-shirt
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
              >
                <p class="text-lg leading-6 font-medium text-gray-900">
                  Pay once, own it forever
                </p>
                <div
                  class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900"
                >
                  <span> $349 </span>
                  <span class="ml-3 text-xl font-medium text-gray-500">
                    USD
                  </span>
                </div>
                <p class="mt-4 text-sm">
                  <a href="#" class="font-medium text-gray-500 underline">
                    Learn about our membership policy
                  </a>
                </p>
                <div class="mt-6">
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Get Access
                    </a>
                  </div>
                </div>
                <div class="mt-4 text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    Get a free sample
                    <span class="font-normal text-gray-500"> (20MB) </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="relative mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
          <div class="flex-1 bg-white px-6 py-8 lg:p-12">
            <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Lifetime Membership
            </h3>
            <p class="mt-6 text-base text-gray-500">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <h4 class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                  What's included
                </h4>
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    Heroicon name: solid/check-circle
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Private forum access
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    Heroicon name: solid/check-circle
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Member resources
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    Heroicon name: solid/check-circle
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Entry to annual conference
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    Heroicon name: solid/check-circle
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Official member t-shirt
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p class="text-lg leading-6 font-medium text-gray-900">
              Pay once, own it forever
            </p>
            <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
              <span>
                $349
              </span>
              <span class="ml-3 text-xl font-medium text-gray-500">
                USD
              </span>
            </div>
            <p class="mt-4 text-sm">
              <a href="#" class="font-medium text-gray-500 underline">
                Learn about our membership policy
              </a>
            </p>
            <div class="mt-6">
              <div class="rounded-md shadow">
                <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                  Get Access
                </a>
              </div>
            </div>
            <div class="mt-4 text-sm">
              <a href="#" class="font-medium text-gray-900">
                Get a free sample
                <span class="font-normal text-gray-500">
                  (20MB)
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
            <div class="relative mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
          <div class="flex-1 bg-white px-6 py-8 lg:p-12">
            <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Lifetime Membership
            </h3>
            <p class="mt-6 text-base text-gray-500">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <h4 class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                  What's included
                </h4>
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    Heroicon name: solid/check-circle
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Private forum access
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    Heroicon name: solid/check-circle
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Member resources
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    Heroicon name: solid/check-circle
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Entry to annual conference
                  </p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    Heroicon name: solid/check-circle
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">
                    Official member t-shirt
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p class="text-lg leading-6 font-medium text-gray-900">
              Pay once, own it forever
            </p>
            <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
              <span>
                $349
              </span>
              <span class="ml-3 text-xl font-medium text-gray-500">
                USD
              </span>
            </div>
            <p class="mt-4 text-sm">
              <a href="#" class="font-medium text-gray-500 underline">
                Learn about our membership policy
              </a>
            </p>
            <div class="mt-6">
              <div class="rounded-md shadow">
                <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                  Get Access
                </a>
              </div>
            </div>
            <div class="mt-4 text-sm">
              <a href="#" class="font-medium text-gray-900">
                Get a free sample
                <span class="font-normal text-gray-500">
                  (20MB)
                </span>
              </a>
            </div>
          </div> -->
          <!-- </div> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// see the syntax-sugared version in About.vue
import ButtonRepo from "@/components/ButtonRepo.vue";
export default {
  name: "Pricing",
  components: { ButtonRepo },
  data() {
    return {
      pricing: [
        {
          title: "Basic Package",
          description: "This is the basic package which is full of medium awesomeness",
          rating: "1-3 Stars",
          serviceFee: "$75",
          payRate: "$50/hour",
          drinkCap: "1-3 drinks",
        },
        {
          title: "Deluxe Package",
          description: "This is the basic package which is full of large awesomeness",
          rating: "1-3 Stars",
          serviceFee: "$75",
          payRate: "$50/hour",
          drinkCap: "1-3 drinks",
        },
        {
          title: "Premium Package",
          description: "This is the basic package which is full of superior awesomeness",
          rating: "1-3 Stars",
          serviceFee: "$75",
          payRate: "$50/hour",
          drinkCap: "1-3 drinks",
        },
      ],
    };
  },
};
</script>