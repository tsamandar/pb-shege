<template>
  <nav class="categories">
    <ul class="categories__list">
      <li class="categories__item" :class="categoryId == 'all' ? 'categories__item--active' : ''">
        <NuxtLink to="./all" class="categories__link">Все</NuxtLink>
      </li>

      <li v-for="(item, index) in categories" class="categories__item" :class="categoryId == item.id ? 'categories__item--active' : ''">
        <NuxtLink :to="'./' + item.id" class="categories__link">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  const route = useRoute()
  const categoryId = route.params.id
  const { data: categories } = await useFetch('/api/categories')
</script>
