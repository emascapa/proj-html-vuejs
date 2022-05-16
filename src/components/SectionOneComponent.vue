<template>
  <section>
    <div class="container pt-4">
      <div class="lead_content text-center mx-auto py-4">
        <h2 class="text-capitalize">
          meet the new agency SEO template from the avada team
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
          ducimus! Quae qui voluptate repudiandae.
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 mb-4 g-3">
        <div v-for="(item, index) in sectionItems" :key="index" class="col">
          <div class="text-center p-4 bg-white rounded rounded-4 h-100">
            <font-awesome-icon :icon="item.icon" class="gold mb-4 fs-3" />
            <h3 class="text-capitalize mb-3">{{ item.title }}</h3>
            <p>{{ item.paragraph }}</p>
          </div>
        </div>
      </div>
      <img
        src="@/assets/img/agency-seo-desk-front-1200x570.jpg"
        alt="scrivania"
        class="img-fluid"
      />
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
          icon: "fa-solid fa-road",
          title: "establish goals",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit ratione nisi, quia quaerat eligendi consequatur reprehenderit minus.",
        },
        {
          icon: "fa-solid fa-video",
          title: "work with a team",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius nostrum laborum similique asperiores soluta non aliquid rem eum!",
        },
        {
          icon: "fa-solid fa-droplet",
          title: "get results",
          paragraph:
            "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat iure dicta?",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: $section_1;

  .lead_content {
    width: 80%;
  }

  .gold {
    color: $di_serria;
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