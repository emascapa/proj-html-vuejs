<template>
  <main>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
  </main>
</template>

<script>
import Section1 from "@/components/SectionOneComponent.vue";
import Section2 from "@/components/SectionTwoComponent.vue";
import Section3 from "@/components/SectionThreeComponent.vue";
import Section4 from "@/components/SectionFourComponent.vue";
import Section5 from "@/components/SectionFiveComponent.vue";
import Section6 from "@/components/SectionSixComponent.vue";
import Section7 from "@/components/SectionSevenComponent.vue";

export default {
  name: "MainComponent",
  components: {
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
  },
};
</script>

<style>
</style>