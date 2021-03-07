<template>
  <main>

    <Header />

    <router-view />
  </main>
</template>

<script>
import '@ryangjchandler/spruce';
import 'alpinejs';
import Header from "./components/Header.vue";


export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>