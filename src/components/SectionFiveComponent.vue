<template>
  <section>
    <div class="container py-4">
      <div class="lead_content text-center mx-auto py-4">
        <h2 class="text-capitalize">our news</h2>
        <p>
          Consectetur, adipisicing elit. Illo cumque eius quis architecto
          reprehenderit iste impedit, tenetur vitae dolorem labore?
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 mb-4 g-4">
        <div v-for="(item, index) in sectionItems" :key="index" class="col">
          <div class="text-center rounded rounded-4 h-100 d-flex flex-column justify-content-between">
            <div class="mb-3">
              <img
                :src="item.image"
                :alt="index"
                class="img-fluid rounded rounded-4 mb-3"
              />
              <h5 class="yellow_orange text-capitalize">{{ item.title }}</h5>
              <span class="fs_sm">{{ item.date }}</span>
            </div>
            <p>{{ item.paragraph }}</p>
          </div>
        </div>
      </div>
      <div class="text-center pb-4">
        <a href="#" class="btn btn_custom rounded-pill">go to news</a>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "SectionFiveComponent",
  data() {
    return {
      sectionItems: [
        {
          image: require("@/assets/img/related-service-2-700x441.jpg"),
          title: "why you need a SEO agency now",
          date: "November 1st, 2017",
          paragraph:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate fuga tempore nostrum reprehenderit, harum sed dolorem modi aliquam!",
        },
        {
          image: require("@/assets/img/related-service-4-700x441.jpg"),
          title: "SEO tips for your startup",
          date: "November 1st, 2017",
          paragraph:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate fuga tempore nostrum reprehenderit, harum sed dolorem modi aliquam!",
        },
        {
          image: require("@/assets/img/blog-post-6-700x441.jpg"),
          title: "image optimization for your site",
          date: "November 1st, 2017",
          paragraph:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate fuga tempore nostrum reprehenderit, harum sed dolorem modi aliquam!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: $alabaster;

  .lead_content {
    width: 80%;
  }

  .row {
    padding: 3rem 0;

    .yellow_orange {
      color: $yellow_orange;
    }
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