<template>
  <div class="layout__wrapper">
    <the-header></the-header>
    <main class="layout__main">
      <router-view></router-view>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data: () => ({
    //
  })
}
</script>

<style src="@/scss/styles.scss" lang="scss" />
