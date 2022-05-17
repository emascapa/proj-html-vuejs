<template>
  <img
    v-if="logoColor == true"
    src="@/assets/img/logo_seo_w_2x.png"
    alt="logo-white"
    class="img-fluid"
  />
  <img
    v-else
    src="@/assets/img/logo_seo_2x.png"
    alt="logo-black"
    class="img-fluid"
  />
</template>

<script>
export default {
  name: "LogoComponent",
  props: {
    logoColor: Boolean,
  },
};
</script>

<style lang="scss" scoped>
div {
  max-height: 40px;
}
img {
  max-height: 100%;
  max-height: 100%;
}
</style>