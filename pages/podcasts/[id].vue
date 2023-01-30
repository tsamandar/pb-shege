<template>
  <div class="site-content" style="padding-bottom: 96px; padding-top: 46px;">
    <div class="topbar">
      <a class="topbar__link" href="#" @click.prevent="this.$router.back()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.22552 12.5431C6.92483 12.2429 6.92483 11.7579 7.22552 11.4569L14.362 4.32572C14.7961 3.89143 15.5023 3.89143 15.9372 4.32572C16.3713 4.76002 16.3713 5.46488 15.9372 5.89917L9.83231 12.0004L15.9372 18.1C16.3713 18.5351 16.3713 19.24 15.9372 19.6743C15.5023 20.1086 14.7961 20.1086 14.362 19.6743L7.22552 12.5431Z"
            fill="white" />
        </svg>
      </a>
      <p class="topbar__title">Подкаст</p>
    </div>

    <div class="podcast">
      <div class="podcast__top">
        <p class="article__title">{{ podcast.title }}</p>
        <p class="article__info">{{ podcast.info }}</p>
        <video ref="video" class="article__pic" :src="podcast.video" :poster="podcast.poster" controls></video>
      </div>

      <div class="podcast__about">
        <div v-for="(item, index) in podcast.parts" @click="playVideo" class="podcast__about-item">
          <p class="podcast__about-left">{{ index + 1 }}. {{ item.title }}</p>
          <p class="podcast__about-right">{{ item.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  async setup() {
    const route = useRoute()
    const podcast = await fetch(`http://localhost:3000/api/podcasts/${route.params.id}`).then((res) => res.json())
    podcast.parts = JSON.parse(podcast.parts);
    return {
      podcast
    }
  },
  methods: {
    playVideo(event) {
      const times = event.currentTarget.children[1].textContent.split(':').map(item => parseInt(item));
      const time = times[0] * 60 + times[1];
      this.$refs.video.currentTime = time;
      this.$refs.video.play()
    }
  }
}
</script>