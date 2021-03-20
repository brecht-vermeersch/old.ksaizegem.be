<template>
  <div class="shop-item">
    <h4>{{ item.titel }}</h4>

    <d-img
      class="shop-item__img"
      :asset="item.foto"
      :alt="`Foto van ${item.titel}`"
    ></d-img>

    <div class="shop-item__text" v-html="item.beschrijving"></div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped lang="scss">
.shop-item {
  border-radius: 25px;
  border: 1px solid $orange;
  width: 18rem;
  height: 18rem;
  padding: 1rem;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;

  &__img {
    width: 100%;
    height: 50%;
    // height: 100%;
    margin: auto 0;
    object-fit: contain;
    // width: 7rem;
    // height: 7rem;
    // margin: auto 0.5rem;
  }

  h4 {
    margin: 0;
  }
}
</style>