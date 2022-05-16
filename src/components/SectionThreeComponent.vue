<template>
  <section>
    <div class="container py-4">
      <div class="lead_content text-center mx-auto py-4">
        <h2 class="text-capitalize">our work</h2>
        <p>
          Consectetur, adipisicing elit. Illo cumque eius quis architecto reprehenderit iste impedit, tenetur vitae dolorem labore?
        </p>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-4 g-3">
        <div v-for="(item, index) in sectionItems" :key="index" class="col">
          <div class="text-center rounded rounded-4 h-100">
              <img :src="item.image" :alt="index" class="img-fluid rounded rounded-4">
          </div>
        </div>
      </div>
      <div class="text-center pb-4"><a href="#" class="btn btn_custom rounded-pill">view our work</a></div>
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
          image: require('@/assets/img/case-study-gallery-3-1-600x450.jpg'), 
        },
        {
          image: require('@/assets/img/case-study-gallery-2-600x450.jpg'), 
        },
        {
          image: require('@/assets/img/case-study-gallery-1-1-600x450.jpg'), 
        },
        {
          image: require('@/assets/img/case-study-gallery-4-1-600x450.jpg'), 
        },
        {
          image: require('@/assets/img/case-study-gallery-5-1-600x450.jpg'), 
        },
        {
          image: require('@/assets/img/case-study-gallery-6-1-600x450.jpg'), 
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
  }
  
}

@media screen and (min-width: 768px) {
  .lead_content {
    width: 50%;
  }
}
</style>