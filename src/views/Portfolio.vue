<template>
  <div class="layout__wide">
    <router-view></router-view>
    <projects v-if="!$route.params.pageSlug" :projects="projects" />
  </div>
</template>

<script>
import Projects from '@/components/Projects.vue';

export default {
  name: 'Portfolio',
  components: {
    Projects
  },
  computed: {
    projects() {
      return require('@/data/projects');
    }
  }
};
</script>
