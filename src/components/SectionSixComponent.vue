<template>
  <section>
    <div class="container py-4">
      <div class="lead_content text-center mx-auto py-4">
        <h2 class="text-capitalize">what our clients say</h2>
      </div>
      <div
        class="slider mt-4 pb-4"
        @mouseenter="stopSlider"
        @mouseleave="startSlider"
      >
        <div class="wrapper text-center mb-3">
          <img
            :src="clients[slider_counter].image"
            :alt="clients[slider_counter].name"
            class="rounded-pill mb-3"
          />
          <p class="lead mb-3">
            <em>{{ clients[slider_counter].review }}</em>
          </p>
          <div>
            <strong>{{ clients[slider_counter].name }}</strong
            >,
            <span class="text-uppercase">{{
              clients[slider_counter].company
            }}</span>
          </div>
        </div>
        <div class="commands d-flex justify-content-center" @click="sliderNext">
          <div
            v-for="(item, index) in clients.length"
            :key="index"
            :class="index == slider_counter ? 'bullet active' : 'bullet'"
          ></div>
        </div>
      </div>
      <div class="divider my-3"></div>
      <div class="row row-cols-2 row-cols-lg-4 g-3 py-3">
        <div
          v-for="(item, index) in partners"
          :key="index"
          class="col text-center"
        >
          <div class="partner">
            <img :src="item.logo" alt="" class="img-fluid" />
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
      slider_counter: 0,
      timer: null,
      clients: [
        {
          image: require("@/assets/img/testimonials-2.jpg"),
          name: "John Frusciante",
          company: "creo tech",
          review:
            "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.",
        },
        {
          image: require("@/assets/img/testimonials-1.jpg"),
          name: "Irina Dobrovnich",
          company: "leroy merlin",
          review:
            "Understanding life makes you a better man, understanding pizza makes you a way better man.",
        },
      ],
      partners: [
        {
          logo: require("@/assets/img/clients_partner_5-200x202.png"),
        },
        {
          logo: require("@/assets/img/clients_partner_6-200x202.png"),
        },
        {
          logo: require("@/assets/img/clients_partner_1-200x202.png"),
        },
        {
          logo: require("@/assets/img/clients_partner_2-200x202.png"),
        },
      ],
    };
  },
  methods: {
    startSlider() {
      this.timer = setInterval(this.sliderNext, 5000);
    },
    stopSlider() {
      clearInterval(this.timer);
      this.timer = null;
    },
    sliderNext() {
      if (this.slider_counter == 0) {
        this.slider_counter = 1;
      } else {
        this.slider_counter = 0;
      }
    },
  },
  mounted() {
    this.startSlider();
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: white;

  .lead_content {
    width: 80%;
  }

  .wrapper {
    img {
      max-width: 120px;
    }
  }
  .commands {
    cursor: pointer;

    .bullet {
      width: 8px;
      height: 8px;
      border: 2px solid rgb(33, 37, 41);
      border-radius: 20px;
      margin: 0 0.2rem;
    }
    .bullet.active {
      background-color: rgb(33, 37, 41);
    }
  }

  .divider {
    border-bottom: 1px solid lightgray;
  }

  .partner > img {
    max-width: 100px;
  }
}

@media screen and (min-width: 768px) {
  section {
    .lead_content {
      width: 50%;
    }

    .wrapper {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>