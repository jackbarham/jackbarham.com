<template>
  <div class="portfolio__project">
    <div class="portfolio__about">
      <h2 class="portfolio__heading">{{ project.title }}</h2>
      <div class="portfolio__copy" v-html="project.copy"></div>
      <ul class="portfolio__meta">
        <li>
          <span>Type:</span>
          {{ project.type }}
        </li>
        <li>
          <span>Role:</span>
          {{ project.role }}
        </li>
        <li>
          <span>Published:</span>
          {{ project.published }}
        </li>
      </ul>
    </div>
    <div class="portfolio__showcase">
      <img
        class="portfolio__gallery"
        v-for="(image, index) in project.images"
        :key="index"
        v-lazy="image.image"
        :alt="project.title"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  computed: {
    project() {
      return require('@/data/' + this.$route.params.pageSlug);
    }
  }
};
</script>
