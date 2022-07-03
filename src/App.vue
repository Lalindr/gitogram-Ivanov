<template>
  <feeds>
  </feeds>
</template>

  <script>
import feeds from "./pages/feeds/feeds.vue";
import 'normalize.css';
export default {
  name: 'App',
  components: {
    feeds,
  },
}
</script>

<style>
@font-face {
  font-family: "Inter";
  src: url('./fonts/inter-light-webfont.woff') format('woff');
  src: url('./fonts/inter-light-webfont.woff2') format('woff2');
}

#app {
  font-family: "Inter",
    Verdana,
    Geneva,
    sans-serif;

}
</style>
