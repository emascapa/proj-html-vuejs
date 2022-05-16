<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
  </div>
</template>

<script>
import 'bootstrap';
import SiteHeader from '@/components/HeaderComponent.vue'
import SiteMain from '@/components/MainComponent.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
