<template>
  <div class="portfolio__project">
    <div class="portfolio__about">
      <h2 class="portfolio__heading">{{ project.title }}</h2>
      <div class="portfolio__copy" v-html="project.copy"></div>
      <ul class="portfolio__meta">
        <li>
          <span>Type:</span> {{ project.type }}
        </li>
        <li>
          <span>Role:</span> {{ project.role }}
        </li>
        <li>
          <span>Published:</span> {{ project.published }}
        </li>
      </ul>
    </div>
    <div class="portfolio__showcase">
      <div v-if="project.video" class="portfolio__video">
        <iframe :src="videoEmbed(project.video)" frameborder="0" allow="autoplay" allowfullscreen></iframe>
      </div>
      <div class="portfolio__gallery" v-for="(image, index) in project.images" :key="index" >
        <img class="portfolio__image" v-lazy="image.image" :alt="project.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  computed: {
    project() {
      return require('@/data/portfolio/' + this.$route.params.pageSlug)
    }
  },
  methods: {
    videoEmbed(video) {
      return `//youtube.com/embed/${video}?&modestbranding=1&showinfo=0&mute=0&autoplay=0&rel=0`
    }
  },
}
</script>
