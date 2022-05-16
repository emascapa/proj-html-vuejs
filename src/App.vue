<template>
  <div id="app">
    <SiteHeader />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
  </div>
</template>

<script>
import 'bootstrap';
import SiteHeader from '@/components/HeaderComponent.vue'
import Section1 from '@/components/SectionOneComponent.vue'
import Section2 from '@/components/SectionTwoComponent.vue'
import Section3 from '@/components/SectionThreeComponent.vue'
import Section4 from '@/components/SectionFourComponent.vue'
import Section5 from '@/components/SectionFiveComponent.vue'
import Section6 from '@/components/SectionSixComponent.vue'
import Section7 from '@/components/SectionSevenComponent.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
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
