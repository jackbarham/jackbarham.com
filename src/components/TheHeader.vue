<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__logo">Jack Barham</h1>
      <div class="header__nav">
        <router-link class="header__nav-item" to="/">Home</router-link>
        <router-link class="header__nav-item" to="/about">About</router-link>
        <router-link class="header__nav-item" to="/portfolio">Portfolio</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>
