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
      <p class="topbar__title">Статья</p>
    </div>

    <div class="article">
      <p class="article__title">{{ article.title }}</p>
      <p class="article__info">{{ article.info }}</p>
      <img class="article__pic" :src="article.photo">
      <div class="article__about">
        <div class="article__about-item">
          <p class="article__about-left">Дата</p>
          <p class="article__about-right">{{ `${article.date.getDate()} ${months[article.date.getMonth()]}, ${article.date.getFullYear()}` }}</p>
        </div>
        <div class="article__about-item">
          <p class="article__about-left">Теги</p>
          <p class="article__about-right">{{ article.tags.split(';').join(', ') }}</p>
        </div>
        <div class="article__about-item">
          <p class="article__about-left">Время прочтения</p>
          <p class="article__about-right">{{ article.read_time }} минут</p>
        </div>
      </div>
      <div class="article__content">
        <p class="article__content-title"><span class="green">Заголовок</span> какой-то</p>
        <p class="article__content-info">Creators are invited to join Foundation by members of the community. Once
          you’ve received an invite, you’ll need to set up a MetaMask wallet with ETH before you can create an artist
          profile and mint an NFT—which means uploading your JPG, PNG, or video file to IPFS, a decentralized
          peer-to-peer storage network. It will then be an NFT you can price in ETH and put up for auction on
          Foundation.</p>
        <img class="article__content-pic" src="https://i.imgur.com/LAuG4Ia.png">
        <p class="article__content-title"><span class="green">Заголовок</span> какой-то</p>
        <p class="article__content-info">Creators are invited to join Foundation by members of the community. Once
          you’ve received an invite, you’ll need to set up a MetaMask wallet with ETH before you can create an artist
          profile and mint an NFT—which means uploading your JPG, PNG, or video file to IPFS, a decentralized
          peer-to-peer storage network. It will then be an NFT you can price in ETH and put up for auction on
          Foundation.</p>
        <p class="article__content-question">- А так можно написать диалог вопрос интервьюера, например?</p>
        <p class="article__content-answer">- А ответ будет выглядеть так. ну естественно очень длинный, который
          продолжится в статью и обычный текст</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const article = await fetch(`http://localhost:3000/api/articles/${route.params.id}`).then((res) => res.json())
article.date = new Date(article.date)
 
// Months

const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
];
</script>
