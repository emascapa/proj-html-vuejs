<template>
  <section>
    <div class="container py-4">
      <div class="lead_content text-center mx-auto py-4">
        <h2 class="text-capitalize">our plans</h2>
        <p>
          Numquam blanditiis, Numquam blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Numquam, blanditiis!
        </p>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-4 mb-4 g-3">
        <div v-for="(item, index) in sectionItems" :key="index" class="col">
          <div class="text-center p-3 rounded rounded-4 h-100 bg-white d-flex flex-column align-items-center">
            <h2 class="text-capitalize mb-4">{{ item.plan }}</h2>
            <div class="mb-4 d-flex justify-content-center">
              <span class="fw-bold fs-5 mt-1">$</span>
              <span class="price_big">{{ item.price }}</span>
              <div class="ms-1 d-flex flex-column justify-content-between text-start">
                <span class="price_small">{{ item.cents }}</span>
                <span class="fs_sm"><em>monthly</em></span>
              </div>
            </div>
            <span class="mb-4 text-capitalize fs_sm">{{item.info1}}</span>
            <span class="mb-4 text-capitalize fs_sm">{{item.info2}}</span>
            <span class="mb-4 text-capitalize fs_sm">{{item.info3}}</span>
            <a :href="item.link" class="btn btn_custom_3 rounded-pill fs_sm">start today</a>
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
          plan: "standard",
          price: "19",
          cents: "99",
          info1: "5 projects",
          info2: "5 gb storage",
          info3: "unlimited users",
          link: "#",
        },
        {
          plan: "premium",
          price: "29",
          cents: "99",
          info1: "10 projects",
          info2: "15 gb storage",
          info3: "unlimited users",
          link: "#",
        },
        {
          plan: "professional",
          price: "39",
          cents: "99",
          info1: "15 projects",
          info2: "30 gb storage",
          info3: "unlimited users",
          link: "#",
        },
        {
          plan: "extreme",
          price: "59",
          cents: "99",
          info1: "unlimited projects",
          info2: "unlimited storage",
          info3: "unlimited users",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-image: url("@/assets/img/background1.jpg");
  background-size: cover;
  background-position: center;

  .lead_content {
    width: 80%;
    color: white;
  }

  .row {
    padding: 3rem 0;

    user-select: none;

    .price_big {
        font-size: 4rem;
        line-height: 3.5rem;
        font-weight: bold;
        color: $science_blue;
    }

    .price_small {
        font-size: 1.2rem;
        font-weight: bold;
        color: $science_blue;
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