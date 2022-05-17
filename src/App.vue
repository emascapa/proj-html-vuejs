<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
  </div>
</template>

<script>
import 'bootstrap';
import SiteHeader from '@/components/HeaderComponent.vue'
import SiteMain from '@/components/MainComponent.vue'
import SiteFooter from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
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
