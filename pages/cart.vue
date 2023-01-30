<template>
  <div class="topbar">
    <a class="topbar__link" href="#" @click.prevent="this.$router.back()">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M7.22552 12.5431C6.92483 12.2429 6.92483 11.7579 7.22552 11.4569L14.362 4.32572C14.7961 3.89143 15.5023 3.89143 15.9372 4.32572C16.3713 4.76002 16.3713 5.46488 15.9372 5.89917L9.83231 12.0004L15.9372 18.1C16.3713 18.5351 16.3713 19.24 15.9372 19.6743C15.5023 20.1086 14.7961 20.1086 14.362 19.6743L7.22552 12.5431Z"
          fill="white" />
      </svg>
    </a>
    <p style="color: transparent;" class="topbar__title">ss</p>
  </div>
  <div class="wrapper">
    <p class="title">Корзина</p>
    <div class="dd">
      <div class="cart"></div>
      <input type="text" class="input" placeholder="Номер телефона для связи">
      <div class="total">
        <p class="total__title">Итого:</p>
        <p class="total__price"></p>
      </div>
      <nav class="navbar">
        <NuxtLink to="/success" class="addCartBtn">Оформить заказ</NuxtLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.dd {
  padding-bottom: 110px;
}
.total__title {
  text-align: center;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #96A7AF;
}

.total__price {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #FFFFFF;
}

input {
  margin-bottom: 27px;
  display: block;
  width: 100%;
  padding: 20px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
}

input::placeholder {
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;

  /* Gray */

  color: #9B9B9B;
}

.title {
  margin-top: 66px;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;

  color: #FFFFFF;
}

.wrapper {
  padding: 0 30px;
}

.topbar {
  padding: 20px 30px;
}

.topbar__link {
  left: 26px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
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

<script>
export default {
  setup() {
    definePageMeta({
      layout: false
    })
  },
  async mounted() {
    let orders = JSON.parse(window.localStorage.getItem('orders') || '[]')
    let totalPrice = 0;
    await orders.forEach(async (order, index) => {
      const product = await fetch(`/api/products/${order.productId}`).then(res => res.json())
      document.querySelector('.cart').insertAdjacentHTML('afterend', `
      <div class="product2">
          <div class="product__image">
            <img src="${product.photo}">
          </div>
          <div class="product__info">
            <p class="product__title">${product.title}</p>
            <p class="product__price">${product.price} ₸</p>
          </div>
          <div class="product__right">
            <p class="product__count">1X</p>
            <p class="product__size">${order.size}</p>
          </div>
        </div>
      `)
    })
    console.log(orders);
    const total = await orders.reduce(async (acc, order) => {
      const product = await fetch(`/api/products/${order.productId}`).then(res => res.json())
      return acc + product.price
    }, 0)
    setTimeout(() => {
      document.querySelector('.total__price').textContent = 1000 + ' ₸'
    }, 1000);
  }
}
</script>
