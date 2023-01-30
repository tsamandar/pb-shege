<template>
  <div class="site-content">
    <div class="container">
      <section class="page menu">
        <p class="menu__title">Menu</p>

        <div class="starter">
          <div class="starter__item">
            <p class="starter__item-info">Introduce</p>
            <p class="starter__item-title">
              <NuxtLink to="/podcasts/1" class="starter__item-link">What is it?</NuxtLink>
            </p>
            <p class="starter__item-time">20 min</p>
            <img class="starter__item-icon" src="@/assets/img/icon-play.png">
          </div>
          <div class="starter__item">
            <p class="starter__item-info">Introduce</p>
            <p class="starter__item-title">
              <NuxtLink to="/podcasts/1" class="starter__item-link">What is it?</NuxtLink>
            </p>
            <p class="starter__item-time">20 min</p>
            <img class="starter__item-icon" src="@/assets/img/icon-play.png">
          </div>
        </div>

        <div class="schedules">
          <div class="schedules__item">
            <img class="schedules__item-icon" src="@/assets/img/icon-schedule-1.png">
            <div class="schedules__item-middle">
              <p class="schedules__item-title">Booked for 8 PM</p>
              <p class="schedules__item-info">Booked for 8 PM</p>
            </div>
            <img class="schedules__item-play" src="@/assets/img/icon-play-2.png">
          </div>
          <div class="schedules__item">
            <img class="schedules__item-icon" src="@/assets/img/icon-schedule-2.png">
            <div class="schedules__item-middle">
              <p class="schedules__item-title">Booked for 8 PM</p>
              <p class="schedules__item-info">Booked for 8 PM</p>
            </div>
            <img class="schedules__item-play" src="@/assets/img/icon-play-2.png">
          </div>
          <div class="schedules__item">
            <img class="schedules__item-icon" src="@/assets/img/icon-schedule-2.png">
            <div class="schedules__item-middle">
              <p class="schedules__item-title">Booked for 8 PM</p>
              <p class="schedules__item-info">Booked for 8 PM</p>
            </div>
            <img class="schedules__item-play" src="@/assets/img/icon-play-2.png">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>