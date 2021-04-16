<template>
  <div class="about">
    <img class="about__image" v-lazy="image" alt="Jack Barham" title="Jack Barham" />
    <div class="layout__slim">
      <div v-for="(content, index) in about" :key="index" class="about__sections">
        <h2 class="about__title">{{ content.title }}</h2>
        <div v-html="content.copy"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    image: 'https://static.vibecast.com/jb/jack-barham-2.jpg',
    about: [
      {
        title: 'About me',
        copy:
          "<p>I'm a digital all-rounder based in London. I taught myself web design and development in 2007 and never looked back.</p>"
      },
      {
        title: 'What I do',
        copy:
          "<p>I work in, but not limited to, front-end development. I build websites for large and small companies, freelanced for many London agencies and several startups.</p><p>My forte is mobile-first website, web application, and user-interface design and development. I'm primarily a front-end developer with strong UI design and back-end skills.</p><p>I often work with Sketch, Photoshop, Javascript (native, ES6 and Vue.js), PHP (Laravel and WordPress) and AWS.</p><p>I'm experienced in rapid prototyping, designing in the browser, building MVPs, turning them into scaleable products, and providing consultancy for new projects. I also run teams, in person and remotely, and I can plan and manage projects.</p>"
      },
      {
        title: 'On the side',
        copy:
          '<p>Between freelancing, I work on <a href="/portfolio/vibecast-website">Vibecast</a>, my side-project I designed in Sketch and developed in Laravel and Vue.js.<p>I also make tech-based <a href="https://www.youtube.com/jackbarham" target="_blank" rel="noopener">explainer videos</a> too.</p>'
      },
      {
        title: 'Contact',
        copy:
          '<p>I\'ll work on location in Central and East London, I have my own home office to work remotely, and I often take bookings through <a href="https://uk.yunojuno.com/p/jackbarham" target="_blank" rel="noopener">YunoJuno</a>.</p><p>Email me <a href="mailto:jack@airboxmedia.com">jack@airboxmedia.com</a> or tweet <a href="https://twitter.com/JackBarham" target="_blank" rel="noopener">@jackbarham</a>.</p>'
      }
    ]
  })
}
</script>
