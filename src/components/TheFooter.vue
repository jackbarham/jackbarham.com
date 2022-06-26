<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__social">
        <a
          v-for="(social, index) in socials"
          :key="index"
          :class="'footer__social-icon footer__' + social.class"
          :href="social.url"
          target="_blank"
          :title="'Jack Barham on ' + social.name"
        >
          <component v-bind:is="social.name"></component>
        </a>
      </div>
      <div class="footer__meta">
        <div class="footer__twitter-follow">
          <a href="https://twitter.com/JackBarham" class="twitter-follow-button" data-show-count="true">Follow @JackBarham</a>
          <div class="footer__legal">
            <p class="footer__copy">Copyright &copy; 2010 - 2022 Airbox Media Ltd</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Github from '../icons/Github.vue'
import Instagram from '../icons/Instagram.vue'
import YouTube from '../icons/YouTube.vue'
import Linkedin from '../icons/Linkedin.vue'
import Medium from '../icons/Medium.vue'
import Twitter from '../icons/Twitter.vue'

export default {
  name: 'TheFooter',
  components: {
    Github,
    Instagram,
    YouTube,
    Linkedin,
    Medium,
    Twitter
  },
  data: () => ({
    socials: [
      {
        name: 'Twitter',
        class: 'twitter',
        url: 'https://twitter.com/JackBarham'
      },
      {
        name: 'Instagram',
        class: 'instagram',
        url: 'https://www.instagram.com/jackbarham'
      },
      {
        name: 'YouTube',
        class: 'youtube',
        url: 'https://www.youtube.com/jackbarham'
      },
      {
        name: 'Linkedin',
        class: 'linkedin',
        url: 'https://uk.linkedin.com/in/jack-barham-ba526513'
      },
      {
        name: 'Github',
        class: 'github',
        url: 'https://github.com/jackbarham'
      },
      {
        name: 'Medium',
        class: 'medium',
        url: 'https://medium.com/@jackbarham'
      }
    ]
  }),
  mounted() {
    // eslint-disable-next-line
    !(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https'
      if (!d.getElementById(id)) {
        js = d.createElement(s)
        js.id = id
        js.src = p + '://platform.twitter.com/widgets.js'
        fjs.parentNode.insertBefore(js, fjs)
      }
    })(document, 'script', 'twitter-wjs')
  }
}
</script>
