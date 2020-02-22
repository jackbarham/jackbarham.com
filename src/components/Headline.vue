<template>
  <div class="headline">
    <h4 class="headline__title">{{ title }}</h4>
    <span class="headline__border"></span>
  </div>
</template>

<script>
export default {
  name: 'Headline',
  props: ['title']
};
</script>
