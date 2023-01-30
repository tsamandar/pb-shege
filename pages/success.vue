<template>
  <div class="wrapper">
    <img src="https://i.imgur.com/dZn42fa.png" />
    <p class="title">Готово!</p>
    <p class="info">Ваш заказ принят.
      Скоро мы с Вами свяжемся!</p>
  </div>
  <nav class="navbar">
    <NuxtLink to="/" class="addCartBtn">Отлично!</NuxtLink>
  </nav>
</template>

<script setup>
definePageMeta({
  layout: false
})
</script>

<style scoped>
img {
  margin-bottom: 25px;
}

.wrapper {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #3ED598;

}

.info {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */

  text-align: center;

  color: #FFFFFF;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.addCartBtn {
  width: 315px;
  height: 58px;
  background: linear-gradient(180deg, #40DF9F 0%, #3ED598 100%);
  box-shadow: 0px 2px 4px rgba(15, 218, 137, 0.3);
  border-radius: 12px;
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  transition: .3s;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.addCartBtn:hover {
  transform: scale(1.05);
}

.addCartBtn:disabled,
.addCartBtn.disabled {
  pointer-events: none;
  background: grey;
}
</style>
