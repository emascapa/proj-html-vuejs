<template>
  <header class="py-4">
    <nav class="d-flex align-items-center justify-content-between container">
      <a class="logo" href="#">
        <SiteLogo class="logo" />
      </a>

      <div class="d-flex align-items-center">
        <ul
          class="list-inline d-flex align-items-center mb-0 d-none d-lg-block"
        >
          <li
            v-for="(item, index) in navLinks"
            :key="index"
            class="list-inline-item me-4"
          >
            <a :href="item.link" class="text-capitalize text-decoration-none">{{
              item.label
            }}</a>
          </li>
        </ul>
        <button class="btn btn_custom rounded-pill fs_sm d-none d-sm-block">
          get in touch now
        </button>
      </div>
    </nav>

    <div class="container">
      <div class="hero">
        <h1>SEM Campaigns Made Simple With Avada</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit minima alias iusto velit fugit?
        </p>

        <div>
          <a href="#" class="btn btn_custom rounded-pill fs_sm me-2"
            >buy avada now</a
          >
          <a href="#" class="btn btn_custom_2 rounded-pill fs_sm">contact us</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SiteLogo from "@/components/LogoComponent.vue";

export default {
  name: "HeaderComponent",
  components: {
    SiteLogo,
  },
  data() {
    return {
      navLinks: [
        {
          label: "home",
          link: "#",
        },
        {
          label: "who we are",
          link: "#",
        },
        {
          label: "what we do",
          link: "#",
        },
        {
          label: "where we work",
          link: "#",
        },
        {
          label: "careers",
          link: "#",
        },
        {
          label: "news",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  color: white;
  background-image: url("@/assets/img/1-hero-image.png");
  background-size: cover;
  background-position: center;

  nav {
    .logo {
      max-height: 40px;
    }

    li > a {
      color: white;
      &:hover {
        color: $yellow_orange;
      }
    }
  }

  .hero {
    width: 80%;
    padding: 8rem 0;
  }
}

@media screen and (min-width: 768px) {
  header {
    .hero {
      width: 40%;
    }
  }
}
</style>