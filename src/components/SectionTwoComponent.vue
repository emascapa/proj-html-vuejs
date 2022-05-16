<template>
  <section>
    <div class="container py-4">
      <div class="lead_content text-center mx-auto py-4">
        <h2 class="text-capitalize">see our top notch services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo illum
          possimus magni ut dolorem recusandae!
        </p>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-4 mb-4 g-3">
        <div v-for="(item, index) in sectionItems" :key="index" class="col">
          <div class="text-center p-4 rounded rounded-4 h-100 bg_custom">
            <font-awesome-icon :icon="item.icon" class="gold mb-4 fs-3" />
            <h3 class="text-capitalize mb-3">{{ item.title }}</h3>
            <p>{{ item.paragraph }}</p>
            <a :href="item.link" class="gold text-decoration-none"
              >Read More ></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "SectionOneComponent",
  data() {
    return {
      sectionItems: [
        {
          icon: "fa-brands fa-google",
          title: "google SEO",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum sapiente eligendi incidunt accusantium officiis hic nemo magnam praesentium porro facilis libero, odit voluptatem?",
          link: "#",
        },
        {
          icon: "fa-solid fa-gear",
          title: "brand strategy",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum sapiente eligendi incidunt accusantium officiis hic nemo magnam praesentium porro facilis libero, odit voluptatem?",
          link: "#",
        },
        {
          icon: "fa-solid fa-building",
          title: "local SEO",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum sapiente eligendi incidunt accusantium officiis hic nemo magnam praesentium porro facilis libero, odit voluptatem?",
          link: "#",
        },
        {
          icon: "fa-solid fa-chart-column",
          title: "SEO analysis",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum sapiente eligendi incidunt accusantium officiis hic nemo magnam praesentium porro facilis libero, odit voluptatem?",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-image: url("@/assets/img/pattern_background.png");
  background-color: $deep_cove;
  background-size: cover;
  background-position: center;

  color: white;

  .lead_content {
    width: 80%;
  }

  .row {
    padding: 3rem 0;
  }
  
  .bg_custom {
    background-color: $lucky_point;
  }

  .gold {
    color: $di_serria;
  }
}

@media screen and (min-width: 768px) {
  .lead_content {
    width: 50%;
  }
}
</style>