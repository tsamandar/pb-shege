<template>
  <div class="site-content">
    <div class="container">
      <section class="page page--active home">
        <p class="home__title">Привет, <span class="home__title--name">Aндрей</span>!</p>

        <div class="home__box">
          <p class="home__box-title">
            <NuxtLink class="home__box-link" to="/article">Приветственный текст</NuxtLink>
          </p>
          <p class="home__box-info">А здесь пишем о чем проект, чтобы еще раз напомнить.</p>
        </div>

        <div class="home__progress">
          <img class="home__progress-pic" src="@/assets/img/bg-progress.jpg">
          <p class="home__progress-title">Weekly progress</p>
          <p class="home__progress-info">Weekly progress on dieting</p>
        </div>

        <div class="home__progress home__progress--border">
          <img class="home__progress-pic" src="@/assets/img/bg-progress-2.png">
          <p class="home__progress-title">Weekly progress</p>
          <p class="home__progress-info">Weekly progress on dieting</p>
        </div>

        <div class="home__slider">
          <div class="home__slider-item">
            <p>When you wake up</p>
          </div>
          <div class="home__slider-item">
            <p>When you wake up</p>
          </div>
          <div class="home__slider-item">
            <p>When you wake up</p>
          </div>
          <div class="home__slider-item">
            <p>When you wake up</p>
          </div>
        </div>    

        <div class="home__article">
          <p class="home__article-title">Заголовок</p>
          <span class="home__article-date">20.10.2022</span>
          <p class="home__article-info">We’re interested in your ideas and would be glad to build something bigger out
            of it.</p>
          <img class="home__article-pic" src="@/assets/img/bg-article.png">
        </div>

        <div class="home__article">
          <p class="home__article-title">Заголовок</p>
          <span class="home__article-date">20.10.2022</span>
          <p class="home__article-info">We’re interested in your ideas and would be glad to build something bigger out
            of it.</p>
          <img class="home__article-pic" src="@/assets/img/bg-article.png">
        </div>
      </section>
    </div>
  </div>
</template>