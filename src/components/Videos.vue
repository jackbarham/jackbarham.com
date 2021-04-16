<template>
  <div v-if="!$route.params.pageSlug" class="video__items">
    <a class="video__item" v-for="(video, index) in videos" :key="index" :href="'/video/' + video.slug">
      <div class="video__media">
        <img class="video__cover" v-lazy="video.cover" :alt="video.title" />
      </div>
      <h3 class="video__title">{{ video.title }}</h3>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: ['videos']
}
</script>
