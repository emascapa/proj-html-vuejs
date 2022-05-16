<template>
  <div id="app">
    <SiteHeader />
    <Section1 />
    <Section2 />
    <Section3 />
  </div>
</template>

<script>
import 'bootstrap';
import SiteHeader from '@/components/HeaderComponent.vue'
import Section1 from '@/components/SectionOneComponent.vue'
import Section2 from '@/components/SectionTwoComponent.vue'
import Section3 from '@/components/SectionThreeComponent.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    Section1,
    Section2,
    Section3,
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
