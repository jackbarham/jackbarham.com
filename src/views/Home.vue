<template>
  <div class="home">
    <h2 class="home__hero">
      Digital Product<br />Designer &amp; Developer
    </h2>
    <div class="layout__wide">
      <headline title="Featured Projects" />
      <div class="home__featured">
        <projects :projects="featured" />
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/Headline.vue'
import Projects from '@/components/Projects.vue'

export default {
  name: 'Home',
  components: {
    Headline,
    Projects
  },
  computed: {
    featured() {
      return require('@/data/featured')
    }
  }
}
</script>
