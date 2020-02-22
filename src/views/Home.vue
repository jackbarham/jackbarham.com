<template>
  <div class="home">
    <h2 class="home__hero">
      Digital Product
      <br />Designer &amp; Developer
    </h2>
    <div class="layout__wide">
      <headline title="Featured Projects" />
      <div class="home__featured">
        <projects :projects="featured" />
      </div>
    </div>
    <div class="layout__slim">
      <headline title="Recent Activity" />
      <div class="activity">
        <div class="activity__item" v-for="(activity, index) in activities" :key="index">
          <h3 class="activity__title">
            <a :href="activity.link" target="_blank">{{ activity.title }}</a>
          </h3>
          <p class="activity__intro">{{ activity.copy }}</p>
          <ul class="activity__meta">
            <li>{{ activity.date }}</li>
            <li>
              <a
                class="activity__link"
                :href="activity.link"
                target="_blank"
              >{{ activity.buttonText }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headline from '@/components/Headline.vue';
import Projects from '@/components/Projects.vue';

export default {
  name: 'Home',
  components: {
    Headline,
    Projects
  },
  computed: {
    featured() {
      return require('@/data/featured');
    },
    activities() {
      return require('@/data/activities');
    }
  }
};
</script>
