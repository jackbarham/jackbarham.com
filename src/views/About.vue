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
    image: 'https://static.jackbarham.com/jb/jackbarham-1.jpg',
    about: [
      {
        title: 'About me',
        copy:
          "<p>I'm a digital all-rounder and problem solver based in London. I taught myself web design and development in 2007 and never looked back.</p>"
      },
      {
        title: 'What I do',
        copy:
          "<p>I work in, but not limited to, front-end development. I've built websites and web applications for large and small companies and freelanced for many London agencies and startups.</p><p>My forte is mobile-first website, web application, and user-interface design and development. I'm primarily a front-end developer with solid UI design and back-end skills.</p><p>I often work with Sketch, Figma, Photoshop, Javascript (native, ES6 and Vue.js), PHP (Laravel and WordPress) and I know my way around AWS.</p><p>I'm experienced in rapid prototyping, designing in the browser, building MVPs and turning them into scaleable products, and providing consultancy for new projects. I also run teams in person and remotely, and I can plan and manage projects.</p>"
      },
      {
        title: 'On the side',
        copy:
          '<p><a href="/portfolio/vibecast-website">Vibecast</a>, a website builder for DJs I designed in Sketch and developed in Laravel, and Vue.js as a side project, <a href="https://jackbarham.medium.com/i-sold-vibecast-my-side-project-earning-over-65k-and-so-much-more-in-value-504b3f434bb7" target="_blank">got acquired</a> in 2021. I also make tech-based <a href="https://www.youtube.com/jackbarham" target="_blank" rel="noopener">explainer videos</a> too.</p>'
      },
      {
        title: 'At the moment',
        copy:
          '<p>Since August 2021, I\'ve worked exclusively at <a href="https://www.tickettailor.com/" target="_blank">Ticket Tailor</a>, building them a brand new product, a website builder similar to Vibecast, due to launch in July 2022.</p>'
      },
      {
        title: 'Contact & Booking',
        copy:
          '<p>I\'ll work on location in central and East London and have my own home office to work remotely. See my confirmed work history on <a href="https://uk.yunojuno.com/p/jackbarham" target="_blank" rel="noopener">YunoJuno</a> or <a href="https://uk.linkedin.com/in/jack-barham-ba526513" target="_blank" rel="noopener">LinkedIn</a>.</p><p>Please email me at <a href="mailto:jack@airboxmedia.com">jack@airboxmedia.com</a> or tweet <a href="https://twitter.com/JackBarham" target="_blank" rel="noopener">@jackbarham</a>.</p>'
      }
    ]
  })
}
</script>
