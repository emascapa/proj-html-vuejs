<template>
  <section>
    <div class="container py-4">
      <div class="lead_content text-center mx-auto py-4">
        <h2 class="text-capitalize">start your free consultation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo illum
          possimus magni ut dolorem recusandae!
        </p>
        <a :href="item.link" class="btn btn_custom text-decoration-none">contact us now</a>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "SectionSevenComponent",
};
</script>

<style lang="scss" scoped>
section {
  background-image: url("@/assets/img/CTA-seo-1.jpg");
  background-color: $deep_cove;
  background-size: cover;
  background-position: center;

  color: white;

  .lead_content {
    width: 80%;
  }

}

@media screen and (min-width: 768px) {
  section {
    .lead_content {
      width: 50%;
    }
  }
}
</style>