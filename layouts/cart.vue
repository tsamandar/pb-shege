<template>
  <nav class="navbar">
    <button ref="dd" class="addCartBtn">Добавить в корзину</button>
  </nav>
</template>

<script>
export default {
  setup() {
    const route = useRoute()
    const productId = route.params.id;
    const isDisabled = window.document.querySelector('#sizeSelect').value == 'Размер' || window.document.querySelector('#colorSelect').value == 'Цвет';
  },
  methods: {
    pushCart() {
      const elSize = 3
    }
  }
}
</script>

<style scoped>
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
