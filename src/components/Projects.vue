<template>
  <div v-if="!$route.params.pageSlug" class="portfolio__items">
    <a class="portfolio__item" v-for="(project, index) in projects" :key="index" :href="'/portfolio/' + project.slug">
      <img class="portfolio__image" v-lazy="project.cover" :alt="project.title" />
      <h2 class="portfolio__title">{{ project.title }}</h2>
      <span class="portfolio__type">{{ project.type }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  props: ['projects']
}
</script>
