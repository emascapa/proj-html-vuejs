<template>
  <div id="app">
    <SiteHeader />
    <Section1 />
  </div>
</template>

<script>
import 'bootstrap';
import SiteHeader from '@/components/HeaderComponent.vue'
import Section1 from '@/components/SectionOneComponent.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    Section1
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
