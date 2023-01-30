<template>
  <div class="site-content">
    <div class="container">
      <section class="page store">
        <NuxtLayout name="categories" />
        <div class="products">
          <div v-if="products.length" v-for="(item, index) in products" class="products__item product">
            <div class="product__top">
              <img class="product__img" :src="item.photo">
            </div>
            <div class="product__bottom">
              <NuxtLink class="product__link" :to="'/products/' + item.id">{{ item.title }}</NuxtLink>
              <p class="product__price">{{ item.price }} ₸</p>
            </div>
          </div>
          <p class="error" v-else>❌ Нет продуктов</p>
        </div>
        <NuxtLink class="cart" to="/cart">Корзина</NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const categoryId = route.params.id
const { data: products } = await useFetch(categoryId == 'all' ? '/api/products' : `/api/products?category=${categoryId}`)
</script>

<style scoped>
.cart {
  padding-top: 10px;
    display: block;
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    /* display: flex; */
    align-items: center;
    color: #3ED598;
}
.error {
  font-size: 20px;
  text-align: center;
  width: 100%;
}
</style>
