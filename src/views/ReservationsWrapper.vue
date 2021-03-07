<template>
  <div class="bg-white h-remaining" x-data>
    <div
      class="max-w-7xl mx-auto h-full py-12 px-4 sm:py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div class="flex flex-col lg:flex-row">
        <reservation-steps x-show="$store.reserveSrv.started === true" />
        <!-- Get Started Component -->
        <get-started />
      </div>
    </div>
  </div>
</template>

<script>
import "../services/Reservations.js";
import GetStarted from "@/components/Reservations/GetStarted.vue";
import ReservationSteps from "@/components/Reservations/ReservationSteps.vue";
export default {
  components: { GetStarted, ReservationSteps },
};
</script>

<style>
</style>