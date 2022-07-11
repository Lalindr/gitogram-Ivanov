<template>
  <Feeds />
</template>

  <script>
import Feeds from "./pages/Feeds/Feeds.vue";
import 'normalize.css';
export default {
  name: 'App',
  components: {
    Feeds,
  },
}
</script>

<style>
@font-face {
  font-family: "Inter";
  src: url('./fonts/inter-light-webfont.woff2') format('woff2'),
    url('./fonts/inter-light-webfont.woff') format('woff');
}

#app {
  font-family: "Inter", Verdana, Geneva, sans-serif;

}
</style>
