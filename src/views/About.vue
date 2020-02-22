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
    image: 'https://static.vibecast.com/jb/jack-barham.jpg',
    about: [
      {
        title: 'About me',
        copy:
          "<p>I'm a digital all-rounder living in Dalston, London. I taught myself web design and development in 2007 and never looked back.</p>"
      },
      {
        title: 'What I do',
        copy:
          "<p>I work in, but not limited to, front-end development. I've built websites for large and small companies, freelanced for a lot of London agencies and several startups.</p><p>My forte is responsive website, web application, and user-interface design and development. I'm primarily a front-end developer with strong UI design and back-end skills.</p><p>I have a lot of experience with rapid prototyping, designing in the browser and building MVPs. I often work with prototyping tools along with Sketch, Photoshop, Javascript (native, ES6 and Vue.js), PHP (Laravel and WordPress) and AWS.</p><p>I can also run teams (in person and remotely), provide technical and strategic consultancy, and I'm able to plan and manage projects.</p>"
      },
      {
        title: 'Currently',
        copy:
          '<p>I split my time between <a href="https://uk.yunojuno.com/p/jackbarham" target="_blank">freelancing</a> and building <a href="/portfolio/vibecast-website">Vibecast</a>, my side-project I designed in <a href="https://www.sketchapp.com" target="_blank" rel="noopener">Sketch</a> and developed in <a href="https://laravel.com" target="_blank" rel="noopener">Laravel</a> and <a href="https://vuejs.org" target="_blank" rel="noopener">Vue.js</a>.'
      },
      {
        title: 'Contact',
        copy:
          '<p>I\'m currently looking for a new project. I\'ll work on location in Central and East London, and I have my own home office where I can work remotely. Send a message to <a href="mailto:jack@vibecast.com">jack@vibecast.com</a> or <a href="https://twitter.com/JackBarham" target="_blank" rel="noopener">@jackbarham</a>. I often take bookings through <a href="https://uk.yunojuno.com/p/jackbarham" target="_blank" rel="noopener">YunoJuno</a>.</p></p>'
      }
    ]
  })
};
</script>
