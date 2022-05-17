<template>
  <footer class="py-4">
    <div class="text-center py-3">
      <a class="logo" href="#">
        <SiteLogo :logoColor="false" class="logo" />
      </a>
    </div>
    <nav class="container py-4">
      <ul class="row row-cols-2 row-cols-md-3 row-cols-xl-6 g-3 list-unstyled">
        <li
          v-for="(item, index) in navLinks"
          :key="index"
          class="col text-center"
        >
          <a :href="item.link" class="text-capitalize text-decoration-none">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="container text-center">
      <span class="py-3 fs_sm">
        © Copyright 2012-2020 | Avada Theme by
        <a href="#" class="text-decoration-none text-dark">
          <strong>ThemeFusion</strong>
        </a>
        | All Right Reserved | Powered by
        <a href="#" class="text-decoration-none text-dark">
          <strong>WordPress</strong>
        </a>
      </span>
      <div class="social d-flex justify-content-center align-items-center py-4">
        <a
          v-for="item in socials"
          :key="item"
          href="item.link"
          class="text-decoration-none text-dark"
        >
          <font-awesome-icon :icon="item.icon" class="fs-3 mx-3" />
        </a>
      </div>
    </div>

    <div
      class="scroll_btn d-flex justify-content-center align-items-center pt-1"
      @click="scrollToTop"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-up" class="" />
    </div>
  </footer>
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
      socials: [
        {
          social: "Facebook",
          icon: "fa-brands fa-facebook",
          link: "#",
        },
        {
          social: "Instagram",
          icon: "fa-brands fa-instagram",
          link: "#",
        },
        {
          social: "Twitter",
          icon: "fa-brands fa-twitter",
          link: "#",
        },
        {
          social: "Youtube",
          icon: "fa-brands fa-youtube",
          link: "#",
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-image: white;
  position: relative;

  .logo {
    max-height: 40px;
  }
  nav {
    ul {
      li > a {
        color: rgb(33, 37, 41);
        &:hover {
          color: $yellow_orange;
        }
      }
    }
  }

  .social {
    color: rgb(33, 37, 41);
  }

  .scroll_btn {
    position: absolute;
    bottom: 0;
    right: 4rem;

    cursor: pointer;

    height: 35px;
    width: 50px;
    color: white;
    background-color: #464646;
    border-radius: 8px 8px 0 0;
  }
}
</style>