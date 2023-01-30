<template>
  <div class="site-content">
    <div class="topbar">
      <NuxtLink class="topbar__link" to="/categories/all">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.22552 12.5431C6.92483 12.2429 6.92483 11.7579 7.22552 11.4569L14.362 4.32572C14.7961 3.89143 15.5023 3.89143 15.9372 4.32572C16.3713 4.76002 16.3713 5.46488 15.9372 5.89917L9.83231 12.0004L15.9372 18.1C16.3713 18.5351 16.3713 19.24 15.9372 19.6743C15.5023 20.1086 14.7961 20.1086 14.362 19.6743L7.22552 12.5431Z"
            fill="white" />
        </svg>
      </NuxtLink>
      <p class="topbar__title">{{ product.title }}</p>
    </div>

    <Swiper :space-between="4" class="swiper">
      <SwiperSlide v-for="item in product.gallery.split(';')">
        <img :src="item" />
      </SwiperSlide>
    </Swiper>

    <div class="center-bar">
      <select @change="change" ref="size">
        <option selected disabled>Размер</option>
        <option v-for="item in product.size.split(';')" :value="item">{{ item }}</option>
      </select>
      <select @change="change" ref="color">
        <option selected disabled>Цвет</option>
        <option v-for="item in product.color.split(';')" :value="item">{{ item }}</option>
      </select>
    </div>

    <div class="bottom-bar">
      <div class="bottom-bar__top">
        <p class="bottom-bar__title">{{ product.title }}</p>
        <span class="bottom-bar__price">{{ product.price }} ₸</span>
      </div>
      <p class="bottom-bar__info">{{ product.info }}</p>
    </div>
  </div>

  <nav class="navbar">
    <button ref="btn" class="addCartBtn" @click="click" disabled>Добавить в корзину</button>
  </nav>
</template>

<script>
export default {
  async setup() {
    definePageMeta({
      layout: false
    })
    const route = useRoute()
    const productId = route.params.id
    const { data: product } = await useFetch(`/api/products/${productId}`);
    const isDisabled = true;
    return {
      product,
      isDisabled
    };
  },
  methods: {
    change(event) {
      const isDisabled = this.$refs['color'].value == 'Цвет' || this.$refs['size'].value == 'Размер'
      this.$refs['btn'].disabled = isDisabled;
    },
    click(event) {
      const orders = JSON.parse(window.localStorage.getItem('orders')) || []
      orders.push({
        productId: this.product.id,
        color: this.$refs['color'].value,
        size: this.$refs['size'].value
      });
      window.localStorage.setItem('orders', JSON.stringify(orders))
      this.$refs['btn'].textContent = '✅ Добавлено в корзину'
      this.$refs['btn'].classList.add('disabled')
    }
  }
}
</script>

<style scoped>
.swiper {
  margin-top: 46px;
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
